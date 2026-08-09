/* ============================================================
   MAIN — shared behaviour across every page
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderLedger();
  stampFooterYear();
  highlightActiveNav();
  wireCurrentUserBadge();
});

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const cta = document.querySelector(".nav-cta");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    cta.classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () => { links.classList.remove("open"); cta.classList.remove("open"); })
  );
}

function highlightActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if (a.dataset.page === path) a.classList.add("active");
  });
}

/* ---------- Live placement ledger (signature ticker) ---------- */
const LEDGER_EVENTS = [
  { t: "2 min ago", text: "TCS", detail: "released 14 offers in the Ninja band @ ₹4.5 LPA", tag: "OFFERS OUT" },
  { t: "18 min ago", text: "Deloitte", detail: "registration closes in 2 days — 96 applicants so far", tag: "CLOSING SOON" },
  { t: "1 hr ago", text: "Rahul Kumar (CSE)", detail: "accepted an offer from Sterling Tech Labs @ ₹9 LPA", tag: "PLACED" },
  { t: "3 hrs ago", text: "Zoho Corporation", detail: "shortlisted 58 candidates for the coding round", tag: "SHORTLIST" },
  { t: "5 hrs ago", text: "Infosys", detail: "drive confirmed for 28 Sep — registration opens Monday", tag: "NEW DRIVE" },
  { t: "Yesterday", text: "Priya Raj (ECE)", detail: "accepted an offer from Bosch @ ₹6 LPA", tag: "PLACED" }
];

function renderLedger() {
  const track = document.querySelector("[data-ledger]");
  if (!track) return;
  track.innerHTML = LEDGER_EVENTS.map(e => `
    <div class="ledger-row">
      <span class="t">${e.t}</span>
      <span class="arrow">»</span>
      <span><b>${e.text}</b> ${e.detail}</span>
      <span class="tag">${e.tag}</span>
    </div>
  `).join("");
}

/* ---------- Toast notifications (stand-in for real email/push alerts) ---------- */
function toast(message) {
  let root = document.getElementById("toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "toast-root";
    document.body.appendChild(root);
  }
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  root.appendChild(el);
  setTimeout(() => el.remove(), 4200);
}

function stampFooterYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Session badge (shows logged-in user's name in nav if present) ---------- */
function wireCurrentUserBadge() {
  const badge = document.querySelector("[data-user-badge]");
  if (!badge) return;
  const session = JSON.parse(localStorage.getItem("tp_session") || "null");
  if (session) {
    badge.textContent = session.name.split(" ")[0];
    badge.href = session.role === "recruiter" ? "recruiter-dashboard.html" : "student-dashboard.html";
    badge.classList.remove("hidden");
    const loginLink = document.querySelector("[data-login-link]");
    if (loginLink) loginLink.classList.add("hidden");
  }
}
