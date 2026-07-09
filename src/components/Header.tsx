'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Megafardos del Norte"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className={`font-semibold text-sm md:text-base transition-colors ${
            scrolled ? 'text-brand-green' : 'text-white'
          }`}>
            Megafardos del Norte
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Productos', href: '#productos' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Contacto', href: '#contacto' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-brand-green/70 hover:text-brand-green'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-2.5 rounded-full"
          >
            Contactanos
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <a
          href="#contacto"
          className="md:hidden text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-4 py-2 rounded-full"
        >
          Contacto
        </a>
      </div>
    </header>
  )
}
