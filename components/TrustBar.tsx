"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const logos = [
  { name: "Google", src: "/images/logo-google.svg" },
  { name: "Goldman Sachs", src: "/images/logo-goldman.svg" },
  { name: "McKinsey", src: "/images/logo-mckinsey.svg" },
  { name: "Tesla", src: "/images/logo-tesla.svg" },
  { name: "Meta", src: "/images/logo-meta.svg" },
]

export function TrustBar() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 md:py-20 bg-surface border-y border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by executives from
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className={`relative h-8 w-24 md:h-10 md:w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                  isVisible ? "opacity-60" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Featured In Badge */}
          <div
            className={`mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <span className="text-sm text-muted-foreground">Featured in</span>
            <span className="text-sm font-semibold text-foreground">
              Men&apos;s Health
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">
              Forbes
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">
              GQ
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
