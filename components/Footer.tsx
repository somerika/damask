'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS } from '@/lib/locations'

export default function Footer() {
  return (
    <footer
      className="bg-surface border-t border-border"
      style={{ padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem) 2.5rem' }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 pb-14 border-b border-border mb-8">
          {/* Brand */}
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
              Expert barbering since 2016. Five locations across Helsinki and Vantaa — a family
              trade delivered with precision.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-accent text-[0.6875rem] tracking-[0.25em] uppercase mb-5">
              Navigate
            </p>
            {['#services', '#prices', '#team', '#locations'].map((href) => (
              <a
                key={href}
                href={href}
                className="block text-muted text-sm no-underline mb-[0.625rem] font-light transition-colors duration-200 hover:text-text"
              >
                {href
                  .replace('#', '')
                  .replace('-', ' ')
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
            <Link
              href="/book"
              className="inline-block mt-4 text-accent text-sm no-underline font-normal"
            >
              Book Now →
            </Link>
          </div>

          {/* Locations */}
          <div>
            <p className="text-accent text-[0.6875rem] tracking-[0.25em] uppercase mb-5">
              Locations
            </p>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="mb-3">
                <p className="text-text text-[0.8125rem] font-normal">{loc.name}</p>
                <p className="text-muted text-xs font-light">{loc.city}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="text-muted text-xs font-light">
            © {new Date().getFullYear()} Damask Barber Shop. All rights reserved.
          </p>
          <p className="text-muted text-xs font-light">Helsinki · Vantaa · Espoo</p>
        </div>
      </div>
    </footer>
  )
}
