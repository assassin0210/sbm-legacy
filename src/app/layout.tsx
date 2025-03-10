import './globals.css'

import { clsx } from 'clsx'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'

import { PagesProgressBarProvider } from '@/features/PageProgressBarProvider'
import { ClientProviders } from '@/features/QueryClientProvider'

export const metadata: Metadata = {
  title: 'School Bus Routing and Planning Software | School Bus Manager',
  description:
    'School Bus Routing Made Easy. Start your 15-Day Free Trial Today. NO CREDIT CARD REQUIRED.',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}`}
          async
          defer
        ></script>
      </head>
      <body
        className={clsx(
          'relative flex flex-col h-screen',
          montserrat.className
        )}
      >
        <ClientProviders>
          <PagesProgressBarProvider />
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
