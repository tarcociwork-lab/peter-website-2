"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, MoreVertical } from "lucide-react"

const ReviewCard = ({ name, reviews, time, text, highlight, image, highlightBlock = false }: any) => (
  <div className="glass-card p-6 rounded-2xl border border-border shadow-2xl bg-[#0d0d0d] w-full">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3 items-center">
        <Image src={image} width={40} height={40} className="rounded-full" alt={name} />
        <div>
          <div className="font-bold text-white text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">{reviews}</div>
        </div>
      </div>
      <MoreVertical className="w-5 h-5 text-muted-foreground" />
    </div>
    <div className="flex items-center gap-2 mb-4">
      <div className="flex">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
      </div>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
    <p className="text-sm text-foreground leading-relaxed">
      {highlightBlock ? (
        <>
          <span className="bg-primary/20 text-primary px-1 rounded block mb-2 font-medium">{highlight}</span>
          {text}
        </>
      ) : (
        <>
          {text.split(highlight)[0]}
          <span className="bg-primary/20 text-primary px-1 rounded font-medium">{highlight}</span>
          {text.split(highlight)[1]}
        </>
      )}
    </p>
  </div>
)

export function SocialProof() {
  return (
    <section className="py-32 md:py-48 px-4 bg-surface-secondary relative overflow-hidden lg:min-h-[1000px] flex items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
        
        {/* Floating cards container (Desktop) */}
        <div className="relative w-full max-w-5xl mx-auto h-[750px] hidden lg:block">
          
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-10 left-0 w-[450px] z-10 hover:z-50 transition-all duration-300"
          >
            <ReviewCard 
              name="Patrick Johnson"
              reviews="7 reviews • 1 photo"
              time="2 weeks ago"
              highlight="However, just a few hours into the first day I was completely sold."
              text="My business partner convinced me we should attend this, so I wasn't sold. However, just a few hours into the first day I was completely sold. I started thinking about how we approach our business in a different way. Especially from the CEO standpoint and looking to increase our overall revenue. It was incredible!"
              image="/images/avatar-1.png"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-10 left-1/4 w-[450px] z-30 hover:z-50 transition-all duration-300"
          >
            <ReviewCard 
              name="Chase Taake"
              reviews="5 reviews • 1 photo"
              time="3 weeks ago"
              highlight="Every question, plus questions I didn't know I had, were answered with care in detail with clarity."
              text="Just got out of the scaling workshop........ my new constraint is how fast I can implement their advise! Every question, plus questions I didn't know I had, were answered with care in detail with clarity. I literally I have never had this much clarity. I truly loved this workshop."
              image="/images/avatar-2.png"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-24 right-0 w-[450px] z-20 hover:z-50 transition-all duration-300"
          >
            <ReviewCard 
              name="Franklin Cruz"
              reviews="Local Guide • 23 reviews"
              time="4 months ago"
              highlightBlock={true}
              highlight="The Most Valuable Business Workshop I've Ever Attended - Worth 10x the Investment"
              text="As a military veteran, former Army recruiter, and someone who's been through countless trainings—including Landmark Education, leadership programs, and running workshops for over 1,000 students—I can confidently say the Scaling Up Workshop is the best I've ever attended."
              image="/images/avatar-3.png"
            />
          </motion.div>
        </div>

        {/* Mobile Fallback (Stacked) */}
        <div className="lg:hidden flex flex-col gap-8">
            <ReviewCard 
              name="Patrick Johnson"
              reviews="7 reviews • 1 photo"
              time="2 weeks ago"
              highlight="However, just a few hours into the first day I was completely sold."
              text="My business partner convinced me we should attend this, so I wasn't sold. However, just a few hours into the first day I was completely sold. I started thinking about how we approach our business in a different way. Especially from the CEO standpoint and looking to increase our overall revenue. It was incredible!"
              image="/images/avatar-1.png"
            />
            <ReviewCard 
              name="Chase Taake"
              reviews="5 reviews • 1 photo"
              time="3 weeks ago"
              highlight="Every question, plus questions I didn't know I had, were answered with care in detail with clarity."
              text="Just got out of the scaling workshop........ my new constraint is how fast I can implement their advise! Every question, plus questions I didn't know I had, were answered with care in detail with clarity. I literally I have never had this much clarity. I truly loved this workshop."
              image="/images/avatar-2.png"
            />
            <ReviewCard 
              name="Franklin Cruz"
              reviews="Local Guide • 23 reviews"
              time="4 months ago"
              highlightBlock={true}
              highlight="The Most Valuable Business Workshop I've Ever Attended - Worth 10x the Investment"
              text="As a military veteran, former Army recruiter, and someone who's been through countless trainings—including Landmark Education, leadership programs, and running workshops for over 1,000 students—I can confidently say the Scaling Up Workshop is the best I've ever attended."
              image="/images/avatar-3.png"
            />
        </div>

      </div>
    </section>
  )
}
