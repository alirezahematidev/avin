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
- `src/fonts/` — self-hosted Inter and JetBrains Mono, latin subset, variable (one file per style covers every weight)
- `src/index.css` — all styling, plain CSS with custom properties
- `src/useReveal.ts` — the scroll-reveal hook: tags elements, staggers siblings, observes them
- `src/components/GradientText.tsx` — vendored from [React Bits](https://reactbits.dev) via the
  shadcn CLI (`components.json` registers the `@react-bits` registry)

Tailwind v4 is installed only because that component uses its utility classes. The site's own
styling is still plain CSS in `index.css`, which is imported *after* `tailwind.css` so it wins
wherever Tailwind's preflight disagrees.

### Scroll reveals

`useReveal` adds `.reveal` to everything matching its selector list, skipping anything already
inside a revealing ancestor, and sets `--d` on siblings so they cascade. The motion itself is CSS:
a shared fade-and-rise, with screenshots scaling up, pills popping, and list rows sliding in from
the left. Every variant needs a matching `.in` rule at equal specificity or the element never
settles. `prefers-reduced-motion` turns all of it off.

### Responsive

Breakpoints at 860px (grids collapse to one column, side-by-side screenshots stack) and 560px
(tighter padding, smaller case icons, nav cue hidden). `html` uses `overflow-x: clip` because the
hero glow is meant to bleed past the viewport.

## Deploy

**GitHub Pages** — pushing to `main` runs `.github/workflows/deploy.yml`. Enable it once under
Settings → Pages → Source: *GitHub Actions*. `base: './'` in the Vite config keeps asset paths
correct under `/<repo>/`.

**Liara** — `public/liara.json` declares the static platform and ships inside the build:

```bash
npm run build
liara deploy --path dist
```
