import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WelcomeBanner from '@/components/WelcomeBanner'
import ServiceTimes from '@/components/ServiceTimes'
import LiveStream from '@/components/LiveStream'
import YearProgram from '@/components/YearProgram'
import Donate from '@/components/Donate'
import Contact from '@/components/Contact'
import AssistantWidget from '@/components/AssistantWidget'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <WelcomeBanner />
      <ServiceTimes />
      <LiveStream />
      <YearProgram />
      <Donate />
      <Contact />
      <AssistantWidget />
    </main>
  )
}
