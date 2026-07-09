'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Landing3() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const products = [
    {
      id: 'megafardos',
      name: 'Megafardos de Exportación',
      desc: 'Alfalfa de primera calidad compactada con prensa industrial importada desde España. Diseñada para optimizar cargas en contenedores marítimos con humedad máxima garantizada.',
      specs: [
        ['Humedad máxima', '14%'],
        ['Destino principal', 'Países Árabes'],
        ['Uso final', 'Tambos lecheros (90%)'],
        ['Logística', 'FOB Buenos Aires / Córdoba'],
      ],
      image: '/images/fardos.jpg',
    },
    {
      id: 'pellets',
      name: 'Pellets 100% Alfalfa',
      desc: 'Producidos en nuestra planta pelletizadora 2026 bajo certificación SENASA y BPM. Alta digestibilidad, libre de hongos, ideal para feedlots de escala.',
      specs: [
        ['Presentación', 'Bolsa 25kg / Big Bag / Granel'],
        ['Certificación', 'SENASA · BPM'],
        ['Mercados', 'Argentina · Brasil · Chile'],
        ['Cliente ideal', 'Feedlots +1.000 animales'],
      ],
      image: '/images/pellets.jpg',
    },
    {
      id: 'mercado',
      name: 'Mercado Nacional',
      desc: 'Megafardos sin prensar y rollos producidos 100% con materia prima propia. Disponibilidad garantizada todo el año gracias a 8.000 m² de acopio hermético propio.',
      specs: [
        ['Humedad', '12% a 14%'],
        ['Origen', '100% producción propia'],
        ['Disponibilidad', 'Todo el año'],
        ['Centro operativo', 'La Mora, Tucumán'],
      ],
      image: '/images/cubos.jpg',
    },
  ]

  return (
    <div className={`${dmSans.variable} ${dmSerif.variable} font-[family-name:var(--font-dm-sans)] bg-[#F5F2EC] text-[#1C1F1A] antialiased overflow-x-hidden`}>

      <style jsx global>{`
        :root {
          --green: #3D6B32;
          --green-mid: #4E8840;
          --green-light: #EBF4E7;
          --ink: #1C1F1A;
          --bg: #F5F2EC;
          --bg-mid: #EDE9E1;
          --muted: #7A7D74;
          --border: rgba(28,31,26,0.12);
        }
        ::selection { background: #BDDCB3; color: var(--ink); }
        html { scroll-behavior: smooth; }

        .serif { font-family: var(--font-dm-serif); }
        .sans { font-family: var(--font-dm-sans); }

        .nav-link {
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--muted);
          transition: color 0.2s;
          text-transform: uppercase;
          text-decoration: none;
        }
        .nav-link:hover { color: var(--ink); }

        .stat-num {
          font-family: var(--font-dm-serif);
          font-size: clamp(3.5rem, 7vw, 6rem);
          line-height: 1;
          color: var(--ink);
        }

        .product-tab {
          border-bottom: 1px solid var(--border);
          padding: 1.25rem 0;
          cursor: pointer;
          transition: all 0.3s;
        }
        .product-tab:hover { padding-left: 0.5rem; }
        .product-tab.active { border-bottom-color: var(--green); }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border) 30%, var(--border) 70%, transparent);
        }

        .service-card {
          border: 1px solid var(--border);
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          background: var(--bg);
        }
        .service-card:hover {
          border-color: var(--green);
          background: var(--green-light);
          transform: translateY(-4px);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--green);
          border: 1px solid rgba(61,107,50,0.3);
          padding: 0.35rem 0.85rem;
          border-radius: 100px;
          background: var(--green-light);
        }
        .badge::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--green);
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.4s, border-color 0.4s',
          background: scrolled ? 'rgba(245,242,236,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(28,31,26,0.1)' : '1px solid transparent',
        }}
      >
        <a href="#hero" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textDecoration: 'none' }}>
          <span className="serif" style={{ fontSize: '1.05rem', color: 'var(--ink)', letterSpacing: '0.03em' }}>
            Megafardos
          </span>
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: 'var(--green)', textTransform: 'uppercase' }}>
            del Norte
          </span>
        </a>

        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#productos" className="nav-link" style={{ display: 'none' }}>Productos</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#nosotros" className="nav-link">Nosotros</a>
          <a href="#contacto" className="nav-link">Contacto</a>
          <a
            href="https://wa.me/543525480179"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'var(--green)',
              color: '#fff',
              padding: '0.6rem 1.4rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-mid)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}
          >
            Cotizar
          </a>
        </nav>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateRows: '1fr auto',
          padding: '0 2rem',
          paddingTop: '8vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero.jpg"
            alt="Campos de alfalfa de Megafardos del Norte"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: 'brightness(0.45) saturate(0.5)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(245,242,236,0.15) 0%, rgba(245,242,236,0.05) 40%, rgba(245,242,236,0.75) 80%, #F5F2EC 100%)'
          }} />
        </div>

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', width: '100%', paddingTop: '12vh' }}>
          <div style={{ opacity: 1, transform: 'none', marginBottom: '2rem' }}>
            <span className="badge">
              Alfalfa · Industrialización · Exportación
            </span>
          </div>

          <h1
            className="serif"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              lineHeight: 1.02,
              fontWeight: 400,
              color: '#fff',
              maxWidth: '18ch',
              marginBottom: '2rem',
              textShadow: '0 2px 24px rgba(0,0,0,0.25)',
            }}
          >
            Alfalfa de<br />
            <em style={{ color: '#BDDCB3' }}>excelencia</em>{' '}
            para mercados que exigen lo mejor.
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '42ch', lineHeight: 1.75, fontSize: '1rem', marginBottom: '3rem', textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}>
            Producción propia en el Norte Argentino. 1.000 ha de alfalfa, industrialización integral y logística hasta puerto — todo bajo un mismo techo.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#productos"
              style={{
                background: 'var(--green)',
                color: '#fff',
                padding: '0.9rem 2.2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-mid)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}
            >
              Ver productos
            </a>
            <a
              href="#nosotros"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#fff',
                padding: '0.9rem 2.2rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}
            >
              Nuestra historia
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '3rem 0 3.5rem', maxWidth: '72rem', margin: '0 auto', width: '100%' }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            Est. 2013 · La Mora, Argentina
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)' }}>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ──────────────────────────────────────── */}
      <div style={{ background: 'var(--green)', padding: '0.85rem 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {['Producción Propia', 'SENASA Certificado', 'BPM Manufactura', '1.000 ha Alfalfa', 'Exportación a Países Árabes', 'Pellets 2026', '8.000 m² Acopio', 'Cluster de Alfalfa', 'Logística Integral', 'Humedad Máx 14%'].map((item, j) => (
                <span key={j} style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '1.5rem' }}>
                  {item} <span style={{ opacity: 0.4 }}>·</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── KEY STATS ──────────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', maxWidth: '72rem', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}>
            {[
              { num: '4.000', unit: 'ha', label: 'Superficie total cultivada', sub: 'Alfalfa + Granos' },
              { num: '1.000', unit: 'ha', label: 'Alfalfa propia', sub: 'Norte argentino' },
              { num: '8.000', unit: 'm²', label: 'Capacidad de acopio', sub: 'Galpones herméticos propios' },
              { num: '14', unit: '%', label: 'Humedad máxima garantizada', sub: 'No negociable' },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div style={{ padding: '3rem 2.5rem', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '0.75rem' }}>
                    <span className="stat-num">{stat.num}</span>
                    <span className="serif" style={{ fontSize: '1.8rem', color: 'var(--green)', lineHeight: 1 }}>{stat.unit}</span>
                  </div>
                  <p style={{ color: 'var(--ink)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.35rem' }}>{stat.label}</p>
                  <p style={{ color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>{stat.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────────── */}
      <section id="productos" style={{ padding: '0 2rem 8rem', maxWidth: '72rem', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ marginBottom: '4rem' }}>
            <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Portfolio forrajero</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--ink)' }}>
              Lo que producimos.<br />
              <em style={{ color: 'var(--muted)' }}>Cómo lo hacemos.</em>
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>
          {/* Tab list */}
          <div>
            {products.map((p, i) => (
              <FadeUp key={p.id} delay={i * 80}>
                <button
                  onClick={() => setActiveProduct(i)}
                  className={`product-tab ${activeProduct === i ? 'active' : ''}`}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    paddingLeft: activeProduct === i ? '0.75rem' : '0',
                  }}
                >
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: activeProduct === i ? 'var(--green)' : 'var(--muted)' }}>
                    0{i + 1}
                  </span>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500, color: activeProduct === i ? 'var(--ink)' : 'var(--muted)', marginTop: '0.25rem', transition: 'color 0.3s' }}>
                    {p.name}
                  </p>
                </button>
              </FadeUp>
            ))}
          </div>

          {/* Product detail */}
          <FadeUp>
            <div key={activeProduct}>
              <div style={{ position: 'relative', aspectRatio: '16/10', marginBottom: '2.5rem', overflow: 'hidden' }}>
                <Image
                  src={products[activeProduct].image}
                  alt={products[activeProduct].name}
                  fill
                  className="object-cover"
                  style={{ transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}
                />
              </div>

              <h3 className="serif" style={{ fontSize: '1.8rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '1rem' }}>
                {products[activeProduct].name}
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.9rem' }}>
                {products[activeProduct].desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border)' }}>
                {products[activeProduct].specs.map(([key, val], i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1rem 1.25rem',
                      background: 'var(--bg-mid)',
                      borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                      borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.3rem' }}>{key}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--ink)', fontWeight: 500 }}>{val}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="https://wa.me/543525480179"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--green)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    borderBottom: '1px solid var(--green)',
                    paddingBottom: '0.2rem',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Solicitar ficha técnica →
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE FEATURE ────────────────────────────── */}
      <section style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <Image
          src="/images/logistica.jpg"
          alt="Logística de megafardos"
          fill
          className="object-cover"
          style={{ filter: 'brightness(0.4) saturate(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,15,10,0.85) 0%, rgba(12,15,10,0.3) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '2rem', maxWidth: '72rem', margin: '0 auto', left: '50%', transform: 'translateX(-50%)' }}>
          <FadeUp className="w-full">
            <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Logística integral</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 400, color: '#fff', maxWidth: '18ch', lineHeight: 1.1, textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
              Todo el proceso.<br />
              <em style={{ color: '#BDDCB3' }}>Bajo un solo techo.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '40ch', marginTop: '1.5rem', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Desde la semilla hasta el puerto: siembra, cosecha, prensado, acopio y despacho con maquinaria 100% propia. Sin intermediarios, sin excusas.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section id="servicios" style={{ padding: '8rem 2rem', maxWidth: '72rem', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Servicios a terceros</span>
              <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
                Contratamos labores<br />
                <em style={{ color: 'var(--muted)' }}>en campo ajeno.</em>
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', maxWidth: '34ch', lineHeight: 1.75, fontSize: '0.875rem' }}>
              Nuestra maquinaria de última generación no para. La ponemos al servicio de productores que necesitan precisión agronómica sin inversión propia.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            {
              num: '01',
              title: 'Siembra',
              body: 'Soja, maíz, trigo y alfalfa. Sembradoras equipadas con dosificación variable y guiado satelital GPS.',
              note: 'Alfalfa · Maíz · Soja · Trigo',
            },
            {
              num: '02',
              title: 'Cosecha y Trilla',
              body: 'Cosechadoras de alta eficiencia con sensores de humedad y rendimiento a tiempo real. Pérdidas mínimas.',
              note: 'Cabezal de alto rinde',
            },
            {
              num: '03',
              title: 'Pulverización',
              body: 'Pulverizadoras autopropulsadas terrestres para fertilización y protección de cultivo. Aplicación selectiva.',
              note: 'Control satelital preciso',
            },
          ].map((s, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="service-card">
                <span style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--green)', marginBottom: '2rem', fontWeight: 600 }}>
                  {s.num}
                </span>
                <h3 className="serif" style={{ fontSize: '1.6rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '1rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.875rem', marginBottom: '2rem' }}>
                  {s.body}
                </p>
                <div className="divider" style={{ marginBottom: '1.25rem' }} />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--green)', textTransform: 'uppercase' }}>
                  {s.note}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a
              href="https://wa.me/543525480179"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: 'var(--ink)',
                border: '1px solid var(--border)',
                padding: '0.85rem 2rem',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--ink)' }}
            >
              Consultar disponibilidad de equipos →
            </a>
          </div>
        </FadeUp>
      </section>

      {/* ── ABOUT / TIMELINE ───────────────────────────────────── */}
      <section id="nosotros" style={{ background: 'var(--bg-mid)', padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <FadeUp>
              <div>
                <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Nuestra historia</span>
                <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Una empresa familiar<br />
                  <em style={{ color: 'var(--green)' }}>que no para de crecer.</em>
                </h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Comenzamos en 2013 con 50 hectáreas de alfalfa y sin maquinaria propia. Hoy operamos 4.000 hectáreas con flota 100% propia, planta pelletizadora y capacidad de exportación marítima directa.
                </p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
                  Cada peso reinvertido en tecnología nos hizo más precisos. Cada cliente que confía su forraje a nosotros nos hizo más exigentes con la calidad.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { year: '2013', event: 'Inicio con 50 ha de alfalfa', detail: 'Sin maquinaria propia. Primera prensa adquirida.' },
                  { year: '2016', event: 'Flota propia consolidada', detail: 'Incorporación de trilladoras y equipos de labranza.' },
                  { year: '2022', event: 'Primera exportación', detail: 'Megafardos sin prensar. Logística hasta Córdoba propia.' },
                  { year: '2023', event: 'Prensa industrial española', detail: 'Habilitación para exportación marítima en contenedores.' },
                  { year: '2026', event: 'Planta pelletizadora', detail: 'Certificación SENASA y BPM. Nuevo mercado de valor agregado.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      gap: '1.5rem',
                      padding: '1.5rem 0',
                      borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <span className="serif" style={{ fontSize: '1rem', color: 'var(--green)', paddingTop: '0.2rem', fontStyle: 'italic' }}>{item.year}</span>
                    <div>
                      <p style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.875rem', marginBottom: '0.3rem' }}>{item.event}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── QUALITY PILLARS ────────────────────────────────────── */}
      <section style={{ padding: '8rem 2rem', maxWidth: '72rem', margin: '0 auto' }}>
        <FadeUp>
          <div style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
            <div>
              <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Calidad sin concesiones</span>
              <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}>
                Los estándares que<br />
                <em style={{ color: 'var(--green)' }}>nunca negociamos.</em>
              </h2>
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              La calidad de la alfalfa no se define solo en el campo — se construye en cada decisión, desde el tipo de semilla hasta el momento en que el fardo sale del galpón.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            {
              icon: '≤14%',
              title: 'Humedad máxima garantizada',
              body: 'Para exportación e interno: el 14% es el límite absoluto. Cero fermentaciones, cero hongos. Los compradores internacionales lo exigen y nosotros lo cumplimos siempre.',
            },
            {
              icon: '8K m²',
              title: 'Acopio hermético propio',
              body: 'Guardamos la producción en galpones propios para garantizar stock durante todo el año — incluso en invierno cuando la oferta escasea y los precios suben.',
            },
            {
              icon: '100%',
              title: 'Origen controlado',
              body: 'Toda la alfalfa para mercado interno proviene de nuestros propios campos. Para exportación, el 60% es producción propia. Trazabilidad total desde la semilla.',
            },
            {
              icon: 'Red',
              title: 'Cluster de Alfalfa',
              body: 'Somos socios fundadores del Cluster de Alfalfa de Argentina. Participamos en la definición de los protocolos de exportación que hoy rigen el mercado nacional.',
            },
          ].map((p, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div style={{ background: 'var(--bg)', padding: '3rem 2.5rem' }}>
                <span className="serif" style={{ display: 'block', fontSize: '2rem', color: 'var(--green)', marginBottom: '1.25rem', fontStyle: 'italic' }}>{p.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: '0.875rem' }}>{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-mid)', padding: '5rem 2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <FadeUp>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{ color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Habilitaciones oficiales</p>
              <h3 className="serif" style={{ fontSize: '1.6rem', color: 'var(--ink)', fontWeight: 400 }}>
                Planta certificada e industrializada
              </h3>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { label: 'SENASA', sub: 'Registro oficial' },
                { label: 'BPM', sub: 'Buenas Prácticas de Manufactura' },
                { label: 'Cluster', sub: 'Miembro fundador · Alfalfa AR' },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    padding: '1rem 1.75rem',
                    minWidth: '140px',
                  }}
                >
                  <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.2rem' }}>{c.label}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{c.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contacto" style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'start' }}>
              <div>
                <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>Contacto directo</span>
                <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1, marginBottom: '2rem' }}>
                  Hablemos de<br />
                  <em style={{ color: 'var(--green)' }}>su próxima compra.</em>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                  {[
                    { label: 'Comercial', val: '+54 9 3525 480179' },
                    { label: 'Administrativo', val: '+54 9 3525 480178' },
                    { label: 'Email', val: 'comercial@megafardos.com' },
                    { label: 'Ubicación', val: 'La Mora, Tucumán, Argentina' },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', fontSize: '0.875rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--muted)', minWidth: '120px', fontSize: '0.75rem', letterSpacing: '0.08em' }}>{c.label}</span>
                      <span style={{ color: 'var(--ink)' }}>{c.val}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href="https://wa.me/543525480179"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: 'var(--green)',
                      color: 'var(--bg)',
                      padding: '0.85rem 1.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    WhatsApp →
                  </a>
                  <a
                    href="https://www.instagram.com/megafardosdelnorte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      border: '1px solid var(--border)',
                      color: 'var(--ink)',
                      padding: '0.85rem 1.75rem',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: 'var(--bg-mid)', borderTop: '1px solid var(--border)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="serif" style={{ fontSize: '1rem', color: 'var(--ink)', display: 'block', marginBottom: '0.25rem' }}>Megafardos del Norte</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>La Mora, Tucumán · Argentina · Est. 2013</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Productos', 'Servicios', 'Nosotros', 'Contacto'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {link}
              </a>
            ))}
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>© {new Date().getFullYear()} Megafardos del Norte</span>

        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', tel: '', producto: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    background: '#FFFEFA',
    border: '1px solid rgba(28,31,26,0.15)',
    color: '#1C1F1A',
    padding: '0.85rem 1rem',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-dm-sans)',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.62rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#7A7D74',
    marginBottom: '0.5rem',
  }

  if (sent) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', gap: '1rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid #3D6B32', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#3D6B32' }}>
          ✓
        </div>
        <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: '1.5rem', color: '#1C1F1A', fontWeight: 400 }}>Consulta recibida</h3>
        <p style={{ color: '#7A7D74', fontSize: '0.875rem', maxWidth: '32ch', lineHeight: 1.6 }}>
          Nos pondremos en contacto a la brevedad. También puede escribirnos directamente por WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); setSent(true) }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Nombre *</label>
          <input required style={inputStyle} placeholder="Nombre completo" value={form.nombre}
            onChange={e => setForm({ ...form, nombre: e.target.value })}
            onFocus={e => (e.target.style.borderColor = '#3D6B32')}
            onBlur={e => (e.target.style.borderColor = 'rgba(28,31,26,0.15)')} />
        </div>
        <div>
          <label style={labelStyle}>Empresa</label>
          <input style={inputStyle} placeholder="Razón social" value={form.empresa}
            onChange={e => setForm({ ...form, empresa: e.target.value })}
            onFocus={e => (e.target.style.borderColor = '#3D6B32')}
            onBlur={e => (e.target.style.borderColor = 'rgba(28,31,26,0.15)')} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Email *</label>
          <input required type="email" style={inputStyle} placeholder="email@empresa.com" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            onFocus={e => (e.target.style.borderColor = '#3D6B32')}
            onBlur={e => (e.target.style.borderColor = 'rgba(28,31,26,0.15)')} />
        </div>
        <div>
          <label style={labelStyle}>Teléfono / WhatsApp</label>
          <input style={inputStyle} placeholder="+54 9 351..." value={form.tel}
            onChange={e => setForm({ ...form, tel: e.target.value })}
            onFocus={e => (e.target.style.borderColor = '#3D6B32')}
            onFocus={e => (e.target.style.borderColor = 'var(--green)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Producto de interés *</label>
        <select required style={{ ...inputStyle, color: form.producto ? 'var(--ink)' : 'var(--muted)' }}
          value={form.producto}
          onChange={e => setForm({ ...form, producto: e.target.value })}
          onFocus={e => (e.target.style.borderColor = 'var(--green)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border)')}>
          <option value="">Seleccionar...</option>
          <option value="Megafardos de Exportación">Megafardos de Exportación</option>
          <option value="Pellets de Alfalfa">Pellets de Alfalfa</option>
          <option value="Mercado Nacional">Mercado Nacional (rollos / megafardos)</option>
          <option value="Servicios agrícolas">Servicios agrícolas (siembra / cosecha)</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Consulta *</label>
        <textarea required rows={4} style={{ ...inputStyle, resize: 'none' }}
          placeholder="Describa volumen estimado, frecuencia y destino..."
          value={form.mensaje}
          onChange={e => setForm({ ...form, mensaje: e.target.value })}
          onFocus={e => (e.target.style.borderColor = '#8AB87A')}
          onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
      </div>
      <button
        type="submit"
        style={{
          background: '#3D6B32',
          color: '#fff',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 0.2s',
          fontFamily: 'var(--font-dm-sans)',
          width: '100%',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#4E8840')}
        onMouseLeave={e => (e.currentTarget.style.background = '#3D6B32')}
      >
        Enviar consulta
      </button>
    </form>
  )
}
