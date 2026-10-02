# Sohil Khan — Portfolio

A placement-ready personal portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Before you deploy

1. Add your real photo at `public/profile.jpg`.
2. Add your resume at `public/Sohil-Resume.pdf`.
3. Add your certificate PDFs under `public/certificates/`.
4. Wire up the contact form in `src/components/Contact.jsx` — set the
   `FORM_ENDPOINT` constant to a Formspree URL, or swap in EmailJS / your
   own backend (see the comment block at the top of that file). Right
   now the form validates input but does not send anything anywhere,
   by design.
5. Update `src/data/portfolioData.js` any time your projects, skills,
   or education change — every section reads from that one file.

## Project structure

```
src/
  components/   UI for each section (Navbar, Hero, About, ...)
  data/         portfolioData.js — all real content lives here
  hooks/        useTheme (dark/light + localStorage), useScrollAnimation
  App.jsx       assembles the page
  index.css     design tokens + resets + shared utilities
  App.css       per-section layout and styling
```

## Notes

- Dark/light theme is remembered via `localStorage` and defaults to the
  visitor's OS preference on first visit.
- Scroll-reveal animations use Intersection Observer and respect
  `prefers-reduced-motion`.
- No fake GitHub stats, fake certificate links, or fake project numbers
  are included — replace the placeholder asset paths with your real
  files when ready.
