import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

export function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        "bg-[var(--glass)] backdrop-blur-xl",
        "border border-[var(--glass-border)]",
        "transition-all duration-300",
        hover && "hover:bg-[var(--glass-hover)] hover:border-white/15 hover:-translate-y-1",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
