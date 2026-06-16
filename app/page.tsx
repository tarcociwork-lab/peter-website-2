import dynamic from 'next/dynamic'
import { Hero } from "@/components/Hero"

// Code-splitting: Dynamically import below-the-fold components 
const WhatYouGet = dynamic(() => import('@/components/WhatYouGet').then(mod => mod.WhatYouGet), { ssr: true })
const SocialProof = dynamic(() => import('@/components/SocialProof').then(mod => mod.SocialProof), { ssr: true })
const Booking = dynamic(() => import('@/components/Booking').then(mod => mod.Booking), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ), { ssr: true })

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary relative">
      {/* Global Background Clouds */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#9333ea]/20 blur-[150px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#c084fc]/20 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10">
        {/* Instantly loaded above the fold */}
        <Hero />
        
        {/* Deferred loading for maximum performance */}
        <SocialProof />
        <WhatYouGet />
        <Booking />
        <FAQ />
      </main>
    </div>
  )
}
