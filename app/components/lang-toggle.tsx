// app/components/lang-toggle.tsx
"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/lib/i18n-config";

/**
 * Navbar EN/VI switch. With [lang] routing the locale lives in the URL, so each option is
 * a link that swaps the first path segment. Plain <a> (full reload) keeps the Webflow IX2
 * runtime on its "every load is a fresh first boot" path (see webflow-runtime.tsx).
 */
export function LangToggle() {
  const pathname = usePathname();
  const segments = pathname.split("/"); // e.g. ["", "vi", "about"]
  const current = (LOCALES as readonly string[]).includes(segments[1]) ? segments[1] : LOCALES[0];

  const hrefFor = (locale: string) => {
    const next = [...segments];
    next[1] = locale;
    return next.join("/") || `/${locale}`;
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LOCALES.map((locale, i) => (
        <Fragment key={locale}>
          {i > 0 && (
            <span className="lang-toggle_divider" aria-hidden="true">
              /
            </span>
          )}
          <a
            href={hrefFor(locale)}
            className={`lang-toggle_option${locale === current ? " is-active" : ""}`}
            aria-current={locale === current ? "true" : undefined}
          >
            {locale.toUpperCase()}
          </a>
        </Fragment>
      ))}
    </div>
  );
}
