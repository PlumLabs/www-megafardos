import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SobreNosotros from '@/components/SobreNosotros'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Products from '@/components/Products'
import Services from '@/components/Services'
import ComercioInternacional from '@/components/ComercioInternacional'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '/landing-4/productos' },
  { label: 'Servicios', href: '/landing-4/servicios' },
]

export default function Landing4() {
  return (
    <>
      <Header links={navLinks} homeHref="/landing-4" />
      <main>
        <Hero />
        <SobreNosotros />
        <About />
        {/* <Stats /> */}
        <Products />
        <Services />
        <ComercioInternacional />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
