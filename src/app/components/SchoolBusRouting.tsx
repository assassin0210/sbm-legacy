import Image from 'next/image'

import { page_links } from '@/shared/constants/page_links'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'
import { P16, P24, P52 } from '@/shared/ui/Typography'

import { colors } from '../../../tailwind.config'
import sbmMap from '../../assets/images/sbm-map.png'

export const SchoolBusRouting = () => {
  return (
    <section className="relative  overflow-hidden pb-12 h-[800px]  laptop:h-[850px]">
      <div className="absolute left-0 top-0 w-full h-[800px]  laptop:h-[850px] overflow-hidden">
        <Image
          className="object-cover object-top  w-full h-full"
          src={sbmMap.src}
          width={2000}
          height={800}
          alt="sbm-map"
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
        <h1 className="max-w-[1170px] w-fit mx-auto mt-12 laptop:mt-24 ">
          <P52
            color="text-sbm-white"
            className="block leading-[60px] maxLaptop:text-[32px] maxLaptop:leading-[44px]"
            as="span"
            weight="font-light"
          >
            School Bus Routing, Tracking
          </P52>
          <P24
            color="text-sbm-white"
            className="tablet:pl-[20px]"
            as="span"
            weight="font-light"
          >
            and
          </P24>{' '}
          <P52
            color="text-sbm-white"
            className="leading-[60px] maxLaptop:text-[32px] maxLaptop:leading-[44px]"
            as="span"
            weight="font-light"
          >
            Communication
          </P52>{' '}
          <P52
            className=" whitespace-nowrap [filter:drop-shadow(0px_0px_10px_rgba(255,255,255,1))]"
            color="text-sbm-primary"
            as="span"
            weight="font-light"
          >
            Made Easy!
          </P52>
        </h1>
        <P16
          color="text-sbm-white"
          className="text-center max-w-[1170px] mx-auto !font-light block mt-8 laptop:mt-12"
        >
          Discover a comprehensive, dynamic solution for building and tracking
          routes designed for any business needing optimized routes in minutes!
          Our software offers fully automated tracking, attendance management,
          and much more.
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
            href="tel:+18886676883"
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
