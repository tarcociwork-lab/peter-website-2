"use client"

import { Hero } from "@/components/Hero"
import { ProblemAgitation } from "@/components/ProblemAgitation"
import { SocialProof } from "@/components/SocialProof"
import { WhatYouGet } from "@/components/WhatYouGet"
import { Roadmap } from "@/components/Roadmap"
import { CoachIntro } from "@/components/CoachIntro"
import { TestimonialWall } from "@/components/TestimonialWall"
import { FAQ } from "@/components/FAQ"
import { FinalCTA } from "@/components/FinalCTA"
import { Booking } from "@/components/Booking"

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <main>
        <Hero />
        <ProblemAgitation />
        <SocialProof />
        <WhatYouGet />
        <Roadmap />
        <CoachIntro />
        <TestimonialWall />
        <FAQ />
        <FinalCTA />
        <Booking />
      </main>
    </div>
  )
}
