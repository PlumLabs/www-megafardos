import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { Parrafos, TituloDestacado } from './Texto'
import type { Home } from '@/content/types'
import { editable } from '@/lib/editable'

export default function About({ historia }: { historia: Home['historia'] }) {
  return (
    <section id="nosotros" {...editable(historia)} className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              {historia.etiqueta}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              <TituloDestacado titulo={historia.titulo} destacado={historia.tituloDestacado} className="text-brand-gold" />
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <Parrafos
              texto={historia.texto}
              primero="text-brand-green/70 leading-relaxed mt-6"
              className="text-brand-green/70 leading-relaxed mt-4"
            />
          </AnimatedSection>

          <AnimatedSection type="reveal-right" delay={200} className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={historia.imagen.src}
                alt={historia.imagen.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-brand-green/5 border border-brand-green/5">
              <h3 className="text-lg font-bold text-brand-green mb-6">
                {historia.hitosTitulo}
              </h3>
              <div className="space-y-6">
                {historia.hitos.map((item, i) => (
                  <div key={i} {...editable(item)} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold ring-4 ring-brand-gold/10" />
                      <div className="w-px flex-1 bg-brand-green/10 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="text-sm font-bold text-brand-gold">{item.anio}</div>
                      <div className="text-sm text-brand-green/70 mt-0.5">{item.texto}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
