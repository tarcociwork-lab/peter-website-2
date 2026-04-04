"use client"

import { GlassCard } from "@/components/GlassCard"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Target,
  Dumbbell,
  Brain,
  Clock,
  Trophy,
  Heart,
} from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Clear Goal Setting",
    description:
      "Define precise, achievable goals with a proven framework that keeps you focused and motivated throughout your journey.",
  },
  {
    icon: Dumbbell,
    title: "Elite Training Methods",
    description:
      "Access cutting-edge training protocols used by professional athletes and Fortune 500 executives.",
  },
  {
    icon: Brain,
    title: "Mental Performance",
    description:
      "Develop unshakeable discipline and mental resilience with cognitive optimization techniques.",
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description:
      "Maximize results with time-efficient workouts designed for busy professionals. No 2-hour gym sessions required.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Join 150+ high performers who have achieved measurable transformations in just 12 weeks.",
  },
  {
    icon: Heart,
    title: "Holistic Health",
    description:
      "Address nutrition, sleep, stress management, and recovery for complete mind-body transformation.",
  },
]

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="benefits" className="py-20 md:py-28 bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Marcus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Everything You Need to{" "}
            <span className="text-gradient">Transform</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A comprehensive approach to health and performance that addresses 
            every aspect of your physical and mental well-being.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <GlassCard className="h-full" padding="lg">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
