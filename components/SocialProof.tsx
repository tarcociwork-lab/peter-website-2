"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, MoreVertical } from "lucide-react"

const testimonials = [
  {
    name: "Patrick Johnson",
    meta: "142 reviews · 12 photos",
    time: "2 weeks ago",
    highlight: "just a few hours into the first day I was completely sold",
    text: "My business partner convinced me we should attend this, so I wasn't sold. However, just a few hours into the first day I was completely sold. I started thinking about how we approach our business in a different way — especially from the CEO standpoint — looking to increase our overall revenue. It was incredible!",
  },
  {
    name: "Chase Taake",
    meta: "215 reviews · 18 photos",
    time: "3 weeks ago",
    highlight: "I have never had this much clarity",
    text: "Just got out of the scaling workshop... my new constraint is how fast I can implement their advice! Every question, plus questions I didn't know I had, were answered with care, in detail, with clarity. I have never had this much clarity. I truly loved this workshop.",
  },
  {
    name: "Franklin Cruz",
    meta: "Local Guide · 328 reviews",
    time: "4 months ago",
    highlight: "the best I've ever attended",
    text: "As a military veteran, former Army recruiter, and someone who's been through countless trainings — I can confidently say this is the best I've ever attended. The level of depth, the frameworks, and the direct application to our business was unlike anything I've experienced.",
  },
]

function ReviewCard({ name, meta, time, text, highlight, delay = 0, rotateY = 0, z = 0, scale = 1, originClass = "origin-center" }: any) {
  const parts = text.split(highlight)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: 0, z: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateY, z, scale }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`glass-card rounded-2xl border border-border bg-[#0d0d0d] hover:border-primary/40 transition-colors duration-300 p-6 flex flex-col gap-4 h-full shadow-2xl ${originClass}`}
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

        {/* Top Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" style={{ perspective: "2000px" }}>
          <ReviewCard {...testimonials[0]} delay={0.1} rotateY={15} originClass="origin-right" />
          <ReviewCard {...testimonials[1]} delay={0.2} rotateY={0} z={30} scale={1.05} originClass="origin-center" />
          <ReviewCard {...testimonials[2]} delay={0.3} rotateY={-15} originClass="origin-left" />
        </div>

        {/* Bottom Images with 3D Keystone Effect */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8" style={{ perspective: "2000px" }}>
          
          {/* Left Image (Lower dollar) */}
          <motion.div
            initial={{ opacity: 0, rotateY: 0, y: 30, z: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateY: 15, y: 0, z: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] origin-right"
          >
            <img src="/images/proof-2.png" alt="Payment proof" className="w-full h-auto object-contain rounded-2xl" />
          </motion.div>

          {/* Middle Image (Highest dollar) */}
          <motion.div
            initial={{ opacity: 0, rotateY: 0, y: 30, z: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0, z: 30, scale: 1.05 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.25)] origin-center z-10"
          >
            <img src="/images/proof-3.png" alt="Payment proof high" className="w-full h-auto object-contain rounded-2xl" />
          </motion.div>

          {/* Right Image (Multi) */}
          <motion.div
            initial={{ opacity: 0, rotateY: 0, y: 30, z: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateY: -15, y: 0, z: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] origin-left"
          >
            <img src="/images/proof-1.png" alt="Payment proofs" className="w-full h-auto object-contain rounded-2xl" />
          </motion.div>
          
        </div>

      </div>
    </section>
  )
}
