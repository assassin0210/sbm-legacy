import './globals.css'

import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Footer } from '@/features/Footer'
import { Header } from '@/features/Header'
import { PagesProgressBarProvider } from '@/features/PageProgressBarProvider'
import { ClientProviders } from '@/features/QueryClientProvider'

export const metadata: Metadata = {
  title: 'School Bus Routing and Planning Software | School Bus Manager',
  description:
    'School Bus Routing Made Easy. Start your 15-Day Free Trial Today. NO CREDIT CARD REQUIRED.',
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
          src={`https://www.google.com/recaptcha/api.js?render=6LdrOacqAAAAAH5zECAEhdzoXs3Qp_1ZXBaVU7JI`}
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
