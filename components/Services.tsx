'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: {
    eyebrow: 'What We Do',
    h2: ['Expert Craft,', 'Every Time.'],
    book: 'Book Now',
    viewPricing: 'View pricing →',
    services: [
      {
        number: '01',
        title: 'Haircut',
        price: 'From €25',
        description:
          'Precision scissors and clipper work shaped to your face and style. Whether you want a classic cut or something contemporary, our barbers read the brief and deliver.',
      },
      {
        number: '02',
        title: 'Beard & Shave',
        price: 'From €10',
        description:
          'Beard shaping, machine shave, or a traditional blade shave with hot towel. Controlled edges, clean lines — the kind of detail that makes the whole look.',
      },
      {
        number: '03',
        title: 'Color & Style',
        price: 'From €40',
        description:
          'Hair coloring, highlights, straightening, and hair tattoo designs. Full transformation services handled by barbers who know their craft inside out.',
      },
    ],
  },
  fi: {
    eyebrow: 'Mitä teemme',
    h2: ['Huippuosaamista –', 'joka kerta.'],
    book: 'Varaa aika',
    viewPricing: 'Katso hinnasto →',
    services: [
      {
        number: '01',
        title: 'Hiustenleikkaus',
        price: 'Alkaen €25',
        description:
          'Tarkkaa saksi- ja koneleikkaustyötä, muotoiltu kasvojesi ja tyylisi mukaan. Halusitpa klassisen leikkauksen tai jotain modernimpaa – parturimme lukevat briifin ja toimittavat.',
      },
      {
        number: '02',
        title: 'Parta & Ajelu',
        price: 'Alkaen €10',
        description:
          'Parranmuotoilua, koneajelua tai perinteistä teräajelua kuumalla pyyhkeellä. Tarkat rajat, puhtaat linjat – sellainen yksityiskohta, joka viimeistelee koko ilmeen.',
      },
      {
        number: '03',
        title: 'Väri & Tyyli',
        price: 'Alkaen €40',
        description:
          'Hiusten värjäystä, raitoja, suoristusta ja hiustatuointeja. Täysiä muutospalveluita ammattilaispartureilta, jotka tuntevat alansa läpikotaisin.',
      },
    ],
  },
}

function ServiceBlock({
  number,
  title,
  price,
  description,
  viewPricing,
}: {
  number: string
  title: string
  price: string
  description: string
  viewPricing: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="border-b border-border bg-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="flex flex-col justify-center"
        style={{ padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4.5rem)' }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-[5rem] font-extrabold text-text/[0.08] leading-none tracking-[-0.02em]">
            {number}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h3
          className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.9] text-text mb-4"
          style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
        >
          {title}
        </h3>

        <p className="text-accent text-sm tracking-[0.12em] uppercase font-normal mb-6">{price}</p>

        <p className="text-muted text-base leading-[1.8] font-light max-w-[42ch] mb-10">
          {description}
        </p>

        <a
          href="#prices"
          className="inline-flex items-center gap-2 text-text text-[0.8125rem] tracking-[0.1em] uppercase no-underline border-b border-accent pb-[2px] self-start"
        >
          {viewPricing}
        </a>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="services" className="border-t border-border">
      <div
        className="flex justify-between items-end flex-wrap gap-4 bg-bg border-b border-border"
        style={{ padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}
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
      </div>

      {t.services.map((s) => (
        <ServiceBlock key={s.number} {...s} viewPricing={t.viewPricing} />
      ))}
    </section>
  )
}
