// app/components/home/hero-quote-form.tsx
"use client";

import { useRef, useState } from "react";
import { useLang } from "@/app/lib/use-lang";

/**
 * Hero quote form — progressive disclosure, full-width, EN/VI aware.
 *
 * Reuses Caladan's existing form classes verbatim (.form, .input_wrap, .text-field,
 * .text_input-label.label-large, .button_submit-static, .cta_primary) so the visual
 * design is unchanged. Text comes from the EN/VI dictionary below.
 *
 *  - Collapsed: a horizontal full-width bar — Name · Email · Phone with the submit
 *    inline at the end, like the original hero bar.
 *  - Focusing any field reveals the product-detail fields below (full width); the
 *    submit moves to the bottom of the expanded form.
 *  - Blurring out while every field is still empty collapses it again.
 */

const T = {
  en: {
    name: "Name",
    namePh: "Your full name",
    email: "Email",
    emailPh: "your.email@company.com",
    phone: "Phone Number",
    phonePh: "+84 xxx xxx xxxx",
    quantity: "Quantity",
    quantityPh: "e.g., 1000 pieces",
    standard: "Standard",
    standardPh: "Select standard",
    height: "Height (mm)",
    heightPh: "e.g., 50",
    width: "Width (mm)",
    widthPh: "e.g., 100",
    thickness: "Thickness (mm)",
    thicknessPh: "e.g., 2",
    upload: "Upload Sample",
    uploadHelp: "JPG, PNG, or PDF",
    message: "Message",
    messagePh: "Describe your product requirements...",
    submit: "Send Message",
    success: "Thank you — we've received your request and will get back to you within 24 hours.",
  },
  vi: {
    name: "Tên",
    namePh: "Họ và tên",
    email: "Email",
    emailPh: "your.email@company.com",
    phone: "Số Điện Thoại",
    phonePh: "+84 xxx xxx xxxx",
    quantity: "Số Lượng",
    quantityPh: "vd: 1000 cái",
    standard: "Tiêu Chuẩn",
    standardPh: "Chọn tiêu chuẩn",
    height: "Dài (mm)",
    heightPh: "vd: 50",
    width: "Rộng (mm)",
    widthPh: "vd: 100",
    thickness: "Dày (mm)",
    thicknessPh: "vd: 2",
    upload: "Tải Mẫu Sản Phẩm",
    uploadHelp: "JPG, PNG, hoặc PDF",
    message: "Lời Nhắn",
    messagePh: "Mô tả yêu cầu sản phẩm...",
    submit: "Gửi Thông Tin",
    success: "Cảm ơn bạn — chúng tôi đã nhận được yêu cầu và sẽ phản hồi trong vòng 24 giờ.",
  },
} as const;

// Stable value (for any future submit) + per-language display label.
const STANDARD_OPTIONS = [
  { value: "OEKO-TEX Standard 100", en: "OEKO-TEX Standard 100", vi: "OEKO-TEX Standard 100" },
  { value: "ISO 9001", en: "ISO 9001", vi: "ISO 9001" },
  { value: "GRS (Recycled)", en: "GRS (Recycled)", vi: "GRS (Tái chế)" },
  { value: "GOTS (Organic)", en: "GOTS (Organic)", vi: "GOTS (Hữu cơ)" },
  { value: "Other / Custom", en: "Other / Custom", vi: "Khác / Tùy chỉnh" },
] as const;

export function HeroQuoteForm({
  "data-w-id": dataWId,
  style,
}: {
  "data-w-id"?: string;
  style?: React.CSSProperties;
}) {
  const lang = useLang();
  const t = T[lang];
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
        value={t.submit}
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
            {t.submit}
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
                  {t.name}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Name"
                  id="quote-name"
                  maxLength={256}
                  name="Name"
                  placeholder={t.namePh}
                  required
                  type="text"
                />
              </div>
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  {t.email}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Email"
                  id="quote-email"
                  maxLength={256}
                  name="Email"
                  placeholder={t.emailPh}
                  required
                  type="email"
                />
              </div>
              <div className="input_wrap">
                <div className="text_input-label label-large">
                  {t.phone}
                  <sup>*</sup>
                </div>
                <input
                  className="text-field w-input"
                  data-name="Phone"
                  id="quote-phone"
                  maxLength={256}
                  name="Phone"
                  placeholder={t.phonePh}
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
                    <div className="text_input-label label-large">{t.quantity}</div>
                    <input
                      className="text-field w-input"
                      data-name="Quantity"
                      name="Quantity"
                      placeholder={t.quantityPh}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{t.standard}</div>
                    <select
                      className="text-field select w-select"
                      data-name="Standard"
                      name="Standard"
                      tabIndex={detailTab}
                      defaultValue=""
                    >
                      <option value="">{t.standardPh}</option>
                      {STANDARD_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o[lang]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{t.height}</div>
                    <input
                      className="text-field w-input"
                      data-name="Height"
                      inputMode="decimal"
                      name="Height"
                      placeholder={t.heightPh}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{t.width}</div>
                    <input
                      className="text-field w-input"
                      data-name="Width"
                      inputMode="decimal"
                      name="Width"
                      placeholder={t.widthPh}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{t.thickness}</div>
                    <input
                      className="text-field w-input"
                      data-name="Thickness"
                      inputMode="decimal"
                      name="Thickness"
                      placeholder={t.thicknessPh}
                      tabIndex={detailTab}
                      type="text"
                    />
                  </div>
                  <div className="input_wrap">
                    <div className="text_input-label label-large">{t.upload}</div>
                    <input
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="text-field w-input hero-form_file"
                      data-name="Sample"
                      name="Sample"
                      tabIndex={detailTab}
                      type="file"
                    />
                    <div className="text-size-small tone-medium">{t.uploadHelp}</div>
                  </div>
                </div>
                <div className="input_wrap">
                  <div className="text_input-label label-large">{t.message}</div>
                  <textarea
                    className="text-field w-input hero-quote_message"
                    data-name="Message"
                    name="Message"
                    placeholder={t.messagePh}
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
          <div>{t.success}</div>
        </div>
      )}
    </div>
  );
}
