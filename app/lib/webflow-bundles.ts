// app/lib/webflow-bundles.ts
const HOME = "/assets/js/caladan-template.440ed6be.6014f9e495821460.js";
const STANDARD = "/assets/js/caladan-template.bbc7f9af.296d718c12453aa7.js";
const RESORT = "/assets/js/caladan-template.a3342134.d2cd0b11c956de1b.js";
const DCDAA = "/assets/js/caladan-template.schunk.dcdaa481f81cf2ce.js";

const WF_SITE = "69833b76e5b4bee55e873012";

// Per-route data-wf-page (from each legacy <html data-wf-page>). Fill blanks during Phase 3 tasks.
const WF_PAGE_IDS: Record<string, string> = {
  "/": "69833b76e5b4bee55e872ff7",
  "/about": "69a7036d5e3e1afa5e6d2f92",
  "/book-inquiry": "69a7041f0f9b2dc846e5d8c9",
  "/legal": "69a7042b53c4373a29d8ede5",
  "/contact/contact-a": "69a70f3c7eb8c166b6ac8212",
  "/contact/contact-b": "69a70f5f92c56838ccf4559b",
  "/blog/blog-a": "69a70fc1515fc86ac37be149",
  "/blog/blog-b": "69a70fda594e1debf81de99c",
  "/blog/blog-c": "69a70fe412e71e887ceaddf5",
  "/contact/contact-c": "69a70fb503e0b0fe6ae20e06",
  "/resorts": "69a19003bd2e7619e1ce03ef",
  "/gallery": "69a703809aa0c054da6ec7d1",
  "/faq": "69a7043500b7d5a5815660a8",
  "/homepage/home-b": "69a70ff23ca5ba77038a590e",
  "/homepage/home-c": "69a70ffbcdebad02d3d24897",
  "/template/style-guide": "69833b76e5b4bee55e872ffa",
  "/template/changelog": "69833b76e5b4bee55e872ffb",
  "/template/licenses": "69833b76e5b4bee55e872ff9",
  "/401": "69833b76e5b4bee55e872ffd",
  "/404": "69833b76e5b4bee55e872ffc",
};

export function profileForRoute(pathname: string): { pageScripts: string[]; wfPage: string; wfCollection?: string } {
  if (pathname === "/") return { pageScripts: [HOME], wfPage: WF_PAGE_IDS["/"] };
  if (pathname.startsWith("/resorts/")) return { pageScripts: [DCDAA, RESORT], wfPage: "69af2cd1ff90f14953b3f7d6", wfCollection: "69af2cd0ff90f14953b3f7cf" };
  if (pathname.startsWith("/blogs/")) return { pageScripts: [DCDAA, STANDARD], wfPage: "69a98d48f21f4a171c4e1bae", wfCollection: "69a98d47f21f4a171c4e1948" };
  return { pageScripts: [DCDAA, STANDARD], wfPage: WF_PAGE_IDS[pathname] ?? "" };
}

export function siteAttrs() { return { domain: "caladan-template.webflow.io", site: WF_SITE }; }
