import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import ServiceIcon from './ServiceIcon'
import { Parrafos, TituloDestacado } from './Texto'
import type { Home, Servicio } from '@/content/types'
import { editable } from '@/lib/editable'

export default function Services({
  seccion,
  services,
}: {
  seccion: Home['servicios']
  services: Servicio[]
}) {
  return (
    <section id="servicios" {...editable(seccion)} className="py-20 md:py-32 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              {seccion.etiqueta}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              <TituloDestacado titulo={seccion.titulo} destacado={seccion.tituloDestacado} className="text-brand-gold" />
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <Parrafos texto={seccion.texto} className="text-brand-green/70 leading-relaxed mt-6" />
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mt-8 shadow-lg">
              <Image
                src={seccion.imagen.src}
                alt={seccion.imagen.alt}
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {services.filter((service) => service.mostrarEnHome).map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 100}>
                <Link
                  href={`/servicios#${service.slug}`}
                  {...editable(service)}
                  className="block bg-white rounded-xl p-6 border border-brand-green/5 hover:border-brand-green/15 transition-all hover:shadow-md"
                >
                  <div className="flex gap-4 items-start">
                    <div className="text-brand-green-light mt-0.5 shrink-0">
                      <ServiceIcon icono={service.icono} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green">{service.titulo}</h3>
                      <p className="text-sm text-brand-green/60 mt-1 leading-relaxed">
                        {service.resumen}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
