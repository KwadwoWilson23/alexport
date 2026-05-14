import { useEffect, useRef } from 'react'

/**
 * ParticleBackground — Canvas-based floating code symbols animation.
 * Renders translucent code characters that drift across the hero section.
 */

const CODE_SYMBOLS = ['{', '}', '<', '>', '/', '=', ';', '(', ')', '[', ']', '#', '*', '&', '|', '::', '=>', '&&', '||', '!=']

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
      size: Math.random() * 14 + 10,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.08 + 0.02,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.005,
    })

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 25000)
      particles = Array.from({ length: Math.min(count, 60) }, createParticle)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.font = `${p.size}px 'JetBrains Mono', monospace`
        ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.symbol, 0, 0)
        ctx.restore()

        // Update position
        p.x += p.speedX
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        // Wrap around edges
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) p.y = canvas.height + 20
        if (p.y > canvas.height + 20) p.y = -20
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground
