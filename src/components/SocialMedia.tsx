'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'YouTube', href: 'https://youtube.com/live/JAXFBarVda8?feature=share' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/v/1A6aDdo3wu/' },
  { name: 'Instagram', href: 'https://www.instagram.com/reel/DOygViQkfUc/?igsh=MWNyZmZzYzM4Ymh0dA==' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@divinepeniel7' },
]

export default function SocialMedia() {
  return (
    <section id="connect" className="bg-[#111] py-16 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Stay Connected
          </h2>
          <p className="text-white/40 max-w-lg mx-auto mb-10">
            To stay up to date on everything happening at D.P.C.W, follow us on social media.
          </p>

          {/* Social links row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-white/20 text-white text-[13px] font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
