import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import type { Home, Producto } from '@/content/types'
import { editable } from '@/lib/editable'

export default function Products({
  seccion,
  products,
}: {
  seccion: Home['productos']
  products: Producto[]
}) {
  return (
    <section id="productos" {...editable(seccion)} className="py-20 md:py-32 bg-brand-green/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-[0.22em]">
              {seccion.etiqueta}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 uppercase tracking-tight leading-tight">
              {seccion.titulo}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <AnimatedSection key={product.slug} delay={i * 100} className="h-full">
              <Link
                href={`/productos#${product.slug}`}
                {...editable(product)}
                className="group h-full flex flex-col bg-brand-cream shadow-sm hover:shadow-lg hover:shadow-brand-green/5 transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.imagen.src}
                    alt={product.imagen.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute left-3.5 top-3.5 font-mono text-[10.5px] uppercase tracking-wider text-brand-cream bg-brand-green px-2 py-1">
                    {product.etiqueta}
                  </span>
                </div>
                <div className="flex flex-col gap-3.5 flex-1 p-6 md:p-7">
                  <h3 className="text-base font-bold text-brand-green uppercase tracking-tight leading-snug">
                    {product.titulo}
                  </h3>
                  <p className="text-sm text-brand-green/70 leading-relaxed flex-1">
                    {product.resumen}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
