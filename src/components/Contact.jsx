import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-28 text-white">
      {/* liquid background using animated gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(138,43,226,0.35),transparent)] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,255,255,0.25),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ fontFamily: 'Space Grotesk, Inter' }}>Let’s build the future together.</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">Tell us about your vision. We’ll turn it into an experience people feel.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 text-left"
        >
          <label className="block">
            <span className="text-sm text-white/70">Your name</span>
            <input className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/50 focus:bg-white/10" placeholder="Alex Starborn" />
          </label>
          <label className="block">
            <span className="text-sm text-white/70">Email</span>
            <input type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/50 focus:bg-white/10" placeholder="you@brand.com" />
          </label>
          <label className="block">
            <span className="text-sm text-white/70">Message</span>
            <textarea rows="5" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-cyan-300/50 focus:bg-white/10" placeholder="What are we building?" />
          </label>
          <button data-cursor className="group relative mt-2 inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-3 text-white backdrop-blur-md">
            <span className="relative z-10">Send Request</span>
            <span className="relative z-10 h-2 w-2 rounded-full bg-cyan-300 group-hover:scale-150 transition-transform" />
            <span className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(30%_120%_at_50%_120%,black,transparent)]">
              <span className="absolute -inset-24 animate-[spin_8s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg,rgba(138,43,226,0.5),rgba(0,255,255,0.5),transparent_60%)] blur-2xl" />
            </span>
          </button>
        </motion.form>

        <div className="mt-16 flex items-center justify-center gap-6 text-white/60">
          {['Dribbble','Behance','X','Instagram'].map((s) => (
            <motion.a key={s} href="#" whileHover={{ scale: 1.1, rotate: 2 }} className="hover:text-white">
              {s}
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} ECLYPSE STUDIO — All rights reserved.</div>
      </div>
    </section>
  )
}
