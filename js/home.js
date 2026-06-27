/* ============================================================
   HOME PAGE RENDER LOGIC
   Reads everything from SITE (js/data.js) — edit data.js, not this.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const { brand, globalStats, services } = SITE;

  // --- Brand name (header + footer) ---
  document.getElementById('brandName').textContent = brand.name;
  document.getElementById('footerBrandName').textContent = brand.name;
  document.getElementById('footerTagline').textContent = brand.tagline;
  document.getElementById('footerPhone').textContent = `WhatsApp: +${brand.whatsappNumber}`;

  // --- Header CTA ---
  const headerCta = document.getElementById('headerCta');
  headerCta.href = waLink(`Hi, I'd like to know more about your services.`);
  headerCta.innerHTML = `${ICONS.whatsapp} <span>Chat With Us</span>`;

  // --- Hero CTA ---
  const heroWaBtn = document.getElementById('heroWaBtn');
  heroWaBtn.href = waLink(`Hi, I'd like to know more about your services.`);
  heroWaBtn.innerHTML = `${ICONS.whatsapp} Chat on WhatsApp`;

  // --- Final CTA ---
  const finalCtaBtn = document.getElementById('finalCtaBtn');
  finalCtaBtn.href = waLink(`Hi, I'd like to get started.`);
  finalCtaBtn.innerHTML = `${ICONS.whatsapp} Chat on WhatsApp Now`;

  document.querySelector('.final-cta__badge').innerHTML = ICONS.shield;
  document.querySelectorAll('.proof-item__icon')[0].innerHTML = ICONS.bolt;
  document.querySelectorAll('.proof-item__icon')[1].innerHTML = ICONS.shield;
  document.querySelectorAll('.proof-item__icon')[2].innerHTML = ICONS.check;
  document.querySelectorAll('.proof-item__icon')[3].innerHTML = ICONS.headset;

  // --- Trust strip ---
  const trustGrid = document.getElementById('trustGrid');
  trustGrid.innerHTML = `
    <div><div class="trust-stat__value">${globalStats.businessesHelped}</div><div class="trust-stat__label">Businesses Helped</div></div>
    <div><div class="trust-stat__value">${globalStats.accountsRecovered}</div><div class="trust-stat__label">Accounts Recovered</div></div>
    <div><div class="trust-stat__value">${globalStats.cacRegistrations}</div><div class="trust-stat__label">CAC Registrations</div></div>
    <div><div class="trust-stat__value">${globalStats.satisfaction}</div><div class="trust-stat__label">Client Satisfaction</div></div>
  `;

  // --- Service grid ---
  // A small icon per service slug, falls back to a generic icon
  const serviceIconMap = {
    'prepaid-ads-account-setup': ICONS.bolt,
    'fix-sponsored-ads-issues': ICONS.refresh,
    'audience-targeting': ICONS.target,
    'tiktok-setup': ICONS.tiktok,
    'sponsored-ads-management': ICONS.users,
    'virtual-sessions': ICONS.video,
    'ig-account-recovery': ICONS.lock,
    'cac-registration': ICONS.building
  };

  const serviceGrid = document.getElementById('serviceGrid');
  serviceGrid.innerHTML = services.map(svc => `
    <a class="service-card" href="services/${svc.slug}.html">
      <div class="service-card__icon">${serviceIconMap[svc.slug] || ICONS.check}</div>
      <h3>${svc.navLabel}</h3>
      <p>${svc.heroSub}</p>
      <span class="service-card__link">Learn more ${ICONS.arrowRight}</span>
    </a>
  `).join('');
});
