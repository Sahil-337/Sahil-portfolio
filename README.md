# Mohammed Sahil — Portfolio (v2)

Interactive Data Science & Analytics portfolio. React + Vite + Tailwind. Dark mode, sticky nav, dashboard previews, filterable projects, leadership cards, achievements, and a categorized skill stack.

---

## Quick start

```bash
# Requires Node 18+
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → /dist
npm run preview      # preview the built site locally
```

---

## Drop these two assets into `/public/`

1. **`profile.jpg`** — your professional headshot. The hero will gracefully fall back to `MS` initials if missing.
2. **`Mohammed-Sahil-Resume.pdf`** — already included; replace any time.

---

## Where to update content

All copy lives in **`src/data/content.js`**:

- `profile` — name, location, contact, file paths
- `hero` — headline, subheadline, badges, snapshot KPIs
- `about`
- `dashboards` — three interactive dashboard previews
- `projects` — filterable project cards (categories: Analytics / AI/ML / BI / Data Engineering / Research)
- `experience` — timeline roles
- `leadership` — TEDx + SoReMo + degree (with external links)
- `achievements` — flat list with icons
- `skillStack` — categorized skills with `Core / Strong / Working / Familiar` strength labels
- `coreStack` — highlighted "most-used" pills

Edit there, save, and the site updates live in dev.

---

## Folder structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── public/
│   ├── Mohammed-Sahil-Resume.pdf
│   ├── favicon.svg
│   └── README-ASSETS.txt           ← drop profile.jpg here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js              ← all copy lives here
    ├── hooks/
    │   ├── useTheme.js
    │   └── useActiveSection.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Dashboards.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Leadership.jsx
        ├── Achievements.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        ├── Charts.jsx               ← all custom SVG charts
        ├── SectionHeader.jsx
        ├── BackToTop.jsx
        └── Footer.jsx
```

---

## Deploy on Vercel

This is a standard Vite project — Vercel auto-detects everything.

1. Create a GitHub repo and push:
   ```bash
   git init
   git add .
   git commit -m "portfolio v2"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/sahil-portfolio.git
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) → **Add New → Project** → import the repo
3. Build defaults (no changes needed):
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

If you're updating an existing Vercel project, just push to `main` — Vercel redeploys automatically.

---

## Deploy on Netlify (alt)

- Build command: `npm run build`
- Publish directory: `dist`

Or drag the `/dist` folder into Netlify after `npm run build`.

---

## Features at a glance

- ✅ Sticky navbar with active section highlighting
- ✅ Dark / light mode toggle with persisted preference (no flash on load)
- ✅ Smooth scroll, back-to-top button, accessible focus states
- ✅ Hero with profile + analytics snapshot card
- ✅ 3 interactive dashboards (tab switching, expandable details, custom SVG charts)
- ✅ Filterable projects (All / Analytics / AI/ML / BI / Data Engineering / Research)
- ✅ Vertical experience timeline
- ✅ Leadership cards with TEDx + SoReMo external links
- ✅ Achievements grid with icon-coded categories
- ✅ Skill stack with category filter, search, strength bars
- ✅ All charts are custom SVG — no chart library
- ✅ Single content file for all copy

Production bundle: ~62 KB JS gzipped, ~6 KB CSS gzipped.
