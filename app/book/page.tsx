'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/locations'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'Reservation',
    h1: ['Choose Your', 'Location.'],
    description:
      'Select the Damask location nearest to you. Each button opens our booking system — pick your barber, date, and service.',
    bookAt: (name: string) => `Book at ${name}`,
    back: '← Back',
    callNote: 'Prefer to call? All locations are reachable by phone during opening hours.',
  },
  fi: {
    eyebrow: 'Varaus',
    h1: ['Valitse', 'toimipiste.'],
    description:
      'Valitse lähin Damask-toimipiste. Jokainen nappi avaa varausjärjestelmämme – valitse parturisi, päivämäärä ja palvelu.',
    bookAt: (name: string) => `Varaa ${name}`,
    back: '← Takaisin',
    callNote:
      'Haluatko soittaa? Kaikki toimipisteet ovat tavoitettavissa puhelimitse aukioloaikoina.',
  },
}

export default function BookPage() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <div className="min-h-dvh bg-bg text-text">
      <header
        className="fixed inset-x-0 top-0 z-50 h-[68px] flex items-center justify-between bg-bg/96 backdrop-blur-[14px] border-b border-border"
        style={{ padding: '0 clamp(1.25rem, 4vw, 3rem)' }}
      >
        <Link href="/" className="flex items-center gap-[10px] no-underline">
          <Image
            src="/logo.png"
            alt="Damask"
            width={28}
            height={28}
            className="object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <span className="font-display text-xl tracking-[0.18em] text-text font-bold">DAMASK</span>
        </Link>
        <Link href="/" className="text-muted text-[0.8125rem] tracking-[0.06em] no-underline">
          {t.back}
        </Link>
      </header>

      <div
        className="max-w-[1200px] mx-auto"
        style={{
          padding: 'clamp(8rem, 14vw, 10rem) clamp(1.25rem, 4vw, 3rem) clamp(4rem, 8vw, 6rem)',
        }}
      >
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
              {t.eyebrow}
            </span>
          </div>
          <h1
            className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            {t.h1[0]}
            <br />
            {t.h1[1]}
          </h1>
          <p className="text-muted text-base font-light leading-[1.75] max-w-[44ch]">
            {t.description}
          </p>
        </div>

        <div className="border-t border-border">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="grid md:grid-cols-[2fr_1fr_300px] items-center border-b border-border"
              style={{ gap: '1.5rem 2rem', padding: '2.5rem 0' }}
            >
              <div>
                <h2
                  className="font-display font-bold uppercase tracking-[0.02em] text-text leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {loc.name}
                </h2>
                <p className="text-muted text-sm font-light">
                  {loc.address}, {loc.city}
                </p>
                <a href={`tel:${loc.phone}`} className="text-muted text-sm font-light no-underline">
                  {loc.phone}
                </a>
              </div>

              <div>
                {Object.values(loc.hours).map((h) => (
                  <p
                    key={h}
                    className="text-muted text-[0.8125rem] font-light leading-[1.7] tabular-nums"
                  >
                    {h}
                  </p>
                ))}
              </div>

              <a
                href={loc.timmaUrl ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-accent text-bg px-8 py-4 text-[0.9375rem] tracking-[0.08em] uppercase font-medium no-underline whitespace-nowrap transition-opacity duration-200 hover:opacity-80"
              >
                {t.bookAt(loc.name)}
              </a>
            </div>
          ))}
        </div>

        <p className="text-muted text-[0.8125rem] mt-12 font-light">{t.callNote}</p>
      </div>
    </div>
  )
}
