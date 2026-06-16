"use client"

import { motion } from "framer-motion"

const steps = [
  { week: "Week 1", title: "Portfolio Setup", desc: "Crafting your irresistible creator identity." },
  { week: "Week 2", title: "Content Frameworks", desc: "Filming high-converting UGC examples." },
  { week: "Week 3", title: "Outreach System", desc: "Setting up your automated brand pitching machine." },
  { week: "Week 4", title: "Brand Conversations", desc: "Negotiating rates and closing deals." },
  { week: "Result", title: "First Paid Deal", desc: "Getting paid for your creative work." }
]

export function Roadmap() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-20"
        >
          THE ROADMAP TO YOUR <br />
          <span className="text-gradient">FIRST PAID BRAND DEAL</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary"
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex items-center md:justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
              >
                {/* Desktop Empty Space */}
                <div className="hidden md:block w-5/12" />

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 glow-purple" />

                {/* Card */}
                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`glass-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors ${i % 2 === 0 ? "md:text-left" : "md:text-right"} text-left`}>
                    <div className="text-primary font-bold text-sm mb-1 uppercase tracking-wider">{step.week}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
