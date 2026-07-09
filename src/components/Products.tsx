import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const products = [
  {
    title: 'Megafardos',
    subtitle: 'Mercado interno',
    description: 'Alfalfa de primera calidad en megafardos. Producida integramente con materia prima propia.',
    image: '/images/fardos.jpg',
  },
  {
    title: 'Megafardos de Exportación',
    subtitle: 'Mercado internacional',
    description: 'Prensados con maquinaria de última generación. Cumplen con estándares internacionales. 40% materia prima de terceros seleccionados.',
    image: '/images/cubos.jpg',
  },
  {
    title: 'Pellets de Alfalfa',
    subtitle: '100% Alfalfa',
    description: 'Presentaciones: bolsas de 25 kg, Big Bag y granel. Certificados SENASA y BPM. Ideales para feedlots y tambos.',
    image: '/images/pellets.jpg',
  },
  {
    title: 'Alfalfa Deshidratada',
    subtitle: 'Valor agregado',
    description: 'Alfalfa deshidratada de alta calidad. Procesada con tecnología de punta para preservar sus propiedades nutricionales.',
    image: '/images/deshidratada.jpg',
  },
]

export default function Products() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              Productos
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              Calidad en cada
              <br />
              <span className="text-brand-gold">presentación</span>
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <p className="text-brand-green/70 leading-relaxed mt-6">
              Ofrecemos alfalfa en distintos formatos para adaptarnos a las necesidades
              de cada cliente, manteniendo la misma calidad en todos nuestros productos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {products.map((product, i) => (
            <AnimatedSection key={product.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-brand-green/5 hover:border-brand-green/15 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/5">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {product.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-brand-green mt-1">{product.title}</h3>
                  <p className="text-brand-green/60 text-sm leading-relaxed mt-3">
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
