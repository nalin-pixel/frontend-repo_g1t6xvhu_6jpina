import { useEffect } from 'react'
import { motion } from 'framer-motion'

const projects = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-${1580000000000 + i}?auto=format&fit=crop&w=1200&q=60`,
}))

export default function Works() {
  useEffect(() => {
    // Prefetch images
    projects.forEach((p) => {
      const img = new Image()
      img.src = p.img
    })
  }, [])

  return (
    <section id="works" className="relative w-full bg-black py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ fontFamily: 'Space Grotesk, Inter' }}>Selected Works</h2>
          <p className="text-white/60 max-w-sm">A curation of motion-led experiments, immersive sites, and brand systems. Hover to preview.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0% -10% 0%' }}
              transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-[#0f0f0f]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/70">Motion / WebGL / Brand</p>
                </div>
              </div>
              {/* light reflection */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 -skew-y-6 translate-y-10 bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
