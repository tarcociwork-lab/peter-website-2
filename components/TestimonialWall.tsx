"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  { text: "Landed my first $500 deal within a week of finishing the modules.", name: "Jessica K.", role: "Beauty Creator" },
  { text: "The outreach templates are gold. Brands actually respond to my emails now.", name: "David M.", role: "Tech Reviewer" },
  { text: "I was stuck at 0 deals for a year. This mentorship changed everything for my business.", name: "Amanda P.", role: "Lifestyle UGC" },
  { text: "Best investment I've made in my career. The pricing strategies alone paid for the program.", name: "Tyler S.", role: "Fitness Creator" },
  { text: "Finally quit my 9-5! The community and coach support is unmatched.", name: "Chloe R.", role: "Travel Creator" },
  { text: "I didn't think I could do this with only 500 followers. I was wrong. Thank you!", name: "Sam J.", role: "Food Creator" },
]

export function TestimonialWall() {
  return (
    <section className="py-24 px-4 bg-surface-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-16"
        >
          WHAT STUDENTS <span className="text-gradient">ARE SAYING</span>
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="glass-card p-6 rounded-2xl break-inside-avoid border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">&quot;{r.text}&quot;</p>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-primary">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
