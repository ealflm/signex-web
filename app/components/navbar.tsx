// app/components/navbar.tsx
import { LangToggle } from "@/app/components/lang-toggle";

export function Navbar() {
  return (
    <div className="master_navigation">
      <div className="banner-navbar" />
      <div
        className="navbar w-nav"
        data-animation="default"
        data-collapse="medium"
        data-doc-height="1"
        data-duration="0"
        data-easing="linear"
        data-easing2="linear"
        data-no-scroll="1"
        data-w-id="8cf60b1d-bffe-d9ea-a5b9-44c5b13f8eb0"
        role="banner"
      >
        <div className="wrap_nav-container">
          <div className="nav-container">
            <div className="nav-bg_desktop" />
            <div className="nav-bg_mobile" />
            <div className="nav_left">
              <div className="menu-button w-nav-button">
                <div className="menu-button_inner open">
                  <div className="icon_menu w-embed">
                    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 6L10 6M2 9H10M2 3L10 3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="var(--_❇️-icon---icon-stroke)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="menu-button_inner close">
                  <div className="icon_menu w-embed">
                    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 3L3 9M3 3L9 9"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <nav className="nav-menu w-nav-menu" role="navigation">
                <div className="nav_wrap-menu">
                  <div className="nav-menu_inner">
                    <div className="divider_mobile-menu" />
                    <div
                      className="dropdown w-dropdown"
                      data-delay="300"
                      data-hover="true"
                      data-w-id="8cf60b1d-bffe-d9ea-a5b9-44c5b13f8f45"
                      nav-link=""
                    >
                      <div className="dropdown-toggle w-dropdown-toggle">
                        <div>
                          Company
                        </div>
                        <div className="icon-wrap_dropdown">
                          <div className="icon-dropdown w-embed">
                            <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div className="dropdown-animated-box">
                            <div className="dropdown-line" />
                            <div className="dropdown-line absolute" />
                          </div>
                        </div>
                      </div>
                      <nav className="dropdown-list w-dropdown-list">
                        <div className="dropdown-large_inner">
                          <div className="dropdown-bg" />
                          <div className="dropdown_inner">
                            <div className="nav-menu_halves">
                              <div className="left_nav-menu">
                                <div className="nav_column">
                                  <div className="label-small tone-medium">
                                    pages
                                  </div>
                                  <div className="nav_list">
                                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- faithful port of Webflow markup; navigation is driven by the Webflow runtime, not next/link */}
                                    <a aria-current="page" className="link_dropdown w-inline-block w--current" href="/">
                                      <div>
                                        Home A
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/homepage/home-b">
                                      <div>
                                        Home B
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/homepage/home-c">
                                      <div>
                                        Home C
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/contact/contact-a">
                                      <div>
                                        Contact A
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/contact/contact-b">
                                      <div>
                                        Contact B
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/contact/contact-c">
                                      <div>
                                        Contact C
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className="nav_column">
                                  <div className="label-small tone-medium">
                                    Other
                                  </div>
                                  <div className="nav_list">
                                    <a className="link_dropdown w-inline-block" href="/blog/blog-a">
                                      <div>
                                        Blog A
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/blog/blog-b">
                                      <div>
                                        Blog B
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/blog/blog-c">
                                      <div>
                                        Blog C
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/faq">
                                      <div>
                                        FAQ
                                      </div>
                                    </a>
                                    <a className="link_dropdown w-inline-block" href="/legal">
                                      <div>
                                        Legal
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="card_menu-contact">
                                <div className="overlay_menu-image" />
                                <div className="menu_info-tile">
                                  <a
                                    button=""
                                    className="cta_primary w-inline-block"
                                    data-wf--cta-primary--variant="primary"
                                    href="https://webflow.com/templates/designers/eclipso-studio"
                                    target="_blank"
                                  >
                                    <div className="button_text-mask">
                                      <div button-text="" className="text-button">
                                        More Templates
                                      </div>
                                    </div>
                                    <div button-bg="" className="btn-bg" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="divider_mobile-menu" />
                    <a className="link_nav w-inline-block" href="/about" nav-link="">
                      <div>
                        About us
                      </div>
                      <div className="icon-wrap_dropdown not-visible">
                        <div className="icon-dropdown w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#231F23"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="var(--_❇️-icon---icon-stroke)"
                            />
                          </svg>
                        </div>
                        <div className="dropdown-animated-box">
                          <div className="dropdown-line" />
                          <div className="dropdown-line absolute" />
                        </div>
                      </div>
                    </a>
                    <div className="divider_mobile-menu" />
                    <a className="link_nav w-inline-block" href="/gallery" nav-link="">
                      <div>
                        Gallery
                      </div>
                      <div className="icon-wrap_dropdown not-visible">
                        <div className="icon-dropdown w-embed">
                          <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M4 6L8 10L12 6"
                              stroke="#231F23"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="var(--_❇️-icon---icon-stroke)"
                            />
                          </svg>
                        </div>
                        <div className="dropdown-animated-box">
                          <div className="dropdown-line" />
                          <div className="dropdown-line absolute" />
                        </div>
                      </div>
                    </a>
                    <div className="divider_mobile-menu" />
                    <div className="nav-menu_mobile-button">
                      <a
                        button=""
                        className="cta_primary w-inline-block"
                        data-wf--cta-primary--variant="primary"
                        href="https://webflow.com/templates/designers/eclipso-studio"
                        target="_blank"
                      >
                        <div className="button_text-mask">
                          <div button-text="" className="text-button">
                            More Templates
                          </div>
                        </div>
                        <div button-bg="" className="btn-bg" />
                      </a>
                    </div>
                    <div className="dropdown-mobile_bottom">
                      <div className="nav-menu_bottom">
                        <a className="text-size-small tone-medium" href="https://www.eclipso.studio/" target="_blank">
                          © Eclipso Studio
                        </a>
                        <div className="text-size-small tone-medium">
                          Made with
                          <a className="link-underline tone-medium-2" href="https://webflow.com/" target="_blank">
                            Webflow
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- faithful port of Webflow markup; navigation is driven by the Webflow runtime, not next/link */}
            <a aria-current="page" className="brand_navbar w-nav-brand w--current" href="/">
              {/* Signex logo (user-supplied SVG, recoloured to the navbar's #241018 ink —
                  the same dark colour the original Caladan logo used). Sized by height
                  since its aspect ratio (≈2.4:1) differs from the old wordmark. */}
              <img alt="Signex" className="signex-logo-nav" loading="lazy" src="/assets/images/signex-logo.svg" />
            </a>
            <div className="nav_corners-wrap">
              <div className="nav_side w-embed">
                <svg fill="none" height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.1 0V1.9C75.7 1.9 98.1 24.3 98.1 51.9H100V0H48.1Z"
                    fill="var(--_🎨-color--tokens---ink--base)"
                  />
                </svg>
              </div>
              <div className="nav_side right w-embed">
                <svg fill="none" height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M51.9 0V1.9C24.3 1.9 1.9 24.3 1.9 51.9H0V0H51.9Z"
                    fill="var(--_🎨-color--tokens---ink--base)"
                  />
                </svg>
              </div>
            </div>
            <div className="nav_right">
              <LangToggle />
              <div className="nav_button-desktop">
                <a button="" className="cta_tertiary w-inline-block" href="/resorts">
                  <div>
                    View Resorts
                  </div>
                  <div className="underline_cta-button">
                    <div className="cta_fill-line" />
                  </div>
                </a>
              </div>
              <a
                button=""
                className="cta_primary w-inline-block"
                data-wf--cta-primary--variant="primary"
                href="/book-inquiry"
              >
                <div className="button_text-mask">
                  <div button-text="" className="text-button">
                    Book Now
                  </div>
                </div>
                <div button-bg="" className="btn-bg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav_bg" />
    </div>
  );
}
