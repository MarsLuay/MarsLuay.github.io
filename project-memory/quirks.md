# Quirks

- `style.css` is present but not referenced by the live `index.html`; its styles do not affect the current entry point.
- anime.js is downloaded but the live blob interaction uses native SVG animation and `requestAnimationFrame`; no direct anime.js invocation is present.
- Four project cards use `href="#"` placeholders instead of destination URLs.
- Tailwind and anime.js are runtime network dependencies because they are loaded from CDNs.
