import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Toimipisteet — Helsinki, Vantaa, Espoo',
  description:
    'Damask Parturin 5 toimipistettä: Kannelmäki, Kallio ja Kruunuvuorenranta (Helsinki), Kivistö (Vantaa), Otaniemi (Espoo). Aukioloajat ma–pe 10–19, la 10–18, su 12–18. Osoitteet ja yhteystiedot.',
  alternates: { canonical: 'https://damask.fi/locations' },
  openGraph: {
    title: 'Toimipisteet | Damask Parturi Helsinki, Vantaa, Espoo',
    description:
      '5 toimipistettä: Kannelmäki, Kallio, Kruunuvuorenranta, Kivistö ja Otaniemi. Auki ma–su.',
    url: 'https://damask.fi/locations',
  },
}

export default function LocationsPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <Locations />
      </main>
      <Footer />
    </div>
  )
}
