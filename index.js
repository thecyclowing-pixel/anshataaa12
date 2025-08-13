import Image from 'next/image'
import { useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function Home({ theme, setTheme }) {
  useEffect(() => {
    // ensure hydration consistency
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const services = [
    { title: 'Custom Websites', desc: 'Next.js, Tailwind, optimized for performance.' },
    { title: 'Web Apps & SaaS', desc: 'Scalable React apps and APIs.' },
    { title: 'UI / UX Design', desc: 'Design systems, prototypes, and polished UI.' },
  ]

  const portfolio = [
    'https://images.unsplash.com/photo-1526378723925-1f8b9d3c6a9b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c9a9d0d6b9fdfb7a7c3d7f2e6c8a0e4',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a3b4fbbf3f1a8b0e2c5d4a1f9a2c3e7',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f8b7c6d5e4a3b2c1d0f9e8a7b6c5d4e'
  ]

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center text-white font-bold">AN</div>
            <div>
              <div className="text-sm font-semibold text-brand">ANSHATA IT SOLUTIONS</div>
              <div className="text-xs text-gray-500 dark:text-zinc-400 -mt-1">Modern software. Real results.</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-700 dark:text-zinc-200">Services</a>
            <a href="#portfolio" className="text-gray-700 dark:text-zinc-200">Portfolio</a>
            <a href="#contact" className="text-gray-700 dark:text-zinc-200">Contact</a>
            <button onClick={toggleTheme} className="ml-4 px-3 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 text-sm">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <a href="#contact" className="ml-4 inline-flex items-center px-4 py-2 rounded-lg bg-brand text-white font-semibold shadow">Get Started</a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="px-3 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 text-sm">{theme==='dark'?'Light':'Dark'}</button>
            <a href="#contact" className="inline-flex items-center px-3 py-2 rounded-lg bg-brand text-white font-medium">Start</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-5 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build fast, modern web products with <span className="text-brand">ANSHATA</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-zinc-300">We design and build responsive websites and apps using React, Next.js and modern UX — fast delivery, clean code, and pixel-perfect visuals.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-brand text-white font-semibold shadow">Work with us</a>
              <a href="#portfolio" className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-200">See portfolio</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="text-2xl font-bold">24+</div>
                <div className="text-xs text-gray-500 dark:text-zinc-400">Projects delivered</div>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs text-gray-500 dark:text-zinc-400">Client satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-zinc-800">
              <div className="rounded-lg overflow-hidden">
                <div className="w-full h-44 bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center rounded-lg">
                  <div className="text-brand font-bold">ANSHATA</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-zinc-300">Prototype preview — clean layouts, micro-interactions, and fast performance tuned for mobile & desktop.</div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800">Next.js</div>
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800">Tailwind</div>
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800">React</div>
                <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-gray-100 dark:border-zinc-800">Responsive</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-12">
          <h2 className="text-2xl font-bold">What we do</h2>
          <p className="mt-2 text-gray-600 dark:text-zinc-300">Full-cycle product development — from design to deployment.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable={true} glareMaxOpacity={0.08} key={s.title}>
                <motion.div whileHover={{ y: -6 }} className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                  <div className="text-lg font-semibold text-brand">{s.title}</div>
                  <div className="mt-3 text-gray-600 dark:text-zinc-300">{s.desc}</div>
                  <div className="mt-4">
                    <a href="#contact" className="text-sm font-medium text-brand">Start project →</a>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Selected work</h2>
            <a href="#portfolio" className="text-sm text-gray-500 dark:text-zinc-400">View all</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((src, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-zinc-800">
                <div className="w-full h-40 relative">
                  <img src={src} alt={'portfolio '+i} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">Project Title {i+1}</div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-zinc-400">A short description focusing on results and technologies used.</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-400 dark:text-zinc-500">Next.js · React</div>
                    <a href="#contact" className="text-sm text-brand font-medium">Discuss</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 p-6 rounded-xl bg-brand text-white shadow-lg">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold">Ready to start your project?</div>
              <div className="text-sm mt-1 text-white/90">Tell us about your idea and we'll turn it into a working product.</div>
            </div>
            <div>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-brand font-semibold">Get a quote</a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <p className="mt-2 text-gray-600 dark:text-zinc-300">Share your project details and we'll respond within one business day.</p>

            <form onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}} className="mt-6 grid grid-cols-1 gap-3">
              <input name="name" required placeholder="Your name" className="w-full p-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
              <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
              <input name="company" placeholder="Company (optional)" className="w-full p-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
              <textarea name="message" required placeholder="Tell us about your project" rows={5} className="w-full p-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900" />
              <div className="flex items-center gap-3">
                <button type="submit" className="px-5 py-3 rounded-lg bg-brand text-white font-semibold">Send message</button>
                <div className="text-sm text-gray-500 dark:text-zinc-400">Or email us at <a href="mailto:hello@anshata.com" className="underline">hello@anshata.com</a></div>
              </div>
            </form>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-900 border border-gray-100 dark:border-zinc-800">
            <h4 className="text-md font-semibold">Office</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-300">Remote-first. India based — available for global clients.</p>

            <div className="mt-4 text-sm text-gray-700 dark:text-zinc-300">
              <div className="mb-2"><strong>Email:</strong> hello@anshata.com</div>
              <div className="mb-2"><strong>Phone:</strong> +91 98765 43210</div>
              <div className="mb-2"><strong>Working Hours:</strong> Mon — Fri, 10:00 — 18:00 IST</div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold">Tech stack</h5>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-zinc-300">
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full border border-gray-100 dark:border-zinc-800">React</span>
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full border border-gray-100 dark:border-zinc-800">Next.js</span>
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full border border-gray-100 dark:border-zinc-800">Tailwind</span>
                <span className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full border border-gray-100 dark:border-zinc-800">Node</span>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CTA for mobile */}
        <a href="#contact" className="fixed bottom-6 right-6 md:hidden inline-flex items-center px-4 py-3 rounded-full bg-brand text-white shadow-lg">Contact</a>

        {/* FOOTER */}
        <footer className="py-8 border-t border-gray-100 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold">AN</div>
              <div className="text-sm">© {new Date().getFullYear()} ANSHATA IT SOLUTIONS</div>
            </div>
            <div className="text-sm text-gray-500 dark:text-zinc-400">Built with ❤️ using React & Next.js</div>
          </div>
        </footer>
      </main>
    </div>
  )
}