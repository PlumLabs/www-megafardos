import type { Metadata } from 'next'
import { SITE } from './site'

// Imagen para compartir en redes y WhatsApp (1200x630, liviana para que la vista previa cargue).
export const OG_IMAGE = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Megafardos del Norte — alfalfa de primera calidad',
}

// Open Graph y Twitter de cada página. Next reemplaza (no combina) el openGraph del layout,
// así que cada página tiene que declarar el suyo completo.
export function socialMetadata({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: path,
      siteName: SITE.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
