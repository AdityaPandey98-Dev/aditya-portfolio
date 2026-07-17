# Aditya Kumar Pandey — Portfolio

Personal portfolio website of **Aditya Kumar Pandey**, a Java Full Stack Developer with 3.4+ years of experience building scalable microservices, secure REST APIs, and cloud-native applications with Java, Spring Boot, Spring Cloud, and React.js.

**Live site:** _add your deployed URL here once live, e.g. https://adityapandey98.dev_

---

## About this project

A fast, responsive, single-page portfolio built with **Vite + React**, styled with a dark navy theme accented in teal and amber. It presents experience, projects, and skills in a clean, recruiter-friendly layout — including an animated terminal widget in the hero section that types out a quick developer intro.

## Features

- ⚡ Built with Vite for instant dev server startup and fast production builds
- 🧩 Fully componentized — every section (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Contact`) has its own `.jsx` and `.css` file
- 🎨 Custom dark theme with CSS variables for easy re-theming (`src/index.css`)
- 💻 Animated terminal signature element in the hero
- 📱 Fully responsive — desktop, tablet, and mobile with a collapsible nav menu
- 📧 Email links open Gmail's web compose directly (no dependency on a desktop mail client)
- 🗂 All resume content centralized in one file (`src/data.js`) for easy editing

## Tech stack

| Category | Tools |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Plain CSS with custom properties (no framework) |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Deployment | Vercel / Netlify (static build output) |

## Project structure

```
aditya-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx / App.css
    ├── index.css              # design tokens: colors, fonts, spacing
    ├── data.js                # all resume content in one place
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx   / .css  # animated terminal signature
        ├── About.jsx  / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx   / .css
        ├── Education.jsx  / .css
        ├── Contact.jsx    / .css
        └── Footer.jsx     / .css
```

## Getting started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repo
git clone https://github.com/AdityaPandey98-Dev/aditya-portfolio.git
cd aditya-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

### Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deployment

This is a static site — deploy the `dist/` folder anywhere that serves static files.

**Vercel (recommended):**
1. Push this repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) → Add New Project.
3. Framework preset "Vite" is auto-detected → Deploy.

**Netlify:**
1. Import the repo at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`, publish directory: `dist`.

Every push to `main` redeploys automatically on either platform.

## Editing content

All text on the site — name, summary, work experience, projects, skills, education, achievements — lives in **`src/data.js`**. Update that single file and every section reflects the change; no need to touch component code.

## Contact

- **Email:** adityapandey98.dev@gmail.com
- **GitHub:** [github.com/AdityaPandey98-Dev](https://github.com/AdityaPandey98-Dev)
- **Location:** Chennai, Tamil Nadu, India

## License

This project is personal portfolio code. Feel free to fork it for inspiration, but please swap in your own content before publishing it as your own.
