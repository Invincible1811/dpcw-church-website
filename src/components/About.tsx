'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Users, Cross, Flame, MapPin, ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const beliefs = [
  { icon: Cross, title: 'God Almighty', text: 'We believe in God Almighty, the Creator of the heavens and the earth.' },
  { icon: Flame, title: 'Jesus Christ', text: 'We believe that Jesus Christ is God, manifested in the flesh, and His redemptive work is the foundation of our salvation.' },
  { icon: Flame, title: 'The Holy Spirit', text: 'We uphold the operation of the Holy Spirit, who empowers and guides the church.' },
  { icon: BookOpen, title: 'The Scriptures', text: 'We regard the Holy Scriptures as the supreme and final authority upon which the church is founded.' },
  { icon: Heart, title: 'Fervent Prayer', text: 'We believe in fervent and consistent prayer as the lifeline of the believer and the foundation upon which this ministry stands.' },
]

const pastors = [
  { name: 'Ps Kofi Poku', role: 'Konongo Branch', initials: 'KP', photo: '' },
  { name: 'Ps Abora Sika Nyamekye', role: 'Anwiankwanta Branch', initials: 'ASN', photo: '' },
  { name: 'Ps Shadrach Boateng', role: 'Hwidiem Branch', initials: 'SB', photo: '' },
]

const councilOfElders = [
  { name: 'Mrs Hannah Twumasi', role: 'General Secretary' },
  { name: 'Mr Ricky Baffoe Bonnie', role: 'Elder' },
  { name: 'Mr Eric Okoh Twumasi', role: 'Elder' },
  { name: 'Mr Kweku Poku', role: 'Elder' },
  { name: 'Mr Samuel Gyamfi', role: 'Elder' },
  { name: 'Mr Akwasi Fynn', role: 'Elder' },
  { name: 'Mr Clement Adu Agyei', role: 'Elder' },
  { name: 'Mad Akua Serwaa', role: 'Elder' },
  { name: 'Mad Felicity Yeboah', role: 'Elder' },
  { name: 'Mad Paulina Agyeiwaa', role: 'Elder' },
  { name: 'Mad Ama Boatemaa', role: 'Elder' },
  { name: 'Mad Abena Adutwumwaa', role: 'Elder' },
]

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="about">

      {/* ═══════════════ CINEMATIC HERO ═══════════════ */}
      <div ref={heroRef} className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/media/church-elders.jpeg"
            alt="Divine Peniel Chapel Worldwide — Founder and Elders"
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-[#0f1a2e]/60 to-[#0f1a2e]/30" />

        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 flex items-end">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-amber-400" />
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em]">Est. 21 July 2001</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-[family-name:var(--font-playfair)] leading-[1.1] mb-4 max-w-2xl">
                About Divine Peniel Chapel
              </h1>
              <p className="text-white/50 text-[15px] max-w-lg leading-relaxed">
                A ministry born out of a divine encounter, rooted in prayer, and reaching the nations with the Gospel of Jesus Christ.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════ HIGHLIGHTS BAR ═══════════════ */}
      <div className="bg-[#0f1a2e] border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {[
              { number: '2001', label: 'Year Founded', detail: 'Kumasi, Ghana' },
              { number: '4', label: 'Branches', detail: 'Ashanti & Ahafo Regions' },
              { number: '24+', label: 'Years of Ministry', detail: 'And still growing' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="py-10 md:py-12 text-center"
              >
                <p className="text-3xl md:text-4xl font-black text-amber-400 font-[family-name:var(--font-playfair)] mb-1">
                  {stat.number}
                </p>
                <p className="text-white text-[13px] font-semibold mb-0.5">{stat.label}</p>
                <p className="text-white/30 text-[11px]">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ OUR STORY ═══════════════ */}
      <div className="bg-[#faf8f4] py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center mb-14"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">The Beginning</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              Our Story
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-5 text-[#2a2a2a]/70 text-[15px] leading-[1.9] text-justify">
                <p>
                  Divine Peniel Chapel Worldwide was established on <strong className="text-[#0f1a2e] font-semibold">21 July 2001</strong> under 
                  the leadership of Dr. Prophet Benson Gyamfi Schambach, following a profound spiritual encounter with the Lord Jesus Christ.
                </p>
                <p>
                  Before its founding, the congregation was under the stewardship of Apostle Kwabena Damprane, 
                  who led the ministry then known as Breaking the Gate of Hell. He delivered a prophetic word to 
                  Dr. Prophet Gyamfi, affirming that God had divinely ordained him to lead the future of the church.
                </p>
                <p>
                  Since its inception, D.P.C.W has grown to <strong className="text-[#0f1a2e] font-semibold">three official branches</strong> across 
                  the Ashanti and Ahafo regions of Ghana, and continues to expand its reach as a beacon of faith and spiritual transformation.
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#0f1a2e]/[0.05] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-amber-600" />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-700">Our Mission</h3>
                </div>
                <p className="text-[#0f1a2e] text-[16px] font-medium leading-relaxed font-[family-name:var(--font-playfair)]">
                  To raise a generation of believers who are fervent in spirit, deeply rooted in the Word 
                  of God, and committed to advancing the cause of Christ.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#0f1a2e]/[0.05] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-700">Our Branches</h3>
                </div>
                <div className="space-y-2">
                  {['Kumasi — Headquarters', 'Konongo', 'Anwiankwanta', 'Hwidiem'].map((branch) => (
                    <div key={branch} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <p className="text-[#0f1a2e]/60 text-[14px]">{branch}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ═══════════════ WHAT WE BELIEVE ═══════════════ */}
      <div className="bg-white py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center mb-14"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Our Foundation</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative bg-[#faf8f4] rounded-2xl p-6 border border-[#0f1a2e]/[0.04] hover:border-amber-200/60 transition-colors ${i === 3 ? 'sm:col-start-1 lg:col-start-auto' : ''} ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0 group-hover:from-amber-200 group-hover:to-amber-100 transition-colors">
                    <belief.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-[#0f1a2e] text-[13px] font-bold mb-1.5">{belief.title}</h4>
                    <p className="text-[#0f1a2e]/55 text-[14px] leading-relaxed">{belief.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ FOUNDER SPOTLIGHT ═══════════════ */}
      <div className="relative bg-[#0f1a2e] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Photo — edge-to-edge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[550px] lg:h-auto"
          >
            <Image
              src="/media/founder-portrait.jpeg"
              alt="Dr. Prophet Benson Gyamfi Schambach — Founder & General Overseer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e] via-[#0f1a2e]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0f1a2e]/30 lg:to-[#0f1a2e]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0"
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-amber-400" />
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em]">Founder & General Overseer</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-playfair)] leading-[1.1] mb-6">
                Dr. Prophet Benson Gyamfi Schambach
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8" />
              <p className="text-white/50 text-[15px] leading-[1.9] text-justify mb-8">
                Through a profound encounter with the Lord Jesus Christ, Dr. Prophet Gyamfi received the divine mandate 
                to establish a ministry grounded in prayer, the Word of God, and unwavering faith. Under his 
                leadership, Divine Peniel Chapel has grown from a single congregation in Kumasi into a multi-branch 
                ministry reaching communities across the Ashanti and Ahafo regions.
              </p>
              <div className="flex items-center gap-3 text-white/25 text-[11px] font-medium uppercase tracking-[0.2em]">
                <div className="w-5 h-[1px] bg-white/20" />
                <span>Kumasi, Ghana</span>
                <span className="text-amber-400/40">•</span>
                <span>Since 2001</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════ BRANCH PASTORS ═══════════════ */}
      <div className="bg-[#faf8f4] py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Our Shepherds</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              Branch Pastors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {pastors.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#0f1a2e]/[0.05] shadow-sm group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo placeholder — ready for real photos */}
                <div className="relative h-52 bg-gradient-to-br from-[#0f1a2e] to-[#1a2d4e] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="relative z-10 w-20 h-20 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center">
                      <span className="text-white/60 text-2xl font-bold">{person.initials}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-[#0f1a2e] font-bold text-[15px] mb-1">{person.name}</h4>
                  <p className="text-amber-600 text-[12px] font-medium">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ═══════════════ COUNCIL OF ELDERS ═══════════════ */}
      <div className="bg-[#faf8f4] py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Serving Faithfully</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              Council of Elders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {councilOfElders.map((elder, i) => (
              <motion.div
                key={elder.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="bg-white rounded-xl p-4 border border-[#0f1a2e]/[0.04] group hover:border-amber-200/60 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-700 text-[10px] font-bold">{elder.name.split(' ').slice(-1)[0][0]}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[#0f1a2e] text-[13px] font-semibold truncate">{elder.name}</h4>
                    <p className="text-[#0f1a2e]/35 text-[11px]">{elder.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <div className="bg-[#0f1a2e] py-20 md:py-24">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Join The Family</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-playfair)] mb-4">
              You Are Welcome Here
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
              Whether you&apos;re seeking answers, looking for community, or simply curious — there&apos;s a place for you at Divine Peniel Chapel.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0f1a2e] text-[12px] font-bold uppercase tracking-[0.12em] rounded-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                Get Connected
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
