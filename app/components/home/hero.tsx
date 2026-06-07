import { StaticWebflowForm } from "@/app/components/static-webflow-form";

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
                    <h1 className="heading-style-h0">
                      Float Into
                      <br />
                      <span className="tone-medium">
                        Your Next Self
                      </span>
                    </h1>
                  </div>
                  <div className="p_hero-home-a">
                    <p className="margin-0 text-size-large">
                      Step off the boardwalk and onto a sanctuary suspended above turquoise depth.
                    </p>
                  </div>
                </div>
                <div className="form-block w-form">
                  <StaticWebflowForm
                    id="email-form"
                    name="email-form"
                    className="form is-small"
                    successMarkup="<div>We’ve received your booking request and will contact you soon to confirm your stay.</div>"
                    failMarkup="<div>Oops! Something went wrong while submitting the form.</div>"
                    data-wf-element-id="e727a2b9-869a-7dcf-ee76-b8e98292f02d"
                    data-wf-page-id="69833b76e5b4bee55e872ff7"
                    data-w-id="e727a2b9-869a-7dcf-ee76-b8e98292f02d"
                    style={{ opacity: 0, filter: 'blur(5px)' }}
                  >
                    <div className="hero-form_inner">
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          Full Name
                          <sup>
                            *
                          </sup>
                        </div>
                        <input className="text-field w-input" data-name="Full Name" id="Full-Name" maxLength={256} name="Full-Name" placeholder="John Smith" required type="text" />
                      </div>
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          Room Type
                          <sup>
                            *
                          </sup>
                        </div>
                        <select className="text-field select w-select" data-name="Room Type" id="Room-Type" name="Room-Type" required>
                          <option value="Beachfront Bungalow">
                            Beachfront Bungalow
                          </option>
                          <option value="Overwater Villa">
                            Overwater Villa
                          </option>
                          <option value="Garden Suite">
                            Garden Suite
                          </option>
                          <option value="Family Suite">
                            Family Suite
                          </option>
                        </select>
                      </div>
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          Check-in Date
                          <sup>
                            *
                          </sup>
                        </div>
                        <input className="text-field date" name="Check In" required type="date" />
                      </div>
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          Check-out Date
                          <sup>
                            *
                          </sup>
                        </div>
                        <input className="text-field date" name="Check Out" required type="date" />
                      </div>
                      <div button="" className="button_submit-static">
                        <input className="button_submit w-button" data-wait="Please wait..." type="submit" value="Send message" />
                        <a button="" className="cta_primary w-inline-block" data-wf--cta-primary--variant="primary" href="#">
                          <div className="button_text-mask">
                            <div button-text="" className="text-button">
                              Send Inquiry
                            </div>
                          </div>
                          <div button-bg="" className="btn-bg">
                          </div>
                        </a>
                      </div>
                    </div>
                  </StaticWebflowForm>
                </div>
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
