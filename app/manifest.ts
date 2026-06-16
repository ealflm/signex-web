// /manifest.webmanifest — minimal web app manifest (name/description/theme-color/icons) for
// installability + a consistent browser theme color. Locale-neutral, so it lives at the app root
// and sources copy from the default-locale (vi) dictionary to match the rest of the site.
import type { MetadataRoute } from "next";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { DEFAULT_LOCALE } from "@/app/lib/i18n-config";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { meta } = await getDictionary(DEFAULT_LOCALE);
  return {
    name: meta.title,
    short_name: meta.siteName,
    description: meta.description,
    start_url: `/${DEFAULT_LOCALE}`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071522", // brand deep-navy
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48 256x256", type: "image/x-icon" },
      { src: "/assets/images/signex-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
