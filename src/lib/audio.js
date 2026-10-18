/**
 * Tiny Web Audio synth engine.
 * No audio files, no network requests: every "clack", chime and dream-tone is
 * synthesized live (mechanical clack = filtered triangle sweep, chimes =
 * pure sine with an upward shimmer) exactly as specced in design.md §4.
 */

let ctx = null
let soundEnabled = true

function ensureCtx() {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    try {
      ctx = new AC()
    } catch {
      return null
    }
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

export function isSoundEnabled() {
  return soundEnabled
}

export function setSoundEnabled(next) {
  soundEnabled = Boolean(next)
  if (soundEnabled) chime(659.25)
}

/** Satisfying mechanical "clack" — modal opens, cords, switches. */
export function clack() {
  if (!soundEnabled) return
  const ac = ensureCtx()
  if (!ac) return

  const t = ac.currentTime
  const osc = ac.createOscillator()
  const gain = ac.createGain()
  const filter = ac.createBiquadFilter()

  osc.type = 'triangle'
  osc.frequency.setValueAtTime(320, t)
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.06)

  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(1800, t)

  gain.gain.setValueAtTime(0.35, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07)

  osc.connect(filter)
  filter.connect(gain)
  gain.connect(ac.destination)

  osc.start(t)
  osc.stop(t + 0.08)
}

/** Celestial chime (also plays the Lullaby Lab dream tones). */
export function chime(freq = 523.25) {
  if (!soundEnabled) return
  const ac = ensureCtx()
  if (!ac) return

  const t = ac.currentTime
  const osc = ac.createOscillator()
  const gain = ac.createGain()

  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq, t)
  osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 0.45)

  gain.gain.setValueAtTime(0.28, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5)

  osc.connect(gain)
  gain.connect(ac.destination)

  osc.start(t)
  osc.stop(t + 0.52)
}

/** clack + delayed chime, the signature "open a modal" flourish. */
export function openSound() {
  clack()
  window.setTimeout(() => chime(587.33), 80)
}
