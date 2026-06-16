"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-24 md:pb-36 px-4 overflow-hidden">


      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary-foreground tracking-wide uppercase">The #1 UGC Mentorship Program</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-black tracking-tight mb-3 leading-tight text-white"
        >
          <span className="text-gradient text-glow font-black">START GETTING PAID</span><br />
          FOR YOUR CONTENT.
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground max-w-lg mb-5 leading-relaxed"
        >
          Do you want to make money online with UGC?{" "}
          <span className="text-white/90 font-medium">
            I'll show you the exact steps I used to hit $6K/month in only 2 weeks, working just 2–3 hours a day.
          </span>
        </motion.p>

        {/* Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden glass-card group cursor-pointer mb-5"
          style={{ aspectRatio: "16/7" }}
        >
          <Image 
            src="/images/hero-video.png" 
            alt="UGC System Video" 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-white glow-purple transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-primary rounded-full overflow-hidden glow-purple w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              BOOK YOUR STRATEGY CALL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="mt-2 text-xs text-muted-foreground/70">
            ⚡️ Limited mentorship spots available this month.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
