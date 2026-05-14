import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

/**
 * Experience — Vertical timeline with scroll-triggered animations.
 */

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechNova Inc.',
    period: 'Jan 2023 — Present',
    description: [
      'Led the architecture and development of a microservices-based SaaS platform serving 50K+ users',
      'Reduced API response times by 60% through strategic caching with Redis and query optimization',
      'Mentored a team of 4 junior developers and established code review best practices',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'DataStream Labs',
    period: 'Mar 2021 — Dec 2022',
    description: [
      'Built real-time data visualization dashboards processing 1M+ events per day',
      'Designed and implemented RESTful APIs consumed by mobile and web clients',
      'Introduced TypeScript across the frontend codebase, reducing bugs by 35%',
    ],
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'Docker'],
  },
  {
    role: 'Frontend Developer',
    company: 'PixelCraft Agency',
    period: 'Jun 2019 — Feb 2021',
    description: [
      'Developed responsive web applications for 20+ clients across fintech and healthcare',
      'Created a reusable component library that reduced project setup time by 40%',
      'Collaborated closely with UX designers to translate Figma prototypes into pixel-perfect code',
    ],
    tech: ['React', 'SCSS', 'Redux', 'Jest', 'Storybook'],
  },
  {
    role: 'Junior Developer (Intern)',
    company: 'CodeBase Startup',
    period: 'Jan 2019 — May 2019',
    description: [
      'Contributed to an open-source CMS, landing 15+ merged pull requests',
      'Built internal tooling for automated deployment pipelines',
      'Gained foundational experience in agile development and CI/CD workflows',
    ],
    tech: ['JavaScript', 'Python', 'Git', 'Linux', 'CI/CD'],
  },
]

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 md:py-32 relative" aria-label="Experience">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/30 to-transparent" />

      <div className="section-container relative" ref={ref}>
        <SectionHeader
          index="04"
          title="Experience"
          subtitle="Where I've worked"
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="timeline-line hidden md:block" />

          {/* Timeline entries */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={index}
                experience={exp}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineEntry({ experience, index, isInView, isLeft }) {
  const entryRef = useRef(null)
  const entryInView = useInView(entryRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={entryRef}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={entryInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-start gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="card-glass rounded-2xl p-6 hover:border-accent-green/20 transition-all duration-500 group">
          {/* Role & Company */}
          <h3 className="font-mono text-lg font-bold text-text-primary group-hover:text-accent-green transition-colors">
            {experience.role}
          </h3>
          <div className={`flex items-center gap-2 mt-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
            <Building2 className="w-3.5 h-3.5 text-accent-indigo" />
            <span className="font-sans text-sm text-accent-indigo">{experience.company}</span>
          </div>
          <div className={`flex items-center gap-2 mt-1 ${isLeft ? 'md:justify-end' : ''}`}>
            <Calendar className="w-3.5 h-3.5 text-text-dim" />
            <span className="font-mono text-xs text-text-dim">{experience.period}</span>
          </div>

          {/* Bullet points */}
          <ul className={`mt-4 space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm text-text-muted leading-relaxed">
                <span className="text-accent-green mr-1">▸</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
            {experience.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-0.5 rounded bg-bg-primary/60 text-text-dim border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={entryInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-4 h-4 rounded-full bg-accent-green border-4 border-bg-primary"
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  )
}

export default Experience
