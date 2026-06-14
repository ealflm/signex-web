import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/app/components/navbar";
import { SalesCta } from "@/app/components/sales-cta";
import { Footer } from "@/app/components/footer";
import { WebflowRuntime } from "@/app/components/webflow-runtime";
import { WebflowPageAttrs } from "@/app/components/webflow-page-attrs";
import { LOCALES, hasLocale, DEFAULT_LOCALE } from "@/app/lib/i18n-config";
import { getDictionary } from "./dictionaries";

// Verbatim from legacy/caladan/index.html <head>: the FOUC guard hides animated
// elements until the IX2 runtime adds w-mod-ix3; the shim sets w-mod-js/w-mod-touch early.
const WF_GUARD_STYLE =
  "html.w-mod-js:not(.w-mod-ix3) :is([marquee-up],[marquee-down],[stagger-text],.master_sales-cta){visibility:hidden !important;}";
const WF_MOD_SHIM =
  '!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);';

export const metadata: Metadata = {
  metadataBase: new URL("https://caladan-template.webflow.io"),
  title: "Caladan™ - Webflow HTML website template",
  description:
    "Caladan is a premium Webflow template designed for tropical resorts and beach hotels. Includes booking pages, galleries, and resort experiences.",
  openGraph: { type: "website", images: ["/assets/images/69b2ce4ca643fd73303e9753_OG.jpg"] },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/assets/images/69a71ff9c9936d719cf8c24e_32.svg",
    apple: "/assets/images/69a71ffbadce191ccff097d8_256.svg",
  },
};

// Pre-render one route per locale; reject any other locale with a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // dynamicParams=false + generateStaticParams restrict this to LOCALES; the guard
  // just narrows the string to Locale for getDictionary (Footer is dict-driven, EN + VI).
  const dict = await getDictionary(hasLocale(lang) ? lang : DEFAULT_LOCALE);
  return (
    // suppressHydrationWarning: the WF_MOD_SHIM script adds w-mod-js/w-mod-touch to <html> before
    // hydration, and WebflowPageAttrs sets data-wf-page on it — both intentionally diverge from SSR.
    <html
      lang={lang}
      suppressHydrationWarning
      data-wf-domain="caladan-template.webflow.io"
      data-wf-site="69833b76e5b4bee55e873012"
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: WF_GUARD_STYLE }} />
        <script dangerouslySetInnerHTML={{ __html: WF_MOD_SHIM }} />
        <link rel="stylesheet" href="/assets/css/caladan-template.shared.28e174924.css" />
        <link rel="stylesheet" href="/assets/css/lenis.css" />
        {/* IBM Plex Mono: ibm-plex-mono.css is a plain @font-face stylesheet (the export loads
            it via WebFont.load, but webfont.js isn't available in <head>), so link it directly. */}
        <link rel="stylesheet" href="/assets/fonts/ibm-plex-mono.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <Navbar dict={dict.nav} />
          <SalesCta />
          <main className="main-wrapper">
            {children}
            <Footer dict={dict.footer} />
          </main>
        </div>
        <WebflowPageAttrs />
        <WebflowRuntime />
      </body>
    </html>
  );
}
