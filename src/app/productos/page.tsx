import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { getPaginaProductos, getProductos } from '@/lib/content'
import { editable } from '@/lib/editable'

export async function generateMetadata(): Promise<Metadata> {
  const pagina = await getPaginaProductos()
  return {
    title: pagina.seoTitulo,
    alternates: { canonical: '/productos' },
    description: pagina.seoDescripcion,
  }
}

const navLinks = [
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' }
]

// WhatsApp de contacto (solo dígitos, con código de país).
const WHATSAPP_NUMBER = '5493525480178'
const waHref = (product: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola! Me interesa el producto "${product}". ¿Me pasan más información y precio?`,
  )}`

export default async function ProductosPage() {
  const [pagina, products] = await Promise.all([getPaginaProductos(), getProductos()])

  return (
    <>
      <Header
        links={navLinks}
        homeHref="/"
        ctaHref="/#contacto"
      />

      <main {...editable(pagina)}>
        <PageHero
          eyebrow={pagina.heroEtiqueta}
          title={pagina.heroTitulo}
          breadcrumb={pagina.heroMiga}
          highlight={pagina.heroDestacado}
          description={pagina.heroTexto}
          image={pagina.heroImagen}
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug}>
                <div
                  id={product.slug}
                  {...editable(product)}
                  className={`scroll-mt-28 grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={product.imagen.src}
                      alt={product.imagen.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                      {product.etiqueta}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-green mt-2 leading-tight">
                      {product.titulo}
                    </h2>
                    <div className="w-12 h-0.5 bg-brand-gold mt-5" />
                    <p className="text-brand-green/70 leading-relaxed mt-5">
                      {product.descripcion}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
                      {product.caracteristicas.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-brand-green/80"
                        >
                          <svg
                            className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waHref(product.titulo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-mid transition-colors px-5 py-2.5 rounded-full"
                    >
                      Consultar por este producto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-green py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              {pagina.ctaTitulo}
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              {pagina.ctaTexto}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-light transition-all"
              >
                Contactanos
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
