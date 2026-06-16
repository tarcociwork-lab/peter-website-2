"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

export function ProblemAgitation() {
  const painPoints = [
    "No portfolio",
    "No brands replying",
    "No outreach system",
    "No pricing strategy",
    "No roadmap",
    "Posting content with no return"
  ]

  return (
    <section className="py-24 px-4 bg-surface-secondary relative overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Pain Points */}
        <div className="space-y-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            WHY MOST CREATORS <br className="hidden md:block" />
            <span className="text-gradient">NEVER GET PAID</span>
          </motion.h2>

          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border glass hover:border-destructive/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-lg font-medium text-muted-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden glass-card"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-10" />
          <Image 
            src="/images/problem-graphic.png" 
            alt="Posting to rejection pipeline" 
            fill 
            className="object-cover animate-pulse-glow"
          />
        </motion.div>
      </div>
    </section>
  )
}
