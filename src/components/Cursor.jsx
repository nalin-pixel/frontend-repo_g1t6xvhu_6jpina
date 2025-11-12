import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Custom cursor with magnetic scaling on hover targets (data-cursor)
export default function Cursor() {
  const cursorRef = useRef(null)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const smoothX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.8 })
  const smoothY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.8 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)

    const add = (el) => {
      el.addEventListener('mouseenter', () => {
        cursorRef.current?.classList.add('scale-150')
      })
      el.addEventListener('mouseleave', () => {
        cursorRef.current?.classList.remove('scale-150')
      })
    }
    const hoverables = document.querySelectorAll('[data-cursor]')
    hoverables.forEach(add)

    return () => {
      window.removeEventListener('mousemove', move)
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })
    }
  }, [x, y])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed left-0 top-0 z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm mix-blend-difference pointer-events-none transition-transform duration-200 will-change-transform"
      style={{ x: smoothX, y: smoothY }}
    />
  )
}
