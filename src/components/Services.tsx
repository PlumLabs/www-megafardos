import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const services = [
  {
    title: 'Siembra',
    description: 'Servicio de siembra para soja, maíz, trigo y alfalfa. Realizado con maquinaria de última generación.',
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
    description: 'Cosecha de soja, maíz, trigo y alfalfa. Contamos con equipos de trilla y enfardado de última generación.',
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
    description: 'Pulverización para todo tipo de cultivos. Aplicación precisa y eficiente con equipos modernos.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path d="M10 12h12v4H10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20h20v2H6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              Servicios
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              También ofrecemos
              <br />
              <span className="text-brand-gold">servicios al campo</span>
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <p className="text-brand-green/70 leading-relaxed mt-6">
              Además de producir alfalfa de primera calidad, ponemos nuestra
              experiencia y maquinaria a disposición de otros productores.
            </p>
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden mt-8 shadow-lg">
              <Image
                src="/images/equipo2.jpg"
                alt="Maquinaria agrícola"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {['Soja', 'Maíz', 'Trigo', 'Alfalfa'].map((crop) => (
                <span
                  key={crop}
                  className="text-xs font-medium text-brand-green bg-brand-green/5 border border-brand-green/10 px-3 py-1.5 rounded-full"
                >
                  {crop}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 border border-brand-green/5 hover:border-brand-green/15 transition-all hover:shadow-md">
                  <div className="flex gap-4 items-start">
                    <div className="text-brand-green-light mt-0.5 shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green">{service.title}</h3>
                      <p className="text-sm text-brand-green/60 mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
