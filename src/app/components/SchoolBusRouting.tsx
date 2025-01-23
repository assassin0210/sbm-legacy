import Image from 'next/image'

import { page_links } from '@/shared/constants/page_links'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P18, P34, P58 } from '@/shared/ui/Typography'

import { colors } from '../../../tailwind.config'
import sbmMap from '../../assets/images/sbm-map.png'

export const SchoolBusRouting = () => {
  return (
    <section className="relative  overflow-hidden pb-12 laptop:h-[1000px]">
      <div className="absolute left-0 top-0 w-full h-[1000px] overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full"
          src={sbmMap.src}
          width={2000}
          height={800}
          alt="sbm-map"
          style={{ objectPosition: 'center top' }}
        />

        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, ${colors['sbm-secondary']} 45%, transparent 100%, transparent 100%)`,
          }}
        ></div>
      </div>
      <div className="container relative z-10 pt-20">
        <h1 className=" mt-20 laptop:mt-32">
          <P58
            color="text-sbm-white"
            className="block leading-[60px]"
            as="span"
            weight="font-normal"
          >
            School Bus Routing, Tracking
          </P58>
          <P34
            color="text-sbm-white"
            className="tablet:pl-[170px]"
            as="span"
            weight="font-normal"
          >
            and
          </P34>{' '}
          <P58
            color="text-sbm-white"
            className="leading-[60px]"
            as="span"
            weight="font-normal"
          >
            Communication
          </P58>{' '}
          <P58
            className="leading-[60px] bg-sbm-neutral px-2 rounded whitespace-nowrap"
            color="text-sbm-primary"
            as="span"
            weight="font-medium"
          >
            Made Easy!
          </P58>
        </h1>
        <P18
          color="text-sbm-white"
          className="text-center !font-light block mt-12"
        >
          Discover a comprehensive, dynamic solution for building and tracking
          routes designed for any business needing optimized routes in minutes!
          Our software offers fully automated tracking, attendance management,
          and much more.
        </P18>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <CustomLink
            href={page_links.trial}
            className="uppercase pt-[14px]"
            size="medium"
            variant="primary"
          >
            free 15 day trial
          </CustomLink>
          <CustomLink
            href="tel:+18886676883"
            className="uppercase pt-[14px]"
            size="medium"
            variant="black"
          >
            request a demo
          </CustomLink>
        </div>
      </div>
    </section>
  )
}
