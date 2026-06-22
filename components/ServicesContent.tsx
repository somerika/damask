'use client'

import { useRef } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'
import type { ServicesContent as ServicesData, ServiceCategory } from '@/lib/sanity/queries'

const Scissors = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
)

const Razor = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <rect x="3" y="9" width="18" height="6" rx="1" />
    <line x1="10" y1="9" x2="10" y2="15" />
    <line x1="14" y1="9" x2="14" y2="15" />
  </svg>
)

const Sparkle = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l1.5 8.5 8.5 1.5-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
  </svg>
)

const Bolt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4 14h7v8l9-12h-7z" />
  </svg>
)

const Dots = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
)

const Drop = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2c-5.5 6-8 10-8 14a8 8 0 0016 0c0-4-2.5-8-8-14z" />
  </svg>
)

const Wave = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M2 10Q5 7 8 10T14 10T20 10" />
    <path d="M2 14Q5 17 8 14T14 14T20 14" />
  </svg>
)

const mainIcons: ReactNode[] = [
  <Scissors key="s" />,
  <Razor key="r" />,
  <Sparkle key="sp" />,
  <Bolt key="b" />,
  <Dots key="d" />,
]

const womensIcons: ReactNode[] = [<Scissors key="s" />, <Drop key="dr" />, <Wave key="w" />]

function CategoryBlock({
  cat,
  inView,
  delay,
  icon,
}: {
  cat: ServiceCategory
  inView: boolean
  delay: number
  icon?: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2.5 pt-10 pb-4 border-b border-border">
        {icon && <span className="text-accent">{icon}</span>}
        <p className="text-accent text-[0.6875rem] tracking-[0.3em] uppercase">{cat.title}</p>
      </div>
      {cat.services.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-between border-b border-border py-4 gap-8"
        >
          <span className="text-text text-base font-light">{s.name}</span>
          {s.price && (
            <span className="text-text/80 text-[0.9375rem] tabular-nums whitespace-nowrap">
              {s.price}
            </span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

export default function ServicesContent({ content }: { content: ServicesData }) {
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
          <CategoryBlock
            key={cat.title}
            cat={cat}
            inView={inView}
            delay={0.1 + i * 0.08}
            icon={mainIcons[i]}
          />
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
          <p className="text-text/70 text-base font-light mt-2">{t.womens.note}</p>
          <div>
            {t.womens.categories.map((cat, i) => (
              <CategoryBlock
                key={cat.title}
                cat={cat}
                inView={inView}
                delay={0.55 + i * 0.07}
                icon={womensIcons[i]}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
