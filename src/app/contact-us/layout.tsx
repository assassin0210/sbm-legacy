import { Metadata } from 'next'
import { ReactNode } from 'react'
export const metadata: Metadata = {
  title: 'Contact Us for School Bus Manager',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
