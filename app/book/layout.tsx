import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Varaa Aika',
  description:
    'Varaa parturiaika helposti verkossa Damask-parturiin. Valitse toimipiste Helsingissä, Vantaalla tai Espoossa – Kannelmäki, Kallio, Kruunuvuorenranta, Kivistö tai Otaniemi.',
  alternates: { canonical: 'https://damask.fi/book' },
  openGraph: {
    title: 'Varaa Aika | Damask Parturi',
    description:
      'Varaa parturiaika verkossa. Viisi toimipistettä Helsingissä, Vantaalla ja Espoossa.',
    url: 'https://damask.fi/book',
  },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
