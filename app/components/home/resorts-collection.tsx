// Faithful port of the "Overwater Collection / Choose Your Lagoon Sanctuary" grid
// section from signex-web-ref's /resorts page (the section_hero-resorts block). Content
// (text, images, structure, lucide icons) is kept 100% from the reference for now; it
// will be adapted to signex later.
//
// REVEAL FIX — Webflow IX2 gates every interaction by a compound key
// `<data-wf-page>|<data-w-id>`. The home page's data-wf-page is 69833b76…ff7, but the
// source section's reveal triggers (ad1a3029…eb1b, 29560a00…) are only registered for the
// /resorts, blog and contact pages — so on the home page IX2 never activates them and the
// wrappers would stay opacity:0/blur(5px) forever (invisible section). Fix: re-point the
// two reveal wrappers to home-page triggers that run the SAME standard reveal actionList
// (a-124: STYLE_OPACITY + STYLE_FILTER on self) — giving the identical Caladan fade+unblur
// used by every other home section. These ids are also carried by headline_features /
// heading_resorts-slider; sharing a self-targeted reveal trigger is safe (each element
// reveals independently — exactly like the 4 cards sharing one card-hover id below).
//
// The card hover-zoom and image scroll-parallax were page-gated the same way, so they are
// re-pointed to the home page's resort-slider triggers, which run the identical relative
// (`useEventTarget:"CHILDREN"`) actionLists: a-112/a-113 scale a card's child `.image_cover`
// to 1.1 on hover, and a-114 (SCROLLING_IN_VIEW) drifts the child `.image_cover.is-parallax`
// by -15px as it scrolls. Because the selectors are relative to each trigger element, sharing
// these ids with the slider cards is safe — each card animates only its own image.
//   • card `<a>` (.card_resort-v1)   → 6d379b8b-…676f  (slider card hover, a-112/a-113)
//   • image wrap (.image_resort-v1)  → 6d379b8b-…6770  (slider image parallax, a-114)
export function ResortsCollection() {
  return (
    <section className="section_hero-resorts" data-w-id="ad1a3029-1630-4dbd-9a8f-fd5ea3c4eb18">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="headline_resorts" data-w-id="0f29df12-8c38-da6f-794d-3989ac10d663" style={{ opacity: 0, filter: 'blur(5px)' }}>
            <div className="master_label" data-wf--tag--variant="base">
              <div className="label-small">
                Overwater Collection
              </div>
            </div>
            <h1>
              Choose Your{' '}
              <span className="tone-medium">
                Lagoon
              </span>{' '}
              Sanctuary
            </h1>
          </div>
          <div className="resorts w-dyn-list" data-w-id="b3ac1ddc-636d-f345-c58d-b372a067ce8d" style={{ opacity: 0, filter: 'blur(5px)' }}>
            <div className="grid_resorts w-dyn-items" role="list">
              <div className="w-dyn-item" role="listitem">
                <a className="card_resort-v1 w-inline-block" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c676f" href="/resorts/lagoon-harmony-bungalow">
                  <div className="image_resort-v1" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c6770">
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
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M14 15H9v-5" />
                            <path d="M16 3h5v5" />
                            <path d="M21 3 9 15" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            90
                          </div>
                          <div>
                            ft2
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4v16" />
                            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                            <path d="M2 17h20" />
                            <path d="M6 8v9" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            2
                          </div>
                          <div>
                            Beds
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            6
                          </div>
                          <div>
                            Guests
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-dyn-item" role="listitem">
                <a className="card_resort-v1 w-inline-block" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c676f" href="/resorts/coral-breath-studio">
                  <div className="image_resort-v1" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c6770">
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
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M14 15H9v-5" />
                            <path d="M16 3h5v5" />
                            <path d="M21 3 9 15" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            156
                          </div>
                          <div>
                            ft2
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4v16" />
                            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                            <path d="M2 17h20" />
                            <path d="M6 8v9" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            2
                          </div>
                          <div>
                            Beds
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            4
                          </div>
                          <div>
                            Guests
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-dyn-item" role="listitem">
                <a className="card_resort-v1 w-inline-block" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c676f" href="/resorts/tide-song-villa">
                  <div className="image_resort-v1" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c6770">
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
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M14 15H9v-5" />
                            <path d="M16 3h5v5" />
                            <path d="M21 3 9 15" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            320
                          </div>
                          <div>
                            ft2
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4v16" />
                            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                            <path d="M2 17h20" />
                            <path d="M6 8v9" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            4
                          </div>
                          <div>
                            Beds
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            12
                          </div>
                          <div>
                            Guests
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-dyn-item" role="listitem">
                <a className="card_resort-v1 w-inline-block" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c676f" href="/resorts/reef-whisper-suite">
                  <div className="image_resort-v1" data-w-id="6d379b8b-4b7f-2d17-709e-271c021c6770">
                    <div className="overlay_resort-card-v1">
                      <div className="master_label w-variant-84e91bde-75c3-dd4c-a083-7846b4ae6170" data-wf--tag--variant="lighter">
                        <div className="label-small">
                          Overwater Bungalow
                        </div>
                      </div>
                    </div>
                    <img alt="" className="image_cover is-parallax" loading="lazy" src="/assets/images/69aff4da51c27aa9c99aba98_pexels-keeganjchecks-14524361.avif" />
                  </div>
                  <div className="wrap_content-resort-v1">
                    <div className="text-size-large text_body-bold">
                      Reef Whisper Suite
                    </div>
                    <div className="card-resort_info-tile-v1">
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-scaling-icon lucide-scaling" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M14 15H9v-5" />
                            <path d="M16 3h5v5" />
                            <path d="M21 3 9 15" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            248
                          </div>
                          <div>
                            ft2
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-bed-icon lucide-bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4v16" />
                            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                            <path d="M2 17h20" />
                            <path d="M6 8v9" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            3
                          </div>
                          <div>
                            Beds
                          </div>
                        </div>
                      </div>
                      <div className="tile_room-summary">
                        <div className="icon_summary w-embed">
                          <svg className="lucide lucide-users-icon lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <circle cx="9" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="wrap_text-room-summary">
                          <div>
                            8
                          </div>
                          <div>
                            Guests
                          </div>
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
  );
}
