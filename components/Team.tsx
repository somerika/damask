'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

type Barber = {
  name: string
  role: { en: string; fi: string }
  photo?: string
  focalY?: string
}

const barbers: Barber[] = [
  {
    name: 'Saad',
    role: { en: 'Owner · Kannelmäki, Kallio', fi: 'Omistaja · Kannelmäki, Kallio' },
    photo: 'https://damask.fi/wp-content/uploads/2016/07/IMG_1072-1.jpg',
  },
  {
    name: 'Hasan',
    role: { en: 'Manager · Kivistö', fi: 'Toimipistevastaava · Kivistö' },
    photo: 'https://damask.fi/wp-content/uploads/2021/12/IMG_1068.jpg',
  },
  {
    name: 'Memo Ismail',
    role: {
      en: 'Marketing Manager · Kallio, Otaniemi',
      fi: 'Markkinointipäällikkö · Kallio, Otaniemi',
    },
  },
]

const content = {
  en: {
    eyebrow: 'About Us',
    h2: ['From Syria', 'To Helsinki.'],
    p1: 'We are a Kurdish family from Syria. Our family has been in barbering since 1995, with experience built across Beirut and Erbil. Saad, the eldest son, moved to Finland in 2009 and opened the first Damask location in Kannelmäki in 2016 — bringing a craft shaped over generations.',
    p2: 'What started as one chair has grown into five locations across the Helsinki metropolitan area. The standard has stayed the same: expert hands, patient craft, and genuine care for every person who sits in the chair.',
    stats: [
      { year: '1995', label: 'Family trade begins' },
      { year: '2016', label: 'First shop opens' },
      { year: '5', label: 'Locations today' },
    ],
    journeyEyebrow: 'Our Journey',
    timeline: [
      { year: '1995', label: 'Family trade begins', active: false },
      { year: '2009', label: 'Saad moves to Finland', active: false },
      { year: '2016', label: '1st location — Kannelmäki', active: true },
      { year: '2018', label: '2nd location — Kivistö', active: true },
      { year: '2019', label: '3rd location — Kallio', active: true },
      { year: '2022', label: '4th location — Kruunuvuorenranta', active: true },
      { year: '2024', label: '5th location — Otaniemi', active: true },
    ],
    teamEyebrow: 'Our Team',
    teamH2: ['The Hands', 'Behind the Craft.'],
  },
  fi: {
    eyebrow: 'Meistä',
    h2: ['Syyriasta', 'Helsinkiin.'],
    p1: 'Olemme kurdialaisperhe Syyriasta. Perheemme on harjoittanut parturityötä vuodesta 1995, kokemusta on kertynyt Beirutissa ja Erbilistä. Saad, perheen vanhin poika, muutti Suomeen vuonna 2009 ja avasi ensimmäisen Damask-liikkeen Kannelmäessä vuonna 2016 – tuoden mukanaan sukupolvien ajan kehittyneen ammattitaidon.',
    p2: 'Yhdestä tuolista on kasvanut viisi toimipistettä Helsingin metropolialueella. Taso on pysynyt samana: taitavat kädet, kärsivällinen työ ja aito välittäminen jokaisesta asiakkaasta.',
    stats: [
      { year: '1995', label: 'Perheen parturiura alkaa' },
      { year: '2016', label: 'Ensimmäinen liike avataan' },
      { year: '5', label: 'Toimipistettä' },
    ],
    journeyEyebrow: 'Matkamme',
    timeline: [
      { year: '1995', label: 'Perheen parturiura alkaa', active: false },
      { year: '2009', label: 'Saad muuttaa Suomeen', active: false },
      { year: '2016', label: '1. toimipiste — Kannelmäki', active: true },
      { year: '2018', label: '2. toimipiste — Kivistö', active: true },
      { year: '2019', label: '3. toimipiste — Kallio', active: true },
      { year: '2022', label: '4. toimipiste — Kruunuvuorenranta', active: true },
      { year: '2024', label: '5. toimipiste — Otaniemi', active: true },
    ],
    teamEyebrow: 'Tiimimme',
    teamH2: ['Kädet', 'Taidon Takana.'],
  },
}

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="about" ref={ref} className="bg-surface border-t border-border">
      {/* From Syria to Helsinki */}
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

        {/* Stats strip */}
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

      {/* Timeline */}
      <div
        className="border-t border-border"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="w-7 h-px bg-accent" />
          <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
            {t.journeyEyebrow}
          </span>
        </div>
        <div className="relative max-w-[640px] mx-auto">
          <div className="absolute right-[11px] top-0 bottom-0 w-px bg-border" />
          {t.timeline.map(({ year, label, active }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: 'easeOut' }}
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
      </div>

      {/* Team members */}
      <div className="border-t border-border bg-bg">
        <div
          style={{
            padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
              {t.teamEyebrow}
            </span>
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {t.teamH2[0]}
            <br />
            {t.teamH2[1]}
          </h2>
        </div>

        <div
          className="flex flex-wrap justify-center border-t border-border"
          style={{
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {barbers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
              className="flex flex-col items-center gap-3.5"
              style={{ width: 'clamp(96px, 12vw, 160px)' }}
            >
              <div
                className="rounded-full overflow-hidden relative border border-border transition-colors duration-300 hover:border-accent w-full"
                style={{ aspectRatio: '1' }}
              >
                {b.photo ? (
                  <Image
                    src={b.photo}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 96px, 160px"
                    className="object-cover transition-[filter] duration-300"
                    style={{
                      objectPosition: `center ${b.focalY ?? '15%'}`,
                      filter: 'grayscale(15%)',
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-surface flex items-center justify-center">
                    <span className="font-display font-bold text-muted text-xl tracking-wider">
                      {b.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="font-display text-base font-bold uppercase tracking-[0.1em] text-text leading-none mb-1">
                  {b.name}
                </p>
                <p className="text-muted text-[0.75rem] font-light tracking-[0.03em] leading-snug">
                  {b.role[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
