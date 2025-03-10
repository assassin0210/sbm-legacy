import { Metadata } from 'next'
import { ReactNode } from 'react'

import { MainLayout } from '@/app/components/MainLayout'
export const metadata: Metadata = {
  title: 'Contact Us for School Bus Manager',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
