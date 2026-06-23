import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Divine Peniel Chapel Worldwide | D.P.C.W',
  description: 'Welcome to Divine Peniel Chapel Worldwide (D.P.C.W). Join us for worship, community, and spiritual growth. Watch live services, connect on social media, and be part of our family.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable}`}>
      <body className="bg-[#0a0a1a] text-white overflow-x-hidden">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
