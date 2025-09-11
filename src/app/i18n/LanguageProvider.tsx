"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import en from "./en.json";
import hi from "./hi.json";
import mr from "./mr.json";

type LangKey = "en" | "hi" | "mr";

type JSONValue = string | { [k: string]: JSONValue };

const resources: Record<LangKey, { [k: string]: JSONValue }> = { en, hi, mr };

const defaultLang: LangKey = "en";

const I18nContext = createContext<{
  lang: LangKey;
  setLang: (l: LangKey) => void;
  t: (path: string) => string;
}>({
  lang: defaultLang,
  setLang: () => {},
  t: () => "",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangKey>(defaultLang);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ec_lang");
      if (stored && (stored === "en" || stored === "hi" || stored === "mr")) {
        setLangState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ec_lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  function setLang(l: LangKey) {
    setLangState(l);
    // Attempt to fetch translations for visible text nodes and apply them
    // This will only run in the browser.
    if (typeof window !== "undefined") {
      try {
        applyMachineTranslations(l);
      } catch {
        // ignore
      }
    }
  }

  async function applyMachineTranslations(target: LangKey) {
    // Collect visible text nodes under body
    const texts: string[] = [];
    const nodes: Text[] = [];

    function walk(node: Node) {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const t = child.textContent?.trim();
          if (t && t.length > 1 && !/^\s*$/.test(t)) {
            texts.push(t);
            nodes.push(child as Text);
          }
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const el = child as HTMLElement;
          // skip script/style and inputs
          if (
            ["SCRIPT", "STYLE", "INPUT", "TEXTAREA", "SELECT"].includes(
              el.tagName
            )
          )
            return;
          walk(child);
        }
      });
    }

    try {
      walk(document.body);
    } catch {
      return;
    }

    // Send batched requests (Google has limits) - batch size 50
    const batches: string[][] = [];
    for (let i = 0; i < texts.length; i += 50)
      batches.push(texts.slice(i, i + 50));

    for (const batch of batches) {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ target, texts: batch }),
        });
        const data = await res.json();
        if (data.translations && Array.isArray(data.translations)) {
          // Map back to nodes by index
          for (let i = 0; i < data.translations.length; i++) {
            const nodeIndex = batches.indexOf(batch) * 50 + i;
            const translated = data.translations[i];
            const textNode = nodes[nodeIndex];
            if (textNode && translated) {
              textNode.textContent = translated;
            }
          }
        }
      } catch {
        // ignore per batch
      }
    }
  }

  function t(path: string) {
    const parts = path.split(".");
    let cur: JSONValue | undefined = resources[lang];
    for (const p of parts) {
      if (typeof cur === "object" && cur !== null && p in cur) {
        cur = (cur as { [k: string]: JSONValue })[p];
      } else {
        return "";
      }
    }
    return typeof cur === "string" ? cur : "";
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
