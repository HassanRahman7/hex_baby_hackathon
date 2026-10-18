import { IMG, IMG_DIMS } from '../lib/assets.js'

const CARDS = [
  {
    id: 'pip',
    tag: '#00 \u00B7 ME',
    flag: '\u2605 LORE',
    label: 'Who is Pip?',
    img: IMG.portrait,
    alt: 'Pip the skull baby',
    dims: IMG_DIMS.portrait,
  },
  {
    id: 'lullaby',
    tag: '#01 \u00B7 AUDIO',
    flag: '\u266B LAB',
    label: 'Lullaby Lab',
    img: IMG.lullaby,
    alt: 'Pip\u2019s mechanical lullaby music box',
    dims: IMG_DIMS.lullaby,
  },
  {
    id: 'lantern',
    tag: '#02 \u00B7 GLOW',
    flag: '\u{1F3EE} LIGHT',
    label: 'Nightlight Co.',
    img: IMG.lantern,
    alt: 'Pip\u2019s glowing dream lantern',
    dims: IMG_DIMS.lantern,
  },
  {
    id: 'story',
    tag: '#03 \u00B7 ORIGIN',
    flag: '\u{1F4D6} LOG',
    label: 'Dream Routes',
    img: IMG.wallMobile,
    alt: 'Star mobile and dream logbook',
    dims: IMG_DIMS.wallMobile,
  },
]

/**
 * "Responsive Chaos Mode" (PRD section 4, design.md section 6).
 * Below 768px the desk illusion is abandoned entirely and the page snaps
 * into a scrapbook wall of thick-bordered polaroids. Every card is an
 * aspect-square tap target well over the 64x64px safety threshold.
 */
export default function ScrapbookWall({ onOpen, onEasterEgg }) {
  return (
    <div
      id="mobile-scrapbook"
      className="flex md:hidden flex-1 min-h-0 w-full flex-col justify-center px-4 py-2 z-10 overflow-hidden"
    >
      <div className="text-center mb-2">
        <h1 className="font-fredoka text-lg font-bold text-berry dark:text-sun leading-tight">
          Pip's Dreamroom Scrapbook
          <button
            type="button"
            onClick={onEasterEgg}
            aria-label={'\u2726 a curious little star sticker'}
            className="interactive-obj align-super ml-1 text-[11px] text-berry hover:text-blush dark:text-sun transition-colors anim-twinkle"
          >
            {'\u2726'}
          </button>
        </h1>
        <p className="text-[11px] font-mono text-wood/90 dark:text-softcream/90">
          Tap any polaroid sticker to inspect its dream artifact!
        </p>
      </div>

      <div className="scrapbook-grid grid grid-cols-2 gap-3 w-full max-w-sm mx-auto items-center">
        {CARDS.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onOpen(card.id)}
            className="interactive-obj polaroid-card group min-h-16 p-2 bg-white dark:bg-[#25151c] border-[3px] border-berry shadow-retro rounded-lg flex flex-col items-center justify-between aspect-square active:scale-95 transition-transform text-left"
          >
            <span className="w-full flex justify-between items-center text-[9px] font-mono text-berry dark:text-sun font-bold pb-1 border-b border-berry/20">
              <span>{card.tag}</span>
              <span>{card.flag}</span>
            </span>
            <span className="flex-1 w-full flex items-center justify-center p-1 min-h-0">
              <img
                src={card.img}
                alt={card.alt}
                width={card.dims.width}
                height={card.dims.height}
                className="polaroid-media max-h-24 rounded-lg object-contain group-hover:scale-105 transition-transform"
              />
            </span>
            <span className="w-full bg-[#fdf5ed] dark:bg-[#1a0e14] border border-berry/40 rounded px-1.5 py-1 text-center">
              <span className="font-fredoka text-xs font-bold text-berry dark:text-sun block leading-none">
                {card.label}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
