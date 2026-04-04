"use client"

import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CTAModal } from "@/components/CTAModal"
import { GlassCard } from "@/components/GlassCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "marcus@thornefitness.com",
    href: "mailto:marcus@thornefitness.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - form submission logic would go here
  }

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up">
              {/* Back Link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="max-w-3xl">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Get in Touch
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                  Let&apos;s Start Your{" "}
                  <span className="text-gradient">Transformation</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Have questions about the program? Want to discuss your goals? 
                  Reach out directly to Marcus and get a personalized response 
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <GlassCard padding="lg">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and Marcus will get back to you personally.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                          />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="subject">Subject</FieldLabel>
                        <Input
                          id="subject"
                          placeholder="How can Marcus help you?"
                          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your health and fitness goals, current challenges, or any questions you have..."
                          rows={6}
                          className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                        />
                      </Field>
                    </FieldGroup>

                    <Button
                      type="submit"
                      className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-12"
                    >
                      Send Message
                    </Button>
                  </form>
                </GlassCard>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-6">
                {/* Contact Details */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <GlassCard padding="lg">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Social Links */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <GlassCard padding="lg">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Follow Marcus
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Stay connected and get daily insights on health, fitness, and performance.
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-muted-foreground transition-colors"
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Quick CTA */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <GlassCard padding="lg" className="bg-primary/5 border-primary/20">
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      Ready to Start?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Skip the back-and-forth. Apply for the program directly and 
                      Marcus will review your application within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-12"
                    >
                      Apply for the Program
                    </Button>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CTAModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
