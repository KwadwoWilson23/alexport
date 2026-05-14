import { motion } from 'framer-motion'
import { ArrowUp, Heart, Terminal } from 'lucide-react'

/**
 * Footer — Minimal footer with back-to-top and branding.
 */

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border bg-bg-surface/30" role="contentinfo">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-green" />
            <span className="font-mono text-sm text-text-muted">
              alex<span className="text-accent-green">.dev</span>
            </span>
          </div>

          {/* Built with */}
          <p className="font-sans text-sm text-text-dim flex items-center gap-1.5">
            Built with React &
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span className="font-mono text-accent-green ml-1">© {new Date().getFullYear()}</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-muted hover:text-accent-green hover:border-accent-green/30 transition-all duration-300 font-mono text-xs"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
