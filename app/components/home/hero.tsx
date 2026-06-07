"use client";

import { HeroQuoteForm } from "@/app/components/home/hero-quote-form";
import { useLang } from "@/app/lib/use-lang";

// Stable references so re-rendering on a language change does NOT make React re-apply
// the inline style and clobber the opacity/blur that Webflow IX2 animates away.
const REVEAL_STYLE: React.CSSProperties = { opacity: 0, filter: "blur(5px)" };

const T = {
  en: {
    eyebrow: "Excellence in Manufacturing Since 2003",
    titleTop: "Manufacturing",
    titleBottom: "Brand Identity",
    subtitle:
      "Specialized in manufacturing logos, emblems, labels, badges, and custom identity components for the garment and fashion industry.",
    imageAlt: "Contemporary cliffside house at twilight",
  },
  vi: {
    eyebrow: "Xuất Sắc Trong Sản Xuất Từ Năm 2003",
    titleTop: "Sản Xuất Sản Phẩm",
    titleBottom: "Nhận Diện Thương Hiệu",
    subtitle:
      "Chuyên sản xuất logo, emblem, nhãn mác, badge và các chi tiết nhận diện theo yêu cầu cho ngành may mặc và thời trang.",
    imageAlt: "Nhà trên vách đá lúc hoàng hôn",
  },
} as const;

export function Hero() {
  const t = T[useLang()];

  return (
    <section className="section_hero-home-a">
      <div className="padding-global home-a">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="wrap_home-a">
            <div className="master_hero-home-a">
              <div className="overlay_hero-home-a">
              </div>
              <div className="content_hero-home-a">
                <div className="headline_home-a" data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f022" style={REVEAL_STYLE}>
                  <div className="heading_home-a">
                    <div className="master_label" data-wf--tag--variant="base">
                      <div className="label-small">
                        {t.eyebrow}
                      </div>
                    </div>
                    <h1 className="heading-style-h0">
                      {t.titleTop}
                      <br />
                      <span className="tone-medium">
                        {t.titleBottom}
                      </span>
                    </h1>
                  </div>
                  <div className="p_hero-home-a">
                    <p className="margin-0 text-size-large">
                      {t.subtitle}
                    </p>
                  </div>
                </div>
                <HeroQuoteForm
                  data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f02d"
                  style={REVEAL_STYLE}
                />
              </div>
              <div className="image_hero-home-a" data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f051">
                <img alt={t.imageAlt} className="image_cover is-parallax" loading="lazy" src="/assets/images/69b04fc10fe79a2becaf38a8_Contemporary_Cliffside_House_at_Twilight.avif" />
                <div className="overlay_home-b-hero">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
