import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Meistä — Syyriasta Helsinkiin',
  description:
    'Damask on Helsingissä toimiva kurdialaisperhe perustama parturiketju. Saad avasi ensimmäisen liikkeen Kannelmäessä 2016. Tänään viisi toimipistettä pääkaupunkiseudulla. Parturityön perintö vuodesta 1995.',
  alternates: { canonical: 'https://damask.fi/team' },
  openGraph: {
    title: 'Meistä — Syyriasta Helsinkiin | Damask Parturi',
    description:
      'Kurdialaisperhe perusti Damask-parturin Kannelmäkeen 2016. Tänään viisi toimipistettä pääkaupunkiseudulla.',
    url: 'https://damask.fi/team',
    images: [{ url: '/staff.jpg', width: 1200, height: 630, alt: 'Damask-tiimi' }],
  },
}

export default function TeamPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <Team />
      </main>
      <Footer />
    </div>
  )
}
