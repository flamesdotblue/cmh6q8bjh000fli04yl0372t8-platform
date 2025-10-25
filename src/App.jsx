import React from 'react'
import HeaderNav from './components/HeaderNav'
import Hero3D from './components/Hero3D'
import WorkShowcase from './components/WorkShowcase'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-yellow-300 selection:text-black">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
      </div>

      <HeaderNav />
      <main className="mx-auto max-w-7xl px-6 sm:px-8">
        <Hero3D />
        <WorkShowcase />
        <ContactSection />
      </main>
      <footer className="mx-auto max-w-7xl px-6 sm:px-8 pb-16 pt-12">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-6 backdrop-blur-md">
          <p className="text-center text-sm font-medium text-black/70">© {new Date().getFullYear()} Your Name — UI/UX & Graphic Designer. Crafted with care.</p>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40" />
        </div>
      </footer>
    </div>
  )
}
