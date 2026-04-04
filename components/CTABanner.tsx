"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, MessageCircle } from "lucide-react"

interface CTABannerProps {
  onOpenModal: () => void
}

export function CTABanner({ onOpenModal }: CTABannerProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Ready to Become{" "}
            <span className="text-gradient">The Catalyst</span>
            <br />
            of Your Own Transformation?
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop waiting for the perfect moment. The best investment you&apos;ll 
            ever make is in yourself. Take the first step today.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-14 px-8 text-base"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base"
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Marcus
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>150+ Transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
