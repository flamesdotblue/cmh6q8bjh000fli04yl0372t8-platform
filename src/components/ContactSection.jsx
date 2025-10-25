import React from 'react'
import { Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl sm:p-10">
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/50" />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-black text-black">Let’s build something iconic.</h3>
            <p className="mt-3 text-sm font-semibold text-black/70">
              Share your goals, timeline, and budget. I’ll reply within 24 hours with next steps.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 font-extrabold text-black shadow-[0_10px_25px_rgba(234,179,8,0.45)] hover:shadow-[0_12px_30px_rgba(234,179,8,0.55)]"
            >
              <Mail className="h-5 w-5" /> hello@example.com
            </a>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-bold text-black/70">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur">
                <div className="text-black">Services</div>
                <ul className="mt-2 space-y-1">
                  <li>Product Design (UI/UX)</li>
                  <li>Brand Design & Graphics</li>
                  <li>Design Systems</li>
                  <li>Motion & Prototyping</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/60 p-4 backdrop-blur">
                <div className="text-black">Industries</div>
                <ul className="mt-2 space-y-1">
                  <li>SaaS & B2B</li>
                  <li>Fintech</li>
                  <li>E‑commerce</li>
                  <li>Startups</li>
                </ul>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-xs font-black uppercase tracking-wide text-black/70">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-semibold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-wide text-black/70">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-semibold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-wide text-black/70">Budget</label>
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-semibold text-black focus:outline-none focus:ring-4 focus:ring-yellow-300/50">
                  <option>Under $2k</option>
                  <option>$2k – $5k</option>
                  <option>$5k – $10k</option>
                  <option>$10k+</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-wide text-black/70">Project Details</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your goals, audience, timeline, and success metrics."
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 font-semibold text-black placeholder:text-black/40 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert('Thanks! I will get back to you within 24 hours.')}
              className="mt-4 w-full rounded-2xl bg-yellow-400 px-6 py-3 font-extrabold text-black shadow-[0_10px_25px_rgba(234,179,8,0.45)] hover:shadow-[0_12px_30px_rgba(234,179,8,0.55)]"
            >
              Send Inquiry
            </button>
            <p className="mt-3 text-center text-xs font-semibold text-black/50">No spam. I’ll only use your info to reply.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
