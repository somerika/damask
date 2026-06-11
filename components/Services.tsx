'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

type Service = { name: string; price?: string }
type Category = { title: string; services: Service[] }

const content = {
  en: {
    eyebrow: 'Pricing',
    h2: ['Services &', 'Pricing.'],
    subtitle: 'All prices include VAT. Walk-ins welcome — booking recommended for color services.',
    book: 'Book Now',
    categories: [
      {
        title: 'Hair',
        services: [
          { name: 'Hair Wash', price: '€10' },
          { name: 'Haircut', price: 'From €25' },
          { name: 'Style Change Cut', price: 'From €30' },
          { name: 'Hair Coloring', price: 'From €49' },
          { name: 'Highlight Coloring', price: 'From €59' },
          { name: 'Hair Straightening', price: 'From €49' },
          { name: 'Perm', price: 'From €89' },
          { name: 'Hair Tattoo', price: 'From €15' },
          { name: 'Children (under 12)', price: '€20' },
        ],
      },
      {
        title: 'Beard & Shave',
        services: [
          { name: 'Machine Shave', price: '€10' },
          { name: 'Blade Shave', price: '€15' },
          { name: 'Beard Shaping', price: '€20' },
        ],
      },
      {
        title: 'Skin Care',
        services: [
          { name: 'Hand Facial (20 min)', price: '€20' },
          { name: 'Machine Facial (60 min)', price: '€50' },
        ],
      },
      {
        title: 'Hair Removal',
        services: [
          { name: 'Wax Hair Removal', price: 'From €15' },
          { name: 'Thread Hair Removal', price: 'From €15' },
        ],
      },
      {
        title: 'Other',
        services: [{ name: 'Ear Cleaning', price: '€15' }],
      },
    ] as Category[],
    womens: {
      eyebrow: "Women's Services",
      note: 'Available at Otaniemi location only',
      categories: [
        {
          title: "Women's Haircuts",
          services: [{ name: "Women's Haircut (incl. washing)", price: 'From €40' }],
        },
        {
          title: "Women's Color",
          services: [
            { name: "Women's Hair Coloring", price: 'From €139' },
            { name: "Women's Coloring & Highlights", price: 'From €99' },
          ],
        },
        {
          title: "Women's Treatments",
          services: [
            { name: "Women's Keratin Straightening", price: 'From €99' },
            { name: "Women's Hair Curling", price: 'From €149' },
          ],
        },
      ] as Category[],
    },
  },
  fi: {
    eyebrow: 'Hinnasto',
    h2: ['Palvelut &', 'Hinnasto.'],
    subtitle:
      'Kaikki hinnat sisältävät ALV:n. Tervetuloa myös ilman ajanvarausta — väripalveluihin ajanvaraus on suositeltava.',
    book: 'Varaa aika',
    categories: [
      {
        title: 'Hiukset',
        services: [
          { name: 'Hiustenpesu', price: '€10' },
          { name: 'Hiustenleikkaus', price: 'Alkaen €25' },
          { name: 'Mallinmuutosleikkaus', price: 'Alkaen €30' },
          { name: 'Hiusten Värjäys', price: 'Alkaen €49' },
          { name: 'Hiusraidat', price: 'Alkaen €59' },
          { name: 'Hiusten Suoristus', price: 'Alkaen €49' },
          { name: 'Permanentti', price: 'Alkaen €89' },
          { name: 'Hiustatuointi', price: 'Alkaen €15' },
          { name: 'Lasten Hiustenleikkaus (alle 12v)', price: '€20' },
        ],
      },
      {
        title: 'Parta & Ajelu',
        services: [
          { name: 'Koneparranajo', price: '€10' },
          { name: 'Teräajelu', price: '€15' },
          { name: 'Parran Muotoilu', price: '€20' },
        ],
      },
      {
        title: 'Ihohoito',
        services: [
          { name: 'Kasvohoito Käsillä (20 min)', price: '€20' },
          { name: 'Kasvohoito Koneella (60 min)', price: '€50' },
        ],
      },
      {
        title: 'Karvanpoisto',
        services: [
          { name: 'Karvan Poisto Vahalla', price: 'Alkaen €15' },
          { name: 'Karvan Poisto Langalla', price: 'Alkaen €15' },
        ],
      },
      {
        title: 'Muut',
        services: [{ name: 'Korvanpuhdistus', price: '€15' }],
      },
    ] as Category[],
    womens: {
      eyebrow: 'Naisten Palvelut',
      note: 'Saatavilla vain Otaniemen toimipisteessä',
      categories: [
        {
          title: 'Naisten Hiustenleikkaukset',
          services: [{ name: 'Kampaamoleikkaus (sis. pesu)', price: 'Alkaen €40' }],
        },
        {
          title: 'Naisten Väri',
          services: [
            { name: 'Naisten Hiusten Värjäys', price: 'Alkaen €139' },
            { name: 'Naisten Hiusraidat', price: 'Alkaen €99' },
          ],
        },
        {
          title: 'Naisten Hoidot',
          services: [
            { name: 'Naisten Hiusten Suoristus', price: 'Alkaen €99' },
            { name: 'Naisten Hiusten Kihartaminen', price: 'Alkaen €149' },
          ],
        },
      ] as Category[],
    },
  },
}

function CategoryBlock({ cat, inView, delay }: { cat: Category; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <p className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase pt-10 pb-4 border-b border-border">
        {cat.title}
      </p>
      {cat.services.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between border-b border-border py-4 gap-8"
        >
          <span className="text-text text-[0.9375rem] font-light">{s.name}</span>
          {s.price && (
            <span className="text-muted text-[0.8125rem] tabular-nums whitespace-nowrap">
              {s.price}
            </span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="services" ref={ref} className="border-t border-border">
      {/* Header */}
      <div
        className="bg-bg border-b border-border"
        style={{ padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-accent" />
          <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
            {t.eyebrow}
          </span>
        </div>
        <h2
          className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {t.h2[0]}
          <br />
          {t.h2[1]}
        </h2>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <p className="text-muted text-sm font-light leading-[1.75] max-w-[44ch]">{t.subtitle}</p>
          <Link
            href="/book"
            className="bg-accent text-bg px-8 py-3.5 text-[0.8125rem] tracking-[0.12em] uppercase font-medium no-underline whitespace-nowrap"
          >
            {t.book}
          </Link>
        </div>
      </div>

      {/* Service list */}
      <div
        className="bg-bg max-w-[860px] mx-auto"
        style={{ padding: '0 clamp(1.25rem, 4vw, 3rem) clamp(3rem, 6vw, 5rem)' }}
      >
        {t.categories.map((cat, i) => (
          <CategoryBlock key={cat.title} cat={cat} inView={inView} delay={0.1 + i * 0.08} />
        ))}
      </div>

      {/* Women's section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="bg-surface border-t border-border"
        style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
      >
        <div className="max-w-[860px] mx-auto" style={{ padding: '0 clamp(1.25rem, 4vw, 3rem)' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">
              {t.womens.eyebrow}
            </span>
          </div>
          <p className="text-muted text-sm font-light mb-0">{t.womens.note}</p>
          <div>
            {t.womens.categories.map((cat, i) => (
              <CategoryBlock key={cat.title} cat={cat} inView={inView} delay={0.55 + i * 0.07} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
