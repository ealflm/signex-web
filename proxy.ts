// proxy.ts — Next 16 renamed `middleware` to `proxy` (same level as app/).
// Locale routing: bare paths redirect to the detected locale (cookie → Accept-Language →
// default); locale-prefixed paths set a cookie so future bare-path visits stay in language.
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, hasLocale } from "@/app/lib/i18n-config";

const COOKIE = "NEXT_LOCALE";

function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (cookie && hasLocale(cookie)) return cookie;

  const accept = request.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const base = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (hasLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  // Already on a locale path → remember the choice for later bare-path visits.
  if (hasLocale(segment)) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, segment, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // No locale in the path → redirect to the detected locale, preserving the rest.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // App routes only — exclude Next internals, the vendored Webflow /assets, favicon,
  // and any path containing a file extension (so CSS/JS/images load untouched).
  matcher: ["/((?!_next/static|_next/image|assets/|favicon.ico|.*\\..*).*)"],
};
