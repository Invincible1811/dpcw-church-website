'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Play, Heart, Gift, Users, HandHeart } from 'lucide-react'

const images = [
  '/media/care/care-1.jpeg',
  '/media/care/care-2.jpeg',
  '/media/care/care-3.jpeg',
  '/media/care/care-4.jpeg',
  '/media/care/care-5.jpeg',
  '/media/care/care-6.jpeg',
  '/media/care/care-7.jpeg',
  '/media/care/care-8.jpeg',
  '/media/care/care-9.jpeg',
]

const videos = [
  '/media/care/care-video-1.mp4',
  '/media/care/care-video-2.mp4',
  '/media/care/care-video-3.mp4',
]

const impactStats = [
  { number: '100+', label: 'Families Reached Yearly', icon: Users },
  { number: '25+', label: 'Years of Giving', icon: Gift },
  { number: '3', label: 'Communities Served', icon: HandHeart },
]

export default function Care() {
  const [lightbox, setLightbox] = useState<{ src: string; type: 'image' | 'video' } | null>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.muted = true
      video.playsInline = true
      video.loop = true
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry after a short delay
          setTimeout(() => { video.play().catch(() => {}) }, 500)
        })
      }
    }
  }, [])

  return (
    <section id="care">
      {/* ═══════════════ HERO — SPLIT EMOTIONAL ═══════════════ */}
      <div className="relative min-h-[100svh] sm:min-h-[90vh] lg:min-h-[85vh] bg-[#1a1a1a]">
        {/* Background collage — staggered images */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] opacity-30">
          {images.slice(0, 6).map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={img} alt="" fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/80 to-[#1a1a1a]" />

        {/* Content */}
        <div className="relative flex items-center min-h-[100svh] sm:min-h-[90vh] lg:min-h-[85vh]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left — Text */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                  <Heart className="w-3.5 h-3.5 text-rose-400" fill="currentColor" />
                  <span className="text-rose-300 text-[11px] font-bold uppercase tracking-[0.2em]">Love in Action</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6">
                  <span className="font-[family-name:var(--font-playfair)]">We</span>{' '}
                  <span className="font-[family-name:var(--font-playfair)] text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Care</span>
                </h1>

                <p className="text-white/40 text-[16px] sm:text-[18px] leading-[1.8] max-w-lg mb-8">
                  Every year, Divine Peniel Chapel Worldwide reaches out to orphans, widows, and 
                  the vulnerable in our communities — providing food, clothing, and hope through 
                  the love of Christ.
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href="/#give"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[12px] font-bold uppercase tracking-[0.12em] rounded-full hover:from-rose-400 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-rose-500/25"
                  >
                    <Heart className="w-4 h-4" />
                    Support This Cause
                  </a>
                </div>
              </motion.div>

              {/* Right — Featured video playing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-[4/3]">
                  <video
                    ref={heroVideoRef}
                    src="/media/care/care-video-1.mp4"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ pointerEvents: 'none' }}
                  />
                  {/* Full opaque overlay to permanently hide any browser play button */}
                  <div className="absolute inset-0 z-10 bg-transparent" style={{ WebkitTapHighlightColor: 'transparent' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 z-30">
                    <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider">Annual Outreach</span>
                  </div>
                </div>
                {/* Decorative floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl p-4 shadow-xl hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-[#1a1a1a] text-[13px] font-bold">100+ Families</p>
                      <p className="text-[#1a1a1a]/50 text-[11px]">Blessed Every Year</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ IMPACT STATS ═══════════════ */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 py-10">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <stat.icon className="w-6 h-6 text-white/70 mx-auto mb-2" />
                <p className="text-3xl sm:text-4xl font-black text-white">{stat.number}</p>
                <p className="text-white/70 text-[12px] font-medium uppercase tracking-wider mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ STORY SECTION ═══════════════ */}
      <div className="bg-[#faf8f4] py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] font-[family-name:var(--font-playfair)] mb-6">
              Our Heart for the Vulnerable
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-rose-400 to-amber-400 rounded-full mx-auto mb-8" />
            <p className="text-[#2a2a2a]/60 text-[16px] leading-[2] text-justify max-w-3xl mx-auto">
              Since the founding of Divine Peniel Chapel Worldwide, caring for the less privileged 
              has been at the core of our ministry. Guided by the scripture — <em>&ldquo;Pure religion 
              and undefiled before God is this: to visit the fatherless and widows in their 
              affliction&rdquo;</em> (James 1:27) — we organise annual outreach programmes where we 
              distribute food items, clothing, and essential supplies to orphans, widows, and 
              families in need across our communities. This is not just charity — it is worship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════ MASONRY GALLERY ═══════════════ */}
      <div className="bg-[#111] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-rose-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-2">Moments of Love</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-playfair)]">
              Gallery
            </h2>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setLightbox({ src: img, type: 'image' })}
                className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className={`relative ${i % 3 === 0 ? 'h-[280px] sm:h-[320px]' : i % 3 === 1 ? 'h-[200px] sm:h-[240px]' : 'h-[240px] sm:h-[280px]'}`}>
                  <Image
                    src={img}
                    alt={`Care outreach ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Videos section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {videos.map((vid, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox({ src: vid, type: 'video' })}
                  className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden cursor-pointer group"
                >
                  <video
                    src={vid}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-[#1a1a1a] ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════ CTA — HOW TO HELP ═══════════════ */}
      <div className="relative bg-[#faf8f4] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-rose-100/40 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-amber-100/40 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mx-auto mb-6">
              <HandHeart className="w-7 h-7 text-rose-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] font-[family-name:var(--font-playfair)] mb-4">
              You Can Make a Difference
            </h2>
            <p className="text-[#2a2a2a]/50 text-[15px] leading-relaxed max-w-lg mx-auto mb-10">
              Your generous gift helps us feed the hungry, clothe the naked, and bring 
              hope to the hopeless. Every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#give"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-[12px] font-bold uppercase tracking-[0.12em] rounded-full hover:from-rose-400 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-rose-500/20"
              >
                <Gift className="w-4 h-4" />
                Donate Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a]/10 text-[#1a1a1a]/70 text-[12px] font-bold uppercase tracking-[0.12em] rounded-full hover:border-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-all duration-300"
              >
                Volunteer With Us
              </a>
            </div>
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
                    alt="Care outreach"
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
