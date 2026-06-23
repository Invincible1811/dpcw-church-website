'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = sessionStorage.getItem('dpcw-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    sessionStorage.setItem('dpcw-cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    sessionStorage.setItem('dpcw-cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9990] p-4 sm:p-6"
        >
          <div className="max-w-[680px] mx-auto bg-[#0f1a2e] border border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-[14px] font-bold mb-1.5">We value your privacy</h3>
                <p className="text-white/40 text-[13px] leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience and analyse site traffic. 
                  By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies.{' '}
                  <Link href="/privacy" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                    Learn more
                  </Link>
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-[#0f1a2e] text-[11px] font-bold uppercase tracking-[0.1em] rounded-lg transition-colors duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-5 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-white/60 hover:text-white/80 text-[11px] font-bold uppercase tracking-[0.1em] rounded-lg border border-white/[0.08] transition-all duration-200"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors flex-shrink-0"
              >
                <X className="w-3.5 h-3.5 text-white/40" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
