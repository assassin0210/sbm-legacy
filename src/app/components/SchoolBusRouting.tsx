import Image from 'next/image'

import { Images } from '@/assets/images/images'
import { page_links } from '@/shared/constants/page_links'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'
import { P16, P52 } from '@/shared/ui/Typography'

import { colors } from '../../../tailwind.config'

export const SchoolBusRouting = () => {
  return (
    <section className="relative  overflow-hidden pb-12 h-[800px]  laptop:h-[850px] ">
      <div className="absolute left-0 top-0 w-full h-[800px]  laptop:h-[850px] overflow-hidden">
        <Image
          className="object-cover object-top  w-full h-full"
          src={Images.sbmMap.src}
          width={2000}
          height={800}
          alt="School Bus Manager rider tracking"
          style={{ objectPosition: 'center top' }}
        />

        <div
          className="absolute left-0 top-0 w-full h-full "
          style={{
            background: `linear-gradient(to bottom, ${colors['sbm-secondary']} 55%, transparent 80%, transparent 90%)`,
          }}
        ></div>
      </div>
      <div className="container relative z-10 pt-20">
        <h1 className="max-w-[1170px] w-fit mx-auto mt-12 tablet:mt-16  desktop:mt-24 ">
          <P52
            color="text-sbm-white"
            className="text-center block leading-[60px]  maxLaptop:!text-[32px] maxLaptop:leading-[44px]"
            as="span"
            weight="font-light"
          >
            School bus routing, tracking and&nbsp;communication made
            <span className="relative">
              <span>&nbsp;easy</span>
              <span className="text-[20px] absolute top-[-8px] -right-6">
                &trade;
              </span>
            </span>{' '}
          </P52>
        </h1>
        <P16
          color="text-sbm-white"
          className="text-center max-w-[1170px] mx-auto !font-light block mt-8 laptop:mt-8"
        >
          Discover a comprehensive, dynamic solution for building and tracking
          routes designed for any business needing optimized
          routes&nbsp;in&nbsp;minutes! Our&nbsp;software offers fully automated
          tracking, attendance management, and much more.
        </P16>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <CustomLinkV2
            href={page_links.trial}
            className="uppercase px-8 py-3 h-fit"
            variant="blue"
          >
            free 15 day trial
          </CustomLinkV2>
          <CustomLinkV2
            href="/contact-us"
            className="uppercase py-3 h-fit px-8"
            variant="black"
          >
            request a demo
          </CustomLinkV2>
        </div>
      </div>
    </section>
  )
}
