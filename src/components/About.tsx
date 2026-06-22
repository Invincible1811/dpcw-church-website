'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Cross, Flame } from 'lucide-react'

const beliefs = [
  { icon: Cross, text: 'We believe in God Almighty, the Creator of the heavens and the earth.' },
  { icon: Flame, text: 'We affirm the sonship of Jesus Christ and His redemptive work for humanity.' },
  { icon: Flame, text: 'We uphold the operation of the Holy Spirit, who empowers and guides the church.' },
  { icon: BookOpen, text: 'We regard the Holy Scriptures as the supreme and final authority upon which the church is founded.' },
]

const leadership = [
  { name: 'Rev (Dr) Benson Gyamfi Schambach', role: 'Founder & Overseer', initials: 'BGS' },
  { name: 'Ps Kofi Poku', role: 'Konongo Branch', initials: 'KP' },
  { name: 'Ps Abora Sika Nyamekye', role: 'Anwiankwanta Branch', initials: 'ASN' },
  { name: 'Ps Shadrach Boateng', role: 'Hwidiem Branch', initials: 'SB' },
]

const councilOfElders = [
  'Mrs Hannah Twumasi — General Secretary',
  'Mr Ricky Baffoe Bonnie',
  'Mr Eric Okoh Twumasi',
  'Mr Kweku Poku',
  'Mr Samuel Gyamfi',
  'Mr Akwasi Fynn',
  'Mr Clement Adu Agyei',
  'Mad Akua Serwaa',
  'Mad Felicity Yeboah',
  'Mad Paulina Agyeiwaa',
  'Mad Ama Boatemaa',
  'Mad Abena Adutwumwaa',
]

export default function About() {
  return (
    <section id="about">
      {/* ——— Hero Banner ——— */}
      <div className="relative bg-[#0f1a2e] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent" />
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Since 2001</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-[family-name:var(--font-playfair)] mb-4">
              Our Story
            </h1>
            <p className="text-white/40 text-[15px] max-w-lg mx-auto leading-relaxed">
              A journey of faith, purpose, and divine calling — from a single encounter to a ministry reaching nations.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ——— Our Story ——— */}
      <div className="bg-[#faf8f4] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Story text — wider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-amber-600 to-amber-400" />
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em]">The Beginning</span>
              </div>

              <div className="space-y-5 text-[#2a2a2a]/70 text-[15px] leading-[1.9]">
                <p>
                  Divine Peniel Chapel Worldwide was established on <strong className="text-[#0f1a2e] font-semibold">21 July 2001</strong> under 
                  the leadership of Rev Benson Gyamfi Schambach, following a profound spiritual encounter with the Lord Jesus Christ.
                </p>
                <p>
                  Before its founding, the congregation was under the stewardship of Apostle Kwabena Damprane, 
                  who led the ministry then known as Breaking the Gate of Hell. He delivered a prophetic word to 
                  Rev Gyamfi, affirming that God had divinely ordained him to lead the future of the church.
                </p>
                <p>
                  Since its inception, D.P.C.W has grown to <strong className="text-[#0f1a2e] font-semibold">three official branches</strong> across 
                  the Ashanti and Ahafo regions of Ghana, and continues to expand its reach as a beacon of faith and spiritual transformation.
                </p>
              </div>
            </motion.div>

            {/* Mission — right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* ——— What We Believe ——— */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Our Foundation</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#faf8f4] border border-[#0f1a2e]/[0.04]"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <belief.icon className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-[#0f1a2e]/70 text-[14px] leading-relaxed">{belief.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ——— Leadership ——— */}
      <div className="bg-[#faf8f4] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Our Shepherds</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)]">
              Leadership
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border border-[#0f1a2e]/[0.05] shadow-sm text-center group hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-4 group-hover:from-amber-200 group-hover:to-amber-100 transition-colors">
                  <span className="text-amber-700 text-[14px] font-bold">{person.initials}</span>
                </div>
                <h4 className="text-[#0f1a2e] font-semibold text-[14px] mb-1">{person.name}</h4>
                <p className="text-[#0f1a2e]/40 text-[12px] font-medium">{person.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Council of Elders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-[#0f1a2e]/[0.05]"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-700 mb-5">
              Council of Elders
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2.5">
              {councilOfElders.map((elder) => (
                <p key={elder} className="text-[#0f1a2e]/55 text-[13px] py-1 border-b border-[#0f1a2e]/[0.04] last:border-0">{elder}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
