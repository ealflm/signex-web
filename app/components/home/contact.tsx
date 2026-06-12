import type { Dictionary } from "@/app/[lang]/dictionaries";
import { StaticWebflowForm } from "@/app/components/static-webflow-form";
import { STANDARD_VALUES } from "@/app/lib/standard-options";

/**
 * Contact — home-page contact section. The SHELL is a faithful port of Caladan's
 * `section_hero-contact-b` (signex-web-ref/app/contact/contact-b/page.tsx): section,
 * heading block and `.form.is-v2` card are the ref's markup/classes verbatim. The
 * heading copy is signex's, dict-driven from `dict.contact` (two-tone title +
 * subtitle, EN + VI); only the "Reach Out" eyebrow is still the ref's English
 * placeholder (no VI copy provided yet).
 * The FORM CONTENT mirrors the hero quote form (section_hero-home-a): the same
 * dict-driven fields — Name/Email/Phone (required), Quantity, Standard, Height/Width/
 * Thickness, Upload Sample, Message — sharing the hero's `dict.form` labels,
 * placeholders, submit text, and success message (EN + VI), with the same data-names
 * and STANDARD_VALUES so submissions are shaped identically. Fields sit in a 2-column
 * grid (the three mm dimensions share one 3-up row; Message spans full width) inside a
 * widened card — scoped `contact-form_*` styles in globals.css; the heading keeps the
 * ref's 8-column width in its own `.master_contact-b`, so the section uses two wrappers
 * like the ref page does. `contact-*` ids keep fields unique from the hero's `quote-*`.
 *
 * - The section is LIGHT: `.section_hero-contact-b`'s `ink--base` bg resolves to
 *   `base--light-100`; dark text via `tone--strong`. Coherent with the rest of the home page.
 * - In the ref it's a page hero (large top padding); mid-page that gap is too big, so
 *   globals.css tightens it — same precedent as `.section_hero-resorts` (see globals.css).
 * - The ref's <h1> is demoted to <h2 className="heading-style-h1"> (identical h1
 *   typography) so the home hero keeps the only h1 — same as ProductCategories (b25a69c).
 * - Cross-page IX2 reveal re-point (clone-playbook §1): the ref wrappers' data-w-ids
 *   (ad1a3029-…eb1b headline, 00bd40ee-…d5b7 form-block) are registered only for the
 *   /contact-b page, so on the home page they'd stay `opacity:0; blur(5px)` forever. Both
 *   are re-pointed to the home-page reveal trigger `0f29df12-…d663` (standard a-124:
 *   opacity + unblur on self), shared safely with Features/ProductCategories/HomeAbout.
 * - The section's ref data-w-id (ad1a3029-…eb18) is DROPPED — it already lives on the
 *   product-categories section on this page.
 */
export function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  const t = dict.form;

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
                  {c.title}
                  <span className="tone-medium">
                    {c.titleAccent}
                  </span>
                </h2>
              </div>
              <p className="text-size-large tone-medium">
                {c.subtitle}
              </p>
            </div>
          </div>
          <div className="master_contact-b contact-form_wide">
            <div className="form-block" data-w-id="0f29df12-8c38-da6f-794d-3989ac10d663" style={{ opacity: 0, filter: 'blur(5px)' }}>
              <StaticWebflowForm
                id="contact-form"
                name="contact-form"
                className="form is-v2"
                successMarkup={`<div>${t.success}</div>`}
                failMarkup="<div>Oops! Something went wrong while submitting the form.</div>"
              >
                <div className="account_form-inner">
                  {/* 2-col field grid (scoped contact-form_grid overrides the ref's
                      single flex column): Name|Email, Phone|Quantity, Standard|Upload,
                      then the three mm dimensions share one full-width 3-up row and
                      Message spans both columns. Single column under 768px. */}
                  <div className="profile-form_inner contact-form_grid">
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.name}
                        <sup>*</sup>
                      </div>
                      <input className="text-field w-input" data-name="Name" id="contact-name" maxLength={256} name="Name" placeholder={t.namePlaceholder} required type="text" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.email}
                        <sup>*</sup>
                      </div>
                      <input className="text-field w-input" data-name="Email" id="contact-email" maxLength={256} name="Email" placeholder={t.emailPlaceholder} required type="email" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.phone}
                        <sup>*</sup>
                      </div>
                      <input className="text-field w-input" data-name="Phone" id="contact-phone" maxLength={256} name="Phone" placeholder={t.phonePlaceholder} required type="tel" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.quantity}
                      </div>
                      <input className="text-field w-input" data-name="Quantity" id="contact-quantity" name="Quantity" placeholder={t.quantityPlaceholder} type="text" />
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.standard}
                      </div>
                      <select className="text-field select w-select" data-name="Standard" defaultValue="" id="contact-standard" name="Standard">
                        <option value="">
                          {t.standardPlaceholder}
                        </option>
                        {t.standardOptions.map((label, i) => (
                          <option key={STANDARD_VALUES[i] ?? label} value={STANDARD_VALUES[i] ?? label}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input_wrap">
                      <div className="text_input-label label-large">
                        {t.upload}
                      </div>
                      <input accept=".jpg,.jpeg,.png,.pdf" className="text-field w-input" data-name="Sample" id="contact-sample" name="Sample" type="file" />
                      <div className="text-size-small tone-medium">
                        {t.uploadHelp}
                      </div>
                    </div>
                    <div className="contact-form_dims">
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          {t.height}
                        </div>
                        <input className="text-field w-input" data-name="Height" id="contact-height" inputMode="decimal" name="Height" placeholder={t.heightPlaceholder} type="text" />
                      </div>
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          {t.width}
                        </div>
                        <input className="text-field w-input" data-name="Width" id="contact-width" inputMode="decimal" name="Width" placeholder={t.widthPlaceholder} type="text" />
                      </div>
                      <div className="input_wrap">
                        <div className="text_input-label label-large">
                          {t.thickness}
                        </div>
                        <input className="text-field w-input" data-name="Thickness" id="contact-thickness" inputMode="decimal" name="Thickness" placeholder={t.thicknessPlaceholder} type="text" />
                      </div>
                    </div>
                    <div className="input_wrap contact-form_full">
                      <div className="text_input-label label-large">
                        {t.message}
                      </div>
                      <textarea className="text-field text-area w-input" data-name="Message" id="contact-message" name="Message" placeholder={t.messagePlaceholder}></textarea>
                    </div>
                  </div>
                  <div button="" className="button_submit-static">
                    <input className="button_submit w-button" data-wait="Please wait..." type="submit" value={t.submit} />
                    <a button="" className="cta_primary w-inline-block" data-wf--cta-primary--variant="primary" href="#">
                      <div className="button_text-mask">
                        <div button-text="" className="text-button">
                          {t.submit}
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
