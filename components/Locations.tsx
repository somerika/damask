'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locations'

export default function Locations() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="locations" ref={ref} className="bg-bg border-t border-border">
      <div
        className="max-w-[1400px] mx-auto"
        style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        {/* Header */}
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
                Find Us
              </span>
            </div>
            <h2
              className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Five Locations.
              <br />
              One Standard.
            </h2>
          </div>
          <Link
            href="/book"
            className="bg-accent text-bg px-8 py-3.5 text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline"
          >
            Book Now
          </Link>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
              Our Journey
            </span>
          </div>

          <div className="relative max-w-[640px]">
            {/* Vertical line */}
            <div className="absolute right-[11px] top-0 bottom-0 w-px bg-border" />

            {[
              { year: '1995', label: 'Family trade begins in Beirut', active: false },
              { year: '2009', label: 'Saad moves to Finland', active: false },
              { year: '2016', label: '1st location — Kannelmäki', active: true },
              { year: '2018', label: '2nd location — Kivistö', active: true },
              { year: '2019', label: '3rd location — Kallio', active: true },
              { year: '2022', label: '4th location — Kruunuvuorenranta', active: true },
              { year: '2024', label: '5th location — Otaniemi', active: true },
            ].map(({ year, label, active }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                className="grid items-center py-5"
                style={{ gridTemplateColumns: '72px 1fr 24px', gap: '2rem' }}
              >
                <div
                  className={`font-display font-extrabold tracking-[-0.01em] leading-none ${active ? 'text-accent' : 'text-[#3a3530]'}`}
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
                >
                  {year}
                </div>
                <div
                  className={`text-[0.9375rem] font-light tracking-[0.01em] ${active ? 'text-muted' : 'text-[#3a3530]'}`}
                >
                  {label}
                </div>
                <div
                  className={`w-2.5 h-2.5 rounded-full justify-self-center relative z-[1] ${active ? 'bg-accent' : 'bg-[#3a3530]'}`}
                />
              </motion.div>
            ))}
          </div>
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
              {/* Name + contact */}
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

              {/* Hours */}
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

              {/* CTA */}
              {loc.timmaUrl ? (
                <a
                  href={loc.timmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start justify-self-start border border-border text-text px-6 py-[0.625rem] text-xs tracking-[0.1em] uppercase no-underline whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  Book here →
                </a>
              ) : (
                <span className="self-start justify-self-start text-[#3a3530] text-xs tracking-[0.1em] uppercase whitespace-nowrap">
                  Coming soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
