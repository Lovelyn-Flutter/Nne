/* ============================================================
   SHARED HELPERS
   ============================================================ */

/** Builds a wa.me link with an encoded pre-filled message */
function waLink(message) {
  const number = SITE.brand.whatsappNumber;
  const text = encodeURIComponent(message || `Hi, I'm interested in your services.`);
  return `https://wa.me/${number}?text=${text}`;
}

/** Inline SVG icon set - kept tiny and dependency-free */
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.04 3.6 8.94 8.94 0 0 0 3.1 12.53a8.9 8.9 0 0 0 1.27 4.6L3 21.4l4.4-1.16a8.93 8.93 0 0 0 4.63 1.27h.01a8.94 8.94 0 0 0 8.94-8.94 8.86 8.86 0 0 0-2.38-6.25Zm-5.56 13.74h-.01a7.4 7.4 0 0 1-3.78-1.04l-.27-.16-2.81.74.75-2.74-.18-.28a7.4 7.4 0 0 1-1.14-3.95 7.42 7.42 0 0 1 7.43-7.41 7.36 7.36 0 0 1 5.24 2.18 7.36 7.36 0 0 1 2.17 5.25 7.42 7.42 0 0 1-7.4 7.41Zm4.06-5.55c-.22-.11-1.31-.65-1.51-.72-.2-.08-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.16-.48.05-.22-.1-1.15-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.88-.16-.27-.02-.42.11-.57.11-.13.25-.34.37-.51.13-.17.17-.29.26-.48.08-.2.04-.36-.04-.51-.08-.15-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.27.27-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.15.2 2.04 3.12 4.95 4.25 2.41.94 2.41.63 2.84.59.43-.04 1.31-.53 1.5-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.15-.42-.27Z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1ZM3 14a2 2 0 0 0 2 2h1v-5H5a2 2 0 0 0-2 2v1Z"/><path d="M19 18v1a3 3 0 0 1-3 3h-3"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.6-5.9-3.2-5.9 3.2 1.2-6.6L2.5 9.4l6.6-.9 2.9-6Z"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-2.6-2.46h-2.85v12.4a2.5 2.5 0 1 1-1.78-2.4V10.4a5.5 5.5 0 1 0 4.6 5.43V9.1a6.8 6.8 0 0 0 4.13 1.4V7.55a4.27 4.27 0 0 1-1.5-1.73Z"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 4v5h-5"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7Z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M6 21V7l6-4 6 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"/></svg>`
};

/** Renders the floating round WhatsApp FAB (used on home page) */
function renderWaFab(message) {
  return `<a class="wa-fab" href="${waLink(message)}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    ${ICONS.whatsapp}<span>Chat on WhatsApp</span>
  </a>`;
}

/** Renders the sticky bottom bar (used on service pages, mobile only) */
function renderStickyBar(message) {
  return `<a class="svc-sticky-bar" href="${waLink(message)}" target="_blank" rel="noopener">
    ${ICONS.whatsapp} Chat on WhatsApp Now
  </a>`;
}
