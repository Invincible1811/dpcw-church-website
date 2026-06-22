'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const events = [
  {
    title: 'Sunday Worship',
    description: 'Main service with worship, the Word, and fellowship.',
    time: 'Sundays · 9 AM & 11 AM',
    tag: 'WEEKLY',
  },
  {
    title: 'Mid-Week Bible Study',
    description: 'Go deeper into the Word with teaching and discussion.',
    time: 'Wednesdays · 7 PM',
    tag: 'WEEKLY',
  },
  {
    title: 'Easter Convention',
    description: 'Annual gathering for worship, revival, and celebration.',
    time: 'Easter Period',
    tag: 'ANNUAL',
  },
  {
    title: '25th Anniversary',
    description: 'Celebrating 25 years of God\'s faithfulness to D.P.C.W.',
    time: 'July 2026',
    tag: 'SPECIAL',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase">
            What&apos;s Happening
          </h2>
          <a href="#contact" className="hidden sm:flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-white/50 hover:text-white transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Horizontal scrolling cards — Lakewood carousel style */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start group cursor-pointer"
            >
              {/* Card image placeholder — dark gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#151520] to-[#1a1a2e] border border-white/[0.06] mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/20">{event.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/80 transition-colors">
                {event.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-2">{event.description}</p>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-white/30">{event.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
