// app/lib/use-lang.ts
"use client";

import { useEffect, useState } from "react";

export type Lang = "en" | "vi";

export const LANG_STORAGE_KEY = "signex-lang";
export const LANG_EVENT = "signex:langchange";

/** Set the active language: persist it, reflect on <html lang>, and notify listeners. */
export function setLang(next: Lang) {
  document.documentElement.lang = next;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    /* ignore storage failures (private mode, etc.) */
  }
  window.dispatchEvent(new CustomEvent<Lang>(LANG_EVENT, { detail: next }));
}

/**
 * Read the active language reactively. SSR/first paint returns "en" (avoids hydration
 * mismatch); the stored choice is applied on mount, and the hook stays in sync via the
 * `signex:langchange` event (same tab) and the `storage` event (other tabs).
 */
export function useLang(): Lang {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const read = () => {
      const v = localStorage.getItem(LANG_STORAGE_KEY);
      if (v === "en" || v === "vi") setLangState(v);
    };
    read();
    const onCustom = (e: Event) => {
      const d = (e as CustomEvent<Lang>).detail;
      if (d === "en" || d === "vi") setLangState(d);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === LANG_STORAGE_KEY) read();
    };
    window.addEventListener(LANG_EVENT, onCustom);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(LANG_EVENT, onCustom);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return lang;
}
