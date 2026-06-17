import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import { LanguageProvider } from '@/lib/language-context'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const BASE_URL = 'https://damask.fi'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Damask Parturi — Helsinki, Vantaa, Espoo',
    template: '%s | Damask Parturi',
  },
  description:
    'Ammattitaitoinen parturi Helsingissä, Vantaalla ja Espoossa. Viisi toimipistettä: Kannelmäki, Kallio, Kivistö, Kruunuvuorenranta ja Otaniemi. Hiustenleikkaus alkaen 25 €. Auki ma–su.',
  keywords: [
    'parturi Helsinki',
    'parturi Espoo',
    'parturi Vantaa',
    'hiustenleikkaus Helsinki',
    'parturi Kannelmäki',
    'parturi Kallio',
    'parturi Otaniemi',
    'parturi Kivistö',
    'miesten parturi Helsinki',
    'barbershop Helsinki',
    'Damask parturi',
    'parturi ajanvaraus Helsinki',
  ],
  authors: [{ name: 'Damask Parturi' }],
  creator: 'Damask Parturi',
  publisher: 'Damask Parturi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: BASE_URL,
    languages: {
      fi: BASE_URL,
      en: BASE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    alternateLocale: 'en_GB',
    url: BASE_URL,
    siteName: 'Damask Parturi',
    title: 'Damask Parturi — Helsinki, Vantaa, Espoo',
    description:
      'Ammattitaitoinen parturi Helsingissä, Vantaalla ja Espoossa. Viisi toimipistettä vuodesta 2016. Hiustenleikkaus alkaen 25 €.',
    images: [
      {
        url: '/staff.jpg',
        width: 1200,
        height: 630,
        alt: 'Damask Parturi — tiimi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damask Parturi — Helsinki, Vantaa, Espoo',
    description:
      'Ammattitaitoinen parturi Helsingissä, Vantaalla ja Espoossa. Viisi toimipistettä vuodesta 2016.',
    images: ['/staff.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
