document.addEventListener('DOMContentLoaded', () => {
  const svc = SITE.services.find(s => s.slug === window.SERVICE_SLUG);
  if (!svc) {
    document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif;">Service not found. Check window.SERVICE_SLUG matches a slug in js/data.js.</p>';
    return;
  }
  const { brand, globalStats } = SITE;
  const waMsg = svc.whatsappMessage;

  document.title = `${svc.navLabel}- ${brand.name}`;

  // --- Topbar ---
  document.getElementById('svcTopbar').innerHTML = `
    <span class="svc-topbar__item">${ICONS.bolt} FAST TURNAROUND</span>
    <span class="svc-topbar__item">${ICONS.lock} SAFE & SECURE</span>
    <span class="svc-topbar__item">${ICONS.check} TRUSTED BY BUSINESSES</span>
    <span class="svc-topbar__item">${ICONS.headset}  ONGOING SUPPORT</span>
  `;

  // --- Hero ---
  document.getElementById('heroEyebrow').textContent = svc.heroEyebrow;

  const [headlineFirst, ...rest] = svc.heroHeadline.split('\n');
  document.getElementById('heroHeadline').innerHTML =
    `${headlineFirst}<span class="accent">${rest.join(' ')}</span>`;

  document.getElementById('heroSub').textContent = svc.heroSub;

  document.getElementById('heroBullets').innerHTML = svc.bullets.map(b =>
    `<li>${ICONS.check}<span>${b}</span></li>`
  ).join('');

  const heroWaBtn = document.getElementById('heroWaBtn');
  heroWaBtn.href = waLink(waMsg);
  heroWaBtn.innerHTML = `${ICONS.whatsapp}<span><span class="sub">Need help? We're here.</span>Start on WhatsApp</span>`;

  const heroImg = document.getElementById('heroVisualImg');
  const heroVisual = heroImg.closest('.svc-hero__visual');
  if (svc.reviews && svc.reviews[0]) {
    heroImg.src = `../images/reviews/${svc.reviews[0]}`;
    heroImg.alt = `${svc.navLabel} example`;
  } else {
    heroVisual.style.display = 'none';
    document.querySelector('.svc-hero__grid').style.gridTemplateColumns = '1fr';
  }

  // --- Red stats bar ---
  document.getElementById('statsGrid').innerHTML = svc.stats.map(s => `
    <div class="svc-stats__item">
      <div class="svc-stats__value">${s.value}</div>
      <div class="svc-stats__label">${s.label}</div>
    </div>
  `).join('');

  const transformSection = document.getElementById('transformSection');
  const baImages = svc.beforeAfterImages || [];
  if (baImages.length) {
    const grid = document.getElementById('transformGrid');
    grid.innerHTML = baImages.map(img => `
      <div class="transform-card">
        <img src="../images/reviews/${img}" alt="Before and after result" loading="lazy">
      </div>
    `).join('');
    grid.classList.toggle('transform-grid--single', baImages.length === 1);
  } else {
    transformSection.style.display = 'none';
  }

  // --- Why choose us ---
  document.getElementById('whyGrid').innerHTML = `
    <div class="why-card">
      <div class="why-card__icon">${ICONS.shield}</div>
      <h3>Specialized Approach</h3>
      <p>Proven Expertise
Our solutions are backed by real experience helping businesses solve these challenges every day.</p>
    </div>
    <div class="why-card">
      <div class="why-card__icon">${ICONS.clock}</div>
      <h3>Fast Turnaround</h3>
      <p>Fast Turnaround
We work efficiently to help you get results without unnecessary delays.</p>
    </div>
    <div class="why-card">
      <div class="why-card__icon">${ICONS.lock}</div>
      <h3>Safe &amp; Secure</h3>
      <p>Safe & Reliable
We use trusted, professional methods that put your business first.</p>
    </div>
    <div class="why-card">
      <div class="why-card__icon">${ICONS.headset}</div>
      <h3>Continued Support</h3>
      <p>Questions after delivery? We're here to help whenever you need us.</p>
    </div>
  `;

  // --- Reviews (whole section hidden if this service has no screenshots yet) ---
  const reviewsSection = document.getElementById('reviewsSection');
  if (svc.reviews && svc.reviews.length) {
    document.getElementById('reviewsStrip').innerHTML = svc.reviews.map(img => `
      <div class="review-shot">
        <img src="../images/reviews/${img}" alt="Client testimonial">
      </div>
    `).join('');
  } else {
    reviewsSection.style.display = 'none';
  }

  // --- How it works ---
  document.getElementById('howGrid').innerHTML = svc.howItWorks.map((step, i) => `
    <div class="how-step">
      <div class="how-step__num">${i + 1}</div>
      <h3>${step.title}</h3>
      <p>${step.body}</p>
    </div>
  `).join('');

  // --- Final CTA ---
document.getElementById('finalCtaHeadline').innerHTML =
`Let's Help You Grow Your Business.`;

  const finalCtaBtn = document.getElementById('finalCtaBtn');
  finalCtaBtn.href = waLink(waMsg);
  finalCtaBtn.innerHTML = `${ICONS.whatsapp} Chat on WhatsApp Now`;

  document.getElementById('finalCtaPhone').innerHTML =
    `Prefer to call? <a href="tel:+${brand.whatsappNumber}">+${brand.whatsappNumber}</a>`;

  // --- Footer ---
  document.getElementById('footerBrand').textContent = `${brand.name} - ${brand.tagline}`;
  document.getElementById('footerPhone2').textContent = `WhatsApp / Call: +${brand.whatsappNumber}`;

  // --- Sticky mobile bar ---
  document.getElementById('stickyBarSlot').innerHTML = renderStickyBar(waMsg);

  // --- Floating desktop FAB ---
  document.getElementById('fabSlot').innerHTML = renderWaFab(waMsg);
});
