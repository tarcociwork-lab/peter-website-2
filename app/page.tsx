import dynamic from 'next/dynamic'
import { Hero } from "@/components/Hero"

// Code-splitting: Dynamically import below-the-fold components 
const WhatYouGet = dynamic(() => import('@/components/WhatYouGet').then(mod => mod.WhatYouGet), { ssr: true })
const SocialProof = dynamic(() => import('@/components/SocialProof').then(mod => mod.SocialProof), { ssr: true })
const RevenueCalculator = dynamic(() => import('@/components/RevenueCalculator').then(mod => mod.RevenueCalculator), { ssr: true })
const Booking = dynamic(() => import('@/components/Booking').then(mod => mod.Booking), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ), { ssr: true })

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <main>
        {/* Instantly loaded above the fold */}
        <Hero />
        
        {/* Deferred loading for maximum performance */}
        <SocialProof />
        <WhatYouGet />
        <RevenueCalculator />
        <Booking />
        <FAQ />
      </main>
    </div>
  )
}
