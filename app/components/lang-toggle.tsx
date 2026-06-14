// app/components/lang-toggle.tsx
"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LOCALES } from "@/app/lib/i18n-config";

// useLayoutEffect would warn during SSR of this client component; fall back to useEffect
// on the server (where it's a no-op anyway).
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Navbar EN/VI switch with a single sliding underline ("magic line"): the underline rests
 * under the ACTIVE locale and slides to whichever option is hovered/focused, returning to
 * the active one on leave. The bar's left/width are measured from the option elements and
 * animated via CSS transitions. Plain <a> (full reload) keeps the Webflow IX2 runtime on
 * its "every load is a fresh first boot" path (see webflow-runtime.tsx).
 */
export function LangToggle() {
  const pathname = usePathname();
  const segments = pathname.split("/"); // e.g. ["", "vi", "about"]
  const activeLocale = (LOCALES as readonly string[]).includes(segments[1]) ? segments[1] : LOCALES[0];
  const activeIndex = Math.max(0, LOCALES.findIndex((l) => l === activeLocale));

  const hrefFor = (locale: string) => {
    const next = [...segments];
    next[1] = locale;
    return next.join("/") || `/${locale}`;
  };

  const optionRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [bar, setBar] = useState({ left: 0, width: 0 });
  const [animate, setAnimate] = useState(false);

  // Underline target = the hovered option, or the active one when nothing is hovered.
  const target = hovered ?? activeIndex;

  useIsomorphicLayoutEffect(() => {
    const el = optionRefs.current[target];
    if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
  }, [target]);

  // Enable the slide transition only AFTER the first (instant) placement, so the bar
  // doesn't visibly slide in from the left on initial load.
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

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
            ref={(el) => {
              optionRefs.current[i] = el;
            }}
            href={hrefFor(locale)}
            className={`lang-toggle_option${locale === activeLocale ? " is-active" : ""}`}
            aria-current={locale === activeLocale ? "true" : undefined}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
          >
            {locale.toUpperCase()}
          </a>
        </Fragment>
      ))}
      <span
        className={`lang-toggle_underline${animate ? " is-animated" : ""}`}
        style={{ left: `${bar.left}px`, width: `${bar.width}px` }}
        aria-hidden="true"
      />
    </div>
  );
}
