import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'

import Cursor from './components/Cursor.jsx'
import DeskScene from './components/DeskScene.jsx'
import ScrapbookWall from './components/ScrapbookWall.jsx'
import RetroModal from './components/RetroModal.jsx'
import {
  HelpContent,
  LanternContent,
  LullabyContent,
  PipContent,
  StoryContent,
} from './components/modalContent.jsx'
import { IMG, preloadAssets } from './lib/assets.js'
import { chime, clack, openSound, setSoundEnabled } from './lib/audio.js'

const BRAND_CONFETTI = ['#fff8f1', '#a34063', '#5c4033', '#ffd166', '#ff7597', '#a8dadc']

const MODALS = [
  { id: 'pip', icon: '☁️', title: 'ID CARD: Who is Pip?', footer: 'Got It, Sleep Well!', Content: PipContent },
  { id: 'lullaby', icon: '🎵', title: 'PROJECT 1: The Lullaby Lab', footer: 'Close Box', Content: LullabyContent },
  { id: 'lantern', icon: '🏮', title: 'PROJECT 2: The Nightlight Collection', footer: 'Leave Lantern Lit', Content: LanternContent },
  { id: 'story', icon: '📖', title: 'Project 3 & Origin Story', footer: 'Bookmark Dream Route', Content: StoryContent },
  { id: 'help', icon: '✨', title: 'Interactive Nightstand Guide', footer: 'Close', Content: HelpContent, size: 'max-w-md' },
]

export default function App() {
  const [dark, setDark] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const [openId, setOpenId] = useState(null)
  const [eggToast, setEggToast] = useState(false)
  const eggTimer = useRef(0)

  /* Preload the official PNGs so the desk never renders empty (PRD §5) */
  useEffect(() => {
    preloadAssets()
  }, [])

  /* Day/Night switch toggles Tailwind's dark class on <html> */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  /* Modal trapping: Escape always closes */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenId(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openModal = useCallback((id) => {
    openSound()
    setOpenId(id)
  }, [])

  const closeModal = useCallback(() => {
    clack()
    setOpenId(null)
  }, [])

  const toggleTheme = () => {
    clack()
    window.setTimeout(() => chime(440), 60)
    setDark((value) => !value)
  }

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    setSoundEnabled(next)
  }

  /* EASTER EGG: unlabelled star → brand-colored confetti */
  const fireEasterEgg = useCallback(() => {
    clack()
    window.setTimeout(() => chime(880), 60)

    const options = { colors: BRAND_CONFETTI, ticks: 220, disableForReducedMotion: true }
    confetti({ particleCount: 130, spread: 75, startVelocity: 45, origin: { x: 0.5, y: 0.72 }, ...options })
    window.setTimeout(
      () => confetti({ particleCount: 70, spread: 60, origin: { x: 0.28, y: 0.65 }, ...options }),
      200,
    )
    window.setTimeout(
      () => confetti({ particleCount: 70, spread: 60, origin: { x: 0.72, y: 0.65 }, ...options }),
      380,
    )

    setEggToast(true)
    window.clearTimeout(eggTimer.current)
    eggTimer.current = window.setTimeout(() => setEggToast(false), 2800)
  }, [])

  useEffect(() => () => window.clearTimeout(eggTimer.current), [])

  const statusText = dark
    ? 'Dream Lantern glowing warm in night...'
    : 'Cozy Daytime Sunbeams in room...'

  return (
    <div className="h-[100dvh] w-full overflow-hidden relative bg-day dark:bg-night text-wood dark:text-softcream transition-colors duration-700">
      <Cursor />

      <main className="h-[100dvh] w-full overflow-hidden relative flex flex-col justify-between transition-colors duration-700 retro-grid-bg">
        {/* ---------------- TOP RETRO BANNER & CONTROLS ---------------- */}
        <header className="relative z-30 w-full px-4 pt-3 pb-2 flex items-center justify-between gap-3">
          {/* Brand badge */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="px-3 py-1 bg-day dark:bg-[#25151c] border-2 border-berry shadow-retro-sm rounded-lg flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-blush animate-ping" />
              <span className="font-fredoka text-sm md:text-base font-bold text-berry dark:text-sun tracking-wide whitespace-nowrap">
                haX.baby{' '}
                <span className="text-xs font-mono font-normal">
                  :: pip's nightstand
                </span>
              </span>
              <span className="text-[10px] bg-berry text-white px-1.5 py-0.5 rounded font-mono font-bold uppercase hidden sm:inline-block">
                Track 1·C
              </span>
            </div>
          </div>

          {/* Status pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/70 dark:bg-black/40 backdrop-blur-sm border-2 border-berry/40 rounded-full text-xs font-mono">
            <span className="text-berry font-bold dark:text-sun">● STATUS:</span>
            <span id="room-status-text" className="text-wood dark:text-sun/90">
              {statusText}
            </span>
          </div>

          {/* Day/Night literal pull-cord switch */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={`${dark ? '\u{1F319} NIGHT' : '\u2600\uFE0F DAY'} \u2014 toggle the light switch`}
              aria-pressed={dark}
              className="pull-chain group flex flex-col items-center"
            >
              <span className="block w-6 h-3 bg-wood dark:bg-sun/80 border-2 border-berry rounded-t-sm shadow-sm" />
              <span className="block w-1 h-6 bg-repeat-y bg-[radial-gradient(#a34063_2px,transparent_2px)] bg-[length:4px_6px] dark:bg-[radial-gradient(#ffd166_2px,transparent_2px)]" />
              <span className="px-2 py-1 bg-sun dark:bg-berry border-2 border-berry rounded-full shadow-retro-sm flex items-center gap-1 group-hover:scale-110 transition-transform">
                <span className="text-xs" aria-hidden="true">
                  {dark ? '🌙' : '☀️'}
                </span>
                <span className="text-[10px] font-fredoka font-bold text-wood dark:text-white">
                  {dark ? 'NIGHT' : 'DAY'}
                </span>
              </span>
            </button>
          </div>
        </header>

        {/* Night-sky sparkles (Night Mode only — hidden in Day so the cream
            background keeps full text contrast) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden dark:block"
        >
          <div className="absolute top-12 left-10 text-sun anim-pulse-star text-lg">✦</div>
          <div className="absolute top-28 left-[35%] text-blush anim-pulse-star text-sm" style={{ animationDelay: '1.2s' }}>★</div>
          <div className="absolute top-20 right-20 text-sun anim-pulse-star text-xl" style={{ animationDelay: '0.6s' }}>✦</div>
          <div className="absolute top-44 right-[30%] text-white/80 anim-pulse-star text-xs" style={{ animationDelay: '1.8s' }}>✧</div>
          <div className="absolute top-36 left-4 text-sun/70 anim-pulse-star text-sm" style={{ animationDelay: '2.1s' }}>★</div>
        </div>

        {/* ---------------- THE NIGHTSTAND ---------------- */}
        <DeskScene onOpen={openModal} onEasterEgg={fireEasterEgg} />
        <ScrapbookWall onOpen={openModal} onEasterEgg={fireEasterEgg} />

        {/* ---------------- FOOTER / STATUS BAR ---------------- */}
        <footer className="w-full px-4 py-2 bg-white/80 dark:bg-black/40 border-t-2 border-berry/30 flex items-center justify-between gap-3 text-[11px] font-mono z-30">
          <div className="flex items-center gap-2">
            <span className="text-berry font-bold dark:text-sun">MODE:</span>
            <span className="font-fredoka text-xs text-wood dark:text-sun font-semibold">
              Track 1 / Concept C
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-wood/90 dark:text-softcream/90 hidden sm:inline">
              Sound powered by Web Audio API
            </span>
            <button
              type="button"
              id="quick-lore-btn"
              onClick={() => openModal('help')}
              className="text-berry underline font-bold hover:text-blush dark:text-sun"
            >
              Instructions
            </button>

            {/* Global mute toggle — pinned to the bottom-right corner */}
            <button
              type="button"
              id="sound-toggle-btn"
              onClick={toggleSound}
              aria-label={`${soundOn ? 'SFX: ON' : 'SFX: MUTED'} \u2014 toggle sound effects`}
              aria-pressed={!soundOn}
              title="Toggle Web Audio SFX"
              className="min-h-8 px-2.5 py-1.5 bg-day dark:bg-[#25151c] border-2 border-berry shadow-retro-sm rounded-lg flex items-center gap-1.5 text-xs font-bold text-berry dark:text-sun hover:scale-105 active:translate-y-0.5 transition-transform"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {soundOn ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                )}
              </svg>
              <span className="font-mono text-[11px]">
                {soundOn ? 'SFX: ON' : 'SFX: MUTED'}
              </span>
            </button>
          </div>
        </footer>
      </main>

      {/* ---------------- MODALS ---------------- */}
      {MODALS.map(({ id, icon, title, footer, Content, size }) => (
        <RetroModal
          key={id}
          open={openId === id}
          onClose={closeModal}
          icon={icon}
          title={title}
          footerLabel={footer}
          size={size}
        >
          <Content />
        </RetroModal>
      ))}

      {/* ---------------- EASTER EGG TOAST ---------------- */}
      <AnimatePresence>
        {eggToast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[60] px-4 py-2 bg-sun border-[3px] border-berry shadow-retro rounded-xl font-fredoka font-bold text-sm text-wood pointer-events-none"
            role="status"
          >
            ✦ LUCKY STAR FOUND! +1 dream point
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden <img> preloads keep React's asset map warm on first paint */}
      <div className="hidden" aria-hidden="true">
        <img src={IMG.portrait} alt="" />
        <img src={IMG.lullaby} alt="" />
        <img src={IMG.lantern} alt="" />
        <img src={IMG.wallMobile} alt="" />
      </div>
    </div>
  )
}
