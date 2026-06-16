"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Do I need experience?",
    a: "Not at all. We cover everything from setting up your camera to filming your first piece of content. This is built for absolute beginners as well as intermediate creators."
  },
  {
    q: "Do I need a large following?",
    a: "No! UGC (User Generated Content) is created for brands to post on THEIR pages, not yours. You can have zero followers and still make thousands a month."
  },
  {
    q: "How quickly can I get results?",
    a: "If you follow the roadmap diligently, you can have your portfolio set up by Week 1 and start pitching by Week 2. Many of our students land their first paid deal within 30 days."
  },
  {
    q: "What equipment do I need?",
    a: "A modern smartphone (iPhone 11+ or equivalent Android) and natural lighting is all you need to start. We'll show you how to maximize what you already have."
  },
  {
    q: "How much time is required?",
    a: "We recommend dedicating at least 5-10 hours a week to watch the modules, film content, and run your outreach system."
  },
  {
    q: "Is mentorship right for beginners?",
    a: "Yes, personalized feedback is exactly what beginners need most to avoid common mistakes and fast-track their success."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-36 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-24"
        >
          FREQUENTLY ASKED <span className="text-gradient text-glow font-extrabold">QUESTIONS</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden border border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
