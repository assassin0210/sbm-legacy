'use client'
import '../styles/styles.scss'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { Suspense, useEffect } from 'react'

import { DataPartners } from '@/app/components/DataPartners'
import { GetStartedWithSbm } from '@/app/components/GetStartedWithSbm'
import { SchoolBusRouting } from '@/app/components/SchoolBusRouting'
import { TailoredMenu } from '@/app/components/TailoredMenu'
import { WhatCanYouDo } from '@/app/components/WhatCanYouDo'
import { WhatSchoolBusManager } from '@/app/components/WhatSchoolBusManager'
import { WhySchoolBusManager } from '@/app/components/WhySchoolBusManager'
import { handleScrollToSection } from '@/features/Header'

export default function Home() {
  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  )
}

const Component = () => {
  const searchParams = useSearchParams()
  const scrollId = searchParams.get('id')
  const router = useRouter()

  useEffect(() => {
    if (scrollId) {
      handleScrollToSection(scrollId)
      router.replace('/', { scroll: false })
    }
  }, [router, scrollId])

  return (
    <div className="site-index">
      <SchoolBusRouting />
      <WhatSchoolBusManager />
      <WhySchoolBusManager />
      <WhatCanYouDo />
      <TailoredMenu />
      <DataPartners />
      <GetStartedWithSbm />
    </div>
  )
}
