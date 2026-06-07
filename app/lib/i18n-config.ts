// app/lib/i18n-config.ts
// Plain config (NO "server-only") so it can be imported anywhere: proxy, server
// components, and client components alike.

export const LOCALES = ["en", "vi"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
