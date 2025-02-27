import { clsx } from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'

import sbmMap from '@/assets/images/sbm-map.png'
import { P38 } from '@/shared/ui/Typography'

import { colors } from '../../../tailwind.config'

export const PageLayout = ({
  title,
  children,
  className,
}: {
  title: string
  className?: string
  children: ReactNode
}) => {
  return (
    <section className={clsx('pb-28', className)}>
      <div className="relative h-[440px] flex ">
        <div className="absolute left-0 top-0 w-full h-[440px] overflow-hidden">
          <Image
            className="object-cover object-center w-full h-full"
            src={sbmMap.src}
            width={1300}
            height={500}
            priority
            alt="sbm-map"
            style={{ objectPosition: 'top center' }}
          />

          <div
            className="absolute left-0 top-0 w-full h-full"
            style={{
              background: `linear-gradient(to bottom, ${colors['sbm-secondary']} 45%, transparent 100%, transparent 100%)`,
            }}
          ></div>
        </div>
        <div className="container-v2 relative my-auto">
          <P38
            weight="font-medium"
            as="h1"
            className="text-[36px] mt-3 mb-2 bg-sbm-neutral text-sbm-white w-fit px-2  rounded"
          >
            {title}
          </P38>
        </div>
      </div>
      {children}
    </section>
  )
}
