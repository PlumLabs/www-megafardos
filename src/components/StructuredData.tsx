import { SITE, SITE_URL } from '@/lib/site'
import { getProductos, getServicios } from '@/lib/content'

// Datos estructurados schema.org (JSON-LD). Los usan Google y los buscadores de IA
// (ChatGPT, Perplexity, Gemini, Claude, Copilot) para entender quién es la empresa,
// qué vende, qué servicios da y dónde opera. Productos y servicios salen de
// Storyblok (campos "Nombre SEO" y "Descripción SEO").

const abs = (src: string) => (src.startsWith('http') ? src : `${SITE_URL}${src}`)
export default async function StructuredData() {
  const [productos, servicios] = await Promise.all([getProductos(), getServicios()])
  const products = productos.map((p) => ({
    name: p.seoNombre,
    description: p.seoDescripcion,
    image: p.imagen.src,
    url: `/productos#${p.slug}`,
  }))
  const services = servicios.map((s) => ({
    name: s.titulo,
    description: s.seoDescripcion,
    url: `/servicios#${s.slug}`,
  }))
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
            image: abs(p.image),
            url: `${SITE_URL}${p.url}`,
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
            url: `${SITE_URL}${s.url}`,
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
