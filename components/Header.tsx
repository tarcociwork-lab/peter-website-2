"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  onOpenModal: () => void
}

const navItems = [
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
]

export function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--glass)] backdrop-blur-xl border-b border-[var(--glass-border)]"
          : "bg-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              THORNE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={onOpenModal}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold"
            >
              Join the Program
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[var(--glass)] backdrop-blur-xl border-t border-[var(--glass-border)]">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onOpenModal()
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-lime font-semibold"
              >
                Join the Program
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
