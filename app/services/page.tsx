import Nav from '@/components/Nav'
import ServicesMarquee from '@/components/ServicesMarquee'
import Services from '@/components/Services'
import About from '@/components/About'
import Prices from '@/components/Prices'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <ServicesMarquee />
        <Services />
        <About />
        <Prices />
      </main>
      <Footer />
    </div>
  )
}
