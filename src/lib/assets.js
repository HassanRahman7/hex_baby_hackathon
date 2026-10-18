/**
 * Official haX.baby PNG assets (exported from the Stitch project
 * "The Interactive Nightstand"). Served from /public/assets so the desk
 * never renders empty on first paint.
 */
const base = import.meta.env.BASE_URL

export const IMG = {
  portrait: `${base}assets/pip-portrait.png`,
  lullaby: `${base}assets/lullaby-box.png`,
  lantern: `${base}assets/dream-lantern.png`,
  wallMobile: `${base}assets/wall-mobile.png`,
}

/** Native dimensions, used to avoid layout shift while images stream in. */
export const IMG_DIMS = {
  portrait: { width: 341, height: 512 },
  lullaby: { width: 512, height: 462 },
  lantern: { width: 512, height: 457 },
  wallMobile: { width: 512, height: 512 },
}

/** Eagerly warm the image cache so the desk is never empty on load. */
export function preloadAssets() {
  Object.values(IMG).forEach((src) => {
    const img = new Image()
    img.decoding = 'async'
    img.src = src
  })
}
