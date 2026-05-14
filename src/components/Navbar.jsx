import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

/**
 * Navbar — Fixed top navigation with glass morphism effect.
 * Collapses into a hamburger menu on mobile.
 */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
          aria-label="Go to top"
        >
          <Terminal className="w-5 h-5 text-accent-green group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-mono font-bold text-lg text-text-primary">
            alex<span className="text-accent-green">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-sm px-4 py-2 rounded-lg transition-all duration-300 relative ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent-green'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <span className="text-accent-green mr-1 opacity-50">
                {String(navLinks.indexOf(link)).padStart(2, '0')}.
              </span>
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-accent-green/10 rounded-lg border border-accent-green/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="ml-4 font-mono text-sm px-5 py-2 rounded-lg border border-accent-green text-accent-green hover:bg-accent-green hover:text-bg-primary transition-all duration-300"
          >
            Say Hello
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-text-muted hover:text-accent-green transition-colors"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg-surface/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-mono text-sm px-4 py-3 rounded-lg text-text-muted hover:text-accent-green hover:bg-accent-green/5 transition-all"
                >
                  <span className="text-accent-green mr-2 opacity-50">0{i}.</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
