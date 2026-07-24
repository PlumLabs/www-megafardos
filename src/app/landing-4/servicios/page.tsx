import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Servicios — Megafardos del Norte',
  description:
    'Servicios agropecuarios: siembra, cosecha, pulverización y logística. Maquinaria de última generación al servicio del campo.',
}

const navLinks = [
  { label: 'Nosotros', href: '/landing-4#nosotros' },
  { label: 'Productos', href: '/landing-4/productos' },
  { label: 'Servicios', href: '/landing-4/servicios' },
  { label: 'Contacto', href: '/landing-4#contacto' },
]

const services = [
  {
    title: 'Siembra',
    description:
      'Servicio de siembra para soja, maíz, trigo y alfalfa con maquinaria de última generación. Sembradoras equipadas con dosificación variable y guiado satelital GPS para máxima precisión.',
    image: '/images/hero-2.png',
    features: ['Dosificación variable', 'Guiado satelital GPS', 'Soja · Maíz · Trigo · Alfalfa'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v12M12 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cosecha',
    description:
      'Cosecha de soja, maíz, trigo y alfalfa con equipos de trilla y enfardado de última generación. Control total del proceso productivo para garantizar la mejor calidad del grano y el forraje.',
    image: '/images/equipo2.png',
    features: ['Equipos de trilla propios', 'Enfardado de última generación', 'Control total del proceso'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M24 20c-2 0-4-1-5-3-1-2-1-5-1-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Pulverización',
    description:
      'Pulverización terrestre para todo tipo de cultivos. Aplicación precisa y eficiente con equipos modernos que optimizan el uso de insumos y cuidan el rendimiento de cada lote.',
    image: '/images/riego.png',
    features: ['Aplicación de precisión', 'Equipos modernos', 'Optimización de insumos'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M10 12h12v4H10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20h20v2H6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Logística y exportación',
    description:
      'Logística integral para mercado interno y exportación. Coordinamos el prensado, la carga en contenedores y el transporte cumpliendo con los estándares internacionales de calidad.',
    image: '/images/logistica.png',
    features: ['Carga en contenedores', 'Estándares internacionales', 'Mercado interno y externo'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M4 10h14v10H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 13h6l4 4v3h-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="9" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Header
        links={navLinks}
        homeHref="/landing-4"
        ctaHref="/landing-4#contacto"
      />

      <main>
        <PageHero
          eyebrow="Servicios"
          title="Servicios al"
          highlight="campo"
          description="Además de producir alfalfa de primera calidad, ponemos nuestra experiencia y maquinaria de última generación a disposición de otros productores."
          image="/images/equipo2.png"
        />

        <section className="py-20 md:py-28 bg-brand-beige/30">
          <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/5 text-brand-green-light mb-5">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-green leading-tight">
                      {service.title}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-gold mt-5" />
                    <p className="text-brand-green/70 leading-relaxed mt-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium text-brand-green bg-brand-green/5 border border-brand-green/10 px-3 py-1.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/landing-4#contacto"
                      className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-2.5 rounded-full"
                    >
                      Consultar por {service.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
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
              ¿Necesitás servicios para tu campo?
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              Contactanos y coordinamos siembra, cosecha, pulverización o logística según tu necesidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/landing-4#contacto"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all"
              >
                Contactanos
              </Link>
              <Link
                href="/landing-4/productos"
                className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
