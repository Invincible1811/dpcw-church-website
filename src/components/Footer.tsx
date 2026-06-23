'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Live Stream', href: '/#live' },
  { name: 'Events', href: '/#program' },
  { name: 'Give', href: '/#give' },
  { name: 'Grow', href: '/grow' },
  { name: 'Care', href: '/care' },
]

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/live/JAXFBarVda8?feature=share', bg: 'bg-[#FF0000]', hoverBg: 'hover:bg-[#cc0000]', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { name: 'Facebook', href: 'https://www.facebook.com/share/v/1A6aDdo3wu/', bg: 'bg-[#1877F2]', hoverBg: 'hover:bg-[#1466d2]', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { name: 'Instagram', href: 'https://www.instagram.com/reel/DOygViQkfUc/?igsh=MWNyZmZzYzM4Ymh0dA==', bg: 'bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]', hoverBg: 'hover:opacity-80', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { name: 'TikTok', href: 'https://www.tiktok.com/@divinepeniel7', bg: 'bg-[#010101]', hoverBg: 'hover:bg-[#333]', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
  )},
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Divine Peniel Chapel Worldwide"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <span className="text-white font-bold text-[13px] tracking-wide block">
                  DIVINE PENIEL CHAPEL
                </span>
                <span className="text-white/50 text-[10px] tracking-[0.15em] uppercase">
                  Worldwide
                </span>
              </div>
            </a>
            <p className="text-white/50 text-[13px] leading-relaxed mt-3">
              A vibrant community committed to sharing God&apos;s love, transforming lives, and making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[13px] text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5">Service Times</h4>
            <div className="space-y-3 text-[13px]">
              <div>
                <p className="text-white/70 font-medium">Sunday</p>
                <p className="text-white/40">6:00 AM – 10:00 AM</p>
              </div>
              <div>
                <p className="text-white/70 font-medium">Monday</p>
                <p className="text-white/40">6:00 PM – 9:00 PM</p>
              </div>
              <div>
                <p className="text-white/70 font-medium">Wednesday &amp; Friday</p>
                <p className="text-white/40">9:00 AM – 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5">Follow Us</h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide ${link.bg} ${link.hoverBg} transition-all duration-200 shadow-sm`}
                  title={link.name}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} Divine Peniel Chapel Worldwide (D.P.C.W). All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-[12px] text-white/60 hover:text-white underline underline-offset-2 transition-colors">Privacy Policy</a>
            <span className="text-white/30">|</span>
            <a href="/terms" className="text-[12px] text-white/60 hover:text-white underline underline-offset-2 transition-colors">Terms of Service</a>
          </div>
          <p className="text-[12px] text-white/40 flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-rose-400" fill="currentColor" /> for His glory
          </p>
        </div>
      </div>
    </footer>
  )
}
