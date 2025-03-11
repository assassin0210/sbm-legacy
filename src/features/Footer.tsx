'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Facebook } from '@/assets/icon/facebook'
import { Youtube } from '@/assets/icon/youtube'
import { Images } from '@/assets/images/images'
import { page_links } from '@/shared/constants/page_links'
import { P12, P14 } from '@/shared/ui/Typography'

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
    <footer className=" relative  pt-8  laptop:pt-12 !bg-[#fafafc]">
      <div className="relative z-10 container max-w-[1070px] mx-auto pb-6  laptop:pb-8 grid grid-cols-[auto_1fr] gap-8">
        <Link
          className="relative  flex-shrink-0 h-[42px] flex w-[166px] laptop:w-[180px] mt-1.5"
          href="/"
        >
          <Image
            className="object-contain "
            src={Images.sbmLogo3.src}
            alt="School bus manager"
            width={233}
            height={64}
            priority
          />
        </Link>
        <P14
          weight="font-normal"
          color="text-sbm-neutral"
          className=" maxTablet:text-[12px] !leading-[24px] block"
        >
          School Bus Manager is the simplest school bus routing program on the
          market today. With just a quick import of your student data and
          configuring a few simple parameters, it enables users to build trips
          and routes with turn-by-turn directions, accurate stop times, take
          attendance, and more. School Bus Manager is designed for all skill
          levels. It’s web-based so it requires no installation, fully
          compatible with both PC and Mac, plus it’s Mobile Friendly. Powered by
          Google, you won’t need to buy maps, and since it’s cloud-based its
          always up to date and your data is always safe. It’s a very powerful
          school bus routing program at a very affordable price, requiring no
          big upfront investment, designed to suit any size district or
          operation. Because it eliminates the need for routing buses by hand,
          it streamlines your transportation operation, saving you money, time
          and errors, while increasing your profitability and efficiency.
        </P14>

        <div className="flex items-center justify-center gap-4  col-span-2">
          <a
            href="https://www.youtube.com/channel/UCwOHUPXpirAdy3IWJAM9zIQ"
            target="_blank"
            className="cursor-pointer w-8 h-8 bg-sbm-white flex items-center justify-center  rounded-full"
            rel="noreferrer"
            aria-label="youtube"
          >
            <Youtube height={20} width={20} />
          </a>
          <a
            href="https://www.facebook.com/SchoolBusManager"
            target="_blank"
            className="cursor-pointer w-8 h-8 bg-sbm-white flex items-center justify-center  rounded-full"
            rel="noreferrer"
            aria-label="facebook"
          >
            <Facebook height={24} width={24} />
          </a>
        </div>
      </div>
      <div className="bg-sbm-white w-full z-[999] relative ">
        <div
          className={
            ' maxMobile:flex-col gap-2  flex  py-2.5 container max-w-[1070px] w-full'
          }
        >
          <P12
            weight="font-semibold"
            className="inline !leading-normal !text-[#333336]"
          >
            Copyright {new Date().getFullYear()} School Bus Manager Inc. All
            rights reserved.
          </P12>
          <nav className=" gap-2 flex">
            {nav.map((el) => (
              <Link
                className='!text-[#333336] font-semibold whitespace-nowrap !leading-normal text-[12px]  underline underline-offset-2 pr-2 relative after:absolute after:content-[""] after:right-0 after:top-[4px]  after:w-[2px] after:h-[12px] after:bg-sbm-white last:after:bg-transparent'
                key={el.title}
                href={el.link}
              >
                {el.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
