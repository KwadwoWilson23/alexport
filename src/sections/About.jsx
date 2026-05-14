import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Briefcase, Coffee, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

/**
 * About — Bio, current work, fun fact, and profile photo with glow border.
 */

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-24 md:py-32 relative" aria-label="About me">
      <div className="section-container" ref={ref}>
        <SectionHeader
          index="01"
          title="About Me"
          subtitle="A little background"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-5 gap-12 md:gap-16 items-center mt-16"
        >
          {/* Profile Photo */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex justify-center">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-green via-accent-indigo to-accent-green opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500" />
              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border bg-bg-surface">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-surface to-bg-elevated">
                  <span className="font-mono text-6xl text-accent-green/30">AC</span>
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-surface border border-border text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-text-muted">Online</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
            {/* Bio */}
            <p className="text-lg text-text-muted leading-relaxed">
              I'm a full stack developer with 5+ years of experience building web applications 
              that are fast, accessible, and a joy to use. I specialize in the React ecosystem 
              on the frontend and Node.js on the backend, with a deep appreciation for clean 
              architecture and developer experience.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              When I'm not shipping code, you'll find me contributing to open source, writing 
              about modern web patterns, or experimenting with new tools and frameworks that 
              push the boundaries of what's possible on the web.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <InfoCard
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value="San Francisco, CA"
              />
              <InfoCard
                icon={<Briefcase className="w-4 h-4" />}
                label="Currently"
                value="Building a SaaS platform"
              />
              <InfoCard
                icon={<Zap className="w-4 h-4" />}
                label="Learning"
                value="Rust & WebAssembly"
              />
              <InfoCard
                icon={<Coffee className="w-4 h-4" />}
                label="Fun Fact"
                value="I debug best at 2am ☕"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="card-glass rounded-xl p-4 hover:border-accent-green/20 transition-all duration-300 group">
      <div className="flex items-center gap-3">
        <div className="text-accent-green group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <p className="font-mono text-xs text-text-dim uppercase tracking-wider">{label}</p>
          <p className="text-sm text-text-primary mt-0.5">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default About
