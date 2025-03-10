import { Metadata } from 'next'
import { ReactNode } from 'react'

import { MainLayout } from '@/app/components/MainLayout'

export const metadata: Metadata = {
  title: 'School Bus Manager Security',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
