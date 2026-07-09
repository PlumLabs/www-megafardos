import AnimatedSection from './AnimatedSection'

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-brand-green relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold text-brand-gold-light uppercase tracking-widest">
              En números
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">
              Nuestra huella
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: '1.000', suffix: 'ha', label: 'de alfalfa' },
            { value: '3.000', suffix: 'ha', label: 'soja, maíz y trigo' },
            { value: '8.000', suffix: 'm²', label: 'de galpones' },
            { value: '40', suffix: '%', label: 'de alfalfa de terceros para exportación' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-white">
                  {stat.value}
                  <span className="text-brand-gold-light">{stat.suffix}</span>
                </div>
                <div className="text-brand-green-light/80 text-sm mt-2">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
