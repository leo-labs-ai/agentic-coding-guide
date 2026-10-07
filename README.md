# Agentic coding: a practical guide

A plain-language guide to working with coding agents: the harness, the agent loop, human gates, context, and how a shared setup fits together. Plus eight longer articles.

Static HTML, one stylesheet (`style.css`) and one small optional script (`site.js`). No build step. Served with GitHub Pages from the `main` branch.

## Layout

- `index.html`: the guide
- `articles/`: the articles index and eight articles
- `about.html`, `contact.html`, `404.html`

The header and footer are repeated in every page. If you change one, change them all. Links are relative so they work under the `/agentic-coding-guide/` path, except in `404.html`, which uses absolute paths because GitHub Pages serves it from any URL.

Every page carries `<meta name="robots" content="noindex, nofollow">`. Keep it.
