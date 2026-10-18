# The Interactive Nightstand · Pip & haX.baby

Track 1 (Pip, The Skull Baby) · **Concept C** for the "Baby's First Website" hackathon.

A single-screen, **zero-scroll** nightstand where four physical objects on a desk each
open a retro content modal. Built from the Stitch prototype in the project
*"The Interactive Nightstand"* (screen `7745c3c2ce0148578773b986685db780`), implementing
the rules in [`PRD.md`](./PRD.md) and [`design.md`](./design.md).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
```

## Stack (per PRD §2)

| Concern      | Choice                                              |
| ------------ | --------------------------------------------------- |
| Framework    | React 19 + Vite 7                                   |
| Styling      | Tailwind CSS 4 (haX.baby palette tokens)            |
| State        | `useState` for modals, theme, sound, paging         |
| Animation    | Framer Motion (modal pop-ins, story page fades)     |
| Audio        | Web Audio API synth — no audio files, no network    |
| Confetti     | `canvas-confetti` for the Easter egg                |

## PRD → implementation map

**Core requirements (§3)**

- `100dvh` / `overflow-hidden` root — the page itself never scrolls (verified programmatically).
- Desktop desk scene (≥768px): wall mobile (top-left), lullaby box (left desk), Pip portrait
  (center anchor), dream lantern (right desk) — organic float/sway, all absolutely positioned
  over a desk surface occupying the bottom 40%.
- Mobile (<768px): "Responsive Chaos Mode" — 2×2 polaroid scrapbook grid, 166×166px tap targets
  (safety threshold is 64px), plus a 4-across variant for very short landscape phones.
- Day/Night physical pull-cord in the header toggles Tailwind's `dark` class on `<html>`.
- Five modals with heavy blurred backdrop, oversized `[X]`, and four ways to close:
  backdrop click, `[X]`, footer button, `Escape`.
- Custom sparkle cursor with trailing lag (`requestAnimationFrame` lerp, ~0.28 easing) that morphs
  into a golden star over anything clickable; auto-disabled for coarse pointers.
- Global mute toggle **pinned to the bottom-right corner** of the footer.

**Tier-2 & craft**

- **Easter egg**: an unlabelled `✦` scratched into the desk wood (desktop) and a tiny star sticker
  in the mobile scrapbook header. Clicking either fires brand-colored confetti + a toast.
- **Origin story modal** uses a click-to-flip 3-page pager with Framer Motion fades (PRD §3.2).
- **Lullaby Lab** modal plays live Web Audio tones (Do/Mi/Sol/Star) from four pedal buttons.
- **Nightlight** modal has interactive color swatches that update the label/preview live.
- Night mode reveals glows (`drop-shadow-glow-berry` on the lantern and Pip, gold glow in day hover).
- Assets are the four official PNGs from the Stitch project, copied to `public/assets/` and
  pre-loaded on mount so the desk never renders empty.

## Notes / deliberate decisions

- **Web Audio API instead of `use-sound`**: `use-sound` requires hosted audio files; design.md §4
  explicitly asks for synthesized "mechanical clack or chime via Web Audio API". All SFX are
  generated live in `src/lib/audio.js`.
- **Ambient lullaby omitted**: autoplay is blocked without a gesture and would fight the
  zero-distraction judging criterion; SFX on every interaction cover the audio requirement.
- **Mute toggle in the footer, not the header** (the Stitch prototype had it top-right): PRD §3
  and design.md §4 both require it pinned to the bottom right.
- `prototype_1280.html` is the original Stitch prototype export, kept as reference only — it is
  not part of the app.

## Verification performed

- `npm run build` — clean.
- Lighthouse: **Accessibility 100 · Best Practices 100** (SEO 83 = no `robots.txt` on localhost).
- Custom WCAG AA contrast scan: **0 violations** in both Day and Night modes.
- Interaction tests: all 5 modals, Escape/backdrop/`[X]`/footer close, theme toggle, mute toggle,
  story paging, tone generator, Easter egg — with zero console errors.
- Layout tests at 1000×700 desktop and 375×667 phone: zero page scroll, nothing escapes the
  viewport, all images load.

## Structure

```
index.html               # fonts (Fredoka + Space Mono), root mount
vite.config.js           # React + Tailwind plugins, base './'
src/
  App.jsx                # layout, header/pull-cord/footer, modal routing, Easter egg
  index.css              # design tokens, 100dvh rules, animations, cursor CSS
  lib/audio.js           # Web Audio clack/chime engine + mute state
  lib/assets.js          # official PNG paths + preloader
  components/
    DeskScene.jsx        # desktop nightstand (4 objects + desk + egg star)
    ScrapbookWall.jsx    # mobile 2x2 polaroid grid
    RetroModal.jsx       # framer-motion modal shell
    modalContent.jsx     # the five modal bodies
    Cursor.jsx           # trailing sparkle cursor
public/assets/           # pip-portrait, lullaby-box, dream-lantern, wall-mobile (.png)
```
