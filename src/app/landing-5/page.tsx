'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { Particles } from '@/components/ui/particles'
import { HyperText } from '@/components/ui/hyper-text'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { NumberTicker } from '@/components/ui/number-ticker'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BorderBeam } from '@/components/ui/border-beam'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Productos', href: '#products' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

const stats = [
  { value: 13, suffix: '+', label: 'Años de experiencia', prefix: '' },
  { value: 4000, suffix: '+', label: 'Hectáreas cultivadas', prefix: '' },
  { value: 100, suffix: '%', label: 'Tecnología propia', prefix: '' },
  { value: 3, suffix: '', label: 'Certificaciones internacionales', prefix: '' },
]

const products = [
  {
    title: 'Megafardos',
    description: 'Fardos de alfalfa de alta calidad para exportación y mercado interno. Proceso controlado desde el campo hasta la entrega.',
    image: '/images/fardos.jpg',
    tags: ['Exportación', 'Mercado Interno'],
  },
  {
    title: 'Rollos',
    description: 'Rollos de alfalfa producidos con maquinaria de última generación. Ideales para feedlots y tambos.',
    image: '/images/cubos.jpg',
    tags: ['Feedlots', 'Tambos'],
  },
  {
    title: 'Pellets',
    description: 'Pellets 100% alfalfa en bolsas de 25 kg, Big Bag o granel. Producción propia con certificación SENASA y BPM.',
    image: '/images/pellets.jpg',
    tags: ['SENASA', 'BPM'],
  },
  {
    title: 'Alfalfa Deshidratada',
    description: 'Alfalfa deshidratada con humedad controlada máxima del 14%. Calidad constante durante todo el año.',
    image: '/images/deshidratada.jpg',
    tags: ['Calidad', 'Consistencia'],
  },
]

const services = [
  {
    title: 'Siembra',
    description: 'Siembra de soja, maíz, trigo y alfalfa con maquinaria de última generación.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22L12 2L22 22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22L12 12L17 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cosecha',
    description: 'Cosecha eficiente con equipos propios. Control total del proceso productivo.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Pulverización',
    description: 'Aplicación de precisión para todos los cultivos. Tecnología al servicio del campo.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Exportación',
    description: 'Logística internacional completa. Megafardos prensados con estándares globales de calidad.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12H22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C15 2 19 6 19 12C19 18 15 22 12 22C9 22 5 18 5 12C5 6 9 2 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Landing5() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-brand-cream text-brand-green overflow-hidden">
      {/* HEADER */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-brand-green/90 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Megafardos del Norte"
              width={36}
              height={36}
              className="object-contain brightness-0 invert"
            />
            <span className={cn(
              'font-bold text-lg tracking-tight transition-colors',
              scrolled ? 'text-white' : 'text-white'
            )}>
              Megafardos <span className="text-brand-gold-light">del Norte</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-gold-light',
                  scrolled ? 'text-white/80' : 'text-white/80'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6L18 18" strokeLinecap="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-brand-green/95 backdrop-blur-xl border-t border-white/10">
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 text-sm font-medium py-2 hover:text-brand-gold-light transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-green">
          <AnimatedGridPattern
            width={60}
            height={60}
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            className="fill-brand-gold/5 stroke-brand-gold/10"
          />
          <Particles
            className="absolute inset-0 z-10"
            quantity={80}
            staticity={30}
            color="#E9C46A"
            size={0.5}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 via-brand-green/30 to-brand-green" />

          <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-20 w-full">
            <div className="max-w-4xl">
              <BlurFade delay={0.2} direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-brand-gold/20 rounded-full text-sm font-medium text-brand-gold-light mb-8 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  Productores de alfalfa desde 2013
                </div>
              </BlurFade>

              <BlurFade delay={0.4} direction="up">
                <HyperText
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 py-0 overflow-visible"
                  duration={1200}
                  animateOnHover={false}
                  startOnView={false}
                  as="h1"
                >
                  MEGAFARDOS DEL NORTE
                </HyperText>
              </BlurFade>

              <BlurFade delay={0.6} direction="up">
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                  Familia, tecnología y compromiso en cada etapa del proceso productivo. 
                  De Salta al mundo.
                </p>
              </BlurFade>

              <BlurFade delay={0.8} direction="up" className="flex flex-wrap gap-4">
                <ShimmerButton
                  shimmerColor="#E9C46A"
                  background="#D4A017"
                  borderRadius="12px"
                  className="text-brand-green font-semibold px-8 py-3.5 text-base"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Nuestros productos
                </ShimmerButton>
                <ShimmerButton
                  shimmerColor="#ffffff"
                  background="transparent"
                  borderRadius="12px"
                  className="text-white font-semibold px-8 py-3.5 text-base border border-white/20"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contactanos
                </ShimmerButton>
              </BlurFade>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent z-20" />
        </section>

        {/* STATS */}
        <section className="relative -mt-20 z-30 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <BlurFade>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative group bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-brand-green/5 border border-brand-beige text-center overflow-hidden"
                  >
                    <BorderBeam
                      size={80}
                      duration={8}
                      colorFrom="#D4A017"
                      colorTo="#40916C"
                      delay={0}
                    />
                    <div className="text-4xl md:text-5xl font-extrabold text-brand-green mb-2">
                      <NumberTicker value={stat.value} />
                      <span className="text-brand-gold">{stat.suffix}</span>
                    </div>
                    <p className="text-sm md:text-base text-brand-green/60 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <BlurFade>
              <div className="text-center mb-16">
                <span className="inline-block text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">
                  Nuestra historia
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green mb-6">
                  Una familia, un campo,<br />un compromiso
                </h2>
                <p className="text-lg text-brand-green/60 max-w-3xl mx-auto leading-relaxed">
                  Somos una empresa familiar que comenzó en 2013 con 50 hectáreas de alfalfa. 
                  Hoy trabajamos más de 4.000 hectáreas con maquinaria propia, tecnología de punta 
                  y un equipo comprometido con la excelencia.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Tecnología',
                  description: 'Maquinaria de última generación en cada etapa del proceso productivo. Prensa importada desde España para exportación.',
                  color: 'from-brand-green to-brand-green-mid',
                },
                {
                  title: 'Calidad',
                  description: 'Humedad controlada máxima del 14%. Proceso certificado con SENASA y Buenas Prácticas de Manufactura.',
                  color: 'from-brand-green-mid to-brand-green-light',
                },
                {
                  title: 'Alcance Global',
                  description: 'Exportamos a países árabes con los más altos estándares internacionales. El 90% de nuestras exportaciones abastece tambos lecheros.',
                  color: 'from-brand-green-light to-brand-gold/80',
                },
              ].map((item, i) => (
                <BlurFade key={item.title} delay={0.1 * i}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-brand-green/5 border border-brand-beige overflow-hidden">
                    <div className={cn(
                      'absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-60',
                      item.color
                    )} />
                    <h3 className="text-xl font-bold text-brand-green mb-3 flex items-center gap-3">
                      <span className={cn(
                        'w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br',
                        item.color
                      )}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-brand-green/60 leading-relaxed">{item.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-20 md:py-32 bg-brand-beige/50">
          <div className="max-w-7xl mx-auto px-6">
            <BlurFade>
              <div className="text-center mb-16">
                <span className="inline-block text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">
                  Productos
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green mb-6">
                  Excelencia en cada presentación
                </h2>
                <p className="text-lg text-brand-green/60 max-w-2xl mx-auto">
                  Desde megafardos para exportación hasta pellets certificados, ofrecemos 
                  alfalfa de la más alta calidad para cada necesidad.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, i) => (
                <BlurFade key={product.title} delay={0.1 * i}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-brand-green/5 border border-brand-beige">
                    <BorderBeam
                      size={120}
                      duration={6}
                      colorFrom="#D4A017"
                      colorTo="#40916C"
                      delay={i * 0.5}
                    />
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-green mb-2">{product.title}</h3>
                      <p className="text-brand-green/60 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <BlurFade>
              <div className="text-center mb-16">
                <span className="inline-block text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">
                  Servicios
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green mb-6">
                  Más que alfalfa
                </h2>
                <p className="text-lg text-brand-green/60 max-w-2xl mx-auto">
                  Ofrecemos servicios agrícolas profesionales con la misma calidad y tecnología 
                  que aplicamos en nuestra propia producción.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <BlurFade key={service.title} delay={0.1 * i}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-brand-green/5 border border-brand-beige text-center hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-500">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-mid flex items-center justify-center text-brand-gold-light group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-green mb-3">{service.title}</h3>
                    <p className="text-sm text-brand-green/60 leading-relaxed">{service.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS BANNER */}
        <section className="py-16 md:py-20 bg-brand-green relative overflow-hidden">
          <AnimatedGridPattern
            width={40}
            height={40}
            numSquares={20}
            maxOpacity={0.05}
            duration={4}
            className="fill-white/5 stroke-white/10"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <BlurFade className="text-center">
              <span className="inline-block text-brand-gold-light text-sm font-semibold tracking-widest uppercase mb-4">
                Certificaciones
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                {['SENASA', 'BPM', 'Cluster de Alfalfa', 'ISO 9001'].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-brand-gold-light shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white/90 font-semibold text-lg">{cert}</span>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <BlurFade>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">
                    Contacto
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green mb-6">
                    Hablemos
                  </h2>
                  <p className="text-lg text-brand-green/60 mb-8 leading-relaxed">
                    Estamos listos para ofrecerte la mejor alfalfa del norte argentino. 
                    Comunicate con nosotros por WhatsApp o escribinos un mensaje.
                  </p>

                  <div className="space-y-4 mb-8">
                    <a
                      href="https://wa.me/543875123456"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-green text-white hover:bg-brand-green-mid transition-colors group"
                    >
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <div>
                        <div className="text-sm font-medium opacity-80">Escribinos por WhatsApp</div>
                        <div className="font-semibold">+54 3875 123456</div>
                      </div>
                      <ArrowRightIcon className="ml-auto w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                      href="mailto:info@megafardos.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-beige text-brand-green hover:bg-brand-gold/10 transition-colors group"
                    >
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                        <path d="M22 7L12 13L2 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <div className="text-sm font-medium opacity-60">Envianos un mail</div>
                        <div className="font-semibold">info@megafardos.com</div>
                      </div>
                      <ArrowRightIcon className="ml-auto w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/10">
                    <Image
                      src="/images/logistica.jpg"
                      alt="Logística Megafardos del Norte"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl shadow-brand-green/10 border border-brand-beige">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2134 3.17712 17.5987L2.58151 19.6241C2.32295 20.4572 2.805 21.2448 3.61835 21.4338C3.72433 21.4562 3.83301 21.4682 3.94387 21.4696L5.64198 21.4898C6.25439 21.4975 6.83291 21.736 7.24633 22.1422C7.9206 22.7955 8.72451 23.3095 9.60911 23.6512" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H16" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V16" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-brand-green/60">Respuesta rápida</div>
                        <div className="text-sm font-bold text-brand-green">&lt; 1 hora</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-green text-white/60 relative overflow-hidden">
        <AnimatedGridPattern
          width={40}
          height={40}
          numSquares={15}
          maxOpacity={0.03}
          duration={5}
          className="fill-white/5 stroke-white/5"
        />
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Megafardos del Norte"
                  width={32}
                  height={32}
                  className="object-contain brightness-0 invert opacity-80"
                />
                <span className="font-bold text-lg text-white">
                  Megafardos <span className="text-brand-gold-light">del Norte</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Productores de alfalfa de calidad superior. Familia, tecnología y compromiso 
                desde 2013. De Salta al mundo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-brand-gold-light transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Salta, Argentina</li>
                <li>
                  <a href="https://wa.me/543875123456" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold-light transition-colors">
                    +54 3875 123456
                  </a>
                </li>
                <li>
                  <a href="mailto:info@megafardos.com" className="hover:text-brand-gold-light transition-colors">
                    info@megafardos.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <p>2026 Megafardos del Norte. Todos los derechos reservados.</p>
            <p className="text-white/40">
              Hecho con <span className="text-brand-gold-light">amor</span> al campo
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
