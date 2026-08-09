# Nalanda T&P Cell — Training & Placement Portal

A responsive, dependency-light Training & Placement Cell website built for **Nalanda College of Engineering, Chandi**. It's a fully working front-end prototype: every listed feature runs in the browser against a mock data layer, so you can demo the entire student ↔ recruiter flow with no server to stand up.

> **Design concept:** the site's signature element is the *Live Placement Ledger* — a scrolling ticker styled like an old manuscript ledger crossed with a stock ticker. It's a deliberate nod to Nalanda's own history (the Mahavihara ruins are famous red-brick architecture, echoed here in the brick/ink/brass palette) fused with the real-time, transactional feel a placement cell needs.

---

## ✨ Features

### Core
- **Company listings** — filterable grid (open / upcoming / closed, search) with a full profile modal per company (eligibility, CTC, openings, drive date).
- **Live placement ledger** — homepage ticker simulating real-time offer/shortlist/registration notifications.
- **Drive calendar + application tracker** — register for a drive from `drives.html`; it's saved to `localStorage` and immediately shows up in **My Applications** on both the drives page and the student dashboard, with deadline countdowns.
- **Resource hub** — resume templates, interview question banks, skill courses, communication guides, filterable by category.
- **Contact & office hours** — address, T&P officer, office-hours table, and a contact form.
- **Student & recruiter login/dashboards** — tabbed mock authentication (`login.html`) that routes to a role-specific dashboard.

### Innovative additions (implemented)
- **AI-powered job recommendation engine** — `student-dashboard.html → AI Job Match`. Students self-rate 11 skills; a rule-based scoring model (`roleWeights` in `assets/js/data.js`) weighs each open role's actual requirements against that profile and ranks companies by match %.
- **Skill Gap Analyzer** — same skill profile, compared against a chosen target role, ranks the biggest point-gaps to close first.
- **Mock interview scheduler with recording flag + feedback** — book a technical/HR/GD/case-study slot, mark it complete, and receive mentor-style scored feedback (demo-randomized; wire to a real rubric/API for production).
- **Alumni success stories & mentor connect** — alumni cards with a "request mentorship" flow and a general mentor-request form.
- **Recruiter analytics dashboard** — `recruiter-dashboard.html → Funnel Analytics`, showing Applied → Shortlisted → Interviewed → Offered funnels and conversion rates per drive, plus an "offers by company" bar chart, all rendered with dependency-free CSS/SVG-style bars.
- **Recruiters can post a drive** — form-based drive creation that updates the recruiter's own KPI counts (a stand-in for it appearing on the live calendar).
- **Applicant tracking** — recruiter view of mock applicants with match scores, shortlist/reject actions.

### Not implemented in this prototype (noted for the real build)
Automated email notifications and a discussion forum are represented by **toast confirmations** (e.g. "confirmation sent to your email") rather than real email sends or persisted multi-user posts, since both need a backend. See **Next steps** below for how to wire them up for real.

---

## 🧱 Tech stack

- **HTML5 / CSS3** — no build step, no framework. One shared design system in `assets/css/style.css` (custom properties for color/type/spacing).
- **Vanilla JavaScript (ES6+)** — no bundler required.
- **`localStorage`** stands in for a database in this prototype: sessions, applications, mock-interview bookings, skill profiles, and recruiter-posted drives all persist per-browser.
- **Google Fonts**: Fraunces (display serif), Inter (UI/body), JetBrains Mono (data/ticker).
- Zero npm dependencies — the whole site is static files, so it deploys anywhere that serves HTML.

## 📁 Project structure

```
nalanda-tp/
├── index.html                 # Home — hero, live ledger, stats, previews
├── companies.html             # Company listings + profile modal
├── drives.html                # Drive calendar + application tracker
├── resources.html             # Resource hub
├── alumni.html                # Alumni stories + mentor request
├── contact.html                # Office hours + contact form
├── login.html                 # Student / recruiter mock auth
├── student-dashboard.html     # AI match, skill gap, mock interviews, applications, profile
├── recruiter-dashboard.html   # Post drive, funnel analytics, applicants
├── assets/
│   ├── css/style.css          # Design system (tokens, components, responsive rules)
│   └── js/
│       ├── data.js            # Mock data: companies, drives, alumni, resources, role weights
│       ├── main.js            # Nav, ledger render, toasts, footer year
│       ├── auth.js            # localStorage mock session handling
│       └── dashboard.js       # Dependency-free bar/funnel chart renderers
└── README.md
```

## 🚀 Run locally

No install needed — it's static HTML.

```bash
# Option A: just open it
open index.html          # macOS
start index.html         # Windows

# Option B: serve it (recommended, avoids any file:// quirks)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## ☁️ Deploy (pick one, ~2 minutes)

**Netlify (drag-and-drop):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `nalanda-tp` folder in
3. You get a live URL instantly — add a custom domain from Site settings if you have one

**Vercel:**
```bash
npm i -g vercel
cd nalanda-tp
vercel --prod
```

**GitHub Pages:**
```bash
cd nalanda-tp
git init
git add .
git commit -m "Nalanda T&P Cell website"
git branch -M main
git remote add origin https://github.com/<your-username>/nalanda-tp.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from branch → `main` / root**. Your site will be live at `https://<your-username>.github.io/nalanda-tp/`.

## 🔑 Try it out

- **Student login:** `login.html` → any name/email/password (it's a demo — nothing is verified)
- **Recruiter login:** `login.html?as=recruiter` → any details
- Data resets if you clear browser `localStorage`; there's no shared backend, so each browser has its own "database."

## 🔮 Next steps for a production build

| Feature | What to add |
|---|---|
| Real accounts | Replace `assets/js/auth.js` with real auth (e.g. Firebase Auth, Auth0, or a custom JWT API) |
| Persistent data | Move `assets/js/data.js` content into a real database (Postgres/MongoDB) behind a REST/GraphQL API |
| Email notifications | Hook drive registration / deadline events to a transactional email service (SendGrid, Postmark) or a cron job for reminders |
| Discussion forum | Add a `forum` table + real-time updates (e.g. Supabase Realtime or Socket.io) |
| Video mock interviews | Integrate a WebRTC/recording SDK (e.g. Daily.co, Twilio Video) in place of the current scheduling-only flow |
| AI recommendations | Swap the rule-based `roleWeights` scorer for an embeddings-based model (e.g. resume text + job description similarity) once you have real resume data |
| Recruiter analytics | Replace mock `funnels` data with real aggregation queries over applications |

---

Built for the Training & Placement Cell, Nalanda College of Engineering, Chandi.
