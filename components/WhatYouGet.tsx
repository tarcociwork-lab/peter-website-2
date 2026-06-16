"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function WhatYouGet() {
  return (
    <section className="py-32 md:py-48 px-4 bg-background relative overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-24 text-white"
        >
          What you&apos;ll get at the <span className="border-b-4 border-primary">mentorship</span>:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">#1: Portfolio System</h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border">
              <Image src="/images/problem-graphic.png" alt="Portfolio" fill className="object-cover" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              Build a professional UGC portfolio to get <strong className="text-white font-semibold">personalized help</strong>. Everything from Marketing, Sales, and Strategy.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">#2: Outreach Framework</h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border">
              <Image src="/images/hero-video.png" alt="Framework" fill className="object-cover" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              We break down how we think, operate, and scale our <strong className="text-white font-semibold">outreach strategy</strong>. Showing you how to think like a high level CEO.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">#3: Tactical Next Steps</h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-surface-secondary">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold tracking-widest text-lg">1-ON-1 COACHING</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              Leave with clear - actionable - next steps to break past your current constraint. This includes a comprehensive <strong className="text-white font-semibold">scaling packet</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
