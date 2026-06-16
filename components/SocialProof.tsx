"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, MoreVertical } from "lucide-react"

const testimonials = [
  {
    name: "Patrick Johnson",
    meta: "7 reviews · 1 photo",
    time: "2 weeks ago",
    highlight: "just a few hours into the first day I was completely sold",
    text: "My business partner convinced me we should attend this, so I wasn't sold. However, just a few hours into the first day I was completely sold. I started thinking about how we approach our business in a different way — especially from the CEO standpoint — looking to increase our overall revenue. It was incredible!",
  },
  {
    name: "Chase Taake",
    meta: "5 reviews · 1 photo",
    time: "3 weeks ago",
    highlight: "I have never had this much clarity",
    text: "Just got out of the scaling workshop... my new constraint is how fast I can implement their advice! Every question, plus questions I didn't know I had, were answered with care, in detail, with clarity. I have never had this much clarity. I truly loved this workshop.",
  },
  {
    name: "Franklin Cruz",
    meta: "Local Guide · 23 reviews",
    time: "4 months ago",
    highlight: "the best I've ever attended",
    text: "As a military veteran, former Army recruiter, and someone who's been through countless trainings — I can confidently say this is the best I've ever attended. The level of depth, the frameworks, and the direct application to our business was unlike anything I've experienced.",
  },
]

function ReviewCard({ name, meta, time, text, highlight, delay = 0 }: any) {
  const parts = text.split(highlight)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl border border-border bg-[#0d0d0d] hover:border-primary/40 transition-all duration-300 p-6 flex flex-col gap-4 h-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="font-bold text-white text-sm">{name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{meta}</div>
        </div>
        <MoreVertical className="w-4 h-4 text-muted-foreground shrink-0" />
      </div>

      {/* Stars + time */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
        </div>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>

      {/* Review text */}
      <p className="text-sm text-foreground leading-relaxed flex-1">
        {parts[0]}
        <span className="bg-primary/20 text-primary px-1 rounded font-medium">{highlight}</span>
        {parts[1]}
      </p>
    </motion.div>
  )
}

export function SocialProof() {
  return (
    <section className="py-24 md:py-36 px-4 relative overflow-hidden">

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-primary text-glow uppercase">Real Results. Real Money.</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-extrabold text-white uppercase"
          >
            THE <span className="text-gradient text-glow">PROOF</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Real reviews and actual EFT deposits from creators who followed this exact system.
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top Left: Review 1 */}
          <div className="md:col-span-4 h-full">
            <ReviewCard {...testimonials[0]} delay={0.1} />
          </div>

          {/* Top Right: Image 1 (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8 h-full min-h-[250px] relative rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 glass-card p-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image src="/images/proof-1.jpg" alt="Payment proof" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Bottom Left: Image 2 (Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 h-full min-h-[400px] relative rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300 glass-card p-2"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image src="/images/proof-multi.jpg" alt="Payment proofs" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Bottom Right: Reviews 2 & 3 */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="flex-1">
              <ReviewCard {...testimonials[1]} delay={0.4} />
            </div>
            <div className="flex-1">
              <ReviewCard {...testimonials[2]} delay={0.5} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
