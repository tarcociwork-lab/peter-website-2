import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marcus Thorne | Premium Coaching for High Performers',
  description: 'Transform your health and life with personalized 12-week coaching from Marcus "The Catalyst" Thorne. Join 150+ high performers already transformed.',
  keywords: ['coaching', 'health transformation', 'premium training', 'executive coaching', 'high performance', 'Marcus Thorne'],
  authors: [{ name: 'Marcus Thorne' }],
  creator: 'Marcus Thorne',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Marcus Thorne | Premium Coaching for High Performers',
    description: 'Transform your health and life with personalized 12-week coaching. Join 150+ high performers already transformed.',
    siteName: 'Marcus Thorne Coaching',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcus Thorne | Premium Coaching for High Performers',
    description: 'Transform your health and life with personalized 12-week coaching.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
