import type { Metadata, Viewport } from 'next'
import { Geist, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'UGC Mentorship',
  description: 'Premium UGC Mentorship Program.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className={`${geist.className} ${outfit.variable} antialiased bg-background text-foreground min-h-screen`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
