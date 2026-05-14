import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

/**
 * App — Root component that assembles all portfolio sections.
 * Single-page application with smooth scroll navigation.
 */
function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger page load animations after mount
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <AnimatePresence>
          {isLoaded && (
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Testimonials />
              <Contact />
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
