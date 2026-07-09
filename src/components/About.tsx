import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection type="reveal-left">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
              Nuestra historia
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-green mt-4 leading-tight">
              Familia, campo y
              <br />
              <span className="text-brand-gold">tecnología</span>
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-6" />
            <p className="text-brand-green/70 leading-relaxed mt-6">
              Megafardos del Norte es una empresa familiar que comenzó su actividad
              agropecuaria en 2013 con 50 hectáreas de alfalfa. Desde entonces, hemos
              crecido hasta trabajar más de <strong>3.000 hectáreas</strong> de soja,
              maíz y trigo, y <strong>1.000 hectáreas</strong> de alfalfa.
            </p>
            <p className="text-brand-green/70 leading-relaxed mt-4">
              Todo el proceso productivo lo realizamos con maquinaria propia de última
              generación. Invertimos en tecnología para garantizar la mejor calidad
              en cada etapa, desde la siembra hasta la entrega.
            </p>
          </AnimatedSection>

          <AnimatedSection type="reveal-right" delay={200} className="space-y-6">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/equipo1.jpg"
                alt="Equipo de Megafardos del Norte"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-brand-green/5 border border-brand-green/5">
              <h3 className="text-lg font-bold text-brand-green mb-6">
                Hitos de crecimiento
              </h3>
              <div className="space-y-6">
                {[
                  { year: '2013', text: 'Inicio con 50 hectáreas de alfalfa' },
                  { year: '2022', text: 'Primera exportación de megafardos' },
                  { year: '2023', text: 'Prensa importada desde España para exportación' },
                  { year: '2026', text: 'Instalación de planta pelletizadora' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold ring-4 ring-brand-gold/10" />
                      <div className="w-px flex-1 bg-brand-green/10 mt-2" />
                    </div>
                    <div className="pb-4">
                      <div className="text-sm font-bold text-brand-gold">{item.year}</div>
                      <div className="text-sm text-brand-green/70 mt-0.5">{item.text}</div>
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
