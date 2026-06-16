"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CoachIntro() {
  return (
    <section className="py-24 px-4 bg-surface-secondary relative border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden glass-card group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image 
            src="/images/coach.png" 
            alt="UGC Coach" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <div className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full text-xs font-semibold text-primary inline-block mb-2">
              Founder & Lead Mentor
            </div>
            <h3 className="text-2xl font-bold text-white">Alex Mercer</h3>
          </div>
        </motion.div>

        {/* Right Side: Bio */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            MEET YOUR <span className="text-gradient">COACH</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I&apos;ve helped creators go from zero experience to landing real paid brand deals through proven systems, outreach strategies, and personalized coaching.
            </p>
            <p>
              My goal isn&apos;t just to teach you how to make content—it&apos;s to teach you how to run a profitable creative business.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4 pt-6 border-t border-border"
          >
            <div className="space-y-1">
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Brands Worked With</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Creator Wins</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-foreground">$1M+</div>
              <div className="text-sm text-muted-foreground">Student Earnings</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
