import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })

  useEffect(() => {
    // parallax background using CSS transform on scroll
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1)
      el.style.setProperty('--parallax', String(progress))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      className="relative grid min-h-screen w-full grid-cols-1 items-center overflow-hidden bg-[#0b0b0b] px-6 py-24 sm:grid-cols-2 sm:px-10 md:px-20"
      style={{
        background:
          'radial-gradient(60% 80% at 80% 20%, rgba(138,43,226,0.10), transparent 60%), radial-gradient(40% 60% at 20% 80%, rgba(0,255,255,0.08), transparent 60%), #0b0b0b',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 40 40%22><path d=%22M0 39.5 H40%22 stroke=%22%23111111%22 stroke-width=%220.5%22/><path d=%22M0.5 0 V40%22 stroke=%22%23111111%22 stroke-width=%220.5%22/></svg>')] opacity-40" />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white" style={{ fontFamily: 'Space Grotesk, Inter' }}>
          We choreograph pixels with intent.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          Our manifesto is simple: design is felt before it is understood. We build cinematic, performant, and humane interfaces that move culture—and your metrics.
        </p>
        <p className="mt-4 text-white/60">
          From concept to code, we blend art direction, motion systems, and emerging tech to create singular brand worlds.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative z-10 mt-12 sm:mt-0 flex items-center justify-center"
      >
        {/* simple interactive 3D-like card following cursor */}
        <div
          data-cursor
          className="relative h-[360px] w-[280px] sm:h-[440px] sm:w-[340px] rounded-3xl bg-gradient-to-br from-[#141414] to-[#0d0d0d] p-[2px]"
        >
          <div className="group relative h-full w-full rounded-3xl bg-[radial-gradient(120%_120%_at_0%_0%,rgba(138,43,226,0.25),transparent),radial-gradient(120%_120%_at_100%_100%,rgba(0,255,255,0.25),transparent)] overflow-hidden">
            <div className="absolute inset-0 opacity-30 [background:conic-gradient(from_210deg,rgba(255,255,255,0.35),transparent_60%)]" />
            <motion.div
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative h-full w-full rounded-3xl p-6"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-6 rounded-2xl border border-white/10" style={{ transform: 'translateZ(50px)' }} />
              <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_20%,rgba(255,255,255,0.06),transparent)]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00FFFF] blur-md opacity-60" />
                <h3 className="text-2xl font-bold text-white">Interactive Artifact</h3>
                <p className="text-white/70">Tilt, glow, and depth—rendered in real‑time.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
