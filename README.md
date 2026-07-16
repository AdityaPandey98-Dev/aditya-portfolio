# Aditya Kumar Pandey — Portfolio

A Vite + React portfolio built from the resume content, with a dark, teal/amber-accented
"developer console" theme. Every section is its own component with its own `.jsx` and `.css` file.

## Run it locally

You need Node.js 18+ installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site.

```bash
npm run preview
```

lets you preview the production build locally before deploying.

## Make it live (free options)

### Option A — Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.
4. You'll get a live `https://your-project.vercel.app` URL, and it redeploys automatically on every git push.

### Option B — Netlify
1. Push this folder to a GitHub repo.
2. Go to netlify.com → "Add new site" → "Import an existing project".
3. Build command: `npm run build`, Publish directory: `dist`.
4. Deploy — you'll get a live `https://your-project.netlify.app` URL.

### Option C — GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.js`.
4. Run `npm run build && npm run deploy`.

## Editing content

All resume content (name, experience, projects, skills, education) lives in
`src/data.js` — edit that one file to update text anywhere on the site.

## Structure

```
src/
  data.js              # all resume content in one place
  App.jsx / App.css
  main.jsx
  index.css            # design tokens (colors, fonts, spacing)
  components/
    Navbar.jsx / .css
    Hero.jsx   / .css   # animated terminal signature element
    About.jsx  / .css
    Skills.jsx / .css
    Experience.jsx / .css
    Projects.jsx / .css
    Education.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
```
"# aditya-portfolio" 
