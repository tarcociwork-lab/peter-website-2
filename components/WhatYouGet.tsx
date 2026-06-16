"use client"

import { motion } from "framer-motion"
import { Briefcase, MessageSquare, Users, ArrowRight } from "lucide-react"

export function WhatYouGet() {
  const features = [
    {
      icon: Briefcase,
      title: "#1 Portfolio System",
      description: "Build a professional UGC portfolio brands actually want to hire."
    },
    {
      icon: MessageSquare,
      title: "#2 Brand Outreach Framework",
      description: "Copy-and-paste outreach scripts and systems to get responses."
    },
    {
      icon: Users,
      title: "#3 Personalized Mentorship",
      description: "Direct feedback, strategy, and accountability to accelerate results."
    }
  ]

  return (
    <section className="py-24 px-4 bg-surface-secondary relative border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-16"
        >
          WHAT YOU&apos;LL GET <span className="text-gradient">INSIDE</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start border border-border group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-primary rounded-full overflow-hidden glow-purple w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              BOOK YOUR STRATEGY CALL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
