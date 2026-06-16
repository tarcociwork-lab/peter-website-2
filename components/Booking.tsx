"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-24 px-4 bg-background relative border-t border-border" id="booking">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">BOOK YOUR FREE STRATEGY CALL</h2>
            <p className="text-muted-foreground">Fill out the application below to secure your spot.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Jane" 
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Instagram / TikTok Handle</label>
              <input 
                required 
                type="text" 
                placeholder="@username" 
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Current Experience Level</label>
              <select 
                required 
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
              >
                <option value="" disabled selected>Select an option...</option>
                <option value="beginner">Complete Beginner (0 deals)</option>
                <option value="intermediate">Intermediate (1-5 deals)</option>
                <option value="advanced">Advanced (Consistent deals)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 mt-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {submitted ? "REQUEST SENT!" : "CONTINUE TO CALENDAR"}
            </button>
            
            {submitted && (
              <p className="text-primary text-sm text-center mt-4">
                Thank you! We&apos;ll redirect you to Calendly shortly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
