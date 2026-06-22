'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient blend from hero dark → warm cream */}
      <div className="h-32 md:h-44 bg-gradient-to-b from-black via-[#1a1510] to-[#faf8f4]" />

      {/* Main content area */}
      <div className="relative bg-[#faf8f4] pb-20 md:pb-28">
        {/* Subtle warm radial glows */}
        <div
          className="absolute right-0 top-1/4 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(217,170,75,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute left-[10%] bottom-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(180,120,50,0.06) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

            {/* Photo — Left (Full Column with Overlap) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative md:-mt-32"
            >
              {/* Amber accent strip — left edge */}
              <div className="absolute -left-3 top-8 bottom-8 w-[5px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 rounded-full z-0" />

              {/* Main photo — fills column */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-[0_24px_64px_rgba(0,0,0,0.3)] z-10">
                <Image
                  src="/media/founder2.jpeg"
                  alt="Dr. Prophet Benson Gyamfi Schambach"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>


              {/* Decorative amber corner accent — top right */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-[3px] border-r-[3px] border-amber-400/40 rounded-tr-md z-0" />
            </motion.div>

            {/* Text — Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-col pt-6 md:pt-0"
            >
              {/* Decorative accent line + diamond */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-amber-600 to-amber-400" />
                <div className="w-2 h-2 rotate-45 border border-amber-500" />
                <div className="w-6 h-[2px] rounded-full bg-amber-400/40" />
              </div>

              {/* Welcome label */}
              <h2 className="text-[11px] font-bold uppercase tracking-[0.35em] text-amber-700 mb-4">
                Welcome to Divine Peniel Chapel
              </h2>

              {/* Name */}
              <h3 className="text-3xl sm:text-4xl md:text-[2.7rem] font-bold text-[#1a1a1a] leading-[1.15] mb-1 font-[family-name:var(--font-playfair)]">
                Dr. Prophet Benson
              </h3>
              <h3 className="text-3xl sm:text-4xl md:text-[2.7rem] font-bold text-[#1a1a1a] leading-[1.15] mb-3 font-[family-name:var(--font-playfair)]">
                Gyamfi Schambach
              </h3>
              {/* Name underline flourish */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className="w-24 h-[2px] bg-gradient-to-r from-amber-500 to-transparent origin-left mb-2"
              />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#999] font-semibold mb-8">
                Founder &amp; General Overseer
              </p>

              {/* Welcome message */}
              <p className="text-gray-600 text-[16px] md:text-[17px] leading-[1.85] mb-4 text-justify">
                At Divine Peniel Chapel Worldwide, we believe that your best days are not behind you — they are 
                ahead of you. God&apos;s hand is upon your life, and He is ready to take you to places you never 
                imagined. Whether you are joining us in person or online, we welcome you with open arms into a 
                family built on faith, prayer, and the unshakeable Word of God.
              </p>
              <p className="text-gray-600 text-[16px] md:text-[17px] leading-[1.85] mb-10 text-justify">
                Come and experience the atmosphere of heaven on earth. Come and discover the purpose God has 
                planted inside of you. Your destiny is calling — and we are here to walk with you every step of the way.
              </p>

              {/* Scripture */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="border-l-[3px] border-amber-500/70 pl-5 mb-10"
              >
                <p className="text-gray-500 text-[15px] italic font-[family-name:var(--font-playfair)] leading-[1.9]">
                  &ldquo;For I know the plans I have for you, declares the Lord, plans to prosper you 
                  and not to harm you, plans to give you hope and a future.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-700/50 font-bold mt-3 inline-block">
                  — Jeremiah 29:11
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[12px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Welcome to DPCW</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border-2 border-[#1a1a1a] text-[#1a1a1a] text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 rounded-sm"
                >
                  New Here?
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
