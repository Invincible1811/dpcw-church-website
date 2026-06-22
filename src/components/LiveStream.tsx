'use client'

import { motion } from 'framer-motion'

const YOUTUBE_CHANNEL_ID = 'UCWPPdFax_H3ws1RdWSFJRzA'

export default function LiveStream() {

  return (
    <section id="live" className="bg-[#111318]">
      {/* Scrolling marquee banner at top */}
      <div className="relative py-3 overflow-hidden bg-gradient-to-r from-[#0f2a5e] via-[#1a3a7a] to-[#0f2a5e]">
        {/* Top shine line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Bottom shine line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              Can&apos;t make it in person? Stream every service live from anywhere in the world
              <span className="inline-block mx-6 w-1 h-1 rounded-full bg-amber-400 align-middle" />
            </span>
          ))}
        </div>
      </div>

      {/* YouTube Embed — latest uploads / live when active */}
      <div className="relative w-full aspect-video bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/videoseries?list=UU${YOUTUBE_CHANNEL_ID.slice(2)}&autoplay=1&mute=1&rel=0&modestbranding=1`}
          title="Divine Peniel Chapel Worldwide — Latest Services"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>

      {/* Content bar below — lighter dark, not pure black */}
      <div className="bg-[#111318] px-6 sm:px-10 md:px-16 py-10 md:py-12">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            {/* Left — heading + live indicator */}
            <div className="flex items-center gap-5">
              {/* Live pulse */}
              <div className="relative shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-500 animate-ping" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-playfair)]">
                  Watch Us Live
                </h2>
                <p className="text-white/40 text-xs mt-0.5">
                  Streaming on YouTube &amp; Facebook every service day
                </p>
              </div>
            </div>

            {/* Right — platform buttons */}
            <div className="flex flex-wrap gap-3">
              {/* YouTube */}
              <a
                href={`https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}/live`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-3 bg-[#FF0000] rounded hover:bg-[#cc0000] hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/20"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-white text-[12px] font-bold uppercase tracking-[0.1em]">
                  YouTube
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/v/1A6aDdo3wu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-3 bg-[#1877F2] rounded hover:bg-[#1466d2] hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-white text-[12px] font-bold uppercase tracking-[0.1em]">
                  Facebook
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
