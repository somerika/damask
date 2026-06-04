'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS } from '@/lib/locations'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    description:
      'Expert barbering since 2016. Five locations across Helsinki, Vantaa and Espoo — family run, done right.',
    navigate: 'Navigate',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/services#prices' },
      { label: 'Our Team', href: '/team' },
      { label: 'Locations', href: '/locations' },
    ],
    bookNow: 'Book Now →',
    locationsTitle: 'Locations',
    copyright: `© ${new Date().getFullYear()} Damask Barber Shop. All rights reserved.`,
  },
  fi: {
    description:
      'Ammattitaitoista parturityötä vuodesta 2016. Viisi toimipistettä Helsingissä, Vantaalla ja Espoossa – perheyritys, tehty kunnolla.',
    navigate: 'Navigoi',
    links: [
      { label: 'Palvelut', href: '/services' },
      { label: 'Hinnasto', href: '/services#prices' },
      { label: 'Tiimimme', href: '/team' },
      { label: 'Toimipisteet', href: '/locations' },
    ],
    bookNow: 'Varaa aika →',
    locationsTitle: 'Toimipisteet',
    copyright: `© ${new Date().getFullYear()} Damask Barber Shop. Kaikki oikeudet pidätetään.`,
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <footer
      className="bg-surface border-t border-border"
      style={{ padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem) 2.5rem' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 pb-14 border-b border-border mb-8">
          <div>
            <div className="flex items-center gap-[10px] mb-6">
              <Image
                src="/logo.png"
                alt="Damask"
                width={28}
                height={28}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="font-display text-xl tracking-[0.18em] text-text font-bold">
                DAMASK
              </span>
            </div>
            <p className="text-muted text-sm leading-[1.8] max-w-[36ch] font-light">
              {t.description}
            </p>
          </div>

          <div>
            <p className="text-accent text-[0.6875rem] tracking-[0.25em] uppercase mb-5">
              {t.navigate}
            </p>
            {t.links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block text-muted text-sm no-underline mb-[0.625rem] font-light transition-colors duration-200 hover:text-text"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/book"
              className="inline-block mt-4 text-accent text-sm no-underline font-normal"
            >
              {t.bookNow}
            </Link>
          </div>

          <div>
            <p className="text-accent text-[0.6875rem] tracking-[0.25em] uppercase mb-5">
              {t.locationsTitle}
            </p>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="mb-3">
                <p className="text-text text-[0.8125rem] font-normal">{loc.name}</p>
                <p className="text-muted text-xs font-light">{loc.city}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="text-muted text-xs font-light">{t.copyright}</p>
          <p className="text-muted text-xs font-light">Helsinki · Vantaa · Espoo</p>
        </div>
      </div>
    </footer>
  )
}
