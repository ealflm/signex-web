// app/components/lang-toggle.tsx
"use client";

import { setLang, useLang } from "@/app/lib/use-lang";

/**
 * Navbar EN/VI language switch. Reflects + sets the active language via the shared
 * `use-lang` helpers, which persist the choice and notify translatable components.
 */
export function LangToggle() {
  const lang = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle_option${lang === "en" ? " is-active" : ""}`}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span className="lang-toggle_divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`lang-toggle_option${lang === "vi" ? " is-active" : ""}`}
        aria-pressed={lang === "vi"}
        onClick={() => setLang("vi")}
      >
        VI
      </button>
    </div>
  );
}
