'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const monthlyPrograms = [
  { month: 'Jan', num: '01', date: '5th – 30th', title: '21 Days Fasting & Prayers', theme: 'Working Against What Makes You Forget God', scripture: 'Matt 11:1-7', img: '/media/image1.jpeg' },
  { month: 'Feb', num: '02', date: '25th – 27th', title: '3-Day Conference', theme: 'No Work Can Stand Firm Unless It Is Built by the Will of God', scripture: 'Isaiah 39:1-1', img: '/media/image2.jpeg' },
  { month: 'Mar', num: '03', date: '25th – 27th', title: '3-Day Conference', theme: 'Never Allow People\'s Opinion to Become Your Conclusion', scripture: 'Lam 3:37', img: '/media/service-bg.jpeg' },
  { month: 'Apr', num: '04', date: 'Easter Period', title: 'Easter Convention', theme: 'The Death of Christ', scripture: '', img: '/media/image1.jpeg' },
  { month: 'May', num: '05', date: '25th – 29th', title: '5 Days Program', theme: 'Morning and Evening', scripture: '', img: '/media/image2.jpeg' },
  { month: 'Jun', num: '06', date: '24th – 26th', title: '3-Day Conference', theme: 'Your Obedience Will Bring God Into Your Situation', scripture: 'Gen 41:40', img: '/media/service-bg.jpeg' },
  { month: 'Jul', num: '07', date: '29th – 31st', title: '3-Day Conference', theme: 'There\'s a Set Time for Everything in Christ Jesus', scripture: 'Gen 21:1-2', img: '/media/image1.jpeg' },
  { month: 'Aug', num: '08', date: 'Full Month', title: 'Building Altars & Ejecting Altars', theme: 'Spiritual Warfare and Altar Building', scripture: 'Numbers 21:1', img: '/media/image2.jpeg' },
  { month: 'Sep', num: '09', date: '28th Sep – 2nd Oct', title: '5 Days Program', theme: 'Morning and Evening', scripture: '', img: '/media/service-bg.jpeg' },
  { month: 'Oct', num: '10', date: '28th – 30th', title: '3-Day Conference', theme: 'Dealing With 5 Enemies Behind Your Breakthrough', scripture: 'Exds 3:1-end', img: '/media/image1.jpeg' },
  { month: 'Nov', num: '11', date: '20th & 22nd', title: 'Annual Harvest', theme: 'You Are Your Sacrifices', scripture: 'Isaiah 38:1', img: '/media/image2.jpeg' },
  { month: 'Dec', num: '12', date: 'Full Month', title: 'Praying Aloud', theme: 'A Month of Fervent Prayer', scripture: '', img: '/media/service-bg.jpeg' },
]

const yearActivities = [
  { name: 'Salt & Wave Offering', date: '4th Jan', quarter: 'Q1' },
  { name: 'Oil & Blood Covenant', date: '11th Jan', quarter: 'Q1' },
  { name: 'Victory Praise \'26', date: '1st Feb', quarter: 'Q1' },
  { name: 'Love Feast', date: '8th Feb', quarter: 'Q1' },
  { name: 'Popcorn & Chocolate Night', date: '14th Feb', quarter: 'Q1' },
  { name: 'First Fruit Day (Covenant)', date: '15th Feb', quarter: 'Q1' },
  { name: 'Heritage Month', date: 'March', quarter: 'Q1' },
  { name: 'Easter Convention', date: '3rd – 5th Apr', quarter: 'Q2' },
  { name: 'Workers Seminar', date: '19th Apr', quarter: 'Q2' },
  { name: 'Women\'s Day', date: '10th May', quarter: 'Q2' },
  { name: 'Pan African Day', date: '24th May', quarter: 'Q2' },
  { name: 'Marriage Seminar', date: '5th Jun', quarter: 'Q2' },
  { name: 'Men\'s Day', date: '14th Jun', quarter: 'Q2' },
  { name: 'Family Month (25th Anniversary)', date: 'July', quarter: 'Q3' },
  { name: 'Children\'s Day', date: '23rd Aug', quarter: 'Q3' },
  { name: 'Rep Your Jersey Day', date: '20th Sep', quarter: 'Q3' },
  { name: 'Career Day', date: '18th Oct', quarter: 'Q4' },
  { name: 'Annual Harvest', date: '20th – 22nd Nov', quarter: 'Q4' },
  { name: 'WorPraPra — Worship, Praise & Prayer Night', date: '4th Dec', quarter: 'Q4' },
  { name: 'Carols Night', date: '24th Dec', quarter: 'Q4' },
]

const quarters = [
  { key: 'Q1', label: 'Jan – Mar' },
  { key: 'Q2', label: 'Apr – Jun' },
  { key: 'Q3', label: 'Jul – Sep' },
  { key: 'Q4', label: 'Oct – Dec' },
]

export default function YearProgram() {
  const currentRealMonth = new Date().getMonth()
  const [activeMonth, setActiveMonth] = useState(currentRealMonth)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly')

  const goToMonth = useCallback((index: number) => {
    setActiveMonth(index)
  }, [])

  // Scroll the active month card into center view
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const card = container.querySelector(`[data-month-index="${activeMonth}"]`) as HTMLElement | null
    if (card) {
      const containerWidth = container.offsetWidth
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      const scrollTo = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      container.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [activeMonth])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveMonth((prev) => (prev + 1) % monthlyPrograms.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const current = monthlyPrograms[activeMonth]

  return (
    <section id="program" className="relative overflow-hidden">
      {/* ═══════ YEAR PROGRAM — TIMELINE STYLE ═══════ */}
      <div className="relative py-14 md:py-20 overflow-hidden">
        {/* Background image — fixed parallax */}
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/media/church-service.jpeg)' }} />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a0f1a]/55" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-10 md:mb-14">
            <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/15 shadow-lg shadow-black/10">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeTab === 'monthly'
                    ? 'bg-[#1e3a5f] text-white shadow-md shadow-[#1e3a5f]/30 border border-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                Monthly Programs
              </button>
              <button
                onClick={() => setActiveTab('yearly')}
                className={`px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeTab === 'yearly'
                    ? 'bg-[#7a5c1e] text-white shadow-md shadow-[#7a5c1e]/30 border border-amber-400/20'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                Year Activities
              </button>
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === 'monthly' && (
              <motion.div
                key="monthly"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Two-column timeline */}
                <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                  {[monthlyPrograms.slice(0, 6), monthlyPrograms.slice(6)].map((column, colIdx) => (
                    <div key={colIdx} className="relative">
                      {/* Vertical line */}
                      <div className="absolute left-[40px] md:left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-400 via-amber-400/40 to-amber-400/10" />

                      {column.map((program, i) => {
                        const realIndex = colIdx * 6 + i
                        const isCurrent = realIndex === activeMonth
                        return (
                          <div
                            key={program.month}
                            data-month-index={realIndex}
                            className="relative flex gap-4 md:gap-5 mb-1 last:mb-0"
                          >
                            {/* Month label */}
                            <div className="w-[32px] md:w-[40px] flex-shrink-0 pt-4 text-right">
                              <span className={`text-[11px] md:text-[12px] font-bold uppercase tracking-wider ${
                                isCurrent ? 'text-amber-400' : 'text-white/30'
                              }`}>
                                {program.month}
                              </span>
                            </div>

                            {/* Dot */}
                            <div className="relative flex-shrink-0 w-[18px] flex justify-center pt-4">
                              <div className={`w-2.5 h-2.5 rounded-full border-2 z-10 ${
                                isCurrent
                                  ? 'bg-amber-500 border-amber-500 shadow-lg shadow-amber-500/30'
                                  : 'bg-white/10 border-white/20'
                              }`} />
                            </div>

                            {/* Card */}
                            <div className="flex-1 pb-3 pt-1">
                              <div className={`rounded-lg px-4 py-3 transition-all duration-300 ${
                                realIndex === currentRealMonth
                                  ? 'bg-white/20 backdrop-blur-md border border-amber-400/50 animate-pulse-slow'
                                  : isCurrent
                                    ? 'bg-white/18 backdrop-blur-md border border-white/25'
                                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/10'
                              }`}>
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className={`font-extrabold text-[13px] md:text-[14px] leading-snug ${
                                    isCurrent ? 'text-white' : 'text-white/90'
                                  }`}>
                                    {program.title}
                                  </h4>
                                  <span className={`text-[9px] font-semibold uppercase tracking-wide flex-shrink-0 px-2 py-1 rounded-full ${
                                    isCurrent
                                      ? 'bg-amber-500/40 text-white'
                                      : 'bg-white/15 text-white/80'
                                  }`}>
                                    {program.date}
                                  </span>
                                </div>
                                <p className={`text-[11px] md:text-[12px] italic leading-relaxed font-medium ${
                                  isCurrent ? 'text-white/70' : 'text-white/50'
                                }`}>
                                  &ldquo;{program.theme}&rdquo;
                                </p>
                                {program.scripture && (
                                  <p className={`text-[10px] mt-1 font-semibold ${
                                    isCurrent ? 'text-amber-300' : 'text-white/50'
                                  }`}>
                                    {program.scripture}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'yearly' && (
              <motion.div
                key="yearly"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {quarters.map((quarter, qi) => {
                    const currentQuarter = Math.floor(currentRealMonth / 3)
                    const isCurrentQuarter = qi === currentQuarter
                    return (
                    <div
                      key={quarter.key}
                      className={`backdrop-blur-md rounded-2xl p-5 overflow-hidden transition-all duration-300 ${
                        isCurrentQuarter
                          ? 'bg-white/20 border border-amber-400/50 animate-pulse-slow'
                          : 'bg-white/15 border border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-amber-400 text-[20px] font-black tracking-tight">{quarter.key}</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
                        <span className="text-white/20 text-[11px] font-semibold tracking-wider uppercase">{quarter.label}</span>
                      </div>

                      <div className="space-y-2">
                        {yearActivities
                          .filter((a) => a.quarter === quarter.key)
                          .map((activity) => (
                            <div
                              key={activity.name}
                              className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.04] transition-all duration-300"
                            >
                              <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-all" />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white/80 text-[13px] font-semibold truncate group-hover:text-white transition-colors">
                                  {activity.name}
                                </h4>
                              </div>
                              <span className="text-white/70 text-[11px] font-semibold shrink-0 group-hover:text-amber-300 transition-colors">
                                {activity.date}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </section>
  )
}
