import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const socialLinks = [
  { icon: <GithubIcon className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com' },
  { icon: <LinkedinIcon className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <TwitterIcon className="w-5 h-5" />, label: 'X', href: 'https://twitter.com' },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', href: 'mailto:alex@example.com' },
]

function Contact() {
  const [formState, setFormState] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative" aria-label="Contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/30 to-transparent" />
      <div className="section-container relative" ref={ref}>
        <SectionHeader index="06" title="Get In Touch" subtitle="Let's build something together" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-xs text-text-dim uppercase tracking-wider mb-2">Name</label>
                <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary/60 border border-border text-text-primary font-sans text-sm placeholder:text-text-dim/50 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-mono text-xs text-text-dim uppercase tracking-wider mb-2">Email</label>
                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary/60 border border-border text-text-primary font-sans text-sm placeholder:text-text-dim/50 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all duration-300" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block font-mono text-xs text-text-dim uppercase tracking-wider mb-2">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-bg-primary/60 border border-border text-text-primary font-sans text-sm placeholder:text-text-dim/50 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/20 transition-all duration-300 resize-none" />
            </div>
            <button type="submit" disabled={formState !== 'idle'}
              className={`group w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-mono font-semibold text-sm transition-all duration-300 disabled:cursor-not-allowed ${
                formState === 'success' ? 'bg-accent-green text-bg-primary' :
                formState === 'sending' ? 'bg-bg-elevated text-text-muted border border-border' :
                'bg-accent-green text-bg-primary hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]'
              }`}>
              <AnimatePresence mode="wait">
                {formState === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </motion.span>
                )}
                {formState === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </motion.span>
                )}
                {formState === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Message Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                className="p-3 rounded-xl border border-border text-text-muted hover:text-accent-green hover:border-accent-green/30 hover:bg-accent-green/5 transition-all duration-300 hover:-translate-y-1">
                {link.icon}
              </a>
            ))}
          </motion.div>
          <p className="text-center font-mono text-xs text-text-dim mt-6">
            Or email me directly at{' '}
            <a href="mailto:alex@example.com" className="text-accent-green hover:underline">alex@example.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
