# Mohammed Sahil — Portfolio

Data Science & Analytics portfolio site. React + Vite + Tailwind. Single-page, fully responsive, deploys in minutes.

---

## Local setup

```bash
# 1. Install Node.js 18+ if you don't have it: https://nodejs.org
# 2. In this folder:
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

To build a production bundle:

```bash
npm run build    # outputs to /dist
npm run preview  # preview the built site locally
```

---

## Replace the resume PDF

1. Drop your latest PDF into `/public/`
2. Name it exactly `Mohammed_Sahil_Resume.pdf`
3. (Or change the filename and update `profile.resumePath` in `src/data/content.js`)
4. Commit and redeploy

---

## Update content

All copy lives in one file: **`src/data/content.js`**.

- Hero headline / subheadline / badges
- About paragraphs + highlights
- Skills groups
- Experience roles + bullets
- Projects (case studies with problem / approach / tools / impact)
- Education + certifications
- Target roles + contact info

Edit there, save, and the site updates live in `npm run dev`.

---

## Deploy to Vercel (recommended)

1. Create a new GitHub repo (e.g. `sahil-portfolio`)
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sahil-portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → **Add New → Project**
4. Import the GitHub repo
5. Vercel auto-detects Vite — leave defaults:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy**. You'll get a URL like `sahil-portfolio.vercel.app` in about 60 seconds.
7. (Optional) Add a custom domain in **Settings → Domains**.

---

## Deploy to Netlify (alternative)

1. Push to GitHub (same as above)
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
3. Pick your repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**

Or drag the `/dist` folder into the Netlify dashboard after running `npm run build` locally.

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
├── public/
│   ├── Mohammed_Sahil_Resume.pdf
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── SectionHeader.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Visuals.jsx
        ├── Education.jsx
        ├── Resume.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
