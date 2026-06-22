'use client'

import { Heart } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Live Stream', href: '#live' },
  { name: 'Events', href: '#events' },
  { name: 'Give', href: '#give' },
  { name: 'Connect', href: '#connect' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/live/JAXFBarVda8?feature=share' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/v/1A6aDdo3wu/' },
  { name: 'Instagram', href: 'https://www.instagram.com/reel/DOygViQkfUc/?igsh=MWNyZmZzYzM4Ymh0dA==' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@divinepeniel7' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Divine Peniel Chapel Worldwide"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-white font-bold text-sm tracking-wide">
                DIVINE PENIEL CHAPEL
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed">
              A vibrant community committed to sharing God&apos;s love and making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white/10 text-[11px] font-semibold uppercase tracking-wide text-white/40 hover:text-white hover:border-white/30 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Divine Peniel Chapel Worldwide (D.P.C.W). All rights reserved.
          </p>
          <p className="text-xs text-white/20 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-white/30" /> for His glory
          </p>
        </div>
      </div>
    </footer>
  )
}
