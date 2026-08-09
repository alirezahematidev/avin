# Avin Abkhiz — Portfolio

React + TypeScript + Vite. One page, no router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```

## Structure

- `src/App.tsx` — page order
- `src/components/` — one file per section; `Shot.tsx` renders the screenshots
- `src/assets/` — the 21 webp screenshots + `index.ts` (src + intrinsic size, so lazy images reserve their space)
- `src/index.css` — all styling, plain CSS with custom properties

## Deploy

**GitHub Pages** — pushing to `main` runs `.github/workflows/deploy.yml`. Enable it once under
Settings → Pages → Source: *GitHub Actions*. `base: './'` in the Vite config keeps asset paths
correct under `/<repo>/`.

**Liara** — `public/liara.json` declares the static platform and ships inside the build:

```bash
npm run build
liara deploy --path dist
```
