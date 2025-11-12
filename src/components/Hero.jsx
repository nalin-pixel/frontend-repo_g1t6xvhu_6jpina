import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onEnter }) {
  // Reduce animation for users preferring reduced motion
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [])

  return (
    <section id="hero" className="relative min-h-screen w-full bg-black text-white">
      {/* Spline 3D scene background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_40%,rgba(138,43,226,0.30)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
          <span className="text-sm tracking-widest text-white/80">ECLYPSE STUDIO</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[900] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}
        >
          Design that moves.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="mt-5 max-w-2xl text-white/70"
        >
          We craft cinematic digital experiences that merge art direction, motion, and code.
        </motion.p>

        <motion.button
          data-cursor
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          onClick={onEnter}
          className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-3 text-white backdrop-blur-md"
        >
          <span className="relative z-10">Enter Experience</span>
          <span className="relative z-10 h-2 w-2 rounded-full bg-cyan-300 group-hover:scale-150 transition-transform" />
          {/* liquid hover effect */}
          <span className="pointer-events-none absolute inset-0 -z-0 opacity-60 [mask-image:radial-gradient(30%_120%_at_50%_120%,black,transparent)]">
            <span className="absolute -inset-24 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg,rgba(138,43,226,0.5),rgba(0,255,255,0.5),transparent_60%)] blur-2xl" />
          </span>
        </motion.button>

        {!prefersReduced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs text-white/60"
          >
            Scroll or Enter
            <div className="mt-2 h-8 w-px mx-auto bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
