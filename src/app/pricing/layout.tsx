import { Metadata } from 'next'
import { ReactNode } from 'react'

import { MainLayout } from '@/app/components/MainLayout'
export const metadata: Metadata = {
  title: 'School Bus Routing Software Prices',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
