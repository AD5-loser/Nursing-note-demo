const $ = (s, root = document) => root.querySelector(s);

function paperCount(subject) {
  return Object.values(subject.exams || {}).reduce((n, e) => n + (e.written ? 1 : 0) + (e.mcq ? 1 : 0), 0);
}
function subjectCount() {
  return nursingData.years.reduce((n, y) => n + y.subjects.length, 0);
}
function totalPapers() {
  return nursingData.years.reduce((n, y) => n + y.subjects.reduce((a, s) => a + paperCount(s), 0), 0);
}
function availableYears() {
  const ys = nursingData.years.flatMap(y => y.subjects.flatMap(s => Object.keys(s.exams || {}).map(Number))).filter(Boolean);
  return ys.length ? `${Math.min(...ys)}–${Math.max(...ys)}` : "—";
}

function renderHome() {
  const grid = $("#yearGrid");
  if (!grid) return;
  $("#paperStat").textContent = totalPapers() || "91";
  $("#subjectStat").textContent = subjectCount() || "7";
  $("#yearStat").textContent = availableYears() === "—" ? "2018–2024" : availableYears();

  grid.innerHTML = nursingData.years.map((year, i) => {
    const live = year.status === "live";
    const count = year.subjects.length;
    return `<a class="year-card ${live ? "" : "disabled"}" ${live ? `href="app.js?year=${encodeURIComponent(year.id)}"` : 'aria-disabled="true" tabindex="-1"'} data-year="${year.id}">
      <span class="card-index">0${i + 1}</span>
      <div class="card-main"><h3>${year.label}</h3><p>${live ? `${count} subject${count === 1 ? "" : "s"} available` : "Coming soon"}</p></div>
      <span class="arrow">${live ? "→" : "—"}</span>
    </a>`;
  }).join("");

  grid.querySelectorAll(".year-card:not(.disabled)").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      renderYear(card.dataset.year);
      history.pushState({ year: card.dataset.year }, "", `#${card.dataset.year}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderYear(id) {
  const year = nursingData.years.find(y => y.id === id);
  if (!year) return;
  const main = document.querySelector("main");
  const cards = year.subjects.map(s => `
    <a class="subject-card" href="#" data-subject="${encodeURIComponent(s.code)}">
      <span class="subject-code">${s.code}</span>
      <h3>${s.name}</h3>
      <span class="tag">${s.category}</span>
      <div class="subject-meta"><span>${paperCount(s)} papers</span><span>→</span></div>
    </a>`).join("");

  main.innerHTML = `<section class="inner-page container">
    <nav class="breadcrumbs"><a href="#" id="homeCrumb">Home</a><span>/</span><span>${nursingData.programme}</span><span>/</span><span>${year.label}</span></nav>
    <div class="page-title"><p class="eyebrow">${nursingData.programme}</p><h1>${year.label}</h1><p>${year.subjects.length} subjects currently listed</p></div>
    <div class="subject-grid">${cards || `<div class="empty-state">Subjects coming soon.</div>`}</div>
  </section>`;

  $("#homeCrumb").addEventListener("click", e => { e.preventDefault(); location.hash = ""; location.reload(); });
  document.querySelectorAll(".subject-card").forEach(card => card.addEventListener("click", e => {
    e.preventDefault();
    const subject = year.subjects.find(s => s.code === decodeURIComponent(card.dataset.subject));
    renderSubject(year, subject);
    history.pushState({ subject: subject.code }, "", `#${year.id}/${subject.code}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
}

function renderSubject(year, subject) {
  const main = document.querySelector("main");
  const years = Object.keys(subject.exams || {}).sort((a,b) => Number(b)-Number(a));
  main.innerHTML = `<section class="inner-page container">
    <nav class="breadcrumbs"><a href="#" id="backYear">${year.label}</a><span>/</span><span>${subject.name}</span></nav>
    <div class="page-title"><p class="eyebrow">${subject.code} · ${subject.category}</p><h1>${subject.name}</h1><p>Previous examination papers</p></div>
    <div class="exam-list">${years.length ? years.map((yr, i) => {
      const e = subject.exams[yr];
      return `<article class="exam-item ${i === 0 ? "open" : ""}">
        <button class="exam-header" aria-expanded="${i === 0}"><span>${yr}</span><span>+</span></button>
        <div class="exam-content"><div class="exam-actions">
          ${e.written ? `<a class="paper-btn primary" target="_blank" rel="noopener" href="${e.written}">Written ↗</a>` : ""}
          ${e.mcq ? `<a class="paper-btn secondary" target="_blank" rel="noopener" href="${e.mcq}">MCQ ↗</a>` : ""}
          ${!e.written && !e.mcq ? `<span class="unavailable">No paper available</span>` : ""}
        </div></div>
      </article>`;
    }).join("") : `<div class="empty-state">No examination papers have been added yet.</div>`}</div>
  </section>`;

  $("#backYear").addEventListener("click", e => { e.preventDefault(); renderYear(year.id); history.pushState({ year: year.id }, "", `#${year.id}`); });
  document.querySelectorAll(".exam-header").forEach(btn => btn.addEventListener("click", () => {
    const current = btn.closest(".exam-item");
    document.querySelectorAll(".exam-item").forEach(x => { if (x !== current) { x.classList.remove("open"); $(".exam-header", x).setAttribute("aria-expanded","false"); }});
    current.classList.toggle("open");
    btn.setAttribute("aria-expanded", current.classList.contains("open"));
  }));
}

function setupSearch() {
  const input = $("#subjectSearch"), results = $("#searchResults");
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.hidden = true; $("#yearGrid").hidden = false; return; }
    const found = nursingData.years.flatMap(y => y.subjects.map(s => ({...s, year:y.label}))).filter(s => `${s.name} ${s.code} ${s.category}`.toLowerCase().includes(q));
    results.hidden = false; $("#yearGrid").hidden = true;
    results.innerHTML = found.length ? `<div class="section-heading"><div><p class="eyebrow">SEARCH RESULTS</p><h2>${found.length} subject${found.length > 1 ? "s" : ""} found</h2></div></div><div class="subject-grid">${found.map(s => `<a class="subject-card" href="#" data-code="${s.code}"><span class="subject-code">${s.code}</span><h3>${s.name}</h3><span class="tag">${s.category}</span><div class="subject-meta"><span>${s.year}</span><span>→</span></div></a>`).join("")}</div>` : `<div class="empty-state">No subjects found for “${input.value}”.</div>`;
  });
  document.addEventListener("keydown", e => { if (e.key === "/" && document.activeElement !== input && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }});
}
function setupMenu() {
  const btn = $(".menu-toggle"), nav = $(".nav-links");
  if (!btn) return;
  btn.addEventListener("click", () => { const open = nav.classList.toggle("show"); btn.setAttribute("aria-expanded", open); });
}
document.addEventListener("DOMContentLoaded", () => { renderHome(); setupSearch(); setupMenu(); });
