"use client"

import { motion } from "framer-motion"
import { DollarSign, MousePointerClick, TrendingUp } from "lucide-react"

export function WhatYouGet() {
  return (
    <section className="py-24 md:py-36 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-24 text-white uppercase"
        >
          What you will get with <span className="text-gradient text-glow">my coaching</span>
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[3rem] left-[16%] right-[16%] h-1 bg-primary/20 z-0 overflow-hidden rounded-full">
            <motion.div 
              className="h-full w-1/3 bg-primary glow-purple"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="block md:hidden absolute top-[3rem] bottom-[3rem] left-1/2 -translate-x-1/2 w-1 bg-primary/20 z-0 overflow-hidden rounded-full">
            <motion.div 
              className="w-full h-1/3 bg-primary glow-purple"
              animate={{ y: ["-100%", "300%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-24 h-24 rounded-full bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-full" />
              <DollarSign className="w-10 h-10 text-primary relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">#1 Money-Making System</h3>
            <p className="text-muted-foreground text-base leading-relaxed px-4">
              A proven system designed to make you over 5k/month in the first few weeks with our help.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative z-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-24 h-24 rounded-full bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-full" />
              <MousePointerClick className="w-10 h-10 text-primary relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">#2 Direct leads</h3>
            <p className="text-muted-foreground text-base leading-relaxed px-4">
              We provide you a direct path to companies without having to search all over the internet.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-24 h-24 rounded-full bg-background border border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-full" />
              <TrendingUp className="w-10 h-10 text-primary relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">#3 Scaling Framework</h3>
            <p className="text-muted-foreground text-base leading-relaxed px-4">
              Weekly Coaching calls, providing direct advice and future steps on scaling. As well as one-on-one assistance 24/7.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
