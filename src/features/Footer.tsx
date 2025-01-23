'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Facebook } from '@/assets/icon/facebook'
import { Youtube } from '@/assets/icon/youtube'
import sbmMap from '@/assets/images/sbm-map.png'
import { page_links } from '@/shared/constants/page_links'
import { P12, P18 } from '@/shared/ui/Typography'

import { colors } from '../../tailwind.config'

export const Footer = () => {
  const nav = [
    {
      title: 'Terms of Use',
      link: page_links.termsOfUse,
    },
    {
      title: 'Privacy Policy',
      link: page_links.privacyPolicy,
    },
    {
      title: 'EULA',
      link: page_links.eula,
    },
    {
      title: 'Security',
      link: page_links.security,
    },
  ]
  return (
    <footer className=" relative h-[740px]">
      <div className="absolute left-0 top-0 w-full h-[740px] overflow-hidden">
        <Image
          className="object-cover object-bottom w-full h-full"
          src={sbmMap.src}
          width={2000}
          height={800}
          alt="sbm-map"
          style={{ objectPosition: 'center bottom' }}
        />

        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: `linear-gradient(to bottom, ${colors['sbm-secondary']} 45%, transparent 100%, transparent 100%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container max-w-[1150px] mt-8 laptop:mt-20">
        <P18
          weight="font-normal"
          color="text-sbm-white"
          className="text-center maxMobile:leading-normal maxMobile:text-[14px]"
        >
          School Bus Manager is the simplest school bus routing program on the
          market today. With just a quick import of your student data and
          configuring a few simple parameters, it enables users to build trips
          and routes with turn-by-turn directions, accurate stop times, take
          attendance, and more. School Bus Manager is designed for all skill
          levels. It’s web-based so it requires no installation, fully
          compatible with both PC and Mac, plus it’s Mobile Friendly. Powered by
          Google, you won’t need to buy maps, and since it’s cloud-based its
          always up to date and your data is always safe. It’s a very POWERFUL
          school bus routing program at a very AFFORDABLE price, requiring no
          big upfront investment, designed to suit any size district or
          operation. Because it eliminates the need for routing buses by hand,
          it streamlines your transportation operation, saving you money, time
          and errors, while increasing your profitability and efficiency.
        </P18>
        <div
          className={
            ' maxMobile:flex-col gap-2 w-fit flex mx-auto items-center mt-12'
          }
        >
          <P12
            weight="font-bold"
            color="text-sbm-white"
            className="inline !leading-normal"
          >
            Copyright {new Date().getFullYear()} School Bus Manager Inc. All
            rights reserved.
          </P12>
          <nav className=" gap-2 flex">
            {nav.map((el) => (
              <Link
                className='font-bold whitespace-nowrap !leading-normal text-[12px] text-sbm-white underline underline-offset-2 pr-2 relative after:absolute after:content-[""] after:right-0 after:top-[4px]  after:w-[2px] after:h-[12px] after:bg-sbm-white last:after:bg-transparent'
                key={el.title}
                href={el.link}
              >
                {el.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="https://www.youtube.com/channel/UCwOHUPXpirAdy3IWJAM9zIQ"
            target="_blank"
            className="cursor-pointer w-8 h-8 bg-sbm-white flex items-center justify-center  rounded-full"
            rel="noreferrer"
          >
            <Youtube height={20} width={20} />
          </a>
          <a
            href="https://www.facebook.com/SchoolBusManager"
            target="_blank"
            className="cursor-pointer w-8 h-8 bg-sbm-white flex items-center justify-center  rounded-full"
            rel="noreferrer"
          >
            <Facebook height={24} width={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
