"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type AccessibilityState = {
  scale: number;
  highContrast: boolean;
  darkMode: boolean;
  increase: () => void;
  decrease: () => void;
  toggleContrast: () => void;
  toggleDark: () => void;
};

const defaultState: AccessibilityState = {
  scale: 1,
  highContrast: false,
  darkMode: false,
  increase: () => {},
  decrease: () => {},
  toggleContrast: () => {},
  toggleDark: () => {},
};

const AccessibilityContext = createContext<AccessibilityState>(defaultState);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState<number>(1);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--access-scale", String(scale));
    if (highContrast)
      document.documentElement.classList.add("accessibility-high-contrast");
    else
      document.documentElement.classList.remove("accessibility-high-contrast");
    if (darkMode)
      document.documentElement.classList.add("accessibility-dark-mode");
    else document.documentElement.classList.remove("accessibility-dark-mode");
  }, [scale, highContrast, darkMode]);

  function increase() {
    setScale((s) => Math.min(1.6, +(s + 0.1).toFixed(2)));
  }
  function decrease() {
    setScale((s) => Math.max(0.8, +(s - 0.1).toFixed(2)));
  }
  function toggleContrast() {
    setHighContrast((v) => !v);
  }
  function toggleDark() {
    setDarkMode((v) => !v);
  }

  return (
    <AccessibilityContext.Provider
      value={{
        scale,
        highContrast,
        darkMode,
        increase,
        decrease,
        toggleContrast,
        toggleDark,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
