// app/components/home/hero-quote-form.tsx
"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { STANDARD_VALUES } from "@/app/lib/standard-options";

/**
 * Hero quote form — progressive disclosure, full-width. Text comes from the server-loaded
 * dictionary (`dict`) passed down per locale; this component holds only interaction state.
 *
 *  - Collapsed: a horizontal full-width bar — Name · Email · Phone with the submit inline.
 *  - Focusing any field reveals the product-detail fields below; submit moves to the bottom.
 *  - Blurring out while every field is still empty collapses it again.
 *
 * Reuses Caladan's existing form classes verbatim (.form, .input_wrap, .text-field,
 * .text_input-label.label-large, .button_submit-static, .cta_primary) — design unchanged.
 */

export function HeroQuoteForm({
  dict,
  "data-w-id": dataWId,
  style,
}: {
  dict: Dictionary["form"];
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
    const next = e.relatedTarget as Node | null;
    if (next && form.contains(next)) return; // focus still inside the form
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

  const detailTab = expanded ? 0 : -1;

  const submitButton = (extraClass: string, tabIndex?: number) => (
    <div button="" className={`button_submit-static ${extraClass}`}>
      <input
        className="button_submit w-button"
        data-wait="Please wait..."
        tabIndex={tabIndex}
        type="submit"
        value={dict.submit}
      />
      <a
        button=""
        className="cta_primary w-inline-block"
        data-wf--cta-primary--variant="primary"
        href="#"
        tabIndex={tabIndex}
      >
        <div className="button_text-mask">
          <div button-text="" className="text-button">
            {dict.submit}
          </div>
        </div>
        <div button-bg="" className="btn-bg"></div>
      </a>
    </div>
  );

  return (
    <div className="form-block w-form">
      {!done && (
        <form
          ref={formRef}
          id="quote-form"
          name="quote-form"
          className="form is-small hero-quote_panel"
          autoComplete="off"
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
            {/* ---- Contact info — horizontal bar (always visible) ---- */}
            <div className="hero-quote_bar">
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  {dict.name}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  autoComplete="new-password"
                  data-name="Name"
                  id="quote-name"
                  maxLength={256}
                  name="Name"
                  placeholder={dict.namePlaceholder}
                  required
                  type="text"
                />
              </div>
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  {dict.email}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  autoComplete="new-password"
                  data-name="Email"
                  id="quote-email"
                  maxLength={256}
                  name="Email"
                  placeholder={dict.emailPlaceholder}
                  required
                  type="email"
                />
              </div>
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  {dict.phone}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  autoComplete="new-password"
                  data-name="Phone"
                  id="quote-phone"
                  maxLength={256}
                  name="Phone"
                  placeholder={dict.phonePlaceholder}
                  required
                  type="tel"
                />
              </div>
              {/* Inline submit at the end of the bar. Kept MOUNTED and merely hidden
                  when expanded (not unmounted) so Webflow IX2's hover-animation binding,
                  which is attached once on page load, survives expand/collapse. */}
              {submitButton(`hero-quote_submit--bar${expanded ? " is-hidden" : ""}`)}
            </div>

            {/* ---- Product details (revealed on focus) ---- */}
            <div
              className={`hero-form_collapsible${expanded ? " is-open" : ""}`}
              aria-hidden={!expanded}
            >
              <div className="hero-form_collapsible-inner">
                <div className="hero-quote_grid hero-quote_grid--3">
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.quantity}</div>
                    <input
                      className="text-field w-input"
                      data-name="Quantity"
                      name="Quantity"
                      placeholder={dict.quantityPlaceholder}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.standard}</div>
                    <select
                      className="text-field select w-select"
                      data-name="Standard"
                      name="Standard"
                      tabIndex={detailTab}
                      defaultValue=""
                    >
                      <option value="">{dict.standardPlaceholder}</option>
                      {dict.standardOptions.map((label, i) => (
                        <option key={STANDARD_VALUES[i] ?? label} value={STANDARD_VALUES[i] ?? label}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.height}</div>
                    <input
                      className="text-field w-input"
                      data-name="Height"
                      inputMode="decimal"
                      name="Height"
                      placeholder={dict.heightPlaceholder}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.width}</div>
                    <input
                      className="text-field w-input"
                      data-name="Width"
                      inputMode="decimal"
                      name="Width"
                      placeholder={dict.widthPlaceholder}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.thickness}</div>
                    <input
                      className="text-field w-input"
                      data-name="Thickness"
                      inputMode="decimal"
                      name="Thickness"
                      placeholder={dict.thicknessPlaceholder}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{dict.upload}</div>
                    <input
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="text-field w-input hero-form_file"
                      data-name="Sample"
                      name="Sample"
                      tabIndex={detailTab}
                      type="file"
                    />
                    <div className="text-size-small tone-medium">{dict.uploadHelp}</div>
                  </div>
                </div>
                <div className="input_wrap">
                  <div className="text_input-label label-large">{dict.message}</div>
                  <textarea
                    className="text-field w-input hero-quote_message"
                    data-name="Message"
                    name="Message"
                    placeholder={dict.messagePlaceholder}
                    tabIndex={detailTab}
                  />
                </div>
                {/* Submit at the bottom of the expanded form */}
                {submitButton("hero-quote_submit", detailTab)}
              </div>
            </div>
          </div>
        </form>
      )}
      {done && (
        <div className="success-message w-form-done" style={{ display: "block" }}>
          <div>{dict.success}</div>
        </div>
      )}
    </div>
  );
}
