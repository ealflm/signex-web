// app/components/footer.tsx
import { StaticWebflowForm } from "./static-webflow-form";

export function Footer() {
  return (
    <section className="footer">
      <div className="master_footer">
        <div className="padding-global">
          <div className="w-layout-blockcontainer container-large w-container">
            <div className="footer_top-tile">
              <div className="left-footer" id="w-node-_648eecc5-7c86-f4a9-77d0-9ec0a70608bb-d0446e59">
                <h2 className="heading-style-h4 margin-0">
                  Stay connected with what actually matters
                </h2>
                <div className="newsletter-wrapper">
                  <div className="form-block_footer">
                    <StaticWebflowForm
                      id="wf-form-Newsletter"
                      name="wf-form-Newsletter"
                      className="form_footer"
                      successMarkup="<div>Thank you! Your submission has been received!</div>"
                      failMarkup="<div>Oops! Something went wrong while submitting the form.</div>"
                      data-wf-element-id="aba4a404-ce64-f70d-9c88-a34ec7885a9a"
                      data-wf-page-id="69833b76e5b4bee55e872ff7"
                    >
                      <div className="wrap_input-form">
                        <input className="text-field w-input" data-name="Email" id="Email" maxLength={256} name="Email" placeholder="Your email.." required type="email" />
                        <div className="wrap_submit-button">
                          <input className="button_submit w-button" data-wait="Please wait..." type="submit" value="" />
                          <div className="input_icon w-embed">
                            <svg fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--_❇️-icon---icon-stroke)">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </StaticWebflowForm>
                  </div>
                  <div className="text-size-small tone-medium">
                    No spam. Just quality content and occasional updates.
                  </div>
                </div>
              </div>
              <div className="right-footer">
                <div className="coumn_footer" data-w-id="648eecc5-7c86-f4a9-77d0-9ec0a70608c7" id="w-node-_648eecc5-7c86-f4a9-77d0-9ec0a70608c7-d0446e59">
                  <div className="column-expand_top-tile">
                    <div className="label-large tone-medium">
                      Company
                    </div>
                    <div className="footer-expand_icon">
                      <div className="line_footer-expand vertical">
                      </div>
                      <div className="line_footer-expand horizontal">
                      </div>
                    </div>
                  </div>
                  <div className="wrap_column-footer">
                    <div className="column_footer-links">
                      {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- faithful port of Webflow markup; navigation is driven by the Webflow runtime, not next/link */}
                      <a aria-current="page" className="link_footer w--current" href="/">
                        Home A
                      </a>
                      <a className="link_footer" href="/homepage/home-b">
                        Home B
                      </a>
                      <a className="link_footer" href="/homepage/home-c">
                        Home C
                      </a>
                      <a className="link_footer" href="/about">
                        About us
                      </a>
                      <a className="link_footer" href="/contact/contact-a">
                        Contact A
                      </a>
                      <a className="link_footer" href="/contact/contact-b">
                        Contact B
                      </a>
                      <a className="link_footer" href="/contact/contact-c">
                        Contact C
                      </a>
                    </div>
                  </div>
                </div>
                <div className="coumn_footer no-borders" data-w-id="648eecc5-7c86-f4a9-77d0-9ec0a70608de" id="w-node-_648eecc5-7c86-f4a9-77d0-9ec0a70608de-d0446e59">
                  <div className="column-expand_top-tile">
                    <div className="label-large tone-medium">
                      Other pages
                    </div>
                    <div className="footer-expand_icon">
                      <div className="line_footer-expand vertical">
                      </div>
                      <div className="line_footer-expand horizontal">
                      </div>
                    </div>
                  </div>
                  <div className="wrap_column-footer">
                    <div className="column_footer-links">
                      <a className="link_footer" href="/resorts">
                        Resorts
                      </a>
                      <a className="link_footer" href="/resorts/lagoon-harmony-bungalow">
                        Single Resort
                      </a>
                      <a className="link_footer" href="/gallery">
                        Gallery
                      </a>
                      <a className="link_footer" href="/blog/blog-a">
                        Blog A
                      </a>
                      <a className="link_footer" href="/blog/blog-b">
                        Blog B
                      </a>
                      <a className="link_footer" href="/blog/blog-c">
                        Blog C
                      </a>
                    </div>
                  </div>
                </div>
                <div className="coumn_footer" data-w-id="648eecc5-7c86-f4a9-77d0-9ec0a70608f9">
                  <div className="column-expand_top-tile">
                    <div className="label-large tone-medium">
                      template
                    </div>
                    <div className="footer-expand_icon">
                      <div className="line_footer-expand vertical">
                      </div>
                      <div className="line_footer-expand horizontal">
                      </div>
                    </div>
                  </div>
                  <div className="wrap_column-footer">
                    <div className="column_footer-links">
                      <a className="link_footer" href="/template/style-guide">
                        Style Guide
                      </a>
                      <a className="link_footer" href="/template/changelog">
                        Changelog
                      </a>
                      <a className="link_footer" href="/template/licenses">
                        Licenses
                      </a>
                      <a className="link_footer" href="/404">
                        404
                      </a>
                      <a className="link_footer" href="/401">
                        Password
                      </a>
                      <a className="link_footer" href="https://webflow.com/templates/designers/eclipso-studio" target="_blank">
                        More Templates
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_mid-tile">
              <div className="text-size-small tone-medium">
                Caladan™. All rights reserved. © 2026
              </div>
              <div className="text-size-small tone-medium">
                Made by
                <a className="link-underline tone-medium" href="https://www.eclipso.studio/" target="_blank">
                  Eclipso Studio
                </a>
                with
                <a className="tone-medium" href="https://webflow.com/" target="_blank">
                  Webflow
                </a>
              </div>
            </div>
            <a className="link_footer-logo w-inline-block" href="#">
              <img alt="Caladan light" className="logo_footer" loading="lazy" src="/assets/images/69837f6cef3b944eb4c4c54a_Caladan_-light.svg" />
            </a>
            <img alt="Palm" className="palm-footer" loading="lazy" src="/assets/images/698394b9a5e52084acf76841_palm.svg" />
          </div>
        </div>
        <div className="progressive_blur">
          <div className="progressive-blur" style={{ ['--blur']: '3rem', ['--ratio']: '1.9' }}>
            <div className="progressive-blur-panel is-1" style={{ ['--i']: '6' }}>
            </div>
            <div className="progressive-blur-panel is-2" style={{ ['--i']: '5' }}>
            </div>
            <div className="progressive-blur-panel is-3" style={{ ['--i']: '4' }}>
            </div>
            <div className="progressive-blur-panel is-4" style={{ ['--i']: '3' }}>
            </div>
            <div className="progressive-blur-panel is-5" style={{ ['--i']: '2' }}>
            </div>
            <div className="progressive-blur-panel is-6" style={{ ['--i']: '1' }}>
            </div>
            <div className="progressive-blur-panel is-7" style={{ ['--i']: '1' }}>
            </div>
            <div className="progressive-blur-panel is-8" style={{ ['--i']: '1' }}>
            </div>
            <div className="progressive-blur-panel is-9" style={{ ['--i']: '1' }}>
            </div>
            <div className="progressive-blur-panel is-10" style={{ ['--i']: '1' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
