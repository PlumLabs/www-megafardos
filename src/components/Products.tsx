import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const products = [
  {
    title: 'Megafardos prensados',
    subtitle: 'Formato exportación',
    description: 'Alfalfa seleccionada, compactada y preparada para transporte eficiente y conservación de calidad.',
    image: '/images/microfardos-product.webp',
  },
  {
    title: 'Pellets de alfalfa',
    subtitle: 'Alta densidad',
    description: 'Producto obtenido mediante compresión de alfalfa deshidratada, ideal para una alimentación práctica y uniforme.',
    image: '/images/pellets.png',
  },
  {
    title: 'Microfardos de alfalfa',
    subtitle: 'Fácil manejo',
    description: 'Fardos pequeños, perfectos para ganadería, equinos y productores de pequeña y mediana escala.',
    image: '/images/prensado-product.webp',
  },
  {
    title: 'Megafardos de alfalfa',
    subtitle: 'Mercado interno',
    description: 'Alfalfa secada al sol, procesada para conservar sus propiedades y valor nutricional. Humedad controlada y calidad constante todo el año.',
    image: '/images/deshidratada-product.webp',
  },
]

export default function Products() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-brand-green/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-[0.22em]">
              Catálogo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 uppercase tracking-tight leading-tight">
              Nuestros productos
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <AnimatedSection key={product.title} delay={i * 100} className="h-full">
              <div className="group h-full flex flex-col bg-brand-cream shadow-sm hover:shadow-lg hover:shadow-brand-green/5 transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute left-3.5 top-3.5 font-mono text-[10.5px] uppercase tracking-wider text-brand-cream bg-brand-green px-2 py-1">
                    {product.subtitle}
                  </span>
                </div>
                <div className="flex flex-col gap-3.5 flex-1 p-6 md:p-7">
                  <h3 className="text-base font-bold text-brand-green uppercase tracking-tight leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-sm text-brand-green/70 leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
