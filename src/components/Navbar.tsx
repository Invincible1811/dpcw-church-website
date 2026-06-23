'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/', color: '#f5f5f5' },
  { name: 'About', href: '/about', color: '#a8a29e' },
  { name: 'Events', href: '/#program', color: '#7dd3c0' },
  { name: 'Give', href: '/#give', color: '#c4b5fd' },
  { name: 'Connect', href: '/#contact', color: '#93c5fd' },
  { name: 'Grow', href: '/grow', color: '#86efac' },
  { name: 'Care', href: '/care', color: '#fcd34d' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Divine Peniel Chapel Worldwide"
                width={42}
                height={42}
                className="rounded-full ring-2 ring-white/10 group-hover:ring-white/40 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-[13px] tracking-[0.15em] leading-tight block">
                DIVINE PENIEL
              </span>
              <span className="text-white/50 font-medium text-[10px] tracking-[0.25em] block">
                CHAPEL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300"
                style={{
                  color: hoveredLink === link.name ? link.color : hoveredLink ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.8)',
                }}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] rounded-full"
                  style={{ backgroundColor: link.color }}
                  initial={false}
                  animate={{
                    width: hoveredLink === link.name ? '60%' : '0%',
                    x: '-50%',
                    opacity: hoveredLink === link.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right side CTA — Crimson pulsating */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/#live"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0px rgba(220,20,60,0.4)',
                  '0 0 16px rgba(220,20,60,0.6)',
                  '0 0 0px rgba(220,20,60,0.4)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="px-6 py-2 border-2 border-[#dc143c] text-[#dc143c] text-[12px] font-bold uppercase tracking-[0.15em] hover:bg-[#dc143c] hover:text-white transition-all duration-300 rounded-sm"
            >
              Watch Live
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            className="lg:hidden p-2 text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-black/80 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 pt-2 pb-8 space-y-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center px-0 py-3.5 text-[13px] font-semibold text-white/80 hover:text-white uppercase tracking-[0.15em] border-b border-white/[0.04] hover:border-white/10 hover:pl-2 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/#live"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="block mt-4 px-5 py-3.5 border border-white/40 text-white text-center text-[13px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Watch Live
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
