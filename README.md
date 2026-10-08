# TruthSayer App Mockup

Vanilla JS single-page mockup (hash routing), built with Vite.

```
npm install
npm run dev      # local dev server
npm run build    # outputs to dist/
```

- `index.html` — app shell markup
- `src/styles.css` — design tokens, layout and component styles (dark/light themes)
- `src/main.js` — data, view renderers, router and event handling

## Mobile app (`/mobileview`)

- `mobileview/index.html` — `/mobileview`: shows the app in a phone frame on desktop, full screen on phones (installable via "Add to Home Screen"). Deep links work, e.g. `/mobileview#alerts`.
- `mobileview/app.html` — the mobile app itself: same `src/main.js`, with an app header, bottom tabs + "More" sheet.
- `src/mobile.css` — mobile-only styles, scoped under `html.m` (bottom sheets, full-screen stories, touch feedback).
- `public/mobileview/` — PWA manifest and icon.

Deploys to Vercel as a Vite project (build command `npm run build`, output `dist`).
