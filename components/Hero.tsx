"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const videoUrl = "https://drive.google.com/uc?export=download&id=1o3Hp5BBn9-K2PzH1xxii2c4ektShL8J4";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 md:pb-36 px-4 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        
        {/* DESKTOP VIDEO (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block w-full max-w-sm mx-auto mr-auto ml-0 aspect-[9/16] relative z-20"
        >
          <iframe 
            src="https://drive.google.com/file/d/1o3Hp5BBn9-K2PzH1xxii2c4ektShL8J4/preview" 
            allow="autoplay; fullscreen"
            className="w-full h-full rounded-[2rem] shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-border/40"
            title="Mentorship Video"
          />
        </motion.div>

        {/* CONTENT COLUMN */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary-foreground tracking-wide uppercase">The #1 UGC Mentorship Program</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight text-white"
          >
            <span className="text-gradient text-glow font-black">START GETTING PAID</span><br />
            FOR YOUR CONTENT.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 lg:mb-10 leading-relaxed"
          >
            Do you want to make money online with UGC?{" "}
            <span className="text-white/90 font-medium">
              I'll show you the exact steps I used to hit $6K/month in only 2 weeks, working just 2–3 hours a day.
            </span>
          </motion.p>

          {/* MOBILE VIDEO (Hidden on Desktop) - Positioned between text and CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="block lg:hidden w-full max-w-xs mx-auto aspect-[9/16] relative z-20 mb-8"
          >
            <iframe 
              src="https://drive.google.com/file/d/1o3Hp5BBn9-K2PzH1xxii2c4ektShL8J4/preview" 
              allow="autoplay; fullscreen"
              className="w-full h-full rounded-[2rem] shadow-[0_0_50px_rgba(139,92,246,0.15)] border border-border/40"
              title="Mentorship Video"
            />
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start w-full"
          >
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-primary rounded-full overflow-hidden glow-purple w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                BOOK YOUR STRATEGY CALL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <p className="mt-3 text-xs md:text-sm text-muted-foreground/70">
              ⚡️ Limited mentorship spots available this month.
            </p>
          </motion.div>
          
        </div>

      </div>
    </section>
  )
}
