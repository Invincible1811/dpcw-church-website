import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
      <About />
    </main>
  )
}
