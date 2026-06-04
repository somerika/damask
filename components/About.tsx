'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'Our Story',
    h2: ['From Beirut', 'To Helsinki.'],
    p1: 'We are a Kurdish family from Syria. Our family has been in barbering since 1995, with experience built across Beirut and Erbil. Saad, the eldest son, moved to Finland in 2009 and opened the first Damask location in Kannelmäki in 2016 — bringing a craft shaped over generations.',
    p2: 'What started as one chair has grown into five locations across the Helsinki metropolitan area. The standard has stayed the same: expert hands, patient craft, and genuine care for every person who sits in the chair.',
    stats: [
      { year: '1995', label: 'Family trade begins' },
      { year: '2016', label: 'Helsinki opens' },
      { year: '5', label: 'Locations today' },
    ],
  },
  fi: {
    eyebrow: 'Tarinamme',
    h2: ['Beirutista', 'Helsinkiin.'],
    p1: 'Olemme kurdialaisperhe Syyriasta. Perheemme on harjoittanut parturityötä vuodesta 1995, kokemusta on kertynyt Beirutissa ja Erbilistä. Saad, perheen vanhin poika, muutti Suomeen vuonna 2009 ja avasi ensimmäisen Damask-liikkeen Kannelmäessä vuonna 2016 – tuoden mukanaan sukupolvien ajan kehittyneen ammattitaidon.',
    p2: 'Yhdestä tuolista on kasvanut viisi toimipistettä Helsingin metropolialueella. Standardi on pysynyt samana: taitavat kädet, kärsivällinen työ ja aito välittäminen jokaisesta asiakkaasta.',
    stats: [
      { year: '1995', label: 'Perheen parturiura alkaa' },
      { year: '2016', label: 'Helsinki avataan' },
      { year: '5', label: 'Toimipistettä tänään' },
    ],
  },
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="about" ref={ref} className="bg-surface border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-7 h-px bg-accent" />
          <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
            {t.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2
              className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text mb-10"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            >
              {t.h2[0]}
              <br />
              {t.h2[1]}
            </h2>
            <div className="max-w-[54ch]">
              <p className="text-muted text-base leading-[1.85] font-light mb-6">{t.p1}</p>
              <p className="text-muted text-base leading-[1.85] font-light">{t.p2}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
            className="relative h-[420px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/staff.jpg"
              alt="Damask team"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 mt-14 pt-10 border-t border-border gap-4">
          {t.stats.map(({ year, label }) => (
            <div key={year} className="text-center">
              <div
                className="font-display font-extrabold text-accent leading-none mb-[0.4rem] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {year}
              </div>
              <div className="text-muted text-xs tracking-[0.04em] font-light">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
