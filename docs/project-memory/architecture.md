# Architecture

- **Surface:** Static website with `index.html` as the live entry point. The page is organized into hero, about, projects, contact, and footer sections.
- **Presentation:** `index.html` contains inline CSS and Tailwind utility classes. Tailwind loads from a CDN. `style.css` is tracked but is not linked by the live entry point.
- **Motion and interaction:** Inline JavaScript moves `#blob` with pointer coordinates and `requestAnimationFrame`, recenters it on resize, and smooth-scrolls internal anchors. anime.js loads from a CDN, but no `anime.` call appears in the live script.
- **Tooling:** `package.json` declares no dependencies or build command; `npm test` runs the dependency-free `scripts/test.mjs` static smoke test.
