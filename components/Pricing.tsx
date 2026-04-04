"use client"

import { GlassCard } from "@/components/GlassCard"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check, Shield, Zap } from "lucide-react"

interface PricingProps {
  onOpenModal: () => void
}

const features = [
  "Personalized 12-week transformation plan",
  "Weekly 1-on-1 coaching sessions (60 min)",
  "Custom nutrition plan with macro tracking",
  "24/7 messaging support with Marcus",
  "Bio-data integration (Oura, Apple Health)",
  "Access to private community of high performers",
  "Quarterly progress reviews and plan adjustments",
  "Lifetime access to training materials",
]

export function Pricing({ onOpenModal }: PricingProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Investment
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            One Program.{" "}
            <span className="text-gradient">Complete Transformation.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A premium coaching experience designed for executives and 
            high-performers who demand results.
          </p>
        </div>

        {/* Pricing Card */}
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <GlassCard padding="none" className="overflow-hidden">
            {/* Header */}
            <div className="p-8 md:p-10 text-center border-b border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                The Catalyst Program
              </h3>
              <p className="text-muted-foreground mb-6">
                12-Week Elite Transformation
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl md:text-6xl font-bold text-foreground">
                  $1,497
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                One-time investment
              </p>
            </div>

            {/* Features */}
            <div className="p-8 md:p-10">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={onOpenModal}
                className="w-full mt-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-14 text-lg"
              >
                Join the Program
              </Button>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    30-Day Money-Back Guarantee
                  </span>{" "}
                  - If you don&apos;t see results, you don&apos;t pay. Simple as that.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-muted-foreground">
            Have questions?{" "}
            <a
              href="/contact"
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
            >
              Contact Marcus directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
