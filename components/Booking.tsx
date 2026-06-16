"use client"

import { motion } from "framer-motion"

export function Booking() {
  return (
    <section className="py-32 md:py-48 px-4 bg-background relative border-t border-border" id="booking">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 md:p-8 rounded-3xl border border-primary/20 relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.05)]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="text-center mb-8 space-y-4 pt-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">BOOK YOUR <span className="text-gradient">STRATEGY CALL</span></h2>
            <p className="text-lg text-muted-foreground">Select a time below to secure your spot. Spots are strictly limited.</p>
          </div>

          {/* Calendly Inline Embed */}
          <div className="w-full h-[1100px] md:h-[800px] rounded-xl overflow-hidden bg-surface-secondary/20">
            <iframe
              src="https://calendly.com/therealpeter08/30min?month=2026-06&background_color=080808&text_color=ffffff&primary_color=8b5cf6"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling Page"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
