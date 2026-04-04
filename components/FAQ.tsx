"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "How is this different from hiring a personal trainer?",
    answer:
      "This isn't just physical training - it's a complete transformation system. Marcus works with you on nutrition, sleep optimization, stress management, and mental performance. You get direct access to strategies used by Fortune 500 executives and professional athletes, plus 24/7 support via messaging. Most personal trainers focus only on exercise; this program transforms every aspect of your health and performance.",
  },
  {
    question: "I'm extremely busy. How much time do I need to commit?",
    answer:
      "The program is specifically designed for busy professionals. Workouts are 45-60 minutes, 4-5 times per week, and can be done at home or in a gym. The weekly coaching calls are 60 minutes. Most clients find they actually gain time back because improved energy and focus makes them more productive at work.",
  },
  {
    question: "What results can I realistically expect in 12 weeks?",
    answer:
      "Results vary, but typical clients lose 15-30 lbs of fat while gaining lean muscle. Beyond physical changes, clients report dramatically improved energy levels (often doubling), better sleep quality, sharper mental focus, and reduced stress. The transformation extends far beyond the gym - it impacts every area of your life.",
  },
  {
    question: "How does the 30-day guarantee work?",
    answer:
      "Simple: if you follow the program and don't see measurable results in 30 days, you get a full refund. No questions asked, no hoops to jump through. Marcus is confident in the program because it's the same system that has transformed 150+ high performers. Your success is the only metric that matters.",
  },
  {
    question: "Do I need any special equipment or gym membership?",
    answer:
      "No. While gym access is helpful, Marcus can design your program around whatever equipment you have available - even if it's just bodyweight exercises at home or in a hotel room. Many clients travel frequently, and the program is designed to be flexible enough to maintain progress anywhere.",
  },
  {
    question: "Can I still enjoy social events and business dinners?",
    answer:
      "Absolutely. This isn't about restriction - it's about making smarter choices. Marcus will teach you strategies to navigate social situations, business dinners, and travel while still making progress. Sustainability is key; if you can't live your life, the program won't work long-term.",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Questions?{" "}
            <span className="text-gradient">We&apos;ve Got Answers.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about the program before getting started.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
