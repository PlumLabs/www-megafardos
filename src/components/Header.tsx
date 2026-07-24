'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type NavLink = { label: string; href: string }

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header({
  links = DEFAULT_LINKS,
  homeHref = '#',
  ctaHref = '#contacto',
  ctaLabel = 'Contactanos',
}: {
  links?: NavLink[]
  homeHref?: string
  ctaHref?: string
  ctaLabel?: string
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header muestra fondo sólido si se scrolleó o el menú mobile está abierto
  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        <Link href={homeHref} onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Megafardos del Norte"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className={`font-semibold text-sm md:text-base transition-colors ${
            solid ? 'text-brand-green' : 'text-white'
          }`}>
            Megafardos del Norte
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? 'text-brand-green/70 hover:text-brand-green'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-2.5 rounded-full"
          >
            {ctaLabel}
          </Link>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors ${
            solid ? 'text-brand-green' : 'text-white'
          }`}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Panel del menú mobile */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-brand-green/5 transition-[max-height,opacity] duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-green/80 hover:text-brand-green font-medium py-3 border-b border-brand-green/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="text-center text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-3 rounded-full mt-4"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  )
}
