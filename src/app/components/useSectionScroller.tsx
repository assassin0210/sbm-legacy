'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { Suspense, useEffect } from 'react'

import { handleScrollToSection } from '@/features/Header/Header'

export const SectionScroller = () => {
  return (
    <Suspense fallback={<></>}>
      <SectionScroller_ />
    </Suspense>
  )
}

const SectionScroller_ = () => {
  const searchParams = useSearchParams()
  const scrollId = searchParams.get('id')
  const router = useRouter()

  useEffect(() => {
    if (scrollId) {
      handleScrollToSection(scrollId)
      router.replace('/', { scroll: false })
    }
  }, [router, scrollId])
  return null
}
