"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, TrendingUp } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    handle: "@sarahcreates",
    image: "/images/avatar-1.png",
    win: "$1,200 First Month",
    content: "I had zero experience before this. The outreach templates alone paid for the mentorship 10x over.",
    brand: "Sephora Collab"
  },
  {
    id: 2,
    name: "Michael T.",
    handle: "@mikevlogs",
    image: "/images/avatar-2.png",
    win: "Landed My First Brand Deal In 17 Days",
    content: "I was posting for free for 2 years. 17 days into the program, I signed a 3-month retainer.",
    brand: "Nike Campaign"
  },
  {
    id: 3,
    name: "Elena R.",
    handle: "@elenastyle",
    image: "/images/avatar-3.png",
    win: "Replaced My Part-Time Income",
    content: "Finally quit my barista job. The pricing strategy modules completely changed how I negotiate.",
    brand: "Gymshark Partner"
  }
]

export function SocialProof() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            CREATORS WHO <span className="text-gradient">TOOK ACTION</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real results from creators just like you who implemented the system.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col h-full border border-border hover:border-primary/50 relative overflow-hidden group cursor-default"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Win Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">{t.win}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    Verified Win
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-foreground text-lg mb-8 flex-grow">
                &quot;{t.content}&quot;
              </p>

              {/* Author & Brand */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.handle}</div>
                  </div>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-surface-secondary rounded-md text-primary">
                  {t.brand}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
