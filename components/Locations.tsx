'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locations'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'Find Us',
    h2: ['Five Locations.', 'One Standard.'],
    book: 'Book Now',
    bookHere: 'Book here →',
    comingSoon: 'Coming soon',
  },
  fi: {
    eyebrow: 'Löydä meidät',
    h2: ['Viisi toimipistettä.', 'Sama laatutaso.'],
    book: 'Varaa aika',
    bookHere: 'Varaa tästä →',
    comingSoon: 'Tulossa pian',
  },
}

export default function Locations() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="locations" ref={ref} className="bg-bg border-t border-border">
      <div
        className="max-w-[1400px] mx-auto"
        style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-between items-end mb-16 flex-wrap gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-accent" />
              <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
                {t.eyebrow}
              </span>
            </div>
            <h2
              className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {t.h2[0]}
              <br />
              {t.h2[1]}
            </h2>
          </div>
          <Link
            href="/book"
            className="bg-accent text-bg px-8 py-3.5 text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline"
          >
            {t.book}
          </Link>
        </motion.div>

        {/* Location rows */}
        <div className="border-t border-border">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto] items-center border-b border-border"
              style={{ gap: '1.25rem 2rem', padding: '2.25rem 0' }}
            >
              <div>
                <h3
                  className="font-display font-bold uppercase tracking-[0.02em] text-text leading-none mb-2"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                >
                  {loc.name}
                </h3>
                <p className="text-muted text-sm font-light mb-[0.35rem]">
                  {loc.address}, {loc.city}
                </p>
                <div className="flex gap-5 flex-wrap">
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-muted text-[0.8125rem] no-underline font-light"
                  >
                    {loc.phone}
                  </a>
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-muted text-[0.8125rem] no-underline font-light"
                  >
                    {loc.email}
                  </a>
                </div>
              </div>

              <div>
                {Object.values(loc.hours).map((h) => (
                  <p
                    key={h}
                    className="text-muted text-[0.8125rem] tabular-nums font-light leading-[1.7]"
                  >
                    {h}
                  </p>
                ))}
              </div>

              {loc.timmaUrl ? (
                <a
                  href={loc.timmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start justify-self-start bg-accent text-bg px-6 py-[0.625rem] text-xs tracking-[0.1em] uppercase no-underline whitespace-nowrap font-medium transition-opacity duration-200 hover:opacity-80"
                >
                  {t.bookHere}
                </a>
              ) : (
                <span className="self-start justify-self-start text-[#3a3530] text-xs tracking-[0.1em] uppercase whitespace-nowrap">
                  {t.comingSoon}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
