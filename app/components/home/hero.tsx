import { HeroQuoteForm } from "@/app/components/home/hero-quote-form";

export function Hero() {
  return (
    <section className="section_hero-home-a">
      <div className="padding-global home-a">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="wrap_home-a">
            <div className="master_hero-home-a">
              <div className="overlay_hero-home-a">
              </div>
              <div className="content_hero-home-a">
                <div className="headline_home-a" data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f022" style={{ opacity: 0, filter: 'blur(5px)' }}>
                  <div className="heading_home-a">
                    <div className="master_label" data-wf--tag--variant="base">
                      <div className="label-small">
                        Excellence in Manufacturing Since 2003
                      </div>
                    </div>
                    <h1 className="heading-style-h0">
                      Manufacturing
                      <br />
                      <span className="tone-medium">
                        Brand Identity
                      </span>
                    </h1>
                  </div>
                  <div className="p_hero-home-a">
                    <p className="margin-0 text-size-large">
                      Specialized in manufacturing logos, emblems, labels, badges, and custom identity components for the garment and fashion industry.
                    </p>
                  </div>
                </div>
                <HeroQuoteForm
                  data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f02d"
                  style={{ opacity: 0, filter: 'blur(5px)' }}
                />
              </div>
              <div className="image_hero-home-a" data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f051">
                <img alt="Contemporary cliffside house at twilight" className="image_cover is-parallax" loading="lazy" src="/assets/images/69b04fc10fe79a2becaf38a8_Contemporary_Cliffside_House_at_Twilight.avif" />
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
