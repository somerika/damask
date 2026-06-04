'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const content = {
  en: { eyebrow: 'Our Team', h2: ['The Hands', 'Behind the Craft.'] },
  fi: { eyebrow: 'Tiimimme', h2: ['Kädet', 'taidon takana.'] },
}

const barbers = [
  { name: 'Saad', photo: 'https://damask.fi/wp-content/uploads/2016/07/IMG_1072-1.jpg' },
  { name: 'Fadi', photo: 'https://damask.fi/wp-content/uploads/2016/07/IMG_1029-1-scaled.jpg' },
  { name: 'Shiar', photo: 'https://damask.fi/wp-content/uploads/2022/05/Shiar-Tahlo.jpg' },
  { name: 'Qusay', photo: 'https://damask.fi/wp-content/uploads/2022/05/Qusay-Jasin.jpg' },
  {
    name: 'Ayman',
    photo: 'https://damask.fi/wp-content/uploads/2026/01/ayman-scaled.jpeg',
    focalY: '100%',
  },
  { name: 'Hasan', photo: 'https://damask.fi/wp-content/uploads/2021/12/IMG_1068.jpg' },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section id="team" ref={ref} className="bg-bg border-t border-border">
      <div
        className="flex justify-between items-end flex-wrap gap-4 border-b border-border"
        style={{
          padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
        </motion.div>
      </div>

      <div
        className="flex flex-wrap justify-center"
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
            transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
            className="flex flex-col items-center gap-3.5"
          >
            <div
              className="rounded-full overflow-hidden relative border border-border transition-colors duration-300 hover:border-accent"
              style={{ width: 'clamp(96px, 12vw, 160px)', height: 'clamp(96px, 12vw, 160px)' }}
            >
              <Image
                src={b.photo}
                alt={b.name}
                fill
                sizes="(max-width: 640px) 96px, 160px"
                className="object-cover transition-[filter] duration-300"
                style={{ objectPosition: `center ${b.focalY ?? '15%'}`, filter: 'grayscale(15%)' }}
              />
            </div>
            <p className="font-display text-base font-bold uppercase tracking-[0.1em] text-text leading-none text-center">
              {b.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
