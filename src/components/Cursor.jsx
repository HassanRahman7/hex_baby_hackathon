import { useEffect, useRef } from 'react'

/**
 * Trailing sparkle cursor (PRD §4 Tier 2, design.md §4).
 * A 16px berry circle that lags behind the pointer and morphs into a
 * golden star over anything clickable. Disabled on touch devices.
 */
export default function Cursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const dot = dotRef.current
    if (!dot) return undefined

    const target = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
    const pos = { ...target }
    let raf = 0
    let live = false

    const onMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      if (!live) {
        live = true
        pos.x = target.x
        pos.y = target.y
        dot.classList.add('cursor-live')
        document.body.classList.add('cursor-active')
      }

      const hovered = event.target?.closest?.('button, a, .interactive-obj')
      dot.classList.toggle('cursor-hover', Boolean(hovered))
    }

    const onLeave = () => {
      dot.classList.remove('cursor-live')
    }

    const onEnter = () => {
      if (live) dot.classList.add('cursor-live')
    }

    const tick = () => {
      // Trailing lag effect (0.28 easing, as in the Stitch prototype)
      pos.x += (target.x - pos.x) * 0.28
      pos.y += (target.y - pos.y) * 0.28
      dot.style.left = `${pos.x}px`
      dot.style.top = `${pos.y}px`
      raf = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    raf = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.body.classList.remove('cursor-active')
    }
  }, [])

  return <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
}
