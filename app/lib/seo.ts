// Shared SEO/metadata builder. Next merges metadata SHALLOWLY — a page that defines
// `openGraph` overwrites the layout's `openGraph` entirely (it does NOT deep-merge). So
// every segment that wants page-specific OG must emit a COMPLETE object. This helper keeps
// that DRY and consistent: the root layout and each page call it with their own title +
// description + path, and get a full, localized Metadata object back.
import type { Metadata } from "next";
import type { Locale } from "@/app/lib/i18n-config";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const SITE_URL = "https://signex.vn";
const OG_IMAGE = "/assets/images/signex-og.png";
// Brand wordmark (transparent SVG) as the favicon — recognisable SIGNEX logotype.
const ICON = "/assets/images/signex-logo.svg";

export function buildMetadata({
  locale,
  meta,
  title,
  description,
  path = "",
}: {
  locale: Locale;
  meta: Dictionary["meta"];
  title: string;
  description: string;
  /** Route path WITHOUT the locale prefix, e.g. "" (home), "/about", "/contact". */
  path?: string;
}): Metadata {
  const url = `/${locale}${path}`;
  const ogLocale = locale === "vi" ? "vi_VN" : "en_US";
  const altLocale = locale === "vi" ? "en_US" : "vi_VN";
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: meta.siteName,
    alternates: {
      canonical: url,
      // hreflang: point each locale at the same page in the other language.
      languages: { en: `/en${path}`, vi: `/vi${path}`, "x-default": `/en${path}` },
    },
    openGraph: {
      type: "website",
      siteName: meta.siteName,
      title,
      description,
      url,
      locale: ogLocale,
      alternateLocale: altLocale,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    icons: { icon: ICON, apple: ICON },
  };
}
