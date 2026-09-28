import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import InstagramButton from '@/components/InstagramButton'

export const metadata: Metadata = {
  title: 'Megafardos del Norte — Alfalfa de primera calidad',
  description: 'Megafardos del Norte. Productores y comercializadores de alfalfa de primera calidad en Argentina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <InstagramButton />
        <WhatsAppButton />
      </body>
    </html>
  )
}
