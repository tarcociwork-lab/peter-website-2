"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/GlassCard"
import { staggerContainer, staggerItem, scrollViewport } from "@/lib/animations"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "James Mitchell",
    title: "CEO, TechVentures",
    image: "/images/testimonial-1.jpg",
    metric: "Lost 35 lbs in 12 weeks",
    quote:
      "Marcus completely transformed how I approach fitness. As a CEO, I needed efficient, effective workouts. He delivered beyond my expectations. I&apos;m in the best shape of my life at 48.",
  },
  {
    name: "Sarah Chen",
    title: "Partner, Goldman Sachs",
    image: "/images/testimonial-2.jpg",
    metric: "Increased energy by 200%",
    quote:
      "The mental performance techniques alone were worth the investment. I&apos;m more focused, more productive, and I finally have the energy to be present with my family after work.",
  },
  {
    name: "Michael Torres",
    title: "Founder, Atlas Capital",
    image: "/images/testimonial-3.jpg",
    metric: "Ran first marathon at 52",
    quote:
      "I went from barely being able to run a mile to completing a marathon. Marcus&apos;s holistic approach changed everything - my diet, my sleep, my mindset. This is a life transformation.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Real Results from{" "}
            <span className="text-gradient">Real People</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Hear from high-performing professionals who have transformed 
            their health with Marcus&apos;s coaching program.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={staggerItem}>
              <GlassCard className="h-full" padding="lg">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed flex-grow mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Metric Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                      {testimonial.metric}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
