'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MapPin, Phone, Clock, GitBranch, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/live/JAXFBarVda8?feature=share', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { name: 'Facebook', href: 'https://www.facebook.com/share/v/1A6aDdo3wu/', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { name: 'Instagram', href: 'https://www.instagram.com/reel/DOygViQkfUc/?igsh=MWNyZmZzYzM4Ymh0dA==', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { name: 'TikTok', href: 'https://www.tiktok.com/@divinepeniel7', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  )},
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Live Stream', href: '#live' },
  { name: 'Programs', href: '#program' },
  { name: 'Give', href: '#give' },
  { name: 'Contact', href: '#contact' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch('https://formsubmit.co/ajax/divinepeniel3@gmail.com', {
        method: 'POST',
        body: formData,
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ——— Get Connected ——— */}
      <section id="contact" className="bg-[#f9f6f1] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Reach Out</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f1a2e] font-[family-name:var(--font-playfair)] mb-3">
                Get Connected
              </h2>
              <p className="text-[#0f1a2e]/50 text-[14px] mb-8 leading-relaxed">
                We&apos;d love to hear from you. Reach out with questions, prayer requests, or just to say hello.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[#0f1a2e] text-[13px] font-semibold mb-0.5">Address</h3>
                    <p className="text-[#0f1a2e]/50 text-[13px]">P. O. Box KS 8996, Adum — Kumasi, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[#0f1a2e] text-[13px] font-semibold mb-0.5">Phone</h3>
                    <p className="text-[#0f1a2e]/50 text-[13px]">0244 698 625</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                    <GitBranch className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[#0f1a2e] text-[13px] font-semibold mb-0.5">Branches</h3>
                    <p className="text-[#0f1a2e]/50 text-[13px]">Kumasi (HQ) · Konongo · Anwiankwanta · Hwidiem</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-[#0f1a2e] text-[13px] font-semibold mb-0.5">Service Times</h3>
                    <p className="text-[#0f1a2e]/50 text-[13px]">Sundays: 9:00 AM & 11:00 AM</p>
                    <p className="text-[#0f1a2e]/50 text-[13px]">Wednesdays: 7:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form / Success */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#0f1a2e]/[0.06] shadow-sm"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    {/* Animated checkmark circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-5"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-[#0f1a2e] text-xl font-bold font-[family-name:var(--font-playfair)] mb-2"
                    >
                      Message Received!
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-[#0f1a2e]/50 text-[14px] leading-relaxed max-w-[280px] mb-6"
                    >
                      Thank you for reaching out to us. Our team at D.P.C.W will get back to you shortly. God bless you!
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center gap-2 text-[11px] text-[#0f1a2e]/30 uppercase tracking-wider"
                    >
                      <Heart className="w-3 h-3 text-amber-500" />
                      <span>We care about you</span>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input type="hidden" name="_subject" value="New message from D.P.C.W Website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0f1a2e]/40 mb-1.5">First Name</label>
                        <input
                          type="text"
                          name="first-name"
                          className="w-full px-4 py-3 bg-[#f9f6f1] border border-[#0f1a2e]/10 rounded-lg text-[#0f1a2e] text-[14px] placeholder-[#0f1a2e]/25 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0f1a2e]/40 mb-1.5">Last Name</label>
                        <input
                          type="text"
                          name="last-name"
                          className="w-full px-4 py-3 bg-[#f9f6f1] border border-[#0f1a2e]/10 rounded-lg text-[#0f1a2e] text-[14px] placeholder-[#0f1a2e]/25 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0f1a2e]/40 mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 bg-[#f9f6f1] border border-[#0f1a2e]/10 rounded-lg text-[#0f1a2e] text-[14px] placeholder-[#0f1a2e]/25 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0f1a2e]/40 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-[#f9f6f1] border border-[#0f1a2e]/10 rounded-lg text-[#0f1a2e] text-[14px] placeholder-[#0f1a2e]/25 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0f1a2e] hover:bg-[#1a2b45] disabled:opacity-60 text-white text-[12px] font-bold uppercase tracking-wide rounded-lg transition-all duration-300"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— Modern Footer ——— */}
      <footer className="bg-[#1a1510] border-t border-[#2a2218]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section */}
          <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand — wider */}
            <div className="md:col-span-5">
              <a href="#home" className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Divine Peniel Chapel Worldwide"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <span className="text-white font-bold text-[14px] tracking-wide block">
                    DIVINE PENIEL CHAPEL
                  </span>
                  <span className="text-white/30 text-[10px] uppercase tracking-wider">Worldwide</span>
                </div>
              </a>
              <p className="text-white/40 text-[13px] leading-relaxed max-w-[300px] mb-6">
                A vibrant community committed to sharing God&apos;s love and making a difference in Kumasi and beyond.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-9 h-9 rounded-full bg-amber-900/20 flex items-center justify-center text-amber-200/50 hover:text-amber-200 hover:bg-amber-900/40 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-200/40 mb-4">Navigate</h4>
              <div className="space-y-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1.5 text-[13px] text-white/45 hover:text-amber-200 transition-colors group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="md:col-span-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-200/40 mb-4">Visit Us</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-white/65 text-[13px] font-medium">Sunday Services</p>
                  <p className="text-white/35 text-[12px]">9:00 AM & 11:00 AM</p>
                </div>
                <div>
                  <p className="text-white/65 text-[13px] font-medium">Midweek Service</p>
                  <p className="text-white/35 text-[12px]">Wednesday — 7:00 PM</p>
                </div>
                <div className="pt-2">
                  <p className="text-white/65 text-[13px] font-medium">Location</p>
                  <p className="text-white/35 text-[12px]">Kumasi, Ghana (Headquarters)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-white/30">
              &copy; {new Date().getFullYear()} Divine Peniel Chapel Worldwide (D.P.C.W). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-[11px] text-white/50 hover:text-white underline underline-offset-2 transition-colors">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <a href="/terms" className="text-[11px] text-white/50 hover:text-white underline underline-offset-2 transition-colors">Terms of Service</a>
            </div>
            <p className="text-[11px] text-white/30 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-amber-400/50" /> for His glory
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
