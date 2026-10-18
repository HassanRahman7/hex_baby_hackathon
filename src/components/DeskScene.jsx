import { IMG, IMG_DIMS } from '../lib/assets.js'

/**
 * Desktop / tablet isometric nightstand (>= 768px).
 *
 * Every object is absolutely positioned against the bounded workspace
 * (`relative w-full max-w-5xl h-full mx-auto` in App.jsx) — never against
 * the raw screen — so the nightstand stays clustered at center no matter how wide
 * the monitor is. Objects use fixed pixel offsets from the container edges
 * (left-8 / right-8 …) plus a horizontally centered Pip anchor.
 *
 * Strictly 100dvh, zero-scroll: the desk itself occupies the bottom 40% of
 * the viewport (design.md §2 and §3).
 */
export default function DeskScene({ onOpen }) {
  return (
    <div id="desktop-room" className="hidden md:block absolute inset-0 z-20">
      <div className="absolute inset-0 room-objects">
        {/* ---------------------------------------------- */}
        {/* Hanging Wall Mobile & Sketchbook (top-left wall) */}
        {/* top-28 clears the retro header bar              */}
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('story')}
          title="Pip's Celestial Mobile &amp; Dream Logbook"
          className="anim-sway interactive-obj group absolute top-28 left-8 lg:left-12 z-20"
        >
          <span className="relative flex flex-col items-center">
            <img
              src={IMG.wallMobile}
              alt="Pip's celestial star mobile and dream logbook"
              width={IMG_DIMS.wallMobile.width}
              height={IMG_DIMS.wallMobile.height}
              className="w-36 lg:w-44 h-auto rounded-2xl drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-2 bg-day dark:bg-night border-2 border-berry shadow-retro-sm px-2 py-0.5 rounded-full text-[10px] font-fredoka font-bold text-berry dark:text-sun opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all flex items-center gap-1">
              <span>📖</span>
              <span>PROJECT 3 &amp; ORIGIN</span>
            </span>
          </span>
        </button>

        {/* ---------------------------------------------- */}
        {/* Cozy wall picture frame (pure decoration)       */}
        {/* ---------------------------------------------- */}
        <div className="absolute top-28 right-8 lg:right-12 z-10 hidden lg:block pointer-events-none">
          <div className="w-32 h-24 border-4 border-berry bg-[#ffe8d6] dark:bg-[#0f080c] shadow-retro-sm rounded-lg relative overflow-hidden flex flex-col items-center justify-center">
            <div className="text-[10px] font-mono text-berry dark:text-sun/70 font-bold mb-1">
              HAX COTTAGE
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl">🌙</span>
              <span className="text-xs font-mono text-wood/90 dark:text-softcream/90">
                72&deg;F COZY
              </span>
            </div>
            <div className="absolute bottom-0 w-full h-2 bg-berry/20" />
          </div>
        </div>

        {/* ---------------------------------------------- */}
        {/* LEFT DESK: The vintage Lullaby Box (Project 1)  */}
        {/* Fixed pixel offset from the container's left edge */}
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('lullaby')}
          title="Pip's Lullaby Box (Click to open Project 1)"
          className="interactive-obj group absolute bottom-[10%] left-8 lg:left-12 z-20"
        >
          <span className="relative flex flex-col items-center">
            <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
              <img
                src={IMG.lullaby}
                alt="Pip's mechanical lullaby music box"
                width={IMG_DIMS.lullaby.width}
                height={IMG_DIMS.lullaby.height}
                className="w-44 lg:w-56 h-auto rounded-2xl drop-shadow-md group-hover:anim-wiggle-on-hover"
              />
            </span>
            <span className="mt-2 bg-day dark:bg-night border-2 border-berry shadow-retro-sm px-2.5 py-1 rounded-md text-xs font-fredoka font-bold text-berry dark:text-sun group-hover:bg-sun group-hover:text-wood dark:group-hover:bg-berry dark:group-hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-sm">🎵</span>
              <span>PROJECT 1: LULLABY LAB</span>
            </span>
          </span>
        </button>

        {/* ---------------------------------------------- */}
        {/* CENTER ANCHOR: Pip (horizontally centered on the */}
        {/* container, never on the raw screen)              */}
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('pip')}
          title="Who is Pip? (Click for Character Lore)"
          className="interactive-obj group absolute bottom-[20%] left-1/2 -translate-x-1/2 z-30"
        >
          <span className="relative flex flex-col items-center">
            <span className="anim-pip-float group-hover:scale-110 transition-transform duration-300 inline-block">
              <img
                src={IMG.portrait}
                alt="Portrait of Pip the skull baby"
                width={IMG_DIMS.portrait.width}
                height={IMG_DIMS.portrait.height}
                className="w-52 lg:w-64 h-auto rounded-3xl drop-shadow-xl group-hover:drop-shadow-2xl object-contain dark:drop-shadow-glow-berry"
              />
            </span>
            <span className="-mt-4 bg-day dark:bg-[#2a131e] border-[3px] border-berry shadow-retro px-4 py-1.5 rounded-full text-sm font-fredoka font-bold text-berry dark:text-sun group-hover:scale-110 group-hover:bg-blush group-hover:text-white transition-all flex items-center gap-2">
              <span className="animate-bounce">✨</span>
              <span>WHO IS PIP? (CLICK ME!)</span>
              <span className="text-xs bg-berry text-white dark:bg-sun dark:text-wood px-1.5 py-0.5 rounded-full font-mono">
                LORE
              </span>
            </span>
          </span>
        </button>

        {/* ---------------------------------------------- */}
        {/* RIGHT DESK: Pip's Dream Lantern (Project 2)      */}
        {/* Fixed pixel offset from the container's right edge */}
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('lantern')}
          title="Pip's Dream Lantern (Click for Project 2)"
          className="interactive-obj group absolute bottom-[10%] right-8 lg:right-12 z-20"
        >
          <span className="relative flex flex-col items-center">
            <span className="group-hover:scale-105 transition-transform duration-300 inline-block">
              <img
                src={IMG.lantern}
                alt="Pip's glowing dream lantern"
                width={IMG_DIMS.lantern.width}
                height={IMG_DIMS.lantern.height}
                className="w-40 lg:w-52 h-auto rounded-2xl drop-shadow-md group-hover:drop-shadow-glow-gold dark:drop-shadow-glow-berry"
              />
            </span>
            <span className="mt-2 bg-day dark:bg-night border-2 border-berry shadow-retro-sm px-2.5 py-1 rounded-md text-xs font-fredoka font-bold text-berry dark:text-sun group-hover:bg-sun group-hover:text-wood dark:group-hover:bg-berry dark:group-hover:text-white transition-colors flex items-center gap-1.5">
              <span className="text-sm">🏮</span>
              <span>PROJECT 2: NIGHTLIGHT</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
