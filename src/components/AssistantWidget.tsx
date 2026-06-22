'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, MapPin, BookOpen, Users, HandHeart, Play, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const quickActions = [
  {
    icon: MapPin,
    label: 'Plan a Visit',
    description: 'Find service times & location',
    href: '#contact',
  },
  {
    icon: Play,
    label: 'Watch Live',
    description: 'Join our live service',
    href: '#live',
  },
  {
    icon: BookOpen,
    label: 'Study the Bible',
    description: 'Grow in the Word of God',
    href: '#about',
  },
  {
    icon: Users,
    label: 'Join a Group',
    description: 'Find your church family',
    href: '#connect',
  },
  {
    icon: HandHeart,
    label: 'Give / Donate',
    description: 'Support the ministry',
    href: '#give',
  },
]

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
          >
            {/* Header */}
            <div className="bg-[#111] border-b border-white/[0.06] p-6 text-center">
              <div className="w-14 h-14 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white/30">
                <Image
                  src="/logo.png"
                  alt="D.P.C.W"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/80 text-xs font-medium uppercase tracking-wider">D.P.C.W</p>
              <p className="text-white font-semibold text-sm mt-1">Take your next step here</p>
            </div>

            {/* Welcome message */}
            <div className="bg-[#0a0a1a] border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👋</span>
                <div>
                  <p className="text-white font-semibold text-sm">I&apos;m New Here!</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                    Welcome! We&apos;re so glad you&apos;re here. Follow the links below to get connected to our family.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-[#0a0a1a] p-3 space-y-1.5 max-h-[320px] overflow-y-auto">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <action.icon className="w-4.5 h-4.5 text-white/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{action.label}</p>
                    <p className="text-gray-500 text-xs">{action.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors shrink-0" />
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#0a0a1a] border-t border-white/[0.06] px-5 py-3 text-center">
              <p className="text-[10px] text-gray-600">
                Divine Peniel Chapel Worldwide · Adum, Kumasi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 backdrop-blur-xl border border-white/20'
            : 'bg-white text-black hover:bg-white/90 shadow-lg'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
