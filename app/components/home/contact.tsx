import { StaticWebflowForm } from "@/app/components/static-webflow-form";

/**
 * Contact — home-page contact section. Faithful port of Caladan's `section_hero-contact-b`
 * (signex-web-ref/app/contact/contact-b/page.tsx): heading + static contact form, placed
 * below HomeAbout. Content is the ref's English copy verbatim (placeholder); signex content
 * + i18n is a later phase. The ref page's contact-c info cards and FAQ are NOT included.
 *
 * - The section is LIGHT: `.section_hero-contact-b`'s `ink--base` bg resolves to
 *   `base--light-100`; dark text via `tone--strong`. Coherent with the rest of the home page.
 * - In the ref it's a page hero (large top padding); mid-page that gap is too big, so
 *   globals.css tightens it — same precedent as `.section_hero-resorts` (see globals.css).
 * - Cross-page IX2 reveal re-point (clone-playbook §1): the ref wrappers' data-w-ids
 *   (ad1a3029-…eb1b headline, 00bd40ee-…d5b7 form-block) are registered only for the
 *   /contact-b page, so on the home page they'd stay `opacity:0; blur(5px)` forever. Both
 *   are re-pointed to the home-page reveal trigger `0f29df12-…d663` (standard a-124:
 *   opacity + unblur on self), shared safely with Features/ProductCategories/HomeAbout.
 * - The section's ref data-w-id (ad1a3029-…eb18) is DROPPED — it already lives on the
 *   product-categories section on this page.
 * - The `john@example.com"` placeholder (stray quote) and `Press/Media,` option (trailing
 *   comma) are the ref template's own typos, kept verbatim for fidelity.
 */
export function Contact() {
  return (
    <section className="section_hero-contact-b">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-large w-container">
          <div className="master_contact-b">
            <div className="headline_contact-b" data-w-id="0f29df12-8c38-da6f-794d-3989ac10d663" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <div className="heading_contact-b">
                <div className="master_label" data-wf--tag--variant="base">
                  <div className="label-small">
                    Reach Out
                  </div>
                </div>
                {/* Ref uses <h1> (contact-b is that page's hero); demoted mid-page so the
                    home hero keeps the only h1 — same as ProductCategories (b25a69c).
                    .heading-style-h1 applies the identical h1 typography, so zero visual change. */}
                <h2 className="heading-style-h1">
                  Let&apos;s Plan{" "}
                  <span className="tone-medium">
                    Your Stay
                  </span>
                </h2>
              </div>
              <p className="text-size-large tone-medium">
                Booking questions, events, or special requests?
              </p>
            </div>
            <div className="form-block" data-w-id="0f29df12-8c38-da6f-794d-3989ac10d663" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <StaticWebflowForm
                id="email-form"
                name="email-form"
                className="form is-v2"
                successMarkup="<div>Thank you! Your submission has been received!</div>"
                failMarkup="<div>Oops! Something went wrong while submitting the form.</div>"
                data-wf-element-id="00bd40ee-31b2-326d-9aaf-feb8192ad5b8"
                data-wf-page-id="69a70f5f92c56838ccf4559b"
              >
                <div className="account_form-inner">
                  <div className="profile-form_inner">
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
                        Email Address
                        <sup>
                          *
                        </sup>
                      </div>
                      <input className="text-field w-input" data-name="Email Address" id="Email-Address" maxLength={256} name="Email-Address" placeholder='john@example.com"' required type="email" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        Phone Number
                      </div>
                      <input className="text-field w-input" data-name="Phone Number" id="Phone-Number" maxLength={256} name="Phone-Number" placeholder="+689 40 123 456" type="tel" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        Subject
                        <sup>
                          *
                        </sup>
                      </div>
                      <select className="text-field select w-select" data-name="Subject" id="Subject" name="Subject" required>
                        <option value="">
                          Subject
                        </option>
                        <option value="Event/Wedding">
                          Event/Wedding
                        </option>
                        <option value="General Question">
                          General Question
                        </option>
                        <option value="Press/Media,">
                          Press/Media,
                        </option>
                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        Message
                        <sup>
                          *
                        </sup>
                      </div>
                      <textarea className="text-field text-area w-input" data-name="Field" id="field" maxLength={5000} name="field" placeholder="Tell us about your stay or questions..." required></textarea>
                    </div>
                    <label className="w-checkbox checkbox">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox_contact">
                      </div>
                      <input data-name="Checkbox" id="Checkbox" name="Checkbox" required style={{ opacity: 0, position: 'absolute', zIndex: -1 }} type="checkbox" />
                      <span className="text-size-regular w-form-label" htmlFor="Checkbox">
                        I understand my tropical paradise adventure is safe with Caladan
                      </span>
                    </label>
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
        </div>
      </div>
    </section>
  );
}
