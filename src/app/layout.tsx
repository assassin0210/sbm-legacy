import './globals.css'

import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P2KPMDX');`,
          }}
        />

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
