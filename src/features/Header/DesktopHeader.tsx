import Image from 'next/image'
import Link from 'next/link'

import { Images } from '@/assets/images/images'
import { FirstLineLinks, SecondLineLinks } from '@/features/Header/Header'
import { HeaderMenu } from '@/features/HeaderMenu'

export const DesktopHeader = () => {
  return (
    <header className="bg-sbm-white fixed top-0 w-full left-0 z-[999] shadow-header maxLaptop:hidden">
      <div className="flex justify-between items-center mx-auto max-w-[1800px] px-5 extraDesktop:px-[32px] gap-x-10 extraDesktop:gap-x-[60px]  h-[80px] ">
        <div className="desktopXl:w-[360px] flex-shrink-0">
          <Link
            className="relative  flex-shrink-0 h-[42px] flex w-[166px] laptop:w-[180px]"
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
        </div>
        <div className="gap-4 talbet:gap-8 flex items-center">
          <FirstLineLinks />
        </div>
        <div className="desktopXl:hidden">
          <HeaderMenu />
        </div>

        <div className="gap-6 flex items-center maxExtraDesktop:hidden ">
          <SecondLineLinks />
        </div>
      </div>
    </header>
  )
}
