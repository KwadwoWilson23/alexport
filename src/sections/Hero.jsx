import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight } from 'lucide-react'
import ParticleBackground from '../components/ParticleBackground'

/**
 * Hero — Landing section with typewriter effect, CTAs, and animated background.
 */

const roles = [
  'Full Stack Developer',
  'React Engineer',
  'Node.js Enthusiast',
  'API Architect',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = roles[roleIndex]

  const typeWriter = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1))
      } else {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      // Deleting
      if (text.length > 0) {
        setText(currentRole.slice(0, text.length - 1))
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        return
      }
    }
  }, [text, isDeleting, currentRole, roleIndex])

  useEffect(() => {
    const speed = isDeleting ? 40 : 80
    const timer = setTimeout(typeWriter, speed)
    return () => clearTimeout(timer)
  }, [typeWriter, isDeleting])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4">
        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-surface/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-sm text-text-muted">Available for work</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-gradient">Alex Chen</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-text-muted">
            {'> '}
            <span className="text-accent-green">{text}</span>
            <span className="terminal-cursor" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-sans text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
        >
          I craft scalable web applications and elegant APIs that bridge 
          the gap between great design and robust engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-green text-bg-primary font-mono font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Scroll to projects section"
          >
            View My Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-text-primary font-mono font-semibold text-sm hover:border-accent-green/50 hover:bg-accent-green/5 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-text-dim"
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
