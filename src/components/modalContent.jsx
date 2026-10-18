import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IMG, IMG_DIMS } from '../lib/assets.js'
import { chime, clack } from '../lib/audio.js'

/* ------------------------------------------------------------------ */
/* MODAL 1 — WHO IS PIP? (Identity / Job / Quirks)                     */
/* ------------------------------------------------------------------ */
export function PipContent() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-4 p-3 bg-softcream/80 dark:bg-[#2b1722] border-2 border-berry/40 rounded-xl">
        <img
          src={IMG.portrait}
          alt="Pip headshot"
          width={IMG_DIMS.portrait.width}
          height={IMG_DIMS.portrait.height}
          className="w-24 h-24 rounded-xl object-cover drop-shadow"
        />
        <div className="text-center sm:text-left">
          <div className="inline-block px-2 py-0.5 bg-berry text-white text-[10px] font-mono font-bold rounded mb-1">
            JUNIOR DREAM ENGINEER
          </div>
          <h3 className="font-fredoka text-xl font-bold text-berry dark:text-sun">
            Pip The Star-Dreamer
          </h3>
          <p className="text-xs font-mono text-wood/90 dark:text-softcream/90">
            Night-shift dream tuning at haX.baby · Age: 3 dream-cycles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <FactCard icon="🏷️" title="IDENTITY">
          Part marshmallow, part early-web starlight creature. Born in a
          GeoCities guestbook.
        </FactCard>
        <FactCard icon="💼" title="THE JOB">
          Junior Dream Engineer: crafts whimsical analog bedtime interfaces and
          tests bedtime melodies for dreamers.
        </FactCard>
        <FactCard icon="✨" title="QUIRKS">
          Sleeps 18 hours/day in a wool nightcap; only writes code in 100dvh
          retro frames.
        </FactCard>
      </div>

      <div className="p-3 bg-sun/30 dark:bg-sun/10 border-l-4 border-sun rounded-r-lg">
        <p className="font-fredoka text-sm italic text-wood dark:text-sun">
          "When the digital world grows loud and cold, pull the cord, wind the
          music box, and rest your eyes."
        </p>
      </div>
    </>
  )
}

function FactCard({ icon, title, children }) {
  return (
    <div className="p-3 bg-white dark:bg-[#1a0e14] border-2 border-berry rounded-lg shadow-retro-sm">
      <span className="text-xs font-mono font-bold text-berry dark:text-sun block mb-1">
        {icon} {title}
      </span>
      <p className="text-xs text-wood dark:text-softcream/90 leading-relaxed">
        {children}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* MODAL 2 — PROJECT 1: THE LULLABY LAB (Web Audio tone generator)     */
/* ------------------------------------------------------------------ */
const TONES = [
  { label: 'C4 (Do)', freq: 261.63 },
  { label: 'E4 (Mi)', freq: 329.63 },
  { label: 'G4 (Sol)', freq: 392.0 },
  { label: 'C5 (Star)', freq: 523.25 },
]

export function LullabyContent() {
  const playTone = (freq) => {
    clack()
    chime(freq)
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <img
          src={IMG.lullaby}
          alt="Lullaby music box"
          width={IMG_DIMS.lullaby.width}
          height={IMG_DIMS.lullaby.height}
          className="w-24 h-24 rounded-xl object-cover drop-shadow"
        />
        <div>
          <span className="px-2 py-0.5 bg-sun text-wood text-[10px] font-mono font-bold rounded">
            ANALOG AUDIO HARDWARE
          </span>
          <h3 className="font-fredoka text-xl font-bold text-berry dark:text-sun mt-1">
            Mechanical Music Box v1.4
          </h3>
          <p className="text-xs font-mono text-wood/90 dark:text-softcream/90">
            Woven with 18-tooth brass comb &amp; micro-springs
          </p>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-[#1a0e14] border-2 border-berry rounded-xl shadow-retro-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-fredoka text-sm font-bold text-berry dark:text-sun">
            Interactive Tone Generator
          </span>
          <span className="text-[10px] font-mono bg-berry/10 dark:bg-berry/30 px-2 py-0.5 rounded text-berry dark:text-sun">
            432Hz Harmonic
          </span>
        </div>
        <p className="text-xs text-wood dark:text-softcream/90 leading-relaxed font-mono">
          Click the tone pedals below to play soothing dream chords synthesized
          directly through the browser Web Audio oscillator!
        </p>
        <div className="grid grid-cols-4 gap-2 pt-1">
          {TONES.map((tone) => (
            <button
              key={tone.label}
              type="button"
              onClick={() => playTone(tone.freq)}
              className="py-2 bg-softcream dark:bg-[#2e1924] border-2 border-berry shadow-retro-sm rounded text-xs font-fredoka font-bold text-berry dark:text-sun hover:bg-sun active:scale-95 transition-all"
            >
              {tone.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs font-mono text-wood/90 dark:text-softcream/90 p-3 bg-day dark:bg-[#150a10] border border-berry/30 rounded-lg">
        <p>
          <strong>Design Rationale:</strong> In Track 1, Concept C, tactile
          sound triggers simulate the tangible joy of 90s toy winding keys. Each
          tooth generates pure sine waves to soothe restless nocturnal browsers.
        </p>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* MODAL 3 — PROJECT 2: THE NIGHTLIGHT COLLECTION                      */
/* ------------------------------------------------------------------ */
const SWATCHES = [
  { name: 'Golden Mote', short: 'Gold', color: '#ffd166', text: 'text-wood' },
  { name: 'Berry Sunset', short: 'Berry', color: '#ff7597', text: 'text-[#33101e]' },
  { name: 'Deep Dream Blue', short: 'Starlight', color: '#a8dadc', text: 'text-wood' },
]

export function LanternContent() {
  const [active, setActive] = useState(SWATCHES[0])

  return (
    <>
      <div className="flex items-center gap-4">
        <img
          src={IMG.lantern}
          alt="Dream lantern"
          width={IMG_DIMS.lantern.width}
          height={IMG_DIMS.lantern.height}
          className="w-24 h-24 rounded-xl object-cover drop-shadow"
        />
        <div>
          <span className="px-2 py-0.5 bg-blush text-white text-[10px] font-mono font-bold rounded">
            LUMEN EXPERIMENT
          </span>
          <h3 className="font-fredoka text-xl font-bold text-berry dark:text-sun mt-1">
            Dreamfire Cloche Lantern
          </h3>
          <p className="text-xs font-mono text-wood/90 dark:text-softcream/90">
            Forged with brass fittings &amp; captured star dust
          </p>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-[#1a0e14] border-2 border-berry rounded-xl shadow-retro-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-fredoka text-sm font-bold text-berry dark:text-sun">
            Luminance Spectrum
          </span>
          <span className="text-xs font-mono font-bold text-berry dark:text-sun">
            {active.name}
          </span>
        </div>

        <div
          className="h-6 rounded border-2 border-berry shadow-retro-sm transition-colors duration-300"
          style={{ backgroundColor: active.color }}
          aria-hidden="true"
        />

        <div className="flex gap-2" role="group" aria-label="Lantern color">
          {SWATCHES.map((swatch) => (
            <button
              key={swatch.name}
              type="button"
              onClick={() => {
                clack()
                setActive(swatch)
              }}
              aria-pressed={active.name === swatch.name}
              className={`flex-1 py-2 rounded border-2 shadow-retro-sm text-[10px] font-fredoka font-bold active:scale-95 transition-all ${
                active.name === swatch.name ? 'ring-2 ring-wood/70' : ''
              } ${swatch.text}`}
              style={{ backgroundColor: swatch.color, borderColor: '#a34063' }}
            >
              {swatch.short}
            </button>
          ))}
        </div>

        <p className="text-xs font-mono text-wood/90 dark:text-softcream/90 leading-relaxed">
          In Night Mode, this lantern emits a concentrated{' '}
          <code>#a34063</code> drop shadow into the room canvas, warding off
          scary bugs and sleepless loops.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="p-2.5 bg-softcream/80 dark:bg-[#291621] border border-berry/40 rounded-lg">
          <span className="font-bold text-berry dark:text-sun block">
            BATTERY LIFE:
          </span>
          <span>Infinite dream-cycles (Solar charged by morning sun).</span>
        </div>
        <div className="p-2.5 bg-softcream/80 dark:bg-[#291621] border border-berry/40 rounded-lg">
          <span className="font-bold text-berry dark:text-sun block">
            MATERIAL:
          </span>
          <span>Spun hand-blown cloche glass &amp; aged copper rivets.</span>
        </div>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* MODAL 4 — PROJECT 3 & ORIGIN STORY (click-to-flip pager, PRD §3.2)  */
/* ------------------------------------------------------------------ */
const STORY_PAGES = [
  {
    heading: 'The Tale of haX.baby & Pip',
    badge: 'PAGE 1 / 3',
    body: (
      <p className="text-xs leading-relaxed font-mono text-wood dark:text-softcream">
        Deep inside the forgotten dial-up nodes of the late nineties, when CRT
        monitors hummed with gentle static, a lone digital dreamer named Pip
        awoke. Surrounded by neon banners, blinking marquees, and endless
        endless scroll feeds that drained human souls, Pip sought refuge in the
        quiet hours between midnight and dawn.
      </p>
    ),
  },
  {
    heading: 'How the Nightstand Was Built',
    badge: 'PAGE 2 / 3',
    body: (
      <p className="text-xs leading-relaxed font-mono text-wood dark:text-softcream">
        Pip gathered discarded vector stars, wooden lullaby gears, and vintage
        bedtime cloches to build haX.baby: an enclave where interfaces honor
        rest instead of endless metrics. Here on the nightstand, every corner is
        finite, zero-scroll, and intentionally soothing. No doom-scrolling, no
        algorithmic urgency—just a warm glowing cloche, an honest song, and
        starry skies.
      </p>
    ),
  },
  {
    heading: '★ Dream Routes Network',
    badge: 'PAGE 3 / 3',
    body: (
      <div className="space-y-2">
        <RouteRow name="Route 01: Cradle Protocol" badge="ACTIVE" tone="bg-sun text-wood" />
        <RouteRow
          name="Route 02: Starlight Bus (02:15 AM)"
          badge="DISPATCHED"
          tone="bg-berry/20 text-berry dark:text-sun"
        />
        <RouteRow
          name="Route 03: Pillow Cloud Ferry"
          badge="SCHEDULED"
          tone="bg-blush text-white"
        />
      </div>
    ),
  },
]

function RouteRow({ name, badge, tone }) {
  return (
    <div className="p-2.5 bg-softcream/80 dark:bg-[#25151c] border border-berry/30 rounded-lg flex items-center justify-between text-xs font-mono">
      <span className="font-bold text-berry dark:text-sun">{name}</span>
      <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${tone}`}>
        {badge}
      </span>
    </div>
  )
}

export function StoryContent() {
  const [page, setPage] = useState(0)
  const current = STORY_PAGES[page]
  const go = (next) => {
    clack()
    setPage((next + STORY_PAGES.length) % STORY_PAGES.length)
    window.setTimeout(() => chime(440 + next * 60), 70)
  }

  return (
    <>
      <div className="p-4 bg-white dark:bg-[#1a0e14] border-2 border-berry rounded-xl shadow-retro-sm space-y-2 min-h-[190px]">
        <div className="flex items-center justify-between border-b border-berry/20 pb-1">
          <span className="font-fredoka font-bold text-berry dark:text-sun text-sm">
            {current.heading}
          </span>
          <span className="text-[10px] font-mono bg-berry text-white px-1.5 py-0.5 rounded font-bold">
            {current.badge}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {current.body}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Click-to-flip controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go(page - 1)}
          className="px-3 py-1.5 bg-day dark:bg-[#2e1924] border-2 border-berry shadow-retro-sm rounded-lg font-fredoka font-bold text-xs text-berry dark:text-sun hover:bg-sun hover:text-wood active:scale-95 transition-all"
        >
          ← Back Page
        </button>

        <div className="flex items-center gap-1.5" aria-label="Story pages">
          {STORY_PAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => go(index)}
              aria-label={`Go to page ${index + 1}`}
              aria-current={index === page}
              className={`w-3 h-3 rounded-full border-2 border-berry transition-colors ${
                index === page ? 'bg-berry' : 'bg-transparent hover:bg-berry/30'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(page + 1)}
          className="px-3 py-1.5 bg-day dark:bg-[#2e1924] border-2 border-berry shadow-retro-sm rounded-lg font-fredoka font-bold text-xs text-berry dark:text-sun hover:bg-sun hover:text-wood active:scale-95 transition-all"
        >
          Next Page →
        </button>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* MODAL 5 — INSTRUCTIONS / HELP                                        */
/* ------------------------------------------------------------------ */
export function HelpContent() {
  return (
    <>
      <p>
        <strong>1. Zero-Scroll Strictness:</strong> Everything fits within
        100dvh without page scrollbars.
      </p>
      <p>
        <strong>2. Audio Feedback:</strong> Powered by Web Audio API
        synthesizers. Toggle mute in the bottom right corner.
      </p>
      <p>
        <strong>3. Day/Night Pull Cord:</strong> Tug the brass beaded tassel in
        the top right to toggle between Warm Cream (#fff8f1) and Deep
        Berry/Espresso (#1a1014).
      </p>
      <p>
        <strong>4. Mobile Scrapbook:</strong> On screens &lt; 768px, the layout
        snaps into a 2x2 sticker polaroid wall with safe 64px+ tap targets.
      </p>
      <p>
        <strong>5. Look Closer:</strong> Something small and unlabelled is
        sitting on the nightstand. Early-web denizens always checked for
        secrets.
      </p>
    </>
  )
}
