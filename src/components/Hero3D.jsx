import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, PenTool, Layers, Star, ArrowRight } from 'lucide-react'

const tiltHover = {
  rest: { rotateX: 0, rotateY: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  hover: {
    rotateX: -6,
    rotateY: 6,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 200, damping: 14 },
  },
}

export default function Hero3D() {
  return (
    <section className="relative pb-12 pt-6 sm:pt-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black/70 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-400" /> Available for Freelance
          </div>
          <h1 className="text-5xl font-black leading-[1.05] text-black sm:text-6xl lg:text-7xl">
            Bold, 3D, and Glassy Interfaces that <span className="bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">shine</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold text-black/70">
            I design immersive product experiences and striking brand visuals. From UX strategy to graphic systems, I craft design that performs and looks unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 font-extrabold text-black shadow-[0_15px_35px_rgba(234,179,8,0.5)] hover:shadow-[0_18px_40px_rgba(234,179,8,0.6)]"
            >
              View Work <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-5 py-3 font-extrabold text-black backdrop-blur hover:bg-white"
            >
              Get a Quote
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-bold text-black/70">Award-winning visuals</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-black/80" />
              <span className="text-sm font-bold text-black/70">Design systems expert</span>
            </div>
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-yellow-300/30 to-white/0 blur-2xl" />

          <div className="grid w-full max-w-xl grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={tiltHover}
              className="col-span-1 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 shadow-[0_12px_30px_rgba(234,179,8,0.5)]" style={{ transform: 'translateZ(24px)' }}>
                <PenTool className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-extrabold text-black" style={{ transform: 'translateZ(18px)' }}>UI/UX Craft</h3>
              <p className="mt-2 text-sm font-semibold text-black/60" style={{ transform: 'translateZ(12px)' }}>
                Research-driven wireframes, micro-interactions, and prototypes that convert.
              </p>
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={tiltHover}
              className="col-span-1 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 shadow-[0_12px_30px_rgba(234,179,8,0.5)]" style={{ transform: 'translateZ(24px)' }}>
                <Layers className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-extrabold text-black" style={{ transform: 'translateZ(18px)' }}>Brand & Graphics</h3>
              <p className="mt-2 text-sm font-semibold text-black/60" style={{ transform: 'translateZ(12px)' }}>
                Bold graphic systems, key visuals, and striking marketing assets.
              </p>
            </motion.div>

            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={tiltHover}
              className="col-span-2 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 shadow-[0_12px_30px_rgba(234,179,8,0.5)]" style={{ transform: 'translateZ(24px)' }}>
                <Rocket className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-extrabold text-black" style={{ transform: 'translateZ(18px)' }}>Product Launch Ready</h3>
              <p className="mt-2 text-sm font-semibold text-black/60" style={{ transform: 'translateZ(12px)' }}>
                From concept to handoff, I deliver clean, scalable files and developer-friendly specs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services banner */}
      <div id="services" className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <h2 className="max-w-2xl text-2xl font-black text-black sm:text-3xl">
              Design that’s as functional as it is beautiful — websites, apps, dashboards, and brand systems.
            </h2>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 font-extrabold text-black shadow-[0_10px_25px_rgba(234,179,8,0.45)] hover:shadow-[0_12px_30px_rgba(234,179,8,0.55)]">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
