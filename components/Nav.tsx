'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/language-context'

const links = {
  en: [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/team' },
    { label: 'Locations', href: '/locations' },
    { label: 'Book Now', href: '/book' },
  ],
  fi: [
    { label: 'Palvelut', href: '/services' },
    { label: 'Meistä', href: '/team' },
    { label: 'Toimipisteet', href: '/locations' },
    { label: 'Varaa aika', href: '/book' },
  ],
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[200] h-[68px] flex items-center justify-between transition-[background,border-color] duration-300 border-b"
        style={{
          padding: '0 clamp(1.25rem, 4vw, 3rem)',
          background: !open && scrolled ? 'rgba(15,14,13,0.96)' : 'transparent',
          backdropFilter: !open && scrolled ? 'blur(14px)' : 'none',
          borderColor: !open && scrolled ? '#272320' : 'transparent',
        }}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center no-underline z-[210]"
        >
          <Image
            src="/logo.png"
            alt="Damask"
            width={84}
            height={84}
            className="object-contain w-24 h-24 md:w-[84px] md:h-[84px]"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        <div className="flex items-center gap-5 z-[210]">
          <div className="flex gap-1">
            {(['en', 'fi'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`bg-transparent border-none cursor-pointer font-display text-sm tracking-[0.2em] uppercase px-2 py-1 transition-colors duration-200 ${
                  lang === l ? 'text-text font-bold' : 'text-muted font-normal hover:text-text'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="bg-transparent border-none cursor-pointer text-text font-display text-2xl font-extrabold tracking-[0.12em] uppercase leading-none transition-opacity duration-200 hover:opacity-60 p-0"
          >
            {open ? (lang === 'fi' ? 'SULJE' : 'CLOSE') : 'MENU'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[190] bg-bg flex flex-col justify-end"
            style={{ padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 4vw, 3rem)' }}
          >
            <nav className="border-t border-border">
              {links[lang].map((l, i) => (
                <div key={l.href} className="overflow-hidden border-b border-border">
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex justify-between items-center font-display font-extrabold uppercase tracking-[-0.01em] text-text no-underline leading-none transition-colors duration-200 hover:text-accent"
                      style={{
                        padding: 'clamp(1rem, 2.5vw, 1.5rem) 0',
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                      }}
                    >
                      {l.label}
                      <span className="text-[0.35em] opacity-40">↗</span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8"
            >
              <p className="text-muted text-[0.8125rem] font-light tracking-[0.06em]">
                Est. 2016 · Helsinki · Vantaa · Espoo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
