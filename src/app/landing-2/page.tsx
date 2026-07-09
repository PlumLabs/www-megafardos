'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Lora, Inter } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Landing2() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    pais: '',
    email: '',
    whatsapp: '',
    producto: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`${lora.variable} ${inter.variable} font-sans min-h-screen bg-[#FAF8F5] text-[#2C3531] antialiased selection:bg-[#4a7c3f] selection:text-white`}>
      
      {/* HEADER & NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#2C3531]/10 px-4 md:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <span className="absolute left-[13px] top-[2px] w-[13px] h-[18px] rounded-[70%_70%_70%_0%] bg-[#b8487a] transform -rotate-8 transition-transform group-hover:scale-110"></span>
              <span className="absolute left-[3px] top-[19px] w-[16px] h-[20px] rounded-[0%_70%_70%_70%] bg-[#4a7c3f] transform rotate-28 transition-transform group-hover:scale-110"></span>
              <span className="absolute left-[21px] top-[19px] w-[16px] h-[20px] rounded-[70%_0%_70%_70%] bg-[#4a7c3f] transform -rotate-28 transition-transform group-hover:scale-110"></span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[16px] tracking-wider text-[#2D5A25]">MEGAFARDOS</span>
              <span className="font-medium text-[11px] tracking-[0.2em] text-[#8B5E3C]">DEL NORTE</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#historia" className="text-sm font-medium hover:text-[#4a7c3f] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#4a7c3f] hover:after:w-full after:transition-all">Historia</a>
            <a href="#servicios" className="text-sm font-medium hover:text-[#4a7c3f] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#4a7c3f] hover:after:w-full after:transition-all">Servicios</a>
            <a href="#productos" className="text-sm font-medium hover:text-[#4a7c3f] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#4a7c3f] hover:after:w-full after:transition-all">Productos</a>
            <a href="#calidad" className="text-sm font-medium hover:text-[#4a7c3f] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#4a7c3f] hover:after:w-full after:transition-all">Calidad</a>
            <a href="#contacto" className="text-sm font-medium hover:text-[#4a7c3f] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#4a7c3f] hover:after:w-full after:transition-all">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="bg-[#2D5A25] hover:bg-[#4a7c3f] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase px-5 py-3 transition-colors duration-200"
            >
              Cotizar Alfalfa
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 bg-[#1C251D]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Planta de Megafardos del Norte"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#1C251D]/70 to-[#1C251D]/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <span className="inline-block bg-[#e8b830] text-[#1C251D] text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 mb-6 rounded-full">
            TECNOLOGÍA &amp; EXCELENCIA AGROPECUARIA
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Alfalfa Premium del Norte Argentino <span className="text-[#e8b830] italic font-normal">para el Mundo</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-200 font-light leading-relaxed mb-10">
            Producimos, procesamos e industrializamos alfalfa con altos estándares de exportación. Trazabilidad garantizada, humedad certificada menor al 14% y stock continuo todo el año.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-[#FAF8F5] hover:bg-[#e8b830] text-[#1C251D] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Comenzar Pedido
            </a>
            <a
              href="#servicios"
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors duration-200"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      {/* STATS PANEL */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4">
        <div className="bg-white border border-[#2D5A25]/15 shadow-xl rounded-xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-[#2C3531]/10 last:border-0 max-sm:border-0 max-sm:pb-6">
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#2D5A25] mb-1">1.000</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Hectáreas de Alfalfa</p>
          </div>
          <div className="p-4 lg:border-r border-[#2C3531]/10 last:border-0 max-sm:border-0 max-sm:pb-6">
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#2D5A25] mb-1">8.000 m²</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Galpones de Acopio</p>
          </div>
          <div className="p-4 border-r border-[#2C3531]/10 last:border-0 max-sm:border-0 max-sm:pb-6">
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#2D5A25] mb-1">100%</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Maquinaria Propia</p>
          </div>
          <div className="p-4 last:border-0">
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#2D5A25] mb-1">14% Máx</p>
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Humedad Controlada</p>
          </div>
        </div>
      </section>

      {/* HISTORIA Y TRAYECTORIA TIMELINE */}
      <section id="historia" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[#8B5E3C] text-xs font-bold tracking-[0.2em] uppercase">TRAYECTORIA FAMILIAR</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6 text-[#2D5A25] leading-tight">
              Una Marca Nacida del Campo, Pensada para Mercados Exigentes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Nacidos en el norte argentino como una empresa familiar con raíces de trabajo honesto, invertimos incansablemente en el desarrollo agropecuario. Pasamos de cultivar una modesta parcela a gestionar más de 4.000 hectáreas productivas con tecnología internacional.
            </p>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#2D5A25]/15 shadow-md">
              <Image
                src="/images/equipo1.jpg"
                alt="Equipo trabajando en el campo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-8">
            <h3 className="font-serif text-2xl font-semibold text-[#8B5E3C] border-b border-[#2C3531]/10 pb-3 mb-6">Hitos del Crecimiento</h3>
            
            <div className="relative border-l-2 border-[#2D5A25]/20 pl-8 ml-4">
              {/* Timeline Item 1 */}
              <div className="relative mb-12">
                <span className="absolute -left-[41px] top-0.5 bg-[#FAF8F5] border-2 border-[#2D5A25] rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="bg-[#2D5A25] rounded-full w-2 h-2"></span>
                </span>
                <span className="text-xs font-bold text-[#8B5E3C]">2013 — 2014</span>
                <h4 className="font-serif text-xl font-bold text-[#2D5A25] mt-1 mb-2">El Origen</h4>
                <p className="text-gray-600 text-sm font-light">
                  Comenzamos con 50 hectáreas de alfalfa en el norte de Córdoba y Santiago del Estero. Adquirimos nuestra primera máquina de megafardos, construyendo los cimientos de la producción propia.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative mb-12">
                <span className="absolute -left-[41px] top-0.5 bg-[#FAF8F5] border-2 border-[#8B5E3C] rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="bg-[#8B5E3C] rounded-full w-2 h-2"></span>
                </span>
                <span className="text-xs font-bold text-[#8B5E3C]">2022</span>
                <h4 className="font-serif text-xl font-bold text-[#2D5A25] mt-1 mb-2">Primera Exportación</h4>
                <p className="text-gray-600 text-sm font-light">
                  Realizamos nuestro primer envío al exterior de megafardos sin prensar, gestionando de forma directa la logística hasta el puerto. Un hito que sentó las bases de nuestra vocación exportadora.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative mb-12">
                <span className="absolute -left-[41px] top-0.5 bg-[#FAF8F5] border-2 border-[#2D5A25] rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="bg-[#2D5A25] rounded-full w-2 h-2"></span>
                </span>
                <span className="text-xs font-bold text-[#8B5E3C]">2023</span>
                <h4 className="font-serif text-xl font-bold text-[#2D5A25] mt-1 mb-2">Prensa Española de Alta Densidad</h4>
                <p className="text-gray-600 text-sm font-light">
                  Importamos desde España una prensa industrial de última generación que comprime los megafardos al nivel óptimo de densidad exigido por las navieras y mercados de Medio Oriente.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-0.5 bg-[#FAF8F5] border-2 border-[#e8b830] rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="bg-[#e8b830] rounded-full w-2 h-2"></span>
                </span>
                <span className="text-xs font-bold text-[#8B5E3C]">2026</span>
                <h4 className="font-serif text-xl font-bold text-[#2D5A25] mt-1 mb-2">Planta Pelletizadora Industrial</h4>
                <p className="text-gray-600 text-sm font-light">
                  Inauguramos una moderna planta procesadora de pellets 100% de alfalfa, logrando certificaciones de SENASA y BPM (Buenas Prácticas de Manufactura) para nutrir al mercado nacional y regional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS AGROPECUARIOS DESTACADOS */}
      <section id="servicios" className="py-24 bg-[#EBE9E4] px-4 md:px-8 border-y border-[#2C3531]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#8B5E3C] text-xs font-bold tracking-[0.2em] uppercase">SERVICIOS DE CONTRATISTA</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-[#2D5A25]">
              Servicios Agropecuarios Especializados
            </h2>
            <div className="w-16 h-1 bg-[#8B5E3C] mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 font-light leading-relaxed">
              Además de producir forraje, ponemos a disposición del productor nuestro parque de maquinaria propia de última generación para labores agrícolas críticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-[#2D5A25]/10 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#4a7c3f]/10 flex items-center justify-center mb-6 text-[#2D5A25]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-3">Siembra de Precisión</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  Realizamos siembra de precisión para cultivos de soja, maíz, trigo y pasturas de alfalfa. Aseguramos el espaciamiento correcto y una profundidad uniforme para maximizar el rinde desde el inicio.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#8B5E3C] tracking-wide uppercase">Soja · Maíz · Trigo · Alfalfa</span>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-[#2D5A25]/10 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#4a7c3f]/10 flex items-center justify-center mb-6 text-[#2D5A25]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-3">Cosecha Mecanizada</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  Servicio integral de trilla y recolección de granos y forrajes. Contamos con trilladoras y cabezales modernos que reducen las pérdidas de rinde y operan de forma ágil y veloz.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#8B5E3C] tracking-wide uppercase">Cosechadoras de Última Gen</span>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-[#2D5A25]/10 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#4a7c3f]/10 flex items-center justify-center mb-6 text-[#2D5A25]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-3">Pulverización Terrestre</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  Aplicación terrestre controlada de fitosanitarios y fertilizantes líquidos. Equipos autopropulsados con banderilleros satelitales que garantizan una cobertura óptima y homogénea.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#8B5E3C] tracking-wide uppercase">Aplicación Fitosanitaria</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/543525480179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D5A25] hover:bg-[#4a7c3f] text-[#FAF8F5] text-sm font-semibold tracking-wider uppercase px-8 py-4 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar Disponibilidad de Equipos
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO DE PRODUCTOS */}
      <section id="productos" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#8B5E3C] text-xs font-bold tracking-[0.2em] uppercase">NUESTRO PORTFOLIO</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-[#2D5A25]">
            Productos Forrajeros de Alta Nutrición
          </h2>
          <div className="w-16 h-1 bg-[#8B5E3C] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 font-light leading-relaxed">
            Ofrecemos diferentes formatos de alfalfa adaptados al sistema de alimentación de su establecimiento ganadero o exportación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="bg-white border border-[#2D5A25]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/fardos.jpg"
                alt="Megafardos de exportación"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#2D5A25] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1">
                Fardos Comprimidos
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-2">Megafardos de Exportación</h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                  Alfalfa de gran longitud de fibra y alta densidad, compactada mediante prensa industrial para optimizar espacio naviero.
                </p>
              </div>
              <div className="border-t border-[#2C3531]/10 pt-4 mt-2">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Mercado Principal</span>
                <p className="text-xs font-semibold text-[#8B5E3C]">Arabia Saudita y Emiratos Árabes (Tambos lecheros)</p>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white border border-[#2D5A25]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/pellets.jpg"
                alt="Pellets de alfalfa"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#e8b830] text-[#1C251D] text-[10px] uppercase font-bold tracking-wider px-3 py-1">
                Alta Densidad
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-2">Pellets de Alfalfa 100%</h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                  Fabricados en nuestra planta nueva de 2026. Excelente aprovechamiento nutritivo, de fácil dosificación e ideal para feedlots.
                </p>
              </div>
              <div className="border-t border-[#2C3531]/10 pt-4 mt-2">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Presentaciones</span>
                <p className="text-xs font-semibold text-[#8B5E3C]">Bolsa 25 kg · Big Bag · Granel</p>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border border-[#2D5A25]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/cubos.jpg"
                alt="Megafardos y rollos"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#8B5E3C] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1">
                Mercado Interno
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-2">Megafardos / Rollos Tradicionales</h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                  Alfalfa de origen 100% propio para mercado nacional. Acopiados bajo galpón para entrega programada y regular todo el año.
                </p>
              </div>
              <div className="border-t border-[#2C3531]/10 pt-4 mt-2">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Clientes Ideal</span>
                <p className="text-xs font-semibold text-[#8B5E3C]">Tambos y Feedlots en Argentina</p>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border border-[#2D5A25]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src="/images/deshidratada.jpg"
                alt="Alfalfa deshidratada"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#4a7c3f] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1">
                Calidad Premium
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2D5A25] mb-2">Alfalfa Deshidratada</h3>
                <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                  Forraje secado artificialmente con humedad homogénea controlada. Preserva los niveles máximos de proteína cruda y aroma natural.
                </p>
              </div>
              <div className="border-t border-[#2C3531]/10 pt-4 mt-2">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Características</span>
                <p className="text-xs font-semibold text-[#8B5E3C]">Humedad &lt; 12% · Alto contenido en hojas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIALES & CALIDAD */}
      <section id="calidad" className="bg-[#1C251D] text-white py-24 px-4 md:px-8 border-t border-[#2C3531]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#e8b830] text-xs font-bold tracking-[0.2em] uppercase">MÁXIMA EXCELENCIA</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
              Calidad no Negociable: Desde la Semilla hasta el Destino
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-8">
              Para nosotros, la calidad de la alfalfa se determina en cada etapa del proceso productivo. Es por eso que no delegamos servicios ni tercerizamos procesos críticos: sembramos, cuidamos, cortamos y envasamos con infraestructura y maquinaria de propiedad exclusiva de la empresa.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex-shrink-0 flex items-center justify-center text-[#e8b830]">
                  ✔
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white">Acopio bajo Galpones Propios</h4>
                  <p className="text-gray-400 text-sm font-light mt-1">
                    Disponemos de más de 8.000 m² de tinglados y galpones herméticos. Almacenamos la producción para garantizarle provisión constante en invierno y verano a quienes confían todo el año en nosotros.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex-shrink-0 flex items-center justify-center text-[#e8b830]">
                  ✔
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white">Trazabilidad Total del Lote</h4>
                  <p className="text-gray-400 text-sm font-light mt-1">
                    Sabemos exactamente de qué lote proviene cada megafardo. Controlamos el tipo de semilla, las aplicaciones fitosanitarias de precisión y el momento exacto del corte.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/10 flex-shrink-0 flex items-center justify-center text-[#e8b830]">
                  ✔
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white">Miembro Fundador del Cluster de Alfalfa</h4>
                  <p className="text-gray-400 text-sm font-light mt-1">
                    Formamos parte activa de la mesa institucional del Cluster de Alfalfa desde sus orígenes. Participamos en el desarrollo de estándares de calidad para posicionar el forraje argentino internacionalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/images/calidad.jpg"
              alt="Control de calidad de la alfalfa en laboratorio o planta"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES BANNER */}
      <section className="bg-white border-y border-[#2C3531]/10 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          <div className="max-w-xs">
            <h4 className="font-serif text-xl font-bold text-[#2D5A25]">Planta Industrial Certificada</h4>
            <p className="text-gray-500 text-xs font-light mt-1">Nuestra nueva planta de pellets opera bajo estrictos lineamientos de calidad.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-[#FAF8F5] border border-[#2D5A25]/15 px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-xs font-semibold text-[#8B5E3C] uppercase tracking-widest">Habilitación</span>
              <span className="font-serif text-lg font-bold text-[#2D5A25]">SENASA</span>
            </div>
            <div className="bg-[#FAF8F5] border border-[#2D5A25]/15 px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-xs font-semibold text-[#8B5E3C] uppercase tracking-widest">Normas de Fabricación</span>
              <span className="font-serif text-lg font-bold text-[#2D5A25]">BPM (B.P. Manufactura)</span>
            </div>
            <div className="bg-[#FAF8F5] border border-[#e8b830]/35 px-6 py-3 rounded-lg shadow-sm">
              <span className="block text-xs font-semibold text-[#8B5E3C] uppercase tracking-widest">Gestión de Calidad</span>
              <span className="font-serif text-lg font-bold text-[#2D5A25] opacity-80">ISO 9001 (En Curso)</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & QUOTE REQUEST */}
      <section id="contacto" className="py-24 bg-[#EBE9E4] px-4 md:px-8 border-b border-[#2C3531]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-[#8B5E3C] text-xs font-bold tracking-[0.2em] uppercase">ÁREA COMERCIAL</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6 text-[#2D5A25]">
              ¿Tiene una consulta o desea cotizar?
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Póngase en contacto con nuestro equipo comercial. Ya sea para importación marítima o para abastecimiento terrestre a feedlots locales, responderemos a la brevedad.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#2D5A25]">✉</span>
                <span className="text-sm font-semibold text-gray-700">comercial@megafardos.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2D5A25]">📞</span>
                <span className="text-sm font-semibold text-gray-700">+54 9 3525 480179</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2D5A25]">📞</span>
                <span className="text-sm font-semibold text-gray-700">+54 9 3525 480178</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2D5A25]">📍</span>
                <span className="text-sm font-semibold text-gray-700">Centro Operativo \u201CLa Mora\u201D, Norte Argentino</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://wa.me/543525480179"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-3 border border-[#2D5A25]/30 hover:border-[#25D366] text-[#2D5A25] hover:text-[#25D366] hover:bg-white transition-all duration-200"
              >
                <span>WhatsApp principal</span>
              </a>
              <a
                href="https://www.instagram.com/megafardosdelnorte/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-5 py-3 border border-[#2D5A25]/30 hover:border-[#E1306C] text-[#2D5A25] hover:text-[#E1306C] hover:bg-white transition-all duration-200"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#2D5A25]/15 shadow-lg p-8 rounded-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#2D5A25]/10 text-[#2D5A25] rounded-full flex items-center justify-center text-2xl mb-4">✓</div>
                <h3 className="font-serif text-2xl font-bold text-[#2D5A25] mb-2">¡Consulta Recibida!</h3>
                <p className="text-gray-600 font-light text-sm max-w-sm">
                  Gracias por escribirnos. Nuestro representante de ventas se contactará con usted a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Nombre y Apellido *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Gustavo Gómez"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Empresa / Razón Social *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Tambo Don Luis S.A."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">País / Provincia *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Córdoba, Argentina"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.pais}
                      onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="Ej: gustavo@tambo.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">WhatsApp / Teléfono *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: +54 9 351 1234567"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Producto de Interés *</label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all"
                      value={formData.producto}
                      onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Megafardos de Exportación">Megafardos de Exportación</option>
                      <option value="Pellets de Alfalfa">Pellets de Alfalfa</option>
                      <option value="Megafardos y Rollos locales">Megafardos y Rollos locales</option>
                      <option value="Servicios Agropecuarios (Siembra/Cosecha)">Servicios Agropecuarios (Siembra/Cosecha)</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Detalles de su Consulta *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escriba los detalles de volumen aproximado, destino y fecha esperada de entrega..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#2C3531]/15 text-sm focus:outline-none focus:border-[#2D5A25] focus:bg-white transition-all resize-none"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#2D5A25] hover:bg-[#4a7c3f] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-200"
                >
                  Enviar Cotización
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C251D] text-gray-400 py-16 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <span className="absolute left-[10px] top-[2px] w-[10px] h-[14px] rounded-[70%_70%_70%_0%] bg-[#b8487a] transform -rotate-8"></span>
                <span className="absolute left-[2px] top-[15px] w-[12px] h-[16px] rounded-[0%_70%_70%_70%] bg-[#4a7c3f] transform rotate-28"></span>
                <span className="absolute left-[17px] top-[15px] w-[12px] h-[16px] rounded-[70%_0%_70%_70%] bg-[#4a7c3f] transform -rotate-28"></span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-wider text-white">MEGAFARDOS</span>
                <span className="font-medium text-[9px] tracking-[0.2em] text-[#8B5E3C]">DEL NORTE</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Empresa argentina líder en la producción y exportación de forrajes de alfalfa con trazabilidad integral, galpones de acopio de gran escala y planta pelletizadora de última generación.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Navegación</h4>
            <ul className="text-xs space-y-2.5 font-light">
              <li><a href="#historia" className="hover:text-white transition-colors">Historia</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Agropecuarios</a></li>
              <li><a href="#productos" className="hover:text-white transition-colors">Productos Forrajeros</a></li>
              <li><a href="#calidad" className="hover:text-white transition-colors">Diferenciales de Calidad</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Comercio Exterior</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Desarrollo</h4>
            <p className="text-xs font-light leading-relaxed">
              Desarrollado y mantenido profesionalmente para mercados exigentes por <a href="https://plum.com.ar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e8b830] underline underline-offset-2">Plum</a>.
            </p>
            <p className="text-xs text-gray-500 pt-4">
              © {new Date().getFullYear()} Megafardos del Norte. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}
