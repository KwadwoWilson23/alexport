import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Star, GitPullRequest, Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

/**
 * Testimonials — GitHub stats and testimonial cards.
 */

const githubStats = [
  { icon: <GitBranch className="w-5 h-5" />, value: '42', label: 'Repositories' },
  { icon: <Star className="w-5 h-5" />, value: '1.2K', label: 'Stars Earned' },
  { icon: <GitPullRequest className="w-5 h-5" />, value: '380+', label: 'PRs Merged' },
]

const testimonials = [
  {
    quote: "Alex is one of those rare engineers who can think about architecture at a high level while still writing exceptionally clean, production-ready code. A true asset to any team.",
    name: 'Sarah Mitchell',
    role: 'Engineering Manager at TechNova',
  },
  {
    quote: "Working with Alex felt effortless. They have a knack for breaking complex problems into elegant solutions and communicating technical decisions clearly to stakeholders.",
    name: 'James Rodriguez',
    role: 'CTO at DataStream Labs',
  },
  {
    quote: "Alex's attention to performance and user experience is outstanding. The dashboards they built for us handled massive data volumes while remaining buttery smooth.",
    name: 'Priya Sharma',
    role: 'Product Lead at PixelCraft',
  },
]

function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-24 md:py-32 relative" aria-label="Testimonials and stats">
      <div className="section-container" ref={ref}>
        <SectionHeader
          index="05"
          title="Social Proof"
          subtitle="Stats & kind words"
        />

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {githubStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="card-glass rounded-2xl p-6 text-center group hover:border-accent-green/20 transition-all duration-500"
            >
              <div className="text-accent-green mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <p className="font-mono text-2xl md:text-3xl font-bold text-text-primary">
                {stat.value}
              </p>
              <p className="font-sans text-xs text-text-dim mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution graph mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <ContributionGraph />
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              className="card-glass rounded-2xl p-6 hover:border-accent-indigo/20 transition-all duration-500 group flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent-indigo/30 mb-4 group-hover:text-accent-indigo/60 transition-colors" />
              <p className="text-sm text-text-muted leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-mono text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="font-sans text-xs text-text-dim mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * GitHub-style contribution graph with deterministic pattern.
 * Uses a seeded approach so it doesn't change on re-render.
 */
function ContributionGraph() {
  // Generate a stable contribution pattern
  const cells = Array.from({ length: 364 }, (_, i) => {
    // Simple hash for stable values
    const hash = ((i * 2654435761) >>> 0) / 4294967296
    let level = 0
    if (hash > 0.75) level = 4
    else if (hash > 0.55) level = 3
    else if (hash > 0.35) level = 2
    else if (hash > 0.2) level = 1
    return level
  })

  const levelColors = [
    'bg-bg-primary/80',
    'bg-accent-green/10',
    'bg-accent-green/30',
    'bg-accent-green/60',
    'bg-accent-green',
  ]

  return (
    <div className="card-glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-accent-green/20" />
        <span className="font-mono text-xs text-text-dim">
          632 contributions in the last year
        </span>
      </div>
      <div className="grid grid-cols-[repeat(52,1fr)] gap-[3px]">
        {cells.map((level, i) => (
          <div
            key={i}
            className={`aspect-square rounded-[2px] ${levelColors[level]}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
