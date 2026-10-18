import { IMG, IMG_DIMS } from '../lib/assets.js'

/**
 * Desktop / tablet isometric nightstand (>= 768px).
 * Strictly 100dvh, zero-scroll: four organic objects sitting on a desk that
 * occupies the bottom 40% of the viewport (design.md §2 and §3).
 */
export default function DeskScene({ onOpen, onEasterEgg }) {
  return (
    <div
      id="desktop-room"
      className="hidden md:flex flex-1 w-full h-full relative items-center justify-center overflow-hidden z-10"
    >
      {/* ---------------------------------------------- */}
      {/* Hanging Wall Mobile & Sketchbook (top-left wall) */}
      {/* ---------------------------------------------- */}
      <div className="absolute inset-0 room-objects">
        <button
          type="button"
          onClick={() => onOpen('story')}
          title="Pip's Celestial Mobile &amp; Dream Logbook"
          className="anim-sway interactive-obj group absolute top-6 left-12 z-20"
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
        <div className="absolute top-6 right-16 z-10 hidden lg:block pointer-events-none">
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
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('lullaby')}
          title="Pip's Lullaby Box (Click to open Project 1)"
          className="interactive-obj group absolute bottom-[10%] left-[8%] lg:left-[14%] z-20"
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
        {/* CENTER ANCHOR: Pip (floating above the desk)    */}
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
        {/* RIGHT DESK: Pip's Dream Lantern (Project 2)     */}
        {/* ---------------------------------------------- */}
        <button
          type="button"
          onClick={() => onOpen('lantern')}
          title="Pip's Dream Lantern (Click for Project 2)"
          className="interactive-obj group absolute bottom-[10%] right-[8%] lg:right-[14%] z-20"
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

      {/* ---------------------------------------------- */}
      {/* THE DESK SURFACE (bottom 40% anchor)            */}
      {/* ---------------------------------------------- */}
      <div className="absolute bottom-0 w-full h-[40%] bg-wood/10 dark:bg-white/5 border-t-4 border-berry flex items-center justify-center transition-colors duration-700 z-10">
        {/* Wood-grain retrace pattern */}
        <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#5c4033_0,#5c4033_2px,transparent_0,transparent_16px)] dark:bg-[repeating-linear-gradient(45deg,#a34063_0,#a34063_2px,transparent_0,transparent_16px)]" />
        {/* Desk felt mat */}
        <div className="absolute -top-6 w-[86%] max-w-5xl h-full border-x-4 border-t-4 border-berry/40 rounded-t-3xl bg-[#f7ebe0]/50 dark:bg-[#25151c]/60 backdrop-blur-[2px]" />

        {/* EASTER EGG: an unlabelled star cracked into the desk grain.
            Clicking it fires brand-colored confetti. */}
        <button
          type="button"
          onClick={onEasterEgg}
          title=""
          aria-label="✦ a curious little star scratched into the desk"
          className="interactive-obj absolute left-[36%] top-[42%] text-berry dark:text-sun hover:scale-125 transition-transform text-xl anim-twinkle z-20"
        >
          ✦
        </button>
      </div>
    </div>
  )
}
