import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SobreNosotros from '@/components/SobreNosotros'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import ComercioInternacional from '@/components/ComercioInternacional'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getHome, getProductos, getServicios } from '@/lib/content'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
]

export default async function Home() {
  const [home, productos, servicios] = await Promise.all([getHome(), getProductos(), getServicios()])

  return (
    <>
      <Header links={navLinks} homeHref="/" />
      <main>
        <Hero hero={home.hero} />
        <SobreNosotros empresa={home.empresa} />
        <About historia={home.historia} />
        <Products seccion={home.productos} products={productos} />
        <Services seccion={home.servicios} services={servicios} />
        <ComercioInternacional />
        <Contact calidad={home.calidad} contacto={home.contacto} />
      </main>
      <Footer />
    </>
  )
}
