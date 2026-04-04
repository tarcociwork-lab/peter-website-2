"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Benefits } from "@/components/Benefits"
import { Testimonials } from "@/components/Testimonials"
import { TrustBar } from "@/components/TrustBar"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"
import { CTAModal } from "@/components/CTAModal"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <Benefits />
        <Testimonials />
        <TrustBar />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer />

      <CTAModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
