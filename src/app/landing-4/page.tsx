import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Landing4() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
