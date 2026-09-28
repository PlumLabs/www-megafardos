// Datos centrales del sitio. Se usan en metadata, sitemap, robots y datos estructurados (JSON-LD).
// Cambiá NEXT_PUBLIC_SITE_URL en el entorno de producción si el dominio final es otro.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.megafardosdelnorte.com.ar').replace(/\/$/, '')

export const SITE = {
  name: 'Megafardos del Norte',
  legalName: 'Megafardos del Norte',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-header.png`,
  image: `${SITE_URL}/images/hero.png`,
  description:
    'Productores y exportadores de alfalfa de primera calidad en Jesús María, Córdoba, Argentina: megafardos, microfardos y pellets de alfalfa, y servicios agrícolas de siembra, cosecha y pulverización.',
  email: 'info@megafardos.com',
  phone: '+54 9 3525 48-0178',
  phoneE164: '+5493525480178',
  foundingDate: '2013',
  address: {
    locality: 'Jesús María',
    region: 'Córdoba',
    country: 'AR',
  },
  geo: { latitude: -30.9814, longitude: -64.0947 },
  sameAs: ['https://www.instagram.com/megafardosdelnorte/'],
}
