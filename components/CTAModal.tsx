"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { CheckCircle } from "lucide-react"

interface CTAModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const benefits = [
  "Personalized 12-week transformation plan",
  "Weekly 1-on-1 coaching sessions",
  "24/7 messaging support",
  "30-day money-back guarantee",
]

export function CTAModal({ open, onOpenChange }: CTAModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - form submission logic would go here
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-surface border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Start Your Transformation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Take the first step toward becoming your best self. Fill out the form 
            below and Marcus will personally reach out within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </Field>

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
              <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="goals">What are your goals?</FieldLabel>
              <Textarea
                id="goals"
                placeholder="Tell us about your health and performance goals..."
                rows={3}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
            </Field>
          </FieldGroup>

          {/* Benefits List */}
          <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
            <p className="text-sm font-medium text-foreground mb-3">
              What you&apos;ll get:
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold h-12"
          >
            Submit Application
          </Button>

          <p className="mt-4 text-xs text-center text-muted-foreground">
            By submitting, you agree to our privacy policy. We&apos;ll never spam you.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
