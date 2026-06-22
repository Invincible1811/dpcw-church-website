'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Women Fellowship',
    description: 'Empowering women to grow in faith, support one another, and serve the community.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Men Fellowship',
    description: 'Building men of integrity, purpose, and spiritual leadership.',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'Ladies Fellowship (Divas)',
    description: 'Young ladies pursuing excellence in Christ through mentorship and sisterhood.',
    color: 'from-purple-500 to-fuchsia-600',
  },
  {
    name: 'Youth Fellowship',
    description: 'Equipping the next generation to live boldly for Jesus.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Children Department',
    description: 'Nurturing young hearts with the love and truth of God\'s Word.',
    color: 'from-teal-500 to-emerald-600',
  },
]

export default function Groups() {
  return (
    <section id="grow" className="bg-[#0a0a0a] py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase mb-3">
            Our Groups
          </h2>
          <p className="text-white/40 max-w-xl">
            There&apos;s a place for everyone at D.P.C.W. Find your community and grow together.
          </p>
        </motion.div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Color bar at top */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${group.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                  {group.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
