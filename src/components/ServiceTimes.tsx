'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    day: 'Sunday',
    time: '6:00 AM – 10:00 AM',
    name: 'Early Morning Worship',
  },
  {
    day: 'Monday',
    time: '6:00 PM – 9:00 PM',
    name: 'Evening Prayer & Word',
  },
  {
    day: 'Wednesday',
    time: '9:00 AM – 2:00 PM',
    name: 'Midweek Service',
  },
  {
    day: 'Friday',
    time: '9:00 AM – 2:00 PM',
    name: 'Friday Glory Service',
  },
]

export default function ServiceTimes() {
  return (
    <section className="relative overflow-hidden">
      {/* Top gradient blend from cream Welcome section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf8f4] to-transparent pointer-events-none z-20" />

      {/* Split layout: Photo left, Service Times right */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[800px]">

        {/* Left — Full photo of pastor, entire body visible */}
        <div className="relative h-[600px] md:h-auto">
          <Image
            src="/media/service-bg.jpeg"
            alt="Service at DPCW"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Gentle blue tint from right edge to blend into the right column */}
          <div className="hidden md:block absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0f2a5e] to-transparent" />
          {/* Bottom gradient on mobile to blend into service times below */}
          <div className="md:hidden absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0f2a5e] to-transparent" />
        </div>

        {/* Right — Service Times on deep blue background */}
        <div className="relative bg-[#0f2a5e] flex items-center py-16 md:py-0 px-6 sm:px-10 md:px-14">
          {/* Decorative subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 w-full max-w-md">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">
                Join Us This Week
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] mb-2">
                Service Times
              </h2>
              <div className="w-14 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8" />
              <p className="text-white/50 text-sm leading-relaxed mb-10">
                Every gathering is an opportunity to encounter the living God. We would love to worship with you.
              </p>
            </motion.div>

            {/* Service list */}
            <div className="space-y-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.day}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Amber dot */}
                  <div className="mt-[6px] w-[10px] h-[10px] rounded-full bg-amber-500 shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="text-white font-bold text-base">
                      {service.day}
                    </h4>
                    <p className="text-amber-300/80 text-sm font-medium">
                      {service.time}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {service.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="inline-block px-7 py-3 bg-amber-500 text-[#0f2a5e] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-amber-400 transition-colors duration-300 rounded-sm"
              >
                Plan Your Visit
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
