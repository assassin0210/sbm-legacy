import { Metadata } from 'next'
import { ReactNode } from 'react'
export const metadata: Metadata = {
  title: 'School Bus Manager End User License Agreement',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
