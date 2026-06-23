'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Users, Heart, Sparkles, Flame, Baby, X, Play } from 'lucide-react'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

const departments = [
  {
    name: "Men's Fellowship",
    tagline: 'Iron Sharpens Iron',
    description:
      'Building men of integrity, purpose, and spiritual leadership. Our men gather to pray, study the Word, encourage one another, and grow into the fullness of their God-given roles as fathers, husbands, and leaders in the community.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'text-blue-400',
    bgImage: '/media/grow/men-1.jpeg',
    images: [
      '/media/grow/men-1.jpeg',
      '/media/grow/men-2.jpeg',
      '/media/grow/men-3.jpeg',
      '/media/grow/men-4.jpeg',
      '/media/grow/men-5.jpeg',
    ],
    video: null,
  },
  {
    name: "Women's Fellowship",
    tagline: 'Virtuous & Victorious',
    description:
      'Empowering women to grow in faith, support one another, and serve the community. Through prayer, mentorship, and fellowship, our women are equipped to walk in their divine calling and influence their families and society for Christ.',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    accentColor: 'text-pink-400',
    bgImage: '/media/grow/women-1.jpeg',
    images: [
      '/media/grow/women-1.jpeg',
      '/media/grow/women-2.jpeg',
      '/media/grow/women-3.jpeg',
      '/media/grow/women-4.jpeg',
    ],
    video: '/media/grow/women-video.mp4',
  },
  {
    name: "Children's Department",
    tagline: 'Little Lights, Big Faith',
    description:
      'Nurturing young hearts with the love and truth of God\'s Word. Through creative teaching, worship, and fun activities, we train up our children in the way they should go — planting seeds of faith that will bear fruit for a lifetime.',
    icon: Baby,
    color: 'from-teal-500 to-emerald-600',
    accentColor: 'text-teal-400',
    bgImage: '/media/grow/children-1.jpeg',
    images: [
      '/media/grow/children-1.jpeg',
      '/media/grow/children-2.jpeg',
      '/media/grow/children-3.jpeg',
    ],
    video: '/media/grow/children-video.mp4',
  },
  {
    name: 'Youth Fellowship',
    tagline: 'On Fire for Christ',
    description:
      'Equipping the next generation to live boldly for Jesus. Our youth fellowship is a vibrant community where young people encounter God, discover their purpose, and are empowered to be world-changers through the power of the Holy Spirit.',
    icon: Flame,
    color: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-400',
    bgImage: '',
    images: [],
    video: null,
  },
  {
    name: 'Ladies Fellowship (Divas)',
    tagline: 'Daughters of the King',
    description:
      'Young ladies pursuing excellence in Christ through mentorship and sisterhood. The Divas fellowship provides a safe space for young women to grow spiritually, develop godly character, and support one another through life\'s journey.',
    icon: Sparkles,
    color: 'from-purple-500 to-fuchsia-600',
    accentColor: 'text-purple-400',
    bgImage: '',
    images: [],
    video: null,
  },
]

export default function Groups() {
  const [lightbox, setLightbox] = useState<{ src: string; type: 'image' | 'video' } | null>(null)

  return (
    <section id="grow">
      {/* ═══════════════ HERO — CINEMATIC WITH LOGO BG ═══════════════ */}
      <div className="relative h-[60vh] min-h-[450px] max-h-[600px] overflow-hidden bg-[#0f1a2e]">
        {/* Logo watermark — transparent PNG, no white frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] md:w-[520px] md:h-[520px] opacity-[0.12]">
            <Image
              src="/media/grow/hero-logo.png"
              alt=""
              fill
              className="object-contain"
              sizes="520px"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-amber-400" />
                <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em]">Find Your Community</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white font-[family-name:var(--font-playfair)] leading-[1.05] mb-6">
                Grow<br />With Us
              </h1>
              <p className="text-white/50 text-[17px] max-w-lg leading-relaxed mb-8">
                There&apos;s a place for everyone at D.P.C.W. Whether you&apos;re a man, woman, young adult, or child — 
                discover a fellowship where you can grow, connect, and be transformed.
              </p>
              <div className="flex flex-wrap gap-3">
                {departments.slice(0, 4).map((dept) => (
                  <span key={dept.name} className="px-4 py-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] rounded-full text-white/70 text-[11px] font-medium">
                    {dept.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════ DEPARTMENTS ═══════════════ */}
      {departments.map((dept, index) => {
        const isReversed = index % 2 !== 0
        const hasMedia = dept.images.length > 0

        return (
          <div
            key={dept.name}
            className={`${index % 2 === 0 ? 'bg-[#faf8f4]' : 'bg-white'} py-20 md:py-28`}
          >
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}>

                {/* Text Side */}
                <motion.div
                  {...sectionAnim}
                  className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                      <dept.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${dept.accentColor}`}>
                      {dept.tagline}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)] leading-[1.1] mb-5">
                    {dept.name}
                  </h2>

                  <div className={`w-14 h-[3px] bg-gradient-to-r ${dept.color} rounded-full mb-6`} />

                  <p className="text-[#2a2a2a]/65 text-[15px] leading-[1.9] text-justify">
                    {dept.description}
                  </p>

                  {!hasMedia && (
                    <div className="mt-8 bg-[#0f1a2e]/[0.03] rounded-xl p-5 border border-[#0f1a2e]/[0.05]">
                      <p className="text-[#0f1a2e]/40 text-[13px] italic">
                        Photos coming soon — this fellowship is active and vibrant!
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Media Side — Gallery */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  {hasMedia ? (
                    <div className="grid grid-cols-2 gap-3">
                      {dept.images.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.03, zIndex: 10 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setLightbox({ src: img, type: 'image' })}
                          className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md ${i === 0 ? 'col-span-2 h-[220px] sm:h-[260px]' : 'h-[140px] sm:h-[160px]'}`}
                        >
                          <Image
                            src={img}
                            alt={`${dept.name} ${i + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-4 h-4 text-[#0f1a2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Video thumbnail — loops continuously */}
                      {dept.video && (
                        <motion.div
                          whileHover={{ scale: 1.03, zIndex: 10 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setLightbox({ src: dept.video!, type: 'video' })}
                          className="relative col-span-2 h-[180px] sm:h-[200px] rounded-xl overflow-hidden cursor-pointer group shadow-md"
                        >
                          <video
                            src={dept.video}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-[#0f1a2e] ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <div className="relative h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f1a2e] to-[#1a2d4e] flex items-center justify-center">
                      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      <div className="text-center relative z-10">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${dept.color} mx-auto flex items-center justify-center mb-4 opacity-60`}>
                          <dept.icon className="w-9 h-9 text-white" />
                        </div>
                        <p className="text-white/30 text-[13px] font-medium">Photos Coming Soon</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        )
      })}

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <div className="bg-[#0f1a2e] py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...sectionAnim}>
            <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Get Involved</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-playfair)] mb-4">
              Ready to Grow?
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
              Join a fellowship today and experience the joy of community, purpose, and spiritual growth.
            </p>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0f1a2e] text-[12px] font-bold uppercase tracking-[0.12em] rounded-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === 'image' ? (
                <div className="relative w-full h-[85vh]">
                  <Image
                    src={lightbox.src}
                    alt="Gallery image"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  loop
                  className="w-full max-h-[85vh] rounded-xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
