import { SITE, SITE_URL } from '@/lib/site'

// Datos estructurados schema.org (JSON-LD). Los usan Google y los buscadores de IA
// (ChatGPT, Perplexity, Gemini, Claude, Copilot) para entender quién es la empresa,
// qué vende, qué servicios da y dónde opera.
const products = [
  {
    name: 'Megafardos prensados de alfalfa (formato exportación)',
    description:
      'Alfalfa seleccionada, compactada con alta densidad y preparada para transporte eficiente en contenedor y conservación de calidad. Apto para exportación.',
    image: '/images/microfardos-product.webp',
  },
  {
    name: 'Pellets de alfalfa',
    description:
      'Alfalfa deshidratada comprimida en pellets de 8 mm x 40 mm, para una alimentación práctica y uniforme. Presentación en bolsa de 25 kg, big bag o granel. Mercado interno y exportación.',
    image: '/images/pellets.png',
  },
  {
    name: 'Microfardos de alfalfa',
    description:
      'Fardos pequeños de 20 a 23 kg (60x25x35 cm), de fácil manipulación, ideales para ganadería, equinos, feedlots, tambos y productores de pequeña y mediana escala.',
    image: '/images/prensado-product.webp',
  },
  {
    name: 'Megafardos de alfalfa (mercado interno)',
    description:
      'Megafardos de 0,90 x 1,20 x 2,4 m y 550 a 750 kg, alfalfa secada al sol con humedad controlada menor al 18% y calidad constante todo el año.',
    image: '/images/deshidratada-product.webp',
  },
]

const services = [
  { name: 'Siembra', description: 'Servicio de siembra de soja, maíz, trigo y alfalfa con maquinaria propia de última generación.' },
  { name: 'Cosecha', description: 'Cosecha de soja, maíz, trigo y alfalfa con equipos propios de trilla y enfardado.' },
  { name: 'Pulverización', description: 'Pulverización terrestre para todo tipo de cultivos, con aplicación precisa y eficiente.' },
  { name: 'Logística y exportación', description: 'Prensado, carga en contenedores y transporte de alfalfa para mercado interno y exportación.' },
]

export default function StructuredData() {
  const orgId = `${SITE_URL}/#organization`

  const graph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': orgId,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      logo: SITE.logo,
      image: SITE.image,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phoneE164,
      foundingDate: SITE.foundingDate,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
      areaServed: ['AR', 'Worldwide'],
      knowsAbout: [
        'Alfalfa',
        'Megafardos de alfalfa',
        'Pellets de alfalfa',
        'Microfardos de alfalfa',
        'Exportación de alfalfa',
        'Forraje para ganado y equinos',
        'Siembra, cosecha y pulverización',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Habilitación SENASA' },
        { '@type': 'EducationalOccupationalCredential', name: 'Buenas Prácticas de Manufactura (BPM)' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: SITE.phoneE164,
        email: SITE.email,
        availableLanguage: ['es', 'en'],
      },
      sameAs: SITE.sameAs,
      makesOffer: [
        ...products.map((p) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: p.name,
            description: p.description,
            image: `${SITE_URL}${p.image}`,
            brand: { '@type': 'Brand', name: SITE.name },
            category: 'Alfalfa / forraje',
          },
        })),
        ...services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
            provider: { '@id': orgId },
            areaServed: 'Córdoba, Argentina',
          },
        })),
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      inLanguage: 'es-AR',
      publisher: { '@id': orgId },
    },
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
