import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Productos — Megafardos del Norte',
  description:
    'Alfalfa de primera calidad en megafardos, pellets y deshidratada. Para mercado interno y exportación.',
}

const navLinks = [
  { label: 'Nosotros', href: '/landing-4#nosotros' },
  { label: 'Productos', href: '/landing-4/productos' },
  { label: 'Servicios', href: '/landing-4/servicios' },
  { label: 'Contacto', href: '/landing-4#contacto' },
]

// WhatsApp de contacto (solo dígitos, con código de país).
const WHATSAPP_NUMBER = '5493525480178'
const waHref = (product: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola! Quería hacerles una consulta sobre ${product}.`,
  )}`

const products = [
  {
    title: 'Megafardos prensados',
    subtitle: 'Formato exportación',
    description:
      'Alfalfa seleccionada, compactada y preparada para transporte eficiente y conservación de calidad.',
    image: '/images/fardos.png',
    features: [
      'Materia prima seleccionada',
      'Alta densidad de compactación',
      'Apto para exportación',
      'Conservación de calidad',
    ],
  },
  {
    title: 'Pellets de alfalfa',
    subtitle: 'Alta densidad',
    description:
      'Producto obtenido mediante compresión de alfalfa deshidratada, ideal para una alimentación práctica y uniforme. Producción propia con calidad constante.',
    image: '/images/pellets.png',
    features: [
      'Alimentación práctica y uniforme',
      'Bolsa 25 kg · Big Bag · Granel',
      '8 mm x 40 mm',
      'Mercado interno y exportación',
    ],
  },
  {
    title: 'Microfardos de alfalfa',
    subtitle: 'Fácil manejo',
    description:
      'Fardos pequeños, perfectos para ganadería, equinos y productores de pequeña y mediana escala.',
    image: '/images/cubos.png',
    features: [
      '20 a 23 kg',
      '60x25x35 cm',
      'Fácil manipulación',
      'Ideal para feedlots y tambos',
    ],
  },
  {
    title: 'Megafardos de alfalfa',
    subtitle: 'Mercado interno',
    description:
      'Alfalfa secada al sol, procesada para conservar sus propiedades y valor nutricional. Humedad controlada y calidad constante durante todo el año.',
    image: '/images/deshidratada.png',
    features: [
      '0.90x1.20x2.4 m',
      'Humedad controlada <18%',
      '550 a 750 kg',
      'Calidad constante todo el año',
    ],
  },
]

export default function ProductosPage() {
  return (
    <>
      <Header
        links={navLinks}
        homeHref="/landing-4"
        ctaHref="/landing-4#contacto"
      />

      <main>
        <PageHero
          eyebrow="Productos"
          title="Nuestros"
          breadcrumb="Nuestros Productos"
          highlight="productos"
          description="Ofrecemos alfalfa de calidad en distintos formatos para adaptarnos a las necesidades de cada cliente. Planta habilitada por SENASA y bajo estándares de Buenas Prácticas de Manufactura (BPM)."
          image="/images/fardos.png"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">
            {products.map((product, i) => (
              <AnimatedSection key={product.title}>
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                      {product.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-green mt-2 leading-tight">
                      {product.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-gold mt-5" />
                    <p className="text-brand-green/70 leading-relaxed mt-5">
                      {product.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-brand-green/80"
                        >
                          <svg
                            className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waHref(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-2.5 rounded-full"
                    >
                      Consultar por este producto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-green py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              ¿Buscás alfalfa de primera calidad?
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Contactanos y te asesoramos sobre el producto que mejor se adapta a tu operación.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/landing-4#contacto"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all"
              >
                Contactanos
              </Link>
              <Link
                href="/landing-4/servicios"
                className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
