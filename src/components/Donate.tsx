'use client'

import { motion } from 'framer-motion'
import { Copy, Check, Smartphone, Building2 } from 'lucide-react'
import { useState, useEffect } from 'react'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors group"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
      )}
    </button>
  )
}

function PhoneScreen() {
  const steps = [
    { label: 'Dialing...', text: '*170#', speed: 350 },
    { label: 'Send Money To', text: '', speed: 0 },
    { label: 'Number 1', text: '0244698625', speed: 280 },
    { label: 'Number 2', text: '0553249078', speed: 280 },
  ]

  const [stepIndex, setStepIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [activeKey, setActiveKey] = useState<string | null>(null)

  useEffect(() => {
    const step = steps[stepIndex]

    if (step.text === '') {
      const timeout = setTimeout(() => {
        setStepIndex((prev) => (prev + 1) % steps.length)
        setCharIndex(0)
        setDisplayed('')
        setActiveKey(null)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    if (charIndex < step.text.length) {
      const timeout = setTimeout(() => {
        const char = step.text[charIndex]
        setActiveKey(char)
        setDisplayed(step.text.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        // Clear key highlight after a moment
        setTimeout(() => setActiveKey(null), 150)
      }, step.speed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setStepIndex((prev) => (prev + 1) % steps.length)
      setCharIndex(0)
      setDisplayed('')
      setActiveKey(null)
    }, 3500)
    return () => clearTimeout(timeout)
  }, [stepIndex, charIndex])

  const step = steps[stepIndex]
  const dialPad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ]

  // Format displayed number with spaces
  const formatNumber = (num: string) => {
    if (num.startsWith('*')) return num
    if (num.length <= 3) return num
    if (num.length <= 6) return num.slice(0, 3) + ' ' + num.slice(3)
    return num.slice(0, 3) + ' ' + num.slice(3, 6) + ' ' + num.slice(6)
  }

  return (
    <div className="flex flex-col h-full pb-3">
      {/* MTN MoMo header bar */}
      <div className="bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] px-4 py-2 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
          <span className="text-[8px] font-black text-white">M</span>
        </div>
        <span className="text-white font-bold text-[11px]">MTN MoMo</span>
      </div>

      {/* Number display area */}
      <div className="flex-1 flex flex-col items-center justify-center mb-2 px-3">
        <p className="text-[#0f1a2e]/40 text-[7px] font-semibold uppercase tracking-wider mb-1">
          {step.label}
        </p>
        <p className="text-[#0f1a2e] font-light text-[20px] tracking-[1px] min-h-[28px]">
          {formatNumber(displayed)}
        </p>
      </div>

      {/* Dial pad */}
      <div className="grid grid-cols-3 gap-[6px] mb-2 px-3">
        {dialPad.map((row) =>
          row.map((key) => (
            <div
              key={key}
              className={`w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-full flex items-center justify-center mx-auto transition-all duration-100 ${
                activeKey === key
                  ? 'bg-[#d4d4d8] scale-95'
                  : 'bg-[#e8e8ec]'
              }`}
            >
              <span className="text-[#0f1a2e] text-[18px] font-medium">{key}</span>
            </div>
          ))
        )}
      </div>

      {/* Call button */}
      <div className="flex justify-center mt-1">
        <div className="w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-full bg-[#34c759] flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Donate() {
  return (
    <section id="give" className="bg-[#e8f4fc] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-[#0f1a2e] text-4xl md:text-5xl font-black font-[family-name:var(--font-playfair)] mb-4">
            Support the Ministry
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base max-w-lg mx-auto leading-relaxed">
            Your generous giving empowers D.P.C.W to spread the gospel, serve the community, and transform lives. Every gift makes a difference.
          </p>
        </motion.div>

        {/* Payment cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* MoMo — iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            {/* iPhone 15 Pro — Lakewood style: facing right, tilted */}
            <div className="relative" style={{ transform: 'perspective(1200px) rotateY(12deg) rotateZ(-6deg)' }}>

              <div className="w-[240px] md:w-[260px]">
                {/* Phone outer shell — titanium frame */}
                <div className="bg-gradient-to-b from-[#4e4e52] via-[#3c3c40] to-[#2e2e32] rounded-[44px] p-[4px] shadow-lg">
                  {/* Inner bezel */}
                  <div className="bg-[#1a1a1c] rounded-[40px] p-[3px]">
                    {/* Screen */}
                    <div className="bg-[#f5f5f7] rounded-[37px] overflow-hidden relative flex flex-col" style={{ aspectRatio: '9/19.5' }}>
                      {/* Dynamic Island */}
                      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-[#1a1a1c] rounded-full z-20" />
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 pt-[14px] pb-0 relative z-10">
                        <span className="text-[#0f1a2e] text-[8px] font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-2.5 h-1.5 bg-[#0f1a2e]/60 rounded-sm" />
                        </div>
                      </div>

                      {/* Live animated screen content */}
                      <div className="flex-1 relative z-10 flex flex-col">
                        <PhoneScreen />
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-black/15 rounded-full z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bank — Credit card style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-6 pt-4"
          >
            {/* Bank card visual */}
            <div className="w-full max-w-[340px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl p-6 shadow-xl shadow-blue-900/20 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-[-20px] right-[-20px] w-[100px] h-[100px] border border-white/[0.06] rounded-full" />
              <div className="absolute top-[-10px] right-[-10px] w-[70px] h-[70px] border border-white/[0.04] rounded-full" />

              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-red-400" />
                <h3 className="text-white font-bold text-[15px]">ABSA Bank</h3>
              </div>

              <div className="mb-5">
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider mb-1">Account Name</p>
                <p className="text-white font-semibold text-[14px]">Divine Peniel Chapel Worldwide</p>
              </div>

              <div>
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider mb-1">Account Number</p>
                <div className="flex items-center justify-between">
                  <p className="text-white font-mono text-[22px] font-bold tracking-wider">027 124 8652</p>
                  <CopyButton text="0271248652" />
                </div>
              </div>

              {/* Chip */}
              <div className="absolute bottom-5 right-5 w-10 h-7 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 opacity-60" />
            </div>

            <p className="text-gray-500 text-[12px] text-center md:text-left max-w-[340px]">
              Direct bank deposit or transfer to the account above.
            </p>
          </motion.div>
        </div>

        {/* Static MoMo numbers reference */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[40px] bg-gradient-to-b from-[#ffcc00] to-[#ff9500] rounded-full" />
            <div>
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">MoMo Number 1</p>
              <div className="flex items-center gap-2">
                <p className="text-[#0f1a2e] font-mono text-[18px] font-bold">0244 698 625</p>
                <CopyButton text="0244698625" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[3px] h-[40px] bg-gradient-to-b from-[#ffcc00] to-[#ff9500] rounded-full" />
            <div>
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">MoMo Number 2</p>
              <div className="flex items-center gap-2">
                <p className="text-[#0f1a2e] font-mono text-[18px] font-bold">0553 249 078</p>
                <CopyButton text="0553249078" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-400 text-sm italic font-[family-name:var(--font-playfair)] leading-relaxed max-w-lg mx-auto">
            &ldquo;Each of you should give what you have decided in your heart to give, 
            not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
          </p>
          <p className="text-gray-300 text-xs mt-2">— 2 Corinthians 9:7</p>
        </motion.div>
      </div>
    </section>
  )
}
