import React from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Fintech Dashboard UI',
    desc: 'Data-dense, accessible, and performant dashboard with modular components and dark mode.',
    tags: ['UI/UX', 'Design System'],
    accent: 'from-yellow-300 to-yellow-500',
  },
  {
    title: 'E-commerce Revamp',
    desc: 'Conversion-focused storefront with 3D product previews and smooth micro-interactions.',
    tags: ['UX', 'Motion'],
    accent: 'from-yellow-200 to-yellow-400',
  },
  {
    title: 'SaaS Landing',
    desc: 'Hero with glassy aesthetics, storytelling sections, and proof-driven CTAs.',
    tags: ['Brand', 'UI'],
    accent: 'from-yellow-300 to-yellow-400',
  },
  {
    title: 'Creative Campaign Visuals',
    desc: 'Bold key visuals and social kits for a cross-platform product launch.',
    tags: ['Graphics', 'Art Direction'],
    accent: 'from-yellow-200 to-yellow-500',
  },
]

export default function WorkShowcase() {
  return (
    <section id="work" className="py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-black text-black sm:text-5xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-black/60">
            Big, bold, and conversion-ready designs. Built with accessibility and scalability in mind.
          </p>
        </div>
        <a href="#contact" className="hidden rounded-2xl bg-yellow-400 px-4 py-2 font-extrabold text-black shadow-sm hover:shadow-md sm:inline-block">
          Request Portfolio PDF
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl"
          >
            <div className={`h-48 w-full bg-gradient-to-br ${p.accent}`} />
            <div className="p-6">
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-extrabold text-black">{p.title}</h3>
                <ExternalLink className="mt-1 h-5 w-5 text-black/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-sm font-semibold text-black/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-bold text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 -120px 120px -60px rgba(0,0,0,0.15)' }} />
          </a>
        ))}
      </div>

      <div id="about" className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl">
          <h4 className="text-xl font-black text-black">Approach</h4>
          <p className="mt-2 text-sm font-semibold text-black/70">
            I integrate user research, brand strategy, and motion to craft experiences that are both intuitive and iconic.
          </p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl">
          <h4 className="text-xl font-black text-black">Stack</h4>
          <p className="mt-2 text-sm font-semibold text-black/70">Figma, Framer, Adobe CC, After Effects, Blender, and modern design handoff tooling.</p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl">
          <h4 className="text-xl font-black text-black">Impact</h4>
          <p className="mt-2 text-sm font-semibold text-black/70">Launched 50+ projects across web and mobile. Consistent uplift in engagement and conversions.</p>
        </div>
      </div>
    </section>
  )
}
