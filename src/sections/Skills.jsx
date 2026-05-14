import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

/**
 * Skills — Categorized skill badges with proficiency indicators and hover effects.
 */

const skillCategories = [
  {
    title: 'Frontend',
    icon: '◆',
    color: 'from-accent-green to-emerald-400',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'Tailwind', level: 93 },
    ],
  },
  {
    title: 'Backend',
    icon: '▲',
    color: 'from-accent-indigo to-violet-400',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 82 },
      { name: 'WebSockets', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: '●',
    color: 'from-cyan-400 to-blue-400',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Prisma', level: 82 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '■',
    color: 'from-amber-400 to-orange-400',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'Git', level: 93 },
      { name: 'CI/CD', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Vercel', level: 90 },
    ],
  },
]

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32 relative" aria-label="Skills">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/30 to-transparent" />

      <div className="section-container relative" ref={ref}>
        <SectionHeader
          index="02"
          title="Skills & Tech"
          subtitle="Technologies I work with daily"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="card-glass rounded-2xl p-6 hover:border-border-hover transition-all duration-500 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.icon}
                </span>
                <h3 className="font-mono text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-border ml-2" />
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isInView={isInView}
                    delay={catIndex * 0.15 + skillIndex * 0.05}
                    colorClass={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ skill, isInView, delay, colorClass }) {
  return (
    <div className="group/skill">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-text-muted group-hover/skill:text-text-primary transition-colors">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-text-dim group-hover/skill:text-accent-green transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="proficiency-bar">
        <motion.div
          className="proficiency-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default Skills
