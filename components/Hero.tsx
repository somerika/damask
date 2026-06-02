'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'Est. 2016 · Helsinki',
    h1: ['Your great', 'look starts', 'here.'],
    sub: 'Expert barbers. Five locations across Helsinki, Vantaa and Espoo.',
    book: 'Book Now',
    services: 'Services ↓',
  },
  fi: {
    eyebrow: 'Per. 2016 · Helsinki',
    h1: ['Your great', 'look starts', 'here.'],
    sub: 'Ammattitaitoiset parturit. Viisi liikettä Helsingissä, Vantaalla ja Espoossa.',
    book: 'Varaa aika',
    services: 'Palvelut ↓',
  },
}

export default function Hero() {
  const { lang, setLang } = useLanguage()
  const t = content[lang]

  return (
    <section className="relative min-h-dvh overflow-hidden bg-bg">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to top, #0f0e0d 0%, rgba(15,14,13,0.4) 50%, rgba(15,14,13,0.15) 100%)',
        }}
      />

      {/* Top gradient for nav */}
      <div className="absolute top-0 left-0 right-0 h-[180px] z-[2] bg-gradient-to-b from-bg/70 to-transparent" />

      {/* Language toggle — top right */}
      <div className="absolute top-[84px] right-[clamp(1.25rem,4vw,3rem)] z-20 flex gap-8">
        {(['en', 'fi'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`bg-transparent border-none cursor-pointer p-0 font-display text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
              lang === l ? 'text-text font-bold' : 'text-text/35 font-normal'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Hero content — bottom aligned */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-normal">
            {t.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: 'easeOut' }}
          className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text mb-10"
          style={{ fontSize: 'clamp(4.5rem, 13vw, 13rem)' }}
        >
          {t.h1[0]}
          <br />
          {t.h1[1]}
          <br />
          {t.h1[2]}
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-between items-end flex-wrap gap-6"
        >
          <p className="text-text/55 text-[0.9375rem] font-light leading-[1.7] max-w-[38ch]">
            {t.sub}
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <Link
              href="/book"
              className="bg-accent text-bg px-9 py-[0.9rem] text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline"
            >
              {t.book}
            </Link>
            <a
              href="/services"
              className="border border-text/20 text-text px-9 py-[0.9rem] text-[0.8125rem] tracking-[0.12em] uppercase font-normal no-underline"
            >
              {t.services}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
