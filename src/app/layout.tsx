import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import InstagramButton from '@/components/InstagramButton'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import StructuredData from '@/components/StructuredData'
import { SITE, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Megafardos del Norte — Alfalfa de primera calidad',
    template: '%s',
  },
  description: SITE.description,
  keywords: [
    'alfalfa',
    'megafardos de alfalfa',
    'pellets de alfalfa',
    'microfardos de alfalfa',
    'fardos de alfalfa Córdoba',
    'exportación de alfalfa Argentina',
    'alfalfa Jesús María',
    'forraje para caballos',
    'siembra cosecha pulverización Córdoba',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: SITE.name,
    title: 'Megafardos del Norte — Alfalfa de primera calidad',
    description: SITE.description,
    images: [{ url: '/images/hero.png', alt: 'Megafardos del Norte — alfalfa de primera calidad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Megafardos del Norte — Alfalfa de primera calidad',
    description: SITE.description,
    images: ['/images/hero.png'],
  },
  robots: { index: true, follow: true },
  // Verificación de Google Search Console (método "etiqueta HTML").
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body>
        <StructuredData />
        {children}
        <InstagramButton />
        <WhatsAppButton />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
