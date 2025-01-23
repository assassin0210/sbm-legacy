import { Metadata } from 'next'
import { ReactNode } from 'react'
export const metadata: Metadata = {
  title: 'School Bus Manager Partners | ChildPlus',
}
export default async function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
