import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Works from './components/Works'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  const [entered, setEntered] = useState(false)
  const scroller = useRef(null)

  useEffect(() => {
    if (entered) {
      // enable scroll when entering
      document.body.classList.remove('overflow-hidden')
      // smooth scroll
      if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth'
      }
    }
  }, [entered])

  return (
    <div ref={scroller} className="relative min-h-screen bg-black text-white">
      <Cursor />
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <Hero onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* top nav */}
            <header className="fixed top-0 left-0 right-0 z-30 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
              <a href="#hero" className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur-md" data-cursor>ECLYPSE</a>
              <nav className="hidden gap-6 sm:flex">
                {[
                  ['About', '#about'],
                  ['Works', '#works'],
                  ['Tech', '#tech'],
                  ['Contact', '#contact'],
                ].map(([l, href]) => (
                  <a key={href} href={href} className="text-white/70 hover:text-white" data-cursor>
                    {l}
                  </a>
                ))}
              </nav>
            </header>

            {/* sections */}
            <Hero onEnter={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
            <Manifesto />
            <Works />
            <Tech />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
