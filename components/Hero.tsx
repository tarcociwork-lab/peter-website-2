"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      
      {/* Center glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            Limited Spots Available
          </span>
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Build the{" "}
          <span className="text-primary">Executive Athlete.</span>
        </h1>

        {/* Subheadline */}
        <p 
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          A 12-week blueprint for leaders to reclaim peak physical form without the 10-hour gym week.
        </p>

        {/* CTA */}
        <div 
          className="mt-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-14 px-10 text-base rounded-lg"
          >
            Start Your Transformation
          </Button>
        </div>

        {/* Stats Row */}
        <div 
          className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">150+</p>
            <p className="text-sm text-muted-foreground mt-1">Executives Transformed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">4hrs</p>
            <p className="text-sm text-muted-foreground mt-1">Per Week Required</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground">12</p>
            <p className="text-sm text-muted-foreground mt-1">Week Program</p>
          </div>
        </div>

        {/* Trusted By Section */}
        <div 
          className="mt-20 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by leaders featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">MH</span>
            <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors tracking-wide">FORBES</span>
            <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors tracking-wider">BLOOMBERG</span>
            <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors">TC</span>
          </div>
        </div>
      </div>
    </section>
  )
}
