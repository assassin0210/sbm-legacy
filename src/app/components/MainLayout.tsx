import { ReactNode } from 'react'

import { Footer } from '@/features/Footer'
import { Header } from '@/features/Header/Header'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
