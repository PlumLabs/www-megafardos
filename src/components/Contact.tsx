import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { Parrafos, TituloDestacado } from './Texto'
import type { Home } from '@/content/types'
import { editable } from '@/lib/editable'

export default function Contact({
  calidad,
  contacto,
}: {
  calidad: Home['calidad']
  contacto: Home['contacto']
}) {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection type="reveal-left" {...editable(calidad)}>
            <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={calidad.imagen.src}
                alt={calidad.imagen.alt}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              {calidad.etiqueta}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              <TituloDestacado titulo={calidad.titulo} destacado={calidad.tituloDestacado} className="text-brand-gold" />
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <Parrafos texto={calidad.texto} className="text-brand-green/70 leading-relaxed mt-6" />

            <div className="flex flex-wrap gap-4 mt-8">
              {calidad.certificaciones.map((cert, i) => (
                <div
                  key={i}
                  {...editable(cert)}
                  className="bg-white rounded-xl px-5 py-4 border border-brand-green/5 shadow-sm"
                >
                  <div className="font-bold text-brand-green">{cert.nombre}</div>
                  <div className="text-xs text-brand-green/60 mt-1 max-w-[200px]">
                    {cert.descripcion}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection type="reveal-right" delay={200}>
            <div {...editable(contacto)} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-brand-green/5 border border-brand-green/5">
              <h3 className="text-2xl font-bold text-brand-green">{contacto.titulo}</h3>
              <p className="text-brand-green/60 text-sm mt-2 leading-relaxed">
                {contacto.texto}
              </p>

              <div className="mt-8 space-y-4">
                {contacto.whatsapp.map((contact, i) => (
                  <div key={i} {...editable(contact)} className="flex items-center gap-4 p-4 bg-brand-green/5 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-brand-green/60">{contact.nombre}</div>
                      <div className="font-semibold text-brand-green text-sm">{contact.telefono}</div>
                    </div>
                  </div>
                ))}

                {contacto.email && (
                <div className="flex items-center gap-4 p-4 bg-brand-green/5 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-brand-green/60">Email</div>
                    <div className="font-semibold text-brand-green text-sm">{contacto.email}</div>
                  </div>
                </div>
                )}
              </div>

              <a
                href={contacto.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-green/50 hover:text-brand-gold transition-colors mt-6"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {contacto.ubicacion}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
