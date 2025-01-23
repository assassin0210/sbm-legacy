import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import { queryPricing } from '@/shared/api/getPricing'

export const metadata: Metadata = {
  title: 'School Bus Routing Software Free Trial | School Bus Manager',
}

interface IProps {
  children: ReactNode
}

export default async function Layout({ children }: IProps) {
  const queryClient = await new QueryClient()
  await queryClient.prefetchQuery(queryPricing())
  const state = dehydrate(queryClient)

  return <HydrationBoundary state={state}>{children}</HydrationBoundary>
}
