(function () {
  "use strict";
  const C = window.ORS_CONFIG;
  const I18N = window.ORS_I18N;
  const LANGS = ["az", "tr", "en"];
  const STORE = "ors-language";
  const img = (k) => `/images/${k}.jpg`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tel = (p) => "tel:" + p.replace(/\s/g, "");

  let lang = localStorage.getItem(STORE);
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || "az").slice(0, 2);
    lang = LANGS.includes(nav) ? nav : "az";
  }

  const ICONS = {
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    panel: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M8 6h8M8 10h8M8 14h3M14 14h2M8 18h8"/>',
    motor: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 5V2M12 22v-3M5 12H2M22 12h-3"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
    shield: '<path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'
  };
  const icon = (n, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

  const NAV = ["services", "products", "projects", "brands", "about", "contact"];
  const mapUrl = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.mapQuery)}`;
  const waUrl = (text) => `https://wa.me/${C.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;

  function section(id, tone, inner) {
    return `<section id="${id}" class="section ${tone ? "section--" + tone : ""}"><div class="container">${inner}</div></section>`;
  }
  function head(eyebrow, title, lead) {
    return `<div class="head reveal">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2>${esc(title)}</h2>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div>`;
  }

  function render() {
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;

    // header
    document.getElementById("nav").innerHTML = NAV.map((k) => `<a href="#${k}">${esc(t.nav[k])}</a>`).join("") +
      `<a href="#contact" class="btn btn--accent nav__cta">${esc(t.common.quote)}</a>`;
    document.getElementById("lang").innerHTML = LANGS.map((l) => `<button data-lang="${l}" class="${l === lang ? "is-active" : ""}" aria-pressed="${l === lang}">${I18N[l].langName}</button>`).join("");
    document.getElementById("mailBtn").href = "mailto:" + C.email1;
    document.getElementById("mailBtn").setAttribute("aria-label", t.common.write);
    document.getElementById("waFloat").href = waUrl(t.contact.greeting);

    const h = t.hero;
    const hero = `
      <section class="hero" id="hero">
        <div class="hero__slides">${C.heroImages.map((k, i) => `<div class="hero__slide ${i === 0 ? "is-active" : ""}" style="background-image:url('${img(k)}')"></div>`).join("")}</div>
        <div class="hero__shade"></div>
        <div class="container hero__content">
          <p class="eyebrow eyebrow--accent">${esc(h.eyebrow)}</p>
          <h1>${esc(h.title)} <span class="accent">${esc(h.accent)}</span></h1>
          <p class="hero__text">${esc(h.text)}</p>
          <div class="hero__ctas">
            <a href="#contact" class="btn btn--accent">${esc(t.common.quote)} ${icon("arrow", 18)}</a>
            <a href="#services" class="btn btn--ghost">${esc(h.cta2)}</a>
          </div>
          <ul class="pills">${h.pills.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
        <div class="container hero__meta">
          <p class="hero__caption" id="heroCaption">${esc(h.captions[0])}</p>
          <div class="hero__dots">${C.heroImages.map((_, i) => `<button data-slide="${i}" class="${i === 0 ? "is-active" : ""}" aria-label="${i + 1}"><span></span></button>`).join("")}</div>
        </div>
      </section>`;

    const sectors = `
      <section class="sectors"><div class="container">
        <h2 class="sectors__title reveal">${esc(t.sectors.title)}</h2>
        <div class="sectors__grid">${t.sectors.items.map(([a, b], i) => `<div class="sector reveal"><span class="sector__num">0${i + 1}</span><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join("")}</div>
      </div></section>`;

    const services = section("services", "", head(t.services.eyebrow, t.services.title, t.services.lead) +
      `<div class="cards">${t.services.items.map((s) => `
        <article class="card reveal">
          <div class="card__icon">${icon(s.icon, 26)}</div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
          <ul class="checks">${s.list.map((li) => `<li>${icon("check", 16)}<span>${esc(li)}</span></li>`).join("")}</ul>
        </article>`).join("")}</div>`);

    const products = section("products", "dark", head(t.products.eyebrow, t.products.title, t.products.lead) +
      `<div class="catalog">
        <div class="catalog__tabs" role="tablist">${t.products.groups.map(([g], i) => `<button role="tab" data-tab="${i}" class="${i === 0 ? "is-active" : ""}" aria-selected="${i === 0}">${esc(g)}</button>`).join("")}</div>
        <div class="catalog__panels">${t.products.groups.map(([g, items], i) => `
          <div class="catalog__panel ${i === 0 ? "is-active" : ""}" data-panel="${i}" role="tabpanel">
            <h3>${esc(g)}</h3>
            <ul>${items.map((x) => `<li>${icon("check", 16)}<span>${esc(x)}</span></li>`).join("")}</ul>
            <a href="#contact" class="btn btn--accent">${esc(t.products.cta)} ${icon("arrow", 18)}</a>
          </div>`).join("")}</div>
      </div>`);

    const b = t.brands;
    const brandRow = (label, list) => `<div class="brands__row reveal"><h3>${esc(label)}</h3><ul>${list.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></div>`;
    const brands = section("brands", "alt", head(b.eyebrow, b.title, b.lead) +
      `<div class="brands">${brandRow(b.automation, C.brands.automation)}${brandRow(b.motors, C.brands.motors)}${brandRow(b.transformers, C.brands.transformers)}${brandRow(b.generators, C.brands.generators)}</div>`);

    const projects = section("projects", "", head(t.projects.eyebrow, t.projects.title) +
      `<div class="projects">${C.projects.map((p, i) => {
        const [title, text] = t.projects.items[p.id];
        return `<button class="project reveal" data-project="${i}">
          <span class="project__img" style="background-image:url('${img(p.images[0])}')"></span>
          <span class="project__body"><strong>${esc(title)}</strong><span>${esc(text)}</span>
          <em>${p.images.length} ${esc(t.common.photos)} ${icon("arrow", 16)}</em></span>
        </button>`;
      }).join("")}</div>`);

    const a = t.about;
    const about = section("about", "alt", `
      <div class="about">
        <figure class="about__img reveal"><img src="${img(C.aboutImage)}" alt="${esc(a.imageCaption)}" loading="lazy" /><figcaption>${esc(a.imageCaption)}</figcaption></figure>
        <div class="reveal">
          <p class="eyebrow">${esc(a.eyebrow)}</p>
          <h2>${esc(a.title)}</h2>
          <p class="lead">${esc(a.text)}</p>
          <ul class="checks checks--grid">${a.points.map((p) => `<li>${icon("check", 16)}<span>${esc(p)}</span></li>`).join("")}</ul>
          <a href="#contact" class="btn btn--dark">${esc(t.nav.contact)} ${icon("arrow", 18)}</a>
        </div>
      </div>`);

    const process = section("process", "", head(t.process.eyebrow, t.process.title) +
      `<ol class="steps">${t.process.steps.map(([s, d], i) => `<li class="step reveal"><span class="step__num">${String(i + 1).padStart(2, "0")}</span><h3>${esc(s)}</h3><p>${esc(d)}</p></li>`).join("")}</ol>`);

    const c = t.contact;
    const contact = section("contact", "dark", `
      <div class="contact">
        <div class="reveal">
          <p class="eyebrow eyebrow--accent">${esc(c.eyebrow)}</p>
          <h2>${esc(c.title)}</h2>
          <p class="lead">${esc(c.lead)}</p>
          <ul class="contact__list">
            <li>${icon("phone")}<div><small>${esc(c.phone)}</small><a href="${tel(C.phone1)}">${esc(C.phone1)}</a><a href="${tel(C.phone2)}">${esc(C.phone2)}</a></div></li>
            <li>${icon("mail")}<div><small>${esc(c.email)}</small><a href="mailto:${C.email1}">${esc(C.email1)}</a><a href="mailto:${C.email2}">${esc(C.email2)}</a></div></li>
            <li>${icon("pin")}<div><small>${esc(c.address)}</small><span>${esc(C.address[lang])}</span><a href="${mapUrl()}" target="_blank" rel="noopener" class="link-accent">${esc(c.map)} →</a></div></li>
          </ul>
        </div>
        <form class="form reveal" id="form" novalidate>
          <h3>${esc(c.formTitle)}</h3>
          <p class="form__hint">${esc(c.formText)}</p>
          <label>${esc(c.name)}<input name="name" autocomplete="name" /><small class="err"></small></label>
          <label>${esc(c.company)} <span class="opt">(${esc(c.optional)})</span><input name="company" autocomplete="organization" /></label>
          <label>${esc(c.phoneField)}<input name="phone" type="tel" autocomplete="tel" placeholder="+994 __ ___ __ __" /><small class="err"></small></label>
          <label>${esc(c.message)}<textarea name="message" rows="4"></textarea><small class="err"></small></label>
          <button type="submit" class="btn btn--wa">${esc(c.send)}</button>
          <p class="form__sent" id="formSent" hidden>${esc(c.sent)}</p>
        </form>
      </div>`);

    // --- ypt.com.tr'den esinlenen bölümler ---
    const st = t.stats;
    const stats = `
      <section class="stats"><div class="container">
        <div class="stats__head reveal"><p class="eyebrow">${esc(st.eyebrow)}</p><h2>${esc(st.title)}</h2></div>
        <div class="stats__grid">${C.stats.map((s, i) => `
          <div class="stat reveal"><span class="stat__num" data-count="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span><span class="stat__label">${esc(st.labels[i])}</span></div>`).join("")}</div>
      </div></section>`;

    const EXP_IMG = ["scada-engineers", "circuit-breakers", "substation-cables", "panel-terminals", "engineer-pcb"];
    const ex = t.expertise;
    const expertise = section("expertise", "alt", head(ex.eyebrow, ex.title) + `
      <div class="expertise reveal">
        <div class="expertise__list" role="tablist">${ex.items.map(([n], i) => `
          <button role="tab" data-exp="${i}" class="${i === 0 ? "is-active" : ""}" aria-selected="${i === 0}"><span>${String(i + 1).padStart(2, "0")}</span>${esc(n)}</button>`).join("")}</div>
        <div class="expertise__panels">${ex.items.map(([n, d], i) => `
          <div class="expertise__panel ${i === 0 ? "is-active" : ""}" data-exp-panel="${i}" role="tabpanel">
            <div class="expertise__img" style="background-image:url('${img(EXP_IMG[i])}')"></div>
            <div class="expertise__text"><h3>${esc(n)}</h3><p>${esc(d)}</p></div>
          </div>`).join("")}</div>
      </div>`);

    const allBrands = [...new Set(Object.values(C.brands).flat())];
    const partners = `
      <section class="partners" aria-label="${esc(t.partners.title)}"><div class="container"><p class="partners__title">${esc(t.partners.title)}</p></div>
        <div class="marquee"><div class="marquee__track">${[...allBrands, ...allBrands].map((b) => `<span>${esc(b)}</span>`).join("")}</div></div>
      </section>`;

    const w = t.world;
    const world = section("world", "dark", `
      <div class="world">
        <div class="reveal"><p class="eyebrow eyebrow--accent">${esc(w.eyebrow)}</p><h2>${esc(w.title)}</h2><p class="lead">${esc(w.lead)}</p></div>
        <ul class="world__list reveal">${C.countries.map((c, i) => `<li class="${i === 0 ? "is-hq" : ""}"><span class="world__code">${c.toUpperCase()}</span>${esc(w.names[c])}</li>`).join("")}</ul>
      </div>`);

    document.getElementById("app").innerHTML = hero + sectors + stats + services + expertise + products + projects + partners + brands + world + about + process + contact;

    const f = t.footer;
    const inf = t.info;
    document.getElementById("footer").innerHTML = `
      <div class="container">
        <div class="infobar">
          <div>${icon("phone")}<div><h4>${esc(inf.question)}</h4><a href="${tel(C.phone1)}">${esc(C.phone1)}</a><a href="${tel(C.phone2)}">${esc(C.phone2)}</a></div></div>
          <div>${icon("mail")}<div><h4>${esc(inf.support)}</h4><a href="mailto:${C.email1}">${esc(C.email1)}</a><a href="mailto:${C.email2}">${esc(C.email2)}</a></div></div>
          <div><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><div><h4>${esc(inf.hoursTitle)}</h4><span>${esc(inf.hoursText)}</span><span>${esc(C.hours)}</span></div></div>
        </div>
        <div class="footer__grid">
          <div><img src="/assets/ors-logo-white.svg" alt="ORS Company" class="footer__logo" /><p class="footer__about">${esc(f.about)}</p></div>
          <div><h4>${esc(f.menu)}</h4><ul>${NAV.map((k) => `<li><a href="#${k}">${esc(t.nav[k])}</a></li>`).join("")}</ul></div>
          <div><h4>${esc(f.services)}</h4><ul>${t.services.items.map((s) => `<li><a href="#services">${esc(s.title)}</a></li>`).join("")}</ul></div>
          <div><h4>${esc(f.contact)}</h4><ul>
            <li><a href="${tel(C.phone1)}">${esc(C.phone1)}</a></li><li><a href="${tel(C.phone2)}">${esc(C.phone2)}</a></li>
            <li><a href="mailto:${C.email1}">${esc(C.email1)}</a></li><li>${esc(C.address[lang])}</li></ul></div>
        </div>
        <div class="footer__bottom"><span>© ${new Date().getFullYear()} ${esc(C.name)}. ${esc(f.rights)}</span><span>${esc(C.website)}</span></div>
      </div>`;

    bind(t);
  }

  /* ---------------------------- interactions ---------------------------- */
  let slideTimer;
  function bind(t) {
    // hero slider
    const slides = [...document.querySelectorAll(".hero__slide")];
    const dots = [...document.querySelectorAll(".hero__dots button")];
    const cap = document.getElementById("heroCaption");
    let cur = 0;
    const go = (n) => {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === cur));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === cur));
      cap.textContent = t.hero.captions[cur];
    };
    clearInterval(slideTimer);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) slideTimer = setInterval(() => go(cur + 1), 6000);
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); clearInterval(slideTimer); slideTimer = setInterval(() => go(cur + 1), 6000); }));

    // catalog tabs
    document.querySelectorAll(".catalog__tabs button").forEach((btn) => btn.addEventListener("click", () => {
      const i = btn.dataset.tab;
      document.querySelectorAll(".catalog__tabs button").forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
      document.querySelectorAll(".catalog__panel").forEach((p) => p.classList.toggle("is-active", p.dataset.panel === i));
    }));

    // expertise tabs
    document.querySelectorAll(".expertise__list button").forEach((btn) => btn.addEventListener("click", () => {
      const i = btn.dataset.exp;
      document.querySelectorAll(".expertise__list button").forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
      document.querySelectorAll(".expertise__panel").forEach((p) => p.classList.toggle("is-active", p.dataset.expPanel === i));
    }));

    // counters
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      cio.unobserve(en.target);
      const el = en.target, end = +el.dataset.count, suf = el.dataset.suffix;
      if (reduce) { el.textContent = end + suf; return; }
      const t0 = performance.now(), dur = 1600;
      const tick = (now) => { const p = Math.min(1, (now - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: 0.4 });
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    // projects → lightbox
    document.querySelectorAll(".project").forEach((el) => el.addEventListener("click", () => {
      const p = C.projects[+el.dataset.project];
      openLightbox(p.images, t.projects.items[p.id][0]);
    }));

    // form → WhatsApp
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const c = t.contact;
      const fd = Object.fromEntries(new FormData(form));
      let ok = true;
      const setErr = (name, msg) => { const el = form.elements[name].parentElement.querySelector(".err"); el.textContent = msg || ""; if (msg) ok = false; };
      setErr("name", fd.name.trim() ? "" : c.required);
      const digits = fd.phone.replace(/\D/g, "");
      setErr("phone", !fd.phone.trim() ? c.required : digits.length < 7 ? c.phoneInvalid : "");
      setErr("message", fd.message.trim() ? "" : c.required);
      if (!ok) return;
      const lines = [c.greeting, "", `${c.name}: ${fd.name.trim()}`];
      if (fd.company.trim()) lines.push(`${c.company}: ${fd.company.trim()}`);
      lines.push(`${c.phoneField}: ${fd.phone.trim()}`, "", fd.message.trim());
      window.open(waUrl(lines.join("\n")), "_blank", "noopener");
      document.getElementById("formSent").hidden = false;
    });

    // reveal on scroll
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  /* ------------------------------ lightbox ------------------------------ */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCap");
  let lbList = [], lbIdx = 0, lbTitle = "";
  function showLb() { lbImg.src = img(lbList[lbIdx]); lbImg.alt = lbTitle; lbCap.textContent = `${lbTitle} — ${lbIdx + 1} / ${lbList.length}`; }
  function openLightbox(list, title) { lbList = list; lbIdx = 0; lbTitle = title; showLb(); lb.hidden = false; document.body.style.overflow = "hidden"; }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
  lb.addEventListener("click", (e) => {
    const a = e.target.dataset.lb;
    if (a === "close" || e.target === lb) closeLb();
    if (a === "prev") { lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; showLb(); }
    if (a === "next") { lbIdx = (lbIdx + 1) % lbList.length; showLb(); }
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") lb.querySelector("[data-lb=prev]").click();
    if (e.key === "ArrowRight") lb.querySelector("[data-lb=next]").click();
  });

  /* --------------------------- header & menu ---------------------------- */
  const header = document.querySelector(".header");
  const burger = document.getElementById("burger");
  const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  document.getElementById("nav").addEventListener("click", (e) => { if (e.target.closest("a")) { header.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); } });
  document.getElementById("lang").addEventListener("click", (e) => {
    const l = e.target.dataset.lang;
    if (!l || l === lang) return;
    lang = l; localStorage.setItem(STORE, l); render();
  });

  render();
})();
