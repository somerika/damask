import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import ServicesMarquee from '@/components/ServicesMarquee'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hinnasto & Palvelut',
  description:
    'Damask Parturin hinnasto: hiustenleikkaus alkaen 25 €, parranmuotoilu 20 €, hiusten värjäys alkaen 49 €, permanentti alkaen 89 €. Naisten palvelut Otaniemessä alkaen 40 €. Kaikki hinnat sis. ALV.',
  alternates: { canonical: 'https://damask.fi/services' },
  openGraph: {
    title: 'Hinnasto & Palvelut | Damask Parturi',
    description:
      'Hiustenleikkaus alkaen 25 €, parranmuotoilu 20 €, hiusten värjäys alkaen 49 €. Kaikki hinnat sis. ALV.',
    url: 'https://damask.fi/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <ServicesMarquee />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
