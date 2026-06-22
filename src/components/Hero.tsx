'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

type MediaItem = {
  type: 'video' | 'image'
  src: string
  position?: string
  quote?: string
  attribution?: string
}

const mediaItems: MediaItem[] = [
  { type: 'video', src: '/media/video3.mp4' },
  { type: 'image', src: '/media/image1.jpeg' },
  { type: 'video', src: '/media/video2.mp4', position: 'object-[center_30%]', quote: 'Anything born out of prayer can never be quitted, when it is protected by prayer.', attribution: '— Dr. Prophet Benson Gyamfi Schambach' },
  { type: 'image', src: '/media/image2.jpeg' },
  { type: 'video', src: '/media/video1.mp4', quote: 'Heaven is our priority, nothing more, nothing less.' },
]

const IMAGE_DURATION = 5000

const services = [
  { day: 0, name: 'Sunday Worship', start: '6:00 AM', hour: 6 },
  { day: 1, name: 'Monday Evening Service', start: '6:00 PM', hour: 18 },
  { day: 3, name: 'Wednesday Service', start: '9:00 AM', hour: 9 },
  { day: 5, name: 'Friday Service', start: '9:00 AM', hour: 9 },
]

function getNextService() {
  const now = new Date()
  const currentDay = now.getDay()
  const currentHour = now.getHours()

  // Check today and upcoming days
  for (let offset = 0; offset < 7; offset++) {
    const checkDay = (currentDay + offset) % 7
    const match = services.find((s) => s.day === checkDay)
    if (match) {
      if (offset === 0 && currentHour >= match.hour) continue
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return `${dayNames[match.day]} — ${match.name} at ${match.start}`
    }
  }
  return 'Sunday — Sunday Worship at 6:00 AM'
}

function NextServiceTicker() {
  const text = getNextService()
  return (
    <div className="animate-ticker whitespace-nowrap text-[11px] text-white/70 font-medium tracking-wide">
      <span>{text}</span>
      <span className="mx-8 text-white/20">•</span>
      <span>{text}</span>
      <span className="mx-8 text-white/20">•</span>
      <span>{text}</span>
    </div>
  )
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const quoteTimerRef = useRef<NodeJS.Timeout | null>(null)

  const currentMedia = mediaItems[currentIndex]

  const goToNext = useCallback(() => {
    setVisible(false)
    setShowQuote(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }, 500)
  }, [])

  // When index changes, load and play the new video (or show image)
  useEffect(() => {
    if (currentMedia.type === 'video' && videoRef.current) {
      const video = videoRef.current
      video.src = currentMedia.src
      video.load()
      video.currentTime = 0.3

      const onPlaying = () => {
        setVisible(true)
        video.removeEventListener('playing', onPlaying)
      }
      video.addEventListener('playing', onPlaying)

      const tryPlay = () => {
        if (!video.paused) return
        video.muted = true
        const p = video.play()
        if (p) p.catch(() => {})
      }

      tryPlay()

      // Re-trigger play when video becomes visible in viewport
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tryPlay()
        },
        { threshold: 0.25 }
      )
      observer.observe(video)

      // Re-trigger play when tab regains focus
      const handleVisibility = () => {
        if (document.visibilityState === 'visible') tryPlay()
      }
      document.addEventListener('visibilitychange', handleVisibility)

      return () => {
        video.removeEventListener('playing', onPlaying)
        observer.disconnect()
        document.removeEventListener('visibilitychange', handleVisibility)
      }
    } else if (currentMedia.type === 'image') {
      const t = setTimeout(() => setVisible(true), 50)
      return () => clearTimeout(t)
    }
  }, [currentIndex, currentMedia])

  // Show quote after 2s, hide after 7s
  useEffect(() => {
    if (currentMedia.quote && visible) {
      const showTimer = setTimeout(() => setShowQuote(true), 2000)
      quoteTimerRef.current = setTimeout(() => setShowQuote(false), 9000)
      return () => {
        clearTimeout(showTimer)
        if (quoteTimerRef.current) clearTimeout(quoteTimerRef.current)
      }
    }
  }, [currentIndex, visible, currentMedia.quote])

  // For images: auto-advance after IMAGE_DURATION
  useEffect(() => {
    if (currentMedia.type === 'image' && visible) {
      timerRef.current = setTimeout(() => {
        goToNext()
      }, IMAGE_DURATION)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentIndex, currentMedia.type, visible, goToNext])

  const handleVideoEnd = () => {
    goToNext()
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Click blocker — sits above video to prevent native controls */}
      <div
        className="absolute inset-0 z-[5] cursor-default"
        style={{ background: 'rgba(0,0,0,0.001)', WebkitTapHighlightColor: 'transparent' }}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Single persistent video element — never unmounts */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        disablePictureInPicture
        disableRemotePlayback
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${
          currentMedia.type === 'video' && visible ? 'opacity-100' : 'opacity-0'
        } ${currentMedia.position || 'object-center'}`}
      />

      {/* Image display */}
      {currentMedia.type === 'image' && (
        <img
          src={currentMedia.src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Quote overlay */}
      {currentMedia.quote && showQuote && (
        <div className="absolute bottom-28 left-0 z-[6] pl-6 sm:pl-12 md:pl-16 pr-6 animate-quote-appear">
          <div className="relative max-w-md text-left">
            {/* Accent line */}
            <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400/80 via-amber-400/40 to-transparent rounded-full animate-glow-line" />
            {/* Quote text */}
            <p
              className="text-white text-base sm:text-lg md:text-xl font-semibold leading-relaxed tracking-wide font-[family-name:var(--font-playfair)] italic"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.35), 0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              {currentMedia.quote}
            </p>
            {/* Attribution */}
            {currentMedia.attribution && (
              <div className="mt-3 flex items-center gap-2">
                <div className="h-[1px] w-6 bg-amber-400/50" />
                <span
                  className="text-[10px] uppercase tracking-[0.3em] text-amber-300/50 font-medium"
                  style={{ textShadow: '0 0 10px rgba(255,200,100,0.2)' }}
                >
                  {currentMedia.attribution}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom bar — Service times + Live feed ticker */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-14 pb-4 px-4">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
            {/* Service Times — left */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-white/80 text-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Service Times</span>
              <span>Sun 6–10 AM</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Mon 6–9 PM</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Wed 9 AM–2 PM</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Fri 9 AM–2 PM</span>
            </div>

            {/* Live feed ticker — right */}
            <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full pl-3 pr-1 py-1.5 border border-white/10 min-w-[280px] max-w-[340px] overflow-hidden">
              {/* Pulsing live dot */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <div className="absolute w-2 h-2 rounded-full bg-red-500/50 animate-ping" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-400">Next</span>
              </div>
              {/* Scrolling text */}
              <div className="overflow-hidden flex-1">
                <NextServiceTicker />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
