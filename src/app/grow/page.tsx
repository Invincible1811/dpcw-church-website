import Navbar from '@/components/Navbar'
import Groups from '@/components/Groups'
import Footer from '@/components/Footer'

export default function GrowPage() {
  return (
    <main>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
      <Groups />
      <Footer />
    </main>
  )
}
