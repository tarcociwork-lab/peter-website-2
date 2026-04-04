"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Now accepting new clients
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Transform Your{" "}
              <span className="text-gradient">Health.</span>
              <br />
              Transform Your{" "}
              <span className="text-gradient">Life.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Join 150+ high performers who have unlocked their full potential 
              through personalized coaching with Marcus &quot;The Catalyst&quot; Thorne.
            </p>

            {/* CTAs */}
            <div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Button
                onClick={onOpenModal}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-14 px-8 text-base"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            {/* Social Proof */}
            <div 
              className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-secondary overflow-hidden"
                  >
                    <Image
                      src={`/images/avatar-${i}.jpg`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-semibold text-foreground">4.9/5</span> from 150+ transformations
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/hero-marcus.jpg"
                  alt="Marcus Thorne - Premium Coach"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stats Card */}
              <div
                className="absolute -left-4 sm:-left-8 bottom-12 glass-card rounded-xl p-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              >
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Week Program</p>
              </div>

              {/* Floating Badge */}
              <div
                className="absolute -right-4 sm:-right-8 top-12 glass-card rounded-xl p-4 animate-fade-in-down opacity-0"
                style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
              >
                <p className="text-3xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Lives Changed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
