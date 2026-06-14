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
                    Breathe with the tides in a resort suspended above Tahiti&apos;s reef. From moonlit lomilomi to family sound baths, Caladan turns the ocean&apos;s rhythm into your everyday ritual.
                  </p>
                </div>
              </div>
              <div className="button-group_hero-home-c">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a button="" className="cta_primary w-inline-block" data-wf--cta-primary--variant="primary" href="/contact/contact-a">
                  <div className="button_text-mask">
                    <div button-text="" className="text-button">
                      Start Your Escape
                    </div>
                  </div>
                  <div button-bg="" className="btn-bg"></div>
                </a>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a button="" className="cta_primary w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" data-wf--cta-primary--variant="secondary" href="/book-inquiry">
                  <div className="button_text-mask">
                    <div button-text="" className="text-button w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">
                      Get Template
                    </div>
                  </div>
                  <div button-bg="" className="btn-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f"></div>
                </a>
              </div>
            </div>
            <div className="stats_home-c" data-w-id="8dd77407-7638-8860-84b4-1292d73f46a7" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="stat-tile_home-c">
                <h2 className="margin-0 heading-style-h4 tone-good">
                  42 Villas
                </h2>
              </div>
              <div className="divider_home-c-stats"></div>
              <h2 className="margin-0 heading-style-h4 tone-good">
                Private Lagoon
              </h2>
              <div className="divider_home-c-stats"></div>
              <h2 className="margin-0 heading-style-h4 tone-good">
                5 Restaurants
              </h2>
              <div className="divider_home-c-stats"></div>
              <h2 className="margin-0 heading-style-h4 tone-good">
                Award-Winning Spa
              </h2>
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
      <section className="section_testimonial">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="headline_testimonials-v3" data-w-id="4ad2369d-0d37-b93d-5aa1-7b9ada6aaf73">
              <div className="heading_testimonials-v3">
                <div className="master_label" data-wf--tag--variant="base">
                  <div className="label-small">
                    Guest Voices Echo
                  </div>
                </div>
                <h2 className="margin-0">
                  Voices from
                  <span className="tone-medium">
                    the Overwater
                  </span>
                </h2>
              </div>
              <div className="p_testimonials-v3">
                <p className="tone-medium margin-0">
                  Hear from souls reborn above the reef. Families synced to ocean rhythms, solo travelers dissolving into tide-breath serenity.
                </p>
              </div>
            </div>
            <div className="master_slider">
              <div className="shadow_slider smaller"></div>
              <div
                className="slider w-slider"
                data-animation="slide"
                data-autoplay="false"
                data-autoplay-limit="0"
                data-delay="4000"
                data-disable-swipe="false"
                data-duration="500"
                data-easing="ease-out-sine"
                data-hide-arrows="false"
                data-infinite="true"
                data-nav-spacing="3"
              >
                <div className="mask_testimonials-v3 w-slider-mask">
                  <div className="slide_testimonials-v3 w-slide">
                    <div className="card_testimonials-v3">
                      <div className="content_card-testimonials-v3">
                        <div className="testimonial-v3_top-tile">
                          <div className="rating_testimonial">
                            {[0,1,2,3,4].map((i) => (
                              <div key={i} className="star-testimonial w-embed">
                                <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.68323 1.53009C7.71245 1.47107 7.75758 1.42138 7.81353 1.38664C7.86949 1.3519 7.93404 1.3335 7.9999 1.3335C8.06576 1.3335 8.13031 1.3519 8.18626 1.38664C8.24222 1.42138 8.28735 1.47107 8.31656 1.53009L9.85656 4.64943C9.95802 4.85474 10.1078 5.03236 10.293 5.16706C10.4782 5.30176 10.6933 5.3895 10.9199 5.42276L14.3639 5.92676C14.4292 5.93621 14.4905 5.96374 14.5409 6.00622C14.5913 6.04871 14.6289 6.10446 14.6492 6.16716C14.6696 6.22987 14.6721 6.29703 14.6563 6.36105C14.6405 6.42507 14.6071 6.48339 14.5599 6.52943L12.0692 8.95476C11.905 9.11483 11.7821 9.31241 11.7111 9.53051C11.6402 9.74861 11.6233 9.98069 11.6619 10.2068L12.2499 13.6334C12.2614 13.6987 12.2544 13.7658 12.2296 13.8272C12.2048 13.8886 12.1632 13.9418 12.1096 13.9808C12.056 14.0197 11.9926 14.0428 11.9265 14.0474C11.8604 14.052 11.7944 14.0379 11.7359 14.0068L8.65723 12.3881C8.45438 12.2816 8.22868 12.2259 7.99956 12.2259C7.77044 12.2259 7.54475 12.2816 7.3419 12.3881L4.2639 14.0068C4.20545 14.0377 4.1395 14.0516 4.07353 14.0469C4.00757 14.0422 3.94424 14.0191 3.89076 13.9802C3.83728 13.9413 3.79579 13.8882 3.771 13.8269C3.74622 13.7656 3.73914 13.6986 3.75056 13.6334L4.3379 10.2074C4.3767 9.98125 4.35989 9.74902 4.28892 9.53079C4.21796 9.31256 4.09497 9.11486 3.93056 8.95476L1.4399 6.53009C1.39229 6.48411 1.35856 6.42569 1.34254 6.36147C1.32652 6.29726 1.32886 6.22984 1.34928 6.16689C1.36971 6.10393 1.40741 6.04799 1.45808 6.00541C1.50876 5.96284 1.57037 5.93536 1.6359 5.92609L5.07923 5.42276C5.30607 5.38976 5.52149 5.30213 5.70695 5.16742C5.89242 5.0327 6.04237 4.85494 6.1439 4.64943L7.68323 1.53009Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </div>
                            ))}
                          </div>
                          <div className="testimonial-v3_text-tile">
                            <div className="text-size-large text_body-bold">
                              Finally, wellness that feels natural
                            </div>
                            <p className="tone-medium margin-0">
                              &quot;Caladan is pure paradise. Every sunrise felt like a painting, and the staff
                              <span className="tone-medium">
                                made us feel at home from the first moment.&quot;
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-v3_bottom-tile">
                          <div className="text_body-bold">
                            Lea Martinez
                          </div>
                          <div className="tone-medium">
                            Family Traveler
                          </div>
                        </div>
                      </div>
                      <div className="image_card-testimonials-v3" data-w-id="4ad2369d-0d37-b93d-5aa1-7b9ada6aaf96">
                        <img alt="Pexels julia volk 7292958" className="image_cover" loading="lazy" src="/assets/images/69ac6f71e2f6cf6c0843aa68_pexels-julia-volk-7292958.avif" />
                      </div>
                    </div>
                  </div>
                  <div className="slide_testimonials-v3 w-slide">
                    <div className="card_testimonials-v3">
                      <div className="content_card-testimonials-v3">
                        <div className="testimonial-v3_top-tile">
                          <div className="rating_testimonial">
                            {[0,1,2,3,4].map((i) => (
                              <div key={i} className="star-testimonial w-embed">
                                <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.68323 1.53009C7.71245 1.47107 7.75758 1.42138 7.81353 1.38664C7.86949 1.3519 7.93404 1.3335 7.9999 1.3335C8.06576 1.3335 8.13031 1.3519 8.18626 1.38664C8.24222 1.42138 8.28735 1.47107 8.31656 1.53009L9.85656 4.64943C9.95802 4.85474 10.1078 5.03236 10.293 5.16706C10.4782 5.30176 10.6933 5.3895 10.9199 5.42276L14.3639 5.92676C14.4292 5.93621 14.4905 5.96374 14.5409 6.00622C14.5913 6.04871 14.6289 6.10446 14.6492 6.16716C14.6696 6.22987 14.6721 6.29703 14.6563 6.36105C14.6405 6.42507 14.6071 6.48339 14.5599 6.52943L12.0692 8.95476C11.905 9.11483 11.7821 9.31241 11.7111 9.53051C11.6402 9.74861 11.6233 9.98069 11.6619 10.2068L12.2499 13.6334C12.2614 13.6987 12.2544 13.7658 12.2296 13.8272C12.2048 13.8886 12.1632 13.9418 12.1096 13.9808C12.056 14.0197 11.9926 14.0428 11.9265 14.0474C11.8604 14.052 11.7944 14.0379 11.7359 14.0068L8.65723 12.3881C8.45438 12.2816 8.22868 12.2259 7.99956 12.2259C7.77044 12.2259 7.54475 12.2816 7.3419 12.3881L4.2639 14.0068C4.20545 14.0377 4.1395 14.0516 4.07353 14.0469C4.00757 14.0422 3.94424 14.0191 3.89076 13.9802C3.83728 13.9413 3.79579 13.8882 3.771 13.8269C3.74622 13.7656 3.73914 13.6986 3.75056 13.6334L4.3379 10.2074C4.3767 9.98125 4.35989 9.74902 4.28892 9.53079C4.21796 9.31256 4.09497 9.11486 3.93056 8.95476L1.4399 6.53009C1.39229 6.48411 1.35856 6.42569 1.34254 6.36147C1.32652 6.29726 1.32886 6.22984 1.34928 6.16689C1.36971 6.10393 1.40741 6.04799 1.45808 6.00541C1.50876 5.96284 1.57037 5.93536 1.6359 5.92609L5.07923 5.42276C5.30607 5.38976 5.52149 5.30213 5.70695 5.16742C5.89242 5.0327 6.04237 4.85494 6.1439 4.64943L7.68323 1.53009Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </div>
                            ))}
                          </div>
                          <div className="testimonial-v3_text-tile">
                            <div className="text-size-large text_body-bold">
                              The lagoon reset we needed
                            </div>
                            <p className="tone-medium margin-0">
                              Our family actually unplugged here. The kids loved the sound bath and we all left lighter, calmer, and more connected than we&apos;ve felt in years.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-v3_bottom-tile">
                          <div className="text_body-bold">
                            Daniel Novak
                          </div>
                          <div className="tone-medium">
                            Adventure Seeker
                          </div>
                        </div>
                      </div>
                      <div className="image_card-testimonials-v3" data-w-id="4ad2369d-0d37-b93d-5aa1-7b9ada6aafac">
                        <img alt="Pexels stephanlouis 19119918" className="image_cover" loading="lazy" src="/assets/images/69ac691927961ac98c560fe2_pexels-stephanlouis-19119918.avif" />
                      </div>
                    </div>
                  </div>
                  <div className="slide_testimonials-v3 w-slide">
                    <div className="card_testimonials-v3">
                      <div className="content_card-testimonials-v3">
                        <div className="testimonial-v3_top-tile">
                          <div className="rating_testimonial">
                            {[0,1,2,3,4].map((i) => (
                              <div key={i} className="star-testimonial w-embed">
                                <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.68323 1.53009C7.71245 1.47107 7.75758 1.42138 7.81353 1.38664C7.86949 1.3519 7.93404 1.3335 7.9999 1.3335C8.06576 1.3335 8.13031 1.3519 8.18626 1.38664C8.24222 1.42138 8.28735 1.47107 8.31656 1.53009L9.85656 4.64943C9.95802 4.85474 10.1078 5.03236 10.293 5.16706C10.4782 5.30176 10.6933 5.3895 10.9199 5.42276L14.3639 5.92676C14.4292 5.93621 14.4905 5.96374 14.5409 6.00622C14.5913 6.04871 14.6289 6.10446 14.6492 6.16716C14.6696 6.22987 14.6721 6.29703 14.6563 6.36105C14.6405 6.42507 14.6071 6.48339 14.5599 6.52943L12.0692 8.95476C11.905 9.11483 11.7821 9.31241 11.7111 9.53051C11.6402 9.74861 11.6233 9.98069 11.6619 10.2068L12.2499 13.6334C12.2614 13.6987 12.2544 13.7658 12.2296 13.8272C12.2048 13.8886 12.1632 13.9418 12.1096 13.9808C12.056 14.0197 11.9926 14.0428 11.9265 14.0474C11.8604 14.052 11.7944 14.0379 11.7359 14.0068L8.65723 12.3881C8.45438 12.2816 8.22868 12.2259 7.99956 12.2259C7.77044 12.2259 7.54475 12.2816 7.3419 12.3881L4.2639 14.0068C4.20545 14.0377 4.1395 14.0516 4.07353 14.0469C4.00757 14.0422 3.94424 14.0191 3.89076 13.9802C3.83728 13.9413 3.79579 13.8882 3.771 13.8269C3.74622 13.7656 3.73914 13.6986 3.75056 13.6334L4.3379 10.2074C4.3767 9.98125 4.35989 9.74902 4.28892 9.53079C4.21796 9.31256 4.09497 9.11486 3.93056 8.95476L1.4399 6.53009C1.39229 6.48411 1.35856 6.42569 1.34254 6.36147C1.32652 6.29726 1.32886 6.22984 1.34928 6.16689C1.36971 6.10393 1.40741 6.04799 1.45808 6.00541C1.50876 5.96284 1.57037 5.93536 1.6359 5.92609L5.07923 5.42276C5.30607 5.38976 5.52149 5.30213 5.70695 5.16742C5.89242 5.0327 6.04237 4.85494 6.1439 4.64943L7.68323 1.53009Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                              </div>
                            ))}
                          </div>
                          <div className="testimonial-v3_text-tile">
                            <div className="text-size-large text_body-bold">
                              A sanctuary above the reef
                            </div>
                            <p className="tone-medium margin-0">
                              I arrived exhausted and left renewed. The lomilomi massage and sunrise sessions over the lagoon helped me release stress I&apos;d carried for months.
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-v3_bottom-tile">
                          <div className="text_body-bold">
                            Hana Saito
                          </div>
                          <div className="tone-medium">
                            Solo Retreat Guest
                          </div>
                        </div>
                      </div>
                      <div className="image_card-testimonials-v3" data-w-id="4ad2369d-0d37-b93d-5aa1-7b9ada6aafc2">
                        <img alt="Pexels aymannouas 12935961" className="image_cover" loading="lazy" src="/assets/images/69ac6f718869ff1791ce4e94_pexels-aymannouas-12935961.avif" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button_slider-bottom w-slider-arrow-left">
                  <div className="slider_button" cms-icon-wrap="" data-wf--button-slider--variant="primary">
                    <div className="wrao_icon-slider w-variant-5ba9241a-7079-4c4d-345e-a0127f34962f" data-wf--wrap-icon-slider--variant="left">
                      <div className="icon_slider" data-wf--icon-slider--variant="large">
                        <div className="icon_slider-button large w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16663 10.0001H15.8333M15.8333 10.0001L9.99996 4.16675M15.8333 10.0001L9.99996 15.8334" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--_❇️-icon---icon-stroke)"></path>
                          </svg>
                        </div>
                        <div className="icon_slider-button medium w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--_❇️-icon---icon-stroke)"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button_slider-bottom w-slider-arrow-right">
                  <div className="slider_button w-variant-3b1d5b2f-3e5d-c467-6981-e7b261b76e46" cms-icon-wrap="" data-wf--button-slider--variant="secondary">
                    <div className="wrao_icon-slider" data-wf--wrap-icon-slider--variant="right">
                      <div className="icon_slider" data-wf--icon-slider--variant="large">
                        <div className="icon_slider-button large w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16663 10.0001H15.8333M15.8333 10.0001L9.99996 4.16675M15.8333 10.0001L9.99996 15.8334" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--_❇️-icon---icon-stroke)"></path>
                          </svg>
                        </div>
                        <div className="icon_slider-button medium w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--_❇️-icon---icon-stroke)"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide w-slider-nav w-round w-num"></div>
              </div>
              <div className="shadow_slider smaller right"></div>
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
