import Nav from '@/components/Nav'
import ServicesMarquee from '@/components/ServicesMarquee'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <ServicesMarquee />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}
