import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const guarantees = [
  'Selección de materia prima',
  'Procesos controlados',
  'Presentación apta para exportación',
  'Calidad constante durante todo el año',
]

export default function ComercioInternacional() {
  return (
    <section id="exportacion" className="py-20 md:py-32 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold-light uppercase tracking-widest">
              Comercio internacional
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight uppercase">
              Conectamos la producción argentina con mercados globales
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <p className="text-white/75 leading-relaxed mt-6 max-w-lg">
              Trabajamos con una visión exportadora, acompañando a distribuidores,
              productores e importadores que buscan alfalfa de calidad para alimentación
              animal.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-8">
              {guarantees.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span className="w-2 h-2 rounded-full bg-brand-gold-light shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 mt-9 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all"
            >
              Consultar por exportación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>

          <AnimatedSection type="reveal-right" delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/megafardos_carga_alfalfa_verde.webp"
                alt="Flota y logística de exportación"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
