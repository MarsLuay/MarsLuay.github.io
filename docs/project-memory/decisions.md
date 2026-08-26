# Decisions

- The current page composition, styling, and interaction logic live in `index.html`.
- Tailwind CSS and anime.js are loaded directly from public CDNs in the entry point.
- Internal navigation uses stable section IDs (`hero`, `about`, `projects`, and `contact`) with client-side smooth scrolling.
