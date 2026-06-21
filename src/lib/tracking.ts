// Google Ads conversion tracking
//
// The base Google tag (gtag.js) is loaded in index.html with the account-level
// Conversion ID below. To actually RECORD a conversion, a `conversion` event must
// be fired with a `send_to` of the form `AW-XXXXXXXXXX/<conversion-label>`.
//
// HOW TO FINISH SETUP:
//   1. In Google Ads, create one conversion action per row below
//      (Goals > Conversions > Summary > + New conversion action > Website, manual).
//   2. Open each action > "Tag setup" > "Use Google tag" and copy the value shown
//      as `send_to: 'AW-18150370906/abCdEf...'`.
//   3. Paste the part AFTER the slash into the matching field in CONVERSION_LABELS.
//
// Until a real label is filled in, that conversion type is silently skipped.

const GOOGLE_ADS_ID = "AW-18150370906";

export const CONVERSION_LABELS = {
  form: "w7_xCI-soMMcENrc4s5D",
  whatsapp: "y_ZuCJKsoMMcENrc4s5D",
  phone: "LuBMCJWsoMMcENrc4s5D",
  email: "PYYACJisoMMcENrc4s5D",
} as const;

export type ConversionType = keyof typeof CONVERSION_LABELS;

/** Fire a single Google Ads conversion. No-op if gtag/label isn't ready. */
export function trackConversion(
  type: ConversionType,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  const label = CONVERSION_LABELS[type];

  if (!gtag || !label || label.startsWith("REPLACE_WITH")) return;

  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...params,
  });
}

/**
 * Attach a single document-level click listener that records a conversion
 * whenever a phone (tel:), WhatsApp (wa.me / api.whatsapp.com) or email
 * (mailto:) link is clicked — anywhere on the site. Safe to call once.
 */
export function initConversionTracking(): void {
  if (typeof document === "undefined") return;

  // Guard against double-registration (e.g. React strict mode / HMR).
  const w = window as unknown as { __conversionTrackingInit?: boolean };
  if (w.__conversionTrackingInit) return;
  w.__conversionTrackingInit = true;

  document.addEventListener(
    "click",
    (event) => {
      const el = event.target as HTMLElement | null;
      const link = el?.closest?.("a");
      if (!link) return;

      const href = (link.getAttribute("href") || "").trim();
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackConversion("phone");
      } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href)) {
        trackConversion("whatsapp");
      } else if (href.startsWith("mailto:")) {
        trackConversion("email");
      }
    },
    { capture: true }
  );
}
