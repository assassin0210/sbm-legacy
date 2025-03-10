import '../styles/styles.scss'

import { DataPartners } from '@/app/components/DataPartners'
import { GetStartedWithSbm } from '@/app/components/GetStartedWithSbm'
import { MainLayout } from '@/app/components/MainLayout'
import { SchoolBusRouting } from '@/app/components/SchoolBusRouting'
import { TailoredMenu } from '@/app/components/TailoredMenu'
import { SectionScroller } from '@/app/components/useSectionScroller'
import { WhatCanYouDo } from '@/app/components/WhatCanYouDo'
import { WhatSchoolBusManager } from '@/app/components/WhatSchoolBusManager'
import { WhySchoolBusManager } from '@/app/components/WhySchoolBusManager'

export default function Home() {
  return (
    <MainLayout>
      <div className="site-index">
        <SectionScroller />
        <SchoolBusRouting />
        <WhatSchoolBusManager />
        <WhySchoolBusManager />
        <WhatCanYouDo />
        <TailoredMenu />
        <DataPartners />
        <GetStartedWithSbm />
      </div>
    </MainLayout>
  )
}

export async function generateStaticParams() {
  return []
}
