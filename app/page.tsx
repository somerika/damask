import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Damask Parturi — Helsinki, Vantaa, Espoo',
  description:
    'Ammattitaitoinen parturi Helsingissä, Vantaalla ja Espoossa. Viisi toimipistettä: Kannelmäki, Kallio, Kivistö, Kruunuvuorenranta ja Otaniemi. Hiustenleikkaus alkaen 25 €. Auki ma–pe 10–19, la 10–18, su 12–18.',
  alternates: { canonical: 'https://damask.fi' },
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}
