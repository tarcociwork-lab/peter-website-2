"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onOpenModal?: () => void
}

export function Footer({ onOpenModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Section */}
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold italic tracking-tight text-foreground">
              THORNE
            </span>
            <p className="mt-2 text-sm md:text-base text-muted-foreground italic max-w-md">
              Building executive athletes through precision
              <br className="hidden sm:block" />
              {" "}programming and elite accountability.
            </p>
          </div>

          {/* Right Section - Back to Top + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>

            <Button
              onClick={onOpenModal}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold px-6 h-10"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
