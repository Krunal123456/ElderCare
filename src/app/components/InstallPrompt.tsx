"use client";
import React, { useEffect, useState } from "react";

// Minimal typing for the beforeinstallprompt event used by many browsers
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  // Close handler to reuse from buttons / keyboard
  function closePrompt() {
    setVisible(false);
    setDeferredPrompt(null);
  }

  useEffect(() => {
    function beforeInstallHandler(e: Event) {
      const ev = e as BeforeInstallPromptEvent;
      try {
        ev.preventDefault?.();
      } catch {
        // ignore
      }
      setDeferredPrompt(ev);
      setVisible(true);
    }

    function onAppInstalled() {
      setVisible(false);
      setDeferredPrompt(null);
    }

    window.addEventListener(
      "beforeinstallprompt",
      beforeInstallHandler as EventListener
    );
    window.addEventListener("appinstalled", onAppInstalled);
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstallHandler as EventListener
      );
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  // Close on Escape for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closePrompt();
    }
    if (visible) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible || !deferredPrompt) return null;

  async function onInstall() {
    if (!deferredPrompt) return;
    // keep a reference to the event, then hide the custom prompt immediately
    const ev = deferredPrompt;
    setVisible(false);
    setDeferredPrompt(null);
    try {
      await ev.prompt();
      const choice = await ev.userChoice;
      return choice;
    } catch {
      // ignore failures - UI already hidden
    }
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto z-50 pointer-events-auto">
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-sm border border-gray-200/20 rounded-lg shadow-lg p-3 flex items-center justify-between gap-3 text-black">
        <div>
          <div className="font-semibold">Install Sathilo</div>
          <div className="text-sm text-black/100">
            Add Sathilo to your home screen for quick access.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-primary" onClick={onInstall}>
            Install
          </button>
          <button
            className="btn-ghost"
            onClick={closePrompt}
            aria-label="Cancel install prompt"
          >
            Cancel
          </button>
          {/* small X for quicker/corner dismiss */}
          <button
            className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full text-white/90 hover:bg-white/10"
            onClick={closePrompt}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
