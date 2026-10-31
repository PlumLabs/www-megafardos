import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SobreNosotros from '@/components/SobreNosotros'
import About from '@/components/About'
import Products from '@/components/Products'
import Services from '@/components/Services'
import ComercioInternacional from '@/components/ComercioInternacional'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
]

export default function Home() {
  return (
    <>
      <Header links={navLinks} homeHref="/" />
      <main>
        <Hero />
        <SobreNosotros />
        <About />
        <Products />
        <Services />
        <ComercioInternacional />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
