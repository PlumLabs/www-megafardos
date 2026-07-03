import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
