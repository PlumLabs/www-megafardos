import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { Parrafos, TituloDestacado } from './Texto'
import type { Home } from '@/content/types'
import { editable } from '@/lib/editable'

export default function SobreNosotros({ empresa }: { empresa: Home['empresa'] }) {
  return (
    <section id="empresa" {...editable(empresa)} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              {empresa.etiqueta}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight uppercase">
              <TituloDestacado titulo={empresa.titulo} destacado={empresa.tituloDestacado} className="text-brand-gold" />
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <Parrafos
              texto={empresa.texto}
              primero="text-brand-green/70 leading-relaxed mt-6 max-w-lg"
              className="text-brand-green/70 leading-relaxed mt-4 max-w-lg"
            />
            <Link
              href="#productos"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand-green hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-1"
            >
              Conocer la empresa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>

          <AnimatedSection type="reveal-right" delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={empresa.imagen.src}
                alt={empresa.imagen.alt}
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
