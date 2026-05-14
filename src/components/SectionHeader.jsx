import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * SectionHeader — Reusable section header with index number, title, and subtitle.
 */

function SectionHeader({ index, title, subtitle }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center mb-4"
    >
      <span className="font-mono text-sm text-accent-green mb-2">
        {`// ${index}`}
      </span>
      <h2 className="font-mono text-3xl md:text-4xl font-bold text-text-primary">
        {title}
        <span className="text-accent-green">.</span>
      </h2>
      {subtitle && (
        <p className="font-sans text-text-muted mt-3 text-lg">{subtitle}</p>
      )}
      <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-accent-green to-accent-indigo rounded-full" />
    </motion.div>
  )
}

export default SectionHeader
