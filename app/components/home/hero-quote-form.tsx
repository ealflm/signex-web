// app/components/home/hero-quote-form.tsx
"use client";

import { useRef, useState } from "react";

/**
 * Hero quote form — progressive disclosure.
 *
 * Reuses Caladan's existing form classes verbatim (.hero-form_inner, .input_wrap,
 * .text-field, .text_input-label.label-large, .master_label/.label-small,
 * .button_submit-static, .cta_primary) so the visual design is unchanged.
 *
 * Behaviour added on top:
 *  - Collapsed: only the "Your Information" group (Name / Email / Phone) + submit.
 *  - Focusing any field expands the "Product Information" group.
 *  - Blurring out of the form while every field is still empty collapses it again.
 *
 * The reveal animation hook (data-w-id + the opacity/blur FOUC guard) is forwarded
 * onto the <form> so Webflow IX2 still plays the hero's two-stage blur-in reveal.
 */
export function HeroQuoteForm({
  "data-w-id": dataWId,
  style,
}: {
  "data-w-id"?: string;
  style?: React.CSSProperties;
}) {
  const [done, setDone] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFocus = () => setExpanded(true);

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    const form = formRef.current;
    if (!form) return;
    // Focus moved to another control still inside the form → keep it open.
    const next = e.relatedTarget as Node | null;
    if (next && form.contains(next)) return;
    // Focus left the form: collapse only if the user typed/selected nothing.
    const hasValue = Array.from(form.elements).some((el) => {
      if (el instanceof HTMLInputElement) {
        if (el.type === "submit" || el.type === "button") return false;
        if (el.type === "file") return !!el.files && el.files.length > 0;
        return el.value.trim() !== "";
      }
      if (el instanceof HTMLSelectElement) return el.value !== "";
      if (el instanceof HTMLTextAreaElement) return el.value.trim() !== "";
      return false;
    });
    if (!hasValue) setExpanded(false);
  };

  // Product-Information controls are not tab-reachable until expanded.
  const detailTab = expanded ? 0 : -1;

  return (
    <div className="form-block w-form">
      {!done && (
        <form
          ref={formRef}
          id="quote-form"
          name="quote-form"
          className="form is-small hero-quote_panel"
          data-w-id={dataWId}
          style={style}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="hero-quote_inner">
            {/* ---- Your Information (always visible) ---- */}
            <div className="master_label" data-wf--tag--variant="base">
              <div className="label-small">Your Information</div>
            </div>
            <div className="hero-quote_grid hero-quote_grid--2">
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  Name
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Name"
                  id="quote-name"
                  maxLength={256}
                  name="Name"
                  placeholder="Your full name"
                  required
                  type="text"
                />
              </div>
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  Email
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Email"
                  id="quote-email"
                  maxLength={256}
                  name="Email"
                  placeholder="your.email@company.com"
                  required
                  type="email"
                />
              </div>
              <div className="input_wrap hero-quote_field--full">
                <div className="text_input-label label-large">
                  Phone Number
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Phone"
                  id="quote-phone"
                  maxLength={256}
                  name="Phone"
                  placeholder="+84 xxx xxx xxxx"
                  required
                  type="tel"
                />
              </div>
            </div>

            {/* ---- Product Information (revealed on focus) ---- */}
            <div
              className={`hero-form_collapsible${expanded ? " is-open" : ""}`}
              aria-hidden={!expanded}
            >
              <div className="hero-form_collapsible-inner">
                <div className="master_label" data-wf--tag--variant="base">
                  <div className="label-small">Product Information</div>
                </div>
                <div className="hero-quote_grid hero-quote_grid--2">
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Quantity</div>
                    <input
                      className="text-field w-input"
                      data-name="Quantity"
                      name="Quantity"
                      placeholder="e.g., 1000 pieces"
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Standard</div>
                    <select
                      className="text-field select w-select"
                      data-name="Standard"
                      name="Standard"
                      tabIndex={detailTab}
                      defaultValue=""
                    >
                      <option value="">Select standard</option>
                      <option value="OEKO-TEX Standard 100">OEKO-TEX Standard 100</option>
                      <option value="ISO 9001">ISO 9001</option>
                      <option value="GRS (Recycled)">GRS (Recycled)</option>
                      <option value="GOTS (Organic)">GOTS (Organic)</option>
                      <option value="Other / Custom">Other / Custom</option>
                    </select>
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Height (mm)</div>
                    <input
                      className="text-field w-input"
                      data-name="Height"
                      inputMode="decimal"
                      name="Height"
                      placeholder="e.g., 50"
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Width (mm)</div>
                    <input
                      className="text-field w-input"
                      data-name="Width"
                      inputMode="decimal"
                      name="Width"
                      placeholder="e.g., 100"
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Thickness (mm)</div>
                    <input
                      className="text-field w-input"
                      data-name="Thickness"
                      inputMode="decimal"
                      name="Thickness"
                      placeholder="e.g., 2"
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">Upload Sample</div>
                    <input
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="text-field w-input hero-form_file"
                      data-name="Sample"
                      name="Sample"
                      tabIndex={detailTab}
                      type="file"
                    />
                    <div className="text-size-small tone-medium">JPG, PNG, or PDF</div>
                  </div>
                </div>
                <div className="input_wrap">
                  <div className="text_input-label label-large">Message</div>
                  <textarea
                    className="text-field w-input hero-quote_message"
                    data-name="Message"
                    name="Message"
                    placeholder="Describe your product requirements..."
                    tabIndex={detailTab}
                  />
                </div>
              </div>
            </div>

            <div button="" className="button_submit-static hero-quote_submit">
              <input
                className="button_submit w-button"
                data-wait="Please wait..."
                type="submit"
                value="Send message"
              />
              <a
                button=""
                className="cta_primary w-inline-block"
                data-wf--cta-primary--variant="primary"
                href="#"
              >
                <div className="button_text-mask">
                  <div button-text="" className="text-button">
                    Send Message
                  </div>
                </div>
                <div button-bg="" className="btn-bg"></div>
              </a>
            </div>
          </div>
        </form>
      )}
      {done && (
        <div className="success-message w-form-done" style={{ display: "block" }}>
          <div>Thank you — we&rsquo;ve received your request and will get back to you within 24 hours.</div>
        </div>
      )}
    </div>
  );
}
