// /about — faithful port of signex-web-ref's /homepage/home-c (the Caladan "home-c"
// layout). Content is the original Caladan placeholder copy, to be localised section by
// section later. Lives under [lang] so it inherits the EN/VI locale routing; the body is
// static for now (no dict use yet) but keeps the same params/hasLocale guard as the home
// page so the route is locale-validated. NOTE: /about is mapped to the HOME webflow bundle
// in app/lib/webflow-bundles.ts because that bundle carries this layout's IX2 reveal
// interactions (the elements below start at opacity:0 / blur and are revealed on scroll).
import { notFound } from "next/navigation";
import { hasLocale } from "@/app/lib/i18n-config";
import { getDictionary } from "../dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound(); // narrows lang to Locale; rejects unknown locales with a 404
  const dict = await getDictionary(lang); // localised copy for the sections being customised (EN + VI)
  return (
    <>
      <section className="section_hero-home-c">
        <div
          className="master_hero-home-c w-background-video w-background-video-atom"
          data-autoplay="true"
          data-loop="true"
          data-poster-url="/assets/images/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_poster.0000000.jpg"
          data-video-urls="/assets/videos/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_mp4.mp4,/assets/videos/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_webm.webm"
          data-wf-ignore="true"
        >
          <video
            autoPlay
            data-object-fit="cover"
            data-wf-ignore="true"
            id="532ef140-c6a2-edd2-7d75-66929c4acf39-video"
            loop
            muted
            playsInline
            style={{ backgroundImage: 'url("/assets/images/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_poster.0000000.jpg")' }}
          >
            <source data-wf-ignore="true" src="/assets/videos/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_mp4.mp4" />
            <source data-wf-ignore="true" src="/assets/videos/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_webm.webm" />
          </video>
          <div className="content_hero-home-c">
            <div className="headline_home-c" data-w-id="532ef140-c6a2-edd2-7d75-66929c4acf3b" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="heading_hero-home-c">
                <div className="title_home-c">
                  <h1 className="heading-style-h0">
                    {dict.aboutPage.hero.title}
                    <span className="tone-medium">
                      {dict.aboutPage.hero.titleAccent}
                    </span>
                  </h1>
                </div>
                <div className="p_hero-home-c">
                  <p className="margin-0">
                    {dict.aboutPage.hero.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay_hero-home-b"></div>
          <noscript dangerouslySetInnerHTML={{ __html: `<style>
              [data-wf-bgvideo-fallback-img] {
                display: none;
              }
              @media (prefers-reduced-motion: reduce) {
                [data-wf-bgvideo-fallback-img] {
                  position: absolute;
                  z-index: -100;
                  display: inline-block;
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                }
              }
            </style><img alt="" data-wf-bgvideo-fallback-img="true" src="/assets/images/69b06b4bfbdb2da284a4ec5e_8440992-uhd_2732_1440_25fps_poster.0000000.jpg"/>` }} />
          <div aria-live="polite">
            <button
              aria-controls="532ef140-c6a2-edd2-7d75-66929c4acf39-video"
              className="w-backgroundvideo-backgroundvideoplaypausebutton button_play-pause w-background-video--control"
              data-w-bg-video-control="true"
              type="button"
            >
              <span className="play-state">
                <div className="icon_play w-embed">
                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0002 2L10.0002 2C9.63197 2 9.3335 2.29848 9.3335 2.66667V13.3333C9.3335 13.7015 9.63197 14 10.0002 14H12.0002C12.3684 14 12.6668 13.7015 12.6668 13.3333L12.6668 2.66667C12.6668 2.29848 12.3684 2 12.0002 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.00016 2L4.00016 2C3.63197 2 3.3335 2.29848 3.3335 2.66667L3.3335 13.3333C3.3335 13.7015 3.63197 14 4.00016 14H6.00016C6.36835 14 6.66683 13.7015 6.66683 13.3333L6.66683 2.66667C6.66683 2.29848 6.36835 2 6.00016 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </span>
              <span className="play-state" hidden>
                <div className="icon_play w-embed">
                  <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 3.33373C3.33343 3.09912 3.39526 2.86865 3.51275 2.66559C3.63024 2.46252 3.79924 2.29406 4.00266 2.17719C4.20609 2.06033 4.43675 1.99921 4.67136 2.00001C4.90596 2.0008 5.1362 2.06349 5.33883 2.18173L13.3368 6.84706C13.5387 6.96418 13.7062 7.13222 13.8228 7.3344C13.9393 7.53657 14.0008 7.76579 14.001 7.99915C14.0012 8.23251 13.9401 8.46184 13.8239 8.66422C13.7077 8.86659 13.5405 9.03492 13.3388 9.15239L5.33883 13.8191C5.1362 13.9373 4.90596 14 4.67136 14.0008C4.43675 14.0016 4.20609 13.9405 4.00266 13.8236C3.79924 13.7067 3.63024 13.5383 3.51275 13.3352C3.39526 13.1321 3.33343 12.9017 3.3335 12.6671L3.3335 3.33373Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container"></div>
        </div>
      </section>
      {/* Testimonials — home-a "testimonials-v2" slider ported from signex-web-ref, inserted
          above section_home-about. Headline reveal data-w-id re-pointed from the home-a trigger
          (af30d5d7 — not registered under /about's home-c data-wf-page) to the now-unused home-c
          stats reveal id (8dd77407) so it fades in like the rest of /about; the slider is a global
          Webflow component. Caladan placeholder copy — to be localised later. */}
      <section className="section_testimonial">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="headline_testimonials-v2" data-w-id="8dd77407-7638-8860-84b4-1292d73f46a7" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="heading_testimonials-v2">
                <div className="master_label" data-wf--tag--variant="base">
                  <div className="label-small">
                    {dict.aboutPage.testimonial.eyebrow}
                  </div>
                </div>
                <h2 className="margin-0">
                  {dict.aboutPage.testimonial.title}
                  <span className="tone-medium">
                    {dict.aboutPage.testimonial.titleAccent}
                  </span>
                </h2>
              </div>
            </div>
            <div className="slider w-slider" data-animation="cross" data-autoplay="false" data-autoplay-limit="0" data-delay="4000" data-disable-swipe="false" data-duration="500" data-easing="ease" data-hide-arrows="false" data-infinite="true" data-nav-spacing="3">
              <div className="mask_testimonials-v2 w-slider-mask">
                <div className="slide_testimonials-v2 w-slide">
                  <div className="card_testimonial-v2">
                    <div className="left_testimonial-v2">
                      <div className="quotes_testimonial-v2 w-embed">
                        {/* Decorative quote glyph replaced with the Signex wordmark. Rendered via a CSS
                            mask filled with currentColor, so it picks up the container's faint
                            ink--dark-8 colour exactly like the original quote glyph did. Scoped in globals.css. */}
                        <span className="quotes_testimonial-signex" role="img" aria-label="Signex" />
                      </div>
                      <div className="testimonial-signex_body">
                        {dict.aboutPage.testimonial.body.map((para, i) => (
                          <p key={i} className="text-size-regular margin-0">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="right_testimonial-v2" id="w-node-af30d5d7-8441-26c7-d69a-89a24d922243-4d92222b">
                      <img alt="Pexels stephanlouis 19119918" className="image_cover" loading="lazy" src="/assets/images/69ac691927961ac98c560fe2_pexels-stephanlouis-19119918.avif" />
                      {/* Gradient scrim kept (height:100%/inset:0 in Caladan CSS renders the full
                          gradient even when empty); the Daniel Novak / Adventure Seeker name was removed. */}
                      <div className="overlay_image-testimonial-v2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hide w-slider-nav w-round w-num">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_home-about">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="headline_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61659" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="master_label" data-wf--tag--variant="base">
                <div className="label-small">
                  Lagoon&apos;s Living Breath
                </div>
              </div>
              <h2 className="margin-0">
                Wellness Floats on
                <span className="tone-medium">
                  Reef Dreams
                </span>
              </h2>
              <div className="home_about-p">
                <p className="tone-medium">
                  ICaladan&apos;s overwater sanctuary fuses Tahitian whispers with tide-pulse rituals — where couples entwine in lomilomi waves, families hum with crystal ocean songs, and solo souls dissolve into reef reverie. Your rebirth hovers above paradise.
                </p>
              </div>
            </div>
            <div className="w-layout-grid grid_about-images">
              <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61664" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c61664-d3d24897">
                <img alt="Pexels alohaphotostudio 6961666" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aafdfd55a63aed167c4742_pexels-alohaphotostudio-6961666.avif" />
              </div>
              <div className="image_home-about is-large" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61666">
                <img alt="Pexels stijn dijkstra 1306815 29989229" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aeefb3fde379b25ebbe105_pexels-stijn-dijkstra-1306815-29989229.avif" />
              </div>
              <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c61668" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c61668-d3d24897">
                <img alt="Pexels jonathanborba 13911220 (1)" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aafdfdfb59242c63856bad_pexels-jonathanborba-13911220__1_.avif" />
              </div>
              <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166a" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c6166a-d3d24897">
                <img alt="Pexels adriendrj 33980501" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aafdfd2e687076e1f59b64_pexels-adriendrj-33980501.avif" />
              </div>
              <div className="image_home-about is-large" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166c">
                <img alt="Pexels slimmars 13 197677686 13801311" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aafdfdead8470d2eaa6414_pexels-slimmars-13-197677686-13801311.avif" />
              </div>
              <div className="image_home-about" data-w-id="6a32e52a-664f-8b1c-94cf-2d1d90c6166e" id="w-node-_6a32e52a-664f-8b1c-94cf-2d1d90c6166e-d3d24897">
                <img alt="Pexels saeb mahajna 14125913 6297105" className="image_cover is-parallax" loading="lazy" src="/assets/images/69a9746c7ab6e4371c4aae70_pexels-saeb-mahajna-14125913-6297105.avif" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_resorts-v3">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="headline_resorts-v3" data-w-id="48327d56-479c-a448-b670-7db1a6576b2d" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="heading_resorts-v3" data-w-id="023b45f6-1442-0cb7-9715-5fd873ea46d5">
                <h2 className="margin-0">
                  Reefside
                  <span className="tone-medium">
                    Sanctuaries
                  </span>
                </h2>
                <p className="margin-0">
                  Glass floors pulse with parrotfish dawn colors. Private decks sip Tahiti&apos;s tides. Discover our floating havens where lagoon rhythms compose your perfect wellness escape.
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a button="" className="cta_primary w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" data-wf--cta-primary--variant="secondary" href="/resorts">
                <div className="button_text-mask">
                  <div button-text="" className="text-button w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">
                    See All Resorts
                  </div>
                </div>
                <div button-bg="" className="btn-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f"></div>
              </a>
            </div>
            <div className="resorts w-dyn-list">
              <div className="resort_thirds w-dyn-items" role="list">
                <div className="w-dyn-item" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a className="card_resort-v1 w-inline-block" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa60" href="/resorts/lagoon-harmony-bungalow">
                    <div className="image_resort-v1" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa61">
                      <div className="overlay_resort-card-v1">
                        <div className="master_label w-variant-84e91bde-75c3-dd4c-a083-7846b4ae6170" data-wf--tag--variant="lighter">
                          <div className="label-small">
                            Overwater Bungalow
                          </div>
                        </div>
                      </div>
                      <img alt="" className="image_cover is-parallax" loading="lazy" src="/assets/images/69b049a16076b1b2188d012d_rumman-amin-s3o2rkTkF7I-unsplash.avif" />
                    </div>
                    <div className="wrap_content-resort-v1">
                      <div className="text-size-large text_body-bold">
                        Lagoon Harmony Bungalow
                      </div>
                      <div className="card-resort_info-tile-v1">
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-scaling-icon lucide-scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M14 15H9v-5"></path>
                              <path d="M16 3h5v5"></path>
                              <path d="M21 3 9 15"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>90</div>
                            <div>ft2</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4v16"></path>
                              <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                              <path d="M2 17h20"></path>
                              <path d="M6 8v9"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>2</div>
                            <div>Beds</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>6</div>
                            <div>Guests</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-dyn-item" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a className="card_resort-v1 w-inline-block" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa60" href="/resorts/coral-breath-studio">
                    <div className="image_resort-v1" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa61">
                      <div className="overlay_resort-card-v1">
                        <div className="master_label w-variant-84e91bde-75c3-dd4c-a083-7846b4ae6170" data-wf--tag--variant="lighter">
                          <div className="label-small">
                            Overwater Studio
                          </div>
                        </div>
                      </div>
                      <img alt="" className="image_cover is-parallax" loading="lazy" src="/assets/images/69b037b7b9f0bc0f27d8889d_dinuka-lankaloka-HKr5cn6S0q0-unsplash.avif" />
                    </div>
                    <div className="wrap_content-resort-v1">
                      <div className="text-size-large text_body-bold">
                        Coral Breath Studio
                      </div>
                      <div className="card-resort_info-tile-v1">
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-scaling-icon lucide-scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M14 15H9v-5"></path>
                              <path d="M16 3h5v5"></path>
                              <path d="M21 3 9 15"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>156</div>
                            <div>ft2</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4v16"></path>
                              <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                              <path d="M2 17h20"></path>
                              <path d="M6 8v9"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>2</div>
                            <div>Beds</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>4</div>
                            <div>Guests</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-dyn-item" role="listitem">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a className="card_resort-v1 w-inline-block" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa60" href="/resorts/tide-song-villa">
                    <div className="image_resort-v1" data-w-id="1682e708-bd5b-5a7c-8d0b-b3989880fa61">
                      <div className="overlay_resort-card-v1">
                        <div className="master_label w-variant-84e91bde-75c3-dd4c-a083-7846b4ae6170" data-wf--tag--variant="lighter">
                          <div className="label-small">
                            Overwater Villa
                          </div>
                        </div>
                      </div>
                      <img alt="" className="image_cover is-parallax" loading="lazy" src="/assets/images/69b03783cb355b95794c522e_pexels-roman-odintsov-5667901.avif" />
                    </div>
                    <div className="wrap_content-resort-v1">
                      <div className="text-size-large text_body-bold">
                        Tide Song Villa
                      </div>
                      <div className="card-resort_info-tile-v1">
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-scaling-icon lucide-scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M14 15H9v-5"></path>
                              <path d="M16 3h5v5"></path>
                              <path d="M21 3 9 15"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>320</div>
                            <div>ft2</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 4v16"></path>
                              <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
                              <path d="M2 17h20"></path>
                              <path d="M6 8v9"></path>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>4</div>
                            <div>Beds</div>
                          </div>
                        </div>
                        <div className="tile_room-summary">
                          <div className="icon_summary w-embed">
                            <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div className="wrap_text-room-summary">
                            <div>12</div>
                            <div>Guests</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_faq">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="headline_faq-v1" data-w-id="acd2fc07-9cf0-c128-04ef-ba633ddcd9a0">
              <div className="master_label" data-wf--tag--variant="base">
                <div className="label-small">
                  Island Essentials
                </div>
              </div>
              <h2 className="margin-0">
                Your Stay,
                <span className="tone-medium">
                  Answered
                </span>
              </h2>
            </div>
            <div className="tabs w-tabs" data-current="Tab 1" data-duration-in="300" data-duration-out="100" data-easing="ease">
              <div className="tabs-menu w-tab-menu">
                <a className="tab-link w-inline-block w-tab-link w--current" data-w-tab="Tab 1">
                  <div>Software</div>
                </a>
                <a className="tab-link w-inline-block w-tab-link" data-w-tab="Tab 2">
                  <div>Integrations</div>
                </a>
                <a className="tab-link w-inline-block w-tab-link" data-w-tab="Tab 3">
                  <div>Pricing</div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div className="tab-pane w-tab-pane w--tab-active" data-w-tab="Tab 1">
                  <div className="list_faq w-variant-a17cbdad-6679-0257-a93e-3f662f8b04be" data-wf--faq-list--variant="small-centered">
                    <div className="faq-slot">
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What makes Caladan different from other beach resorts?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Caladan combines modern coastal design with a focus on sustainability, offering guests a serene beachfront experience surrounded by nature and comfort.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you offer all-inclusive vacation packages?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! We provide several all-inclusive packages that include meals, drinks, and select water activities. You can choose or customize a package during booking.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What activities are available at the resort?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Guests can enjoy kayaking, scuba diving, yoga sessions at sunrise, beach volleyball, and evening bonfires. There&apos;s always something relaxing or adventurous to do.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you accommodate special dietary needs?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, our chefs are happy to prepare meals for guests with dietary restrictions such as vegetarian, vegan, gluten-free, or allergy-sensitive options.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Can I host events or weddings at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! Caladan offers breathtaking beachfront venues ideal for weddings, private parties, and corporate retreats. Our event planners handle every detail to make your occasion unforgettable.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What payment methods do you accept?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">We accept major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. All transactions are securely processed in EUR or XPF with full encryption. Local French Polynesia payment options available upon request.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Is there free Wi-Fi at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, unlimited high-speed Wi-Fi is complimentary throughout the resort, including overwater bungalows. Perfect for sharing your paradise moments or staying connected during workations.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane w-tab-pane" data-w-tab="Tab 2">
                  <div className="list_faq w-variant-a17cbdad-6679-0257-a93e-3f662f8b04be" data-wf--faq-list--variant="small-centered">
                    <div className="faq-slot">
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What makes Caladan different from other beach resorts?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Caladan combines modern coastal design with a focus on sustainability, offering guests a serene beachfront experience surrounded by nature and comfort.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you offer all-inclusive vacation packages?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! We provide several all-inclusive packages that include meals, drinks, and select water activities. You can choose or customize a package during booking.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What activities are available at the resort?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Guests can enjoy kayaking, scuba diving, yoga sessions at sunrise, beach volleyball, and evening bonfires. There&apos;s always something relaxing or adventurous to do.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you accommodate special dietary needs?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, our chefs are happy to prepare meals for guests with dietary restrictions such as vegetarian, vegan, gluten-free, or allergy-sensitive options.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Can I host events or weddings at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! Caladan offers breathtaking beachfront venues ideal for weddings, private parties, and corporate retreats. Our event planners handle every detail to make your occasion unforgettable.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What payment methods do you accept?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">We accept major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. All transactions are securely processed in EUR or XPF with full encryption. Local French Polynesia payment options available upon request.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Is there free Wi-Fi at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, unlimited high-speed Wi-Fi is complimentary throughout the resort, including overwater bungalows. Perfect for sharing your paradise moments or staying connected during workations.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane w-tab-pane" data-w-tab="Tab 3">
                  <div className="list_faq w-variant-a17cbdad-6679-0257-a93e-3f662f8b04be" data-wf--faq-list--variant="small-centered">
                    <div className="faq-slot">
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What makes Caladan different from other beach resorts?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Caladan combines modern coastal design with a focus on sustainability, offering guests a serene beachfront experience surrounded by nature and comfort.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you offer all-inclusive vacation packages?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! We provide several all-inclusive packages that include meals, drinks, and select water activities. You can choose or customize a package during booking.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What activities are available at the resort?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Guests can enjoy kayaking, scuba diving, yoga sessions at sunrise, beach volleyball, and evening bonfires. There&apos;s always something relaxing or adventurous to do.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Do you accommodate special dietary needs?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, our chefs are happy to prepare meals for guests with dietary restrictions such as vegetarian, vegan, gluten-free, or allergy-sensitive options.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Can I host events or weddings at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes! Caladan offers breathtaking beachfront venues ideal for weddings, private parties, and corporate retreats. Our event planners handle every detail to make your occasion unforgettable.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">What payment methods do you accept?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">We accept major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. All transactions are securely processed in EUR or XPF with full encryption. Local French Polynesia payment options available upon request.</p></div>
                      </div>
                      <div className="expandable-single">
                        <div className="expandable-top">
                          <div className="name_faq"><div className="text_body-bold">Is there free Wi-Fi at Caladan?</div></div>
                          <div className="faq_animation-box"><div className="faq-line"></div><div className="faq-line vertical"></div></div>
                        </div>
                        <div className="expandable-bottom"><p className="faq_p">Yes, unlimited high-speed Wi-Fi is complimentary throughout the resort, including overwater bungalows. Perfect for sharing your paradise moments or staying connected during workations.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_cta-v3">
        <div className="padding-global small">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="master_cta-v3">
              <div className="content_cta-v3" data-w-id="14bbd7c1-e0dc-d8aa-00ad-cc5f709b9e3a">
                <div className="headline_cta-v3">
                  <div className="master_label" data-wf--tag--variant="base">
                    <div className="label-small">
                      Your Escape Awaits
                    </div>
                  </div>
                  <h2 className="margin-0">
                    Last Rooms
                    <span className="tone-medium">
                      This Month
                    </span>
                  </h2>
                  <div className="cta-v3_p">
                    <p>
                      Join thousands of travelers discovering turquoise lagoons, overwater sunrise yoga, and starlit beach dinners. Your perfect bungalow is waiting.
                    </p>
                  </div>
                </div>
                <div className="button-group_cta">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a button="" className="cta_primary w-inline-block" data-wf--cta-primary--variant="primary" href="/book-inquiry">
                    <div className="button_text-mask">
                      <div button-text="" className="text-button">
                        Reserve Now
                      </div>
                    </div>
                    <div button-bg="" className="btn-bg"></div>
                  </a>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a button="" className="cta_primary w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" data-wf--cta-primary--variant="secondary" href="/resorts">
                    <div className="button_text-mask">
                      <div button-text="" className="text-button w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">
                        See All Rooms
                      </div>
                    </div>
                    <div button-bg="" className="btn-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
