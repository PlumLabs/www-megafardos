import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const ALT =
  'Mapa de los destinos de exportación de Megafardos del Norte desde Jesús María, Córdoba, Argentina: Arabia Saudí, Brasil, Chile, Emiratos Árabes Unidos, Guatemala, Indonesia, Jordania, Malasia, Qatar, República Dominicana y Tailandia.'

function BotonExportacion({ className = '' }: { className?: string }) {
  return (
    <Link
      href="#contacto"
      className={`inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all ${className}`}
    >
      Consultar por exportación
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}

export default function ComercioInternacional() {
  return (
    <section
      id="exportacion"
      className="py-12 md:py-16 bg-brand-green text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="sr-only">
          Comercio internacional: de Jesús María, Córdoba, al mundo
        </h2>

        <AnimatedSection type="reveal-scale">
          <div className="relative">
            <picture>
              <source
                media="(min-width: 640px)"
                srcSet="/images/megafardos-comercio-internacional-desktop.svg"
                width={2208}
                height={1242}
              />
              <img
                src="/images/megafardos-comercio-internacional-mobile.svg"
                alt={ALT}
                width={960}
                height={1032}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </picture>

            <BotonExportacion className="hidden sm:inline-flex absolute z-10 bottom-6 right-6 md:bottom-10 md:right-10" />
          </div>
        </AnimatedSection>

        <div className="flex justify-center mt-8 sm:hidden">
          <BotonExportacion />
        </div>
      </div>
    </section>
  )
}
