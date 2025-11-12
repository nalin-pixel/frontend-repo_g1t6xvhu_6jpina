import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Simple particle network using canvas, reacting to cursor
function useParticleNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 2,
    }))

    let mx = -9999, my = -9999

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
    }
    canvas.addEventListener('mousemove', onMove)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    let raf
    const loop = () => {
      raf = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, width, height)
      // update
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        // mouse influence
        const dx = p.x - mx
        const dy = p.y - my
        const d = Math.hypot(dx, dy)
        if (d < 120) {
          p.vx += dx / d * 0.02
          p.vy += dy / d * 0.02
        }
      }
      // draw
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 120) {
            ctx.strokeStyle = `rgba(138,43,226,${1 - d / 120})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMove)
    }
  }, [])

  return canvasRef
}

export default function Tech() {
  const canvasRef = useParticleNetwork()

  const items = [
    'Design Systems',
    'Motion Design',
    'WebGL',
    'Framer Motion',
    'Fast APIs',
    'Brand Strategy',
  ]

  return (
    <section id="tech" className="relative w-full bg-[#0b0b0b] py-28 text-white overflow-hidden">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b]/20 to-[#0b0b0b]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ fontFamily: 'Space Grotesk, Inter' }}>Technology & Craft</h2>
        <p className="mt-4 max-w-2xl text-white/70">Interactive systems, real-time animation, and brand storytelling—woven with code.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="text-white/90">{t}</div>
              <div className="mt-3 h-1 w-0 bg-gradient-to-r from-[#8A2BE2] to-[#00FFFF] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* horizontal timeline */}
        <div className="relative mt-16">
          <div className="h-px w-full bg-white/10" />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="text-sm text-white/60">0{i + 1}</div>
                <div className="mt-2 text-xl font-semibold">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
