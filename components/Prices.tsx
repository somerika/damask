'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Item = { label: string; price: string }
type Cat = { title: string; items: Item[] }

const categories: Cat[] = [
  {
    title: 'Hair',
    items: [
      { label: 'Hair Wash', price: '€5' },
      { label: 'Haircut', price: '€25' },
      { label: 'Style Change Cut', price: 'from €30' },
      { label: 'Hair Coloring', price: 'from €40' },
      { label: 'Highlight Coloring', price: 'from €40' },
      { label: 'Hair Straightening', price: 'from €40' },
      { label: 'Hair Tattoo', price: 'from €15' },
      { label: 'Children (under 12)', price: '€20' },
    ],
  },
  {
    title: 'Beard & Shave',
    items: [
      { label: 'Machine Shave', price: '€10' },
      { label: 'Blade Shave', price: '€15' },
      { label: 'Beard Shaping', price: '€15' },
    ],
  },
  {
    title: 'Skin Care',
    items: [
      { label: 'Hand Facial (20 min)', price: '€20' },
      { label: 'Machine Facial (60 min)', price: '€50' },
    ],
  },
  {
    title: 'Hair Removal',
    items: [
      { label: 'Wax Hair Removal', price: 'from €10' },
      { label: 'Thread Hair Removal', price: '€10' },
    ],
  },
  {
    title: 'Other',
    items: [{ label: 'Ear Cleaning', price: '€15' }],
  },
]

function Row({ label, price }: Item) {
  return (
    <div className="flex justify-between items-baseline py-[0.875rem] border-b border-border gap-4">
      <span className="text-text text-[0.9375rem] font-light">{label}</span>
      <span className="text-accent text-[0.9375rem] font-normal tabular-nums whitespace-nowrap shrink-0">
        {price}
      </span>
    </div>
  )
}

function Column({ cats }: { cats: Cat[] }) {
  return (
    <div>
      {cats.map((cat) => (
        <div key={cat.title} className="mb-10">
          <p className="text-accent text-[0.6875rem] tracking-[0.28em] uppercase mb-2 font-normal">
            {cat.title}
          </p>
          {cat.items.map((item) => (
            <Row key={item.label} {...item} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Prices() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="prices" ref={ref} className="bg-surface border-t border-border">
      <div
        className="max-w-[1400px] mx-auto"
        style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)' }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 pb-12 border-b border-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">Pricing</span>
          </div>
          <h2
            className="font-display font-extrabold uppercase tracking-[-0.01em] leading-[0.92] text-text mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Services
            <br />
            &amp; Pricing.
          </h2>
          <p className="text-muted text-sm font-light leading-[1.7] max-w-[48ch]">
            All prices include VAT. Walk-ins welcome — booking recommended for color services.
          </p>
        </motion.div>

        {/* Price list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        >
          <Column cats={categories} />
        </motion.div>
      </div>
    </section>
  )
}
