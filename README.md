# Portfolio Website

A single-page portfolio with three tabs: Projects, Publications, and
Photography — built from the `concept images/` drafts.

## Structure

- `index.html` — page markup: header (name, tagline, resume/Medium/LinkedIn
  links), tab bar, and an empty container per tab that JS fills in
- `css/style.css` — all styling (colors, layout, responsive rules)
- `js/main.js` — tab switching, plus fetching each `data/*.json` file and
  rendering its entries into the matching tab
- `data/projects.json` — one object per project (`title`, `description`,
  `thumbLabel`, `links: [{ label, icon, url }]`)
- `data/publications.json` — same shape as projects (`description` can
  contain simple inline HTML, like the `<b>` in the sample entry)
- `data/photography.json` — one object per photo (`image`, `alt`, `caption`)
- `assets/icons/` — downloaded brand icons (GitHub, LinkedIn, Medium,
  Instagram, recolored for light/dark backgrounds) plus two hand-drawn
  generic icons (resume, link)
- `assets/photos/` — the photography images, resized for web
- `assets/resume.pdf` — not included yet; add your resume here or update the
  link in `index.html`

## Customizing

- Replace the name and tagline directly in `index.html`.
- Add, remove, or edit projects/publications/photos by editing the
  corresponding `data/*.json` file — no HTML editing needed.
- Swap any `"url": "#"` placeholder in the JSON with your real links.

## Running locally

This now fetches the JSON files, which most browsers block over `file://`.
Serve the folder instead:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
