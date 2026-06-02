import Nav from '@/components/Nav'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'

export default function LocationsPage() {
  return (
    <div className="bg-bg">
      <Nav />
      <main className="pt-[68px]">
        <Locations />
      </main>
      <Footer />
    </div>
  )
}
