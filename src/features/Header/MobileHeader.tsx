import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { BurgerMenu } from '@/assets/icon/burderMenu'
import sbmLogo3 from '@/assets/images/sbm_logo-3.png'
import { FirstLineLinks, SecondLineLinks } from '@/features/Header/Header'

export const MobileHeader = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <header className="bg-sbm-white fixed top-0 w-full left-0 z-[999] shadow-header desktop:hidden">
      <div className=" mx-auto  flex items-center justify-between px-4 tablet:px-10  h-[60px] ">
        <Link
          className="relative h-full flex-shrink-0 flex w-[166px] laptop:w-[180px]"
          href="/"
        >
          <Image
            className="object-contain "
            src={sbmLogo3.src}
            alt="School bus manager"
            width={233}
            height={64}
            priority
          />
        </Link>

        <MobileNavbar
          toggleVisibility={toggleVisibility}
          isVisible={isVisible}
        />
      </div>
    </header>
  )
}

const MobileNavbar = ({
  isVisible,
  toggleVisibility,
}: {
  isVisible: boolean
  toggleVisibility: () => void
}) => {
  return (
    <article className="h-fit">
      <button aria-label="burger-menu" onClick={toggleVisibility}>
        <BurgerMenu className="w-10" />
      </button>
      <div className="absolute top-[60px] left-0 w-full bg-sbm-white px-4 desktop:hidden">
        <nav
          className={clsx(
            ` transition-all duration-500 overflow-hidden max-h-0`,
            {
              'max-h-[500px] ': isVisible,
            }
          )}
        >
          <div className="h-fit w-full  flex items-center flex-col gap-2 py-2">
            <FirstLineLinks isMobile />
            <SecondLineLinks isMobile />
          </div>
        </nav>
      </div>
    </article>
  )
}
