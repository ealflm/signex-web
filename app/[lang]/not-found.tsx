// /404 — port of signex-web-ref's app/not-found.tsx (Caladan "_404" utility layout: a 2-column
// grid with eyebrow + heading + paragraph + CTA on the left and a cover image on the right).
// Reuses Caladan's _404/grid_404/content_404/image_404 classes verbatim (all defined in the shared
// stylesheet), with Signex copy.
//
// Two deviations from the ref:
//  1. STATIC (no IX2 reveal): the ref starts content_404/image_404 at opacity:0 + blur and reveals
//     them via IX2. IX2 filters interactions by data-wf-page, but a 404 is served at arbitrary
//     unmatched URLs whose route never maps to a wfPage id (WebflowPageAttrs clears it) — so the
//     reveal would never fire and the page would stay invisible. We drop the reveal and render it
//     visible. CSS-only styling (.cta_primary, .btn-bg, etc.) is unaffected.
//  2. LOCALE: not-found.tsx receives no route params, so the locale is read from the x-locale
//     request header forwarded by proxy.ts (reliable in the same render), with the NEXT_LOCALE
//     cookie as a fallback, then the default. The home CTA links to /<locale>.
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { getDictionary } from "./dictionaries";
import { hasLocale, DEFAULT_LOCALE } from "@/app/lib/i18n-config";

export const metadata: Metadata = {
  title: "Page not found | SIGNEX",
  // Clear the SEO metadata this page would otherwise inherit from the [lang] layout's
  // generateMetadata (Next merges metadata shallowly). A noindex 404 must NOT declare a
  // canonical pointing at the live homepage, advertise hreflang-cluster membership, or carry
  // the home OG/Twitter card — that contradicts "don't index me". Next already auto-injects
  // <meta name="robots" content="noindex"> for notFound() responses, so robots isn't set here.
  alternates: { canonical: null, languages: {} },
  openGraph: null, // null (not undefined) — undefined is treated as "inherit" by Next's shallow merge
  twitter: null,
};

export default async function NotFound() {
  const [hdrs, cookieStore] = await Promise.all([headers(), cookies()]);
  const candidate = hdrs.get("x-locale") ?? cookieStore.get("NEXT_LOCALE")?.value;
  const locale = candidate && hasLocale(candidate) ? candidate : DEFAULT_LOCALE;
  const dict = await getDictionary(locale);
  const t = dict.notFound;
  return (
    <div className="utility_page-wrap _404">
      <div className="utility_page-content _404">
        <div className="w-layout-grid grid_404">
          <div className="content_404">
            <div className="master_label" data-wf--tag--variant="base">
              <div className="label-small">{t.eyebrow}</div>
            </div>
            <div className="headline_404">
              <div className="heading_404">
                <h1 className="margin-0">
                  {t.title}
                  <span className="tone-medium">{t.titleAccent}</span>
                </h1>
              </div>
              <div className="_404_p">
                <p className="tone-medium margin-0">{t.body}</p>
              </div>
            </div>
            <a button="" className="cta_primary w-inline-block" data-wf--cta-primary--variant="primary" href={`/${locale}`}>
              <div className="button_text-mask">
                <div button-text="" className="text-button">
                  {t.cta}
                </div>
              </div>
              <div button-bg="" className="btn-bg"></div>
            </a>
          </div>
          <div className="image_404">
            <img
              alt={t.imageAlt}
              className="image_cover"
              loading="lazy"
              src="/assets/images/69ac691927961ac98c560fe2_pexels-stephanlouis-19119918.avif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
