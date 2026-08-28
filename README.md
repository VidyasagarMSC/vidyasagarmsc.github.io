🔆 Always evolving ;)

[![Github action status](https://github.com/VidyasagarMSC/vidyasagarmsc.github.io/actions/workflows/actions.yml/badge.svg)](https://github.com/VidyasagarMSC/vidyasagarmsc.github.io/actions/workflows/actions.yml)

### Personal website of Vidyasagar (Sarath Chandra) Machupalli

Built with **pure HTML, CSS and vanilla JavaScript** — no build step, no Node.js. Features dark/light mode, responsive design, interactive research portal with knowledge graph visualization. Works directly via `file://` and any static HTTP server.

**Tech Stack:** HTML5 · CSS Custom Properties · Vanilla JS · Font Awesome · Google Fonts

**Run locally (any one):**
```
# Option 1: just open file
open index.html

# Option 2: local HTTP server
python3 -m http.server 8000
# then open http://localhost:8000
```

**Scrapers (optional, Python only):**
```
pip install -r requirements.txt
python3 scrape.py
python3 scrape_citations.py
python3 scrape_latest_posts.py
```

**Deploy:**
```
bash deploy.sh
```
Configure GitHub Pages to serve from `master` / `main` branch root (no build).
