import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 mx-auto max-w-7xl px-6 py-5 sm:px-8">
      <div className="relative flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/60 p-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-[0_10px_30px_rgba(234,179,8,0.45)]">
            <span className="text-lg font-black text-black">YD</span>
          </div>
          <div className="leading-none">
            <div className="text-lg font-extrabold tracking-tight text-black">Your Name</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-black/60">UI/UX • Graphic Design</div>
          </div>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { label: 'Work', href: '#work' },
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl border border-black/10 bg-white/60 px-4 py-2 text-sm font-bold text-black hover:-translate-y-0.5 hover:bg-white transition-all duration-200 backdrop-blur-md"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="mailto:hello@example.com" className="group rounded-xl border border-black/10 bg-white/70 p-2 text-black hover:bg-white transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group rounded-xl border border-black/10 bg-white/70 p-2 text-black hover:bg-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group rounded-xl border border-black/10 bg-white/70 p-2 text-black hover:bg-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="ml-1 hidden items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2 font-extrabold text-black shadow-[0_10px_25px_rgba(234,179,8,0.45)] hover:shadow-[0_12px_30px_rgba(234,179,8,0.55)] md:flex"
          >
            Let’s Talk
          </a>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50" />
      </div>
    </header>
  )
}
