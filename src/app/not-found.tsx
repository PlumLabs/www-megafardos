import Link from 'next/link'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Página no encontrada — Megafardos del Norte',
  robots: { index: false, follow: true },
}

const navLinks = [
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' }
]

export default function NotFound() {
  return (
    <>
      <Header
        links={navLinks}
        homeHref="/"
        ctaHref="/#contacto"
      />

      <main>
        <PageHero
          eyebrow="Error 404"
          title="Página"
          highlight="no encontrada"
          breadcrumb="Página no encontrada"
          description="La página que buscás no existe o cambió de dirección."
        />

        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all"
            >
              Volver al inicio
            </Link>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-brand-green border border-brand-green/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-green/5 transition-all"
            >
              Ver productos
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-brand-green border border-brand-green/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-green/5 transition-all"
            >
              Ver servicios
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
