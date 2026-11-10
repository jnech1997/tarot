# Arcana — Svelte tarot reader

```bash
npm install
npm run dev      # local
npm run build    # outputs dist/
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo's `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The included workflow builds and publishes on every push.

## Card art
Rider-Waite-Smith images by Pamela Colman Smith (1909), public domain, resized from the scans in github.com/mixvlad/TarotCards (originals from steve-p.org). Files live in `public/cards/` and are named by card index.

## Text sources
- Modern meanings, symbols and life-area readings (`src/lib/cards.js`, `lore.js`, `readings.js`) are written for this project.
- `src/lib/waite.js` holds A. E. Waite's divinatory meanings from *The Pictorial Key to the Tarot* (1911), public domain, taken from the Project Gutenberg edition (eBook #43548).
