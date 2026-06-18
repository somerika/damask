'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'Ready?',
    heading: ['Book Your', 'Visit.'],
    sub: 'Walk-ins welcome. Online booking available for all five locations.',
    book: 'Book Now',
    locations: 'See Locations →',
  },
  fi: {
    eyebrow: 'Valmis?',
    heading: ['Varaa', 'Aikasi.'],
    sub: 'Myös ilman ajanvarausta. Verkkovaraus käytössä kaikissa viidessä toimipisteessä.',
    book: 'Varaa aika',
    locations: 'Toimipisteet →',
  },
}

export default function BookingCTA() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section
      className="bg-surface border-t border-border"
      style={{ padding: 'clamp(5rem, 10vw, 8rem) clamp(1.25rem, 4vw, 3rem)' }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
              {t.eyebrow}
            </span>
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            {t.heading[0]}
            <br />
            {t.heading[1]}
          </h2>
          <p
            className="text-muted font-light leading-[1.75] mt-6"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', maxWidth: '40ch' }}
          >
            {t.sub}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:pb-2">
          <Link
            href="/book"
            className="bg-accent text-bg px-10 py-[1rem] text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline text-center"
          >
            {t.book}
          </Link>
          <Link
            href="/locations"
            className="border border-border text-text px-10 py-[1rem] text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline text-center hover:border-text transition-colors duration-200"
          >
            {t.locations}
          </Link>
        </div>
      </div>
    </section>
  )
}
