import { AnimatePresence, motion } from 'framer-motion'

/**
 * Retro content modal (design.md §4).
 * Thick #a34063 borders, harsh offset drop shadow, oversized [X],
 * heavy blurred backdrop. Framer Motion: opacity 0 / scale 0.8 -> 1 / 1.
 * Backdrop clicks, the [X], the footer button and Escape all close it.
 */
export default function RetroModal({
  open,
  onClose,
  icon,
  title,
  children,
  footerLabel = 'Close',
  size = 'max-w-lg',
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18, ease: 'easeIn' } }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12, transition: { duration: 0.16, ease: 'easeIn' } }}
            transition={{ type: 'spring', stiffness: 260, damping: 22, mass: 0.7 }}
            className={`w-full ${size} bg-day dark:bg-[#201219] border-4 border-berry shadow-retro-lg rounded-2xl overflow-hidden relative`}
          >
            {/* Title bar */}
            <div className="bg-berry px-4 py-2.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg">{icon}</span>
                <h2 className="font-fredoka font-bold text-base md:text-lg tracking-wide truncate">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="shrink-0 w-8 h-8 rounded-full bg-sun text-wood font-fredoka font-bold text-lg flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-transform border-2 border-berry shadow-retro-sm"
              >
                ✕
              </button>
            </div>

            {/* Scrollable body (modal-internal scroll only — the page never scrolls) */}
            <div className="p-5 space-y-4 max-h-[70dvh] overflow-y-auto">{children}</div>

            {/* Footer */}
            <div className="px-5 py-3 bg-[#fdf3e7] dark:bg-[#180d13] border-t-2 border-berry/30 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1.5 bg-berry text-white font-fredoka font-bold rounded-lg border-2 border-berry shadow-retro-sm hover:bg-blush transition-colors text-sm"
              >
                {footerLabel}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
