'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Campo de alfalfa"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/80 via-brand-green/60 to-brand-green/30" />
      <div className="alfalfa-pattern absolute inset-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80 mb-6 opacity-0 animate-fade-in backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light animate-pulse" />
            Productores de alfalfa desde 2013
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Megafardos
            <br />
            <span className="text-brand-gold-light">del Norte</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Tecnología, calidad y compromiso en cada etapa del proceso productivo.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all hover:shadow-lg hover:shadow-brand-gold/20"
            >
              Nuestros productos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Conocé más
            </a>
          </div>
        </div>

        {/* Stats teaser */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16 md:mt-24 pt-12 border-t border-white/10 max-w-2xl opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          {[
            { value: '1000+', label: 'hectáreas de alfalfa' },
            { value: '8000', label: 'm² de galpones' },
            { value: '2013', label: 'años de experiencia' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
