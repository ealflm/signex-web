import type { Dictionary } from "@/app/[lang]/dictionaries";

// Collage images — Caladan's six home-about photos, already copied into public/assets.
// Decorative (alt=""), so they aren't translated and live here, not in the dictionary.
// Index-aligned with the grid order below (2 of them are the `is-large` tiles).
const ABOUT_IMAGES = [
  "/assets/images/69aafdfd55a63aed167c4742_pexels-alohaphotostudio-6961666.avif",
  "/assets/images/69aeefb3fde379b25ebbe105_pexels-stijn-dijkstra-1306815-29989229.avif",
  "/assets/images/69aafdfdfb59242c63856bad_pexels-jonathanborba-13911220__1_.avif",
  "/assets/images/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif",
  "/assets/images/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif",
  "/assets/images/69a9746c7ab6e4371c4aae70_pexels-saeb-mahajna-14125913-6297105.avif",
];

/**
 * HomeAbout — Caladan's "section_home-about" (an eyebrow + headline + paragraph over a
 * 6-image collage). Ported from the ref's `homepage/home-c` page onto the home page,
 * placed directly below ProductCategories ("section_hero-resorts"). Design kept 100%:
 * same section/classes/grid markup; only the text is signex's (dict-driven, EN + VI),
 * like Features/ProductCategories.
 *
 * IX2 cross-page gating (see clone-playbook §1):
 *   • The headline reveal wrapper's data-w-id was `6a32e52a-…c61659`, a home-c trigger —
 *     inert on the home page, so the headline would stay `opacity:0; blur(5px)` forever.
 *     RE-POINTED to the home-page reveal trigger `0f29df12-…d663` (standard a-124:
 *     opacity + unblur on self), shared safely with Features/ProductCategories headlines.
 *   • The per-image `data-w-id="6a32e52a-…"` are image-parallax triggers (a-114), page-gated
 *     to home-c → harmlessly inert here (images still render, just no parallax). Left as-is.
 *   • The four regular tiles keep their exact `id="w-node-…-d3d24897"` — those are pure CSS
 *     grid-placement selectors in the Caladan stylesheet (not page-gated), so the collage
 *     layout works on the home page. The two `is-large` tiles intentionally have no id.
 */
export function HomeAbout({ dict }: { dict: Dictionary["about"] }) {
  const t = dict;

  return (
    <section className="section_home-about">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="headline_home-about" data-w-id="0f29df12-8c38-da6f-794d-3989ac10d663" style={{ opacity: 0, filter: 'blur(5px)' }}>
            <div className="master_label" data-wf--tag--variant="base">
              <div className="label-small">
                {t.eyebrow}
              </div>
            </div>
            <h2 className="margin-0">
              {t.title}
              <span className="tone-medium">
                {t.titleAccent}
              </span>
            </h2>
            <div className="home_about-p">
              <p className="tone-medium">
                {t.body}
              </p>
            </div>
          </div>
          <div className="w-layout-grid grid_about-images">
            <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61664" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c61664-d3d24897">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[0]} />
            </div>
            <div className="image_home-about is-large" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61666">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[1]} />
            </div>
            <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61668" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c61668-d3d24897">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[2]} />
            </div>
            <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166a" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c6166a-d3d24897">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[3]} />
            </div>
            <div className="image_home-about is-large" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166c">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[4]} />
            </div>
            <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166e" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c6166e-d3d24897">
              <img alt="" className="image_cover is-parallax" loading="lazy" src={ABOUT_IMAGES[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
