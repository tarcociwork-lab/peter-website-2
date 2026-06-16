"use client"

import { useState, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { Slider } from "@/components/ui/slider"

export function RevenueCalculator() {
  const [daysPerWeek, setDaysPerWeek] = useState([5])
  const [videosPerDay, setVideosPerDay] = useState([3])

  // Calculation (using 4 weeks a month)
  // Rate is $35 - $50 CAD per video
  const minMonthly = daysPerWeek[0] * videosPerDay[0] * 4 * 35
  const maxMonthly = daysPerWeek[0] * videosPerDay[0] * 4 * 50

  // Physics-based spring for smooth number rolling
  const springMin = useSpring(minMonthly, { stiffness: 100, damping: 20, mass: 1 })
  const springMax = useSpring(maxMonthly, { stiffness: 100, damping: 20, mass: 1 })

  useEffect(() => {
    springMin.set(minMonthly)
    springMax.set(maxMonthly)
  }, [minMonthly, maxMonthly, springMin, springMax])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(Math.round(value))
  }

  // Transform spring values into formatted currency strings
  const minDisplay = useTransform(springMin, (current) => formatCurrency(current))
  const maxDisplay = useTransform(springMax, (current) => formatCurrency(current))

  return (
    <section className="py-32 md:py-40 px-4 bg-background relative overflow-hidden border-y border-border">
      <div className="absolute top-0 right-0 w-full max-w-xl h-[400px] bg-primary/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            WHAT YOU COULD BE <span className="text-gradient">MAKING</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Adjust the sliders below to calculate your estimated monthly revenue creating UGC.
            <br />
            <span className="text-primary font-medium mt-2 inline-block">That is what you could be making with only 1,000 views per vid.</span>
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 rounded-3xl border border-primary/30 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(139,92,246,0.08)] hover:shadow-[0_0_60px_rgba(168,85,247,0.12)] transition-shadow duration-500"
        >
          {/* Sliders */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Days Per Week</label>
                <div className="text-lg font-black text-primary px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">
                  {daysPerWeek[0]}
                </div>
              </div>
              <Slider 
                value={daysPerWeek} 
                onValueChange={setDaysPerWeek} 
                max={7} 
                min={1} 
                step={1} 
                className="py-2 cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Videos Per Day</label>
                <div className="text-lg font-black text-primary px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">
                  {videosPerDay[0]}
                </div>
              </div>
              <Slider 
                value={videosPerDay} 
                onValueChange={setVideosPerDay} 
                max={10} 
                min={1} 
                step={1} 
                className="py-2 cursor-grab active:cursor-grabbing"
              />
            </div>
          </div>

          {/* Result Output */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-surface-secondary/50 rounded-2xl border border-border relative overflow-hidden group h-[200px]">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center text-center">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Estimated Monthly Revenue</div>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 text-4xl md:text-5xl font-extrabold text-white">
                <motion.span className="text-gradient drop-shadow-md">{minDisplay}</motion.span>
                <span className="text-xl text-muted-foreground font-normal sm:px-2">to</span>
                <motion.span className="text-gradient drop-shadow-md">{maxDisplay}</motion.span>
              </div>
              
              <div className="text-xs text-muted-foreground mt-6 bg-background/50 px-4 py-1.5 rounded-full border border-border/50">
                *Based on an average rate of $35-$50 CAD
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
