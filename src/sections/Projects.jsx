import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Code2, ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

/**
 * Projects — Grid of project cards with hover effects, tech tags, and action buttons.
 */

const projects = [
  {
    name: 'TaskFlow',
    description: 'A real-time collaborative project management tool with Kanban boards, sprint planning, and team analytics. Built for distributed teams.',
    tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    accent: 'green',
  },
  {
    name: 'DevMetrics',
    description: 'Developer productivity dashboard that aggregates GitHub stats, CI/CD pipeline health, and code review metrics into actionable insights.',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'D3.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    accent: 'indigo',
  },
  {
    name: 'ShopAPI',
    description: 'Headless e-commerce REST API with authentication, inventory management, payment processing via Stripe, and webhook integrations.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: 'green',
  },
  {
    name: 'CloudSync',
    description: 'File synchronization service with end-to-end encryption, conflict resolution, and cross-platform support via Electron.',
    tags: ['React', 'Electron', 'AWS S3', 'WebCrypto', 'SQLite'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: 'indigo',
  },
  {
    name: 'CodePair',
    description: 'Real-time collaborative code editor with syntax highlighting, live cursors, and integrated video chat for remote pair programming.',
    tags: ['React', 'WebRTC', 'CRDT', 'Monaco', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: 'green',
  },
  {
    name: 'HealthTrack',
    description: 'Personal health monitoring PWA with data visualization, goal setting, and integration with wearable device APIs.',
    tags: ['Next.js', 'Chart.js', 'Python', 'FastAPI', 'Prisma'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    accent: 'indigo',
  },
]

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 md:py-32 relative" aria-label="Projects">
      <div className="section-container" ref={ref}>
        <SectionHeader
          index="03"
          title="Projects"
          subtitle="Things I've built"
        />

        <div className="mt-16 space-y-6">
          {/* Featured projects — large cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
          </div>

          {/* Other projects — smaller grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured }) {
  const accentColor = project.accent === 'green'
    ? 'group-hover:border-accent-green/30 group-hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]'
    : 'group-hover:border-accent-indigo/30 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]'

  return (
    <div
      className={`group card-glass rounded-2xl ${featured ? 'p-8' : 'p-6'} 
        hover:-translate-y-1 transition-all duration-500 cursor-default
        ${accentColor} h-full flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          {featured && (
            <span className="font-mono text-xs text-accent-green mb-2 block">Featured Project</span>
          )}
          <h3 className={`font-mono ${featured ? 'text-xl' : 'text-base'} font-bold text-text-primary group-hover:text-accent-green transition-colors`}>
            {project.name}
          </h3>
        </div>
        <ArrowUpRight className="w-5 h-5 text-text-dim group-hover:text-accent-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
      </div>

      {/* Description */}
      <p className={`text-text-muted ${featured ? 'text-base' : 'text-sm'} leading-relaxed mb-6 flex-1`}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-primary/60 text-text-dim border border-border hover:text-accent-green hover:border-accent-green/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-4 pt-2 border-t border-border">
        <a
          href={project.liveUrl}
          className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent-green transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.name}`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${project.name}`}
        >
          <Code2 className="w-3.5 h-3.5" />
          Source
        </a>
      </div>
    </div>
  )
}

export default Projects
