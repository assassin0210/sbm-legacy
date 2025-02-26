'use client'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'

import { BurgerMenu } from '@/assets/icon/burderMenu'
import { HeaderMenu } from '@/features/HeaderMenu'
import { page_links } from '@/shared/constants/page_links'
import { ButtonV2 } from '@/shared/ui/Button'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'

import sbmLogo3 from '../assets/images/sbm_logo-3.png'

export const handleScrollToSection = async (
  id: string,
  sideEffect?: (id: string) => void
) => {
  const section = document.getElementById(id)
  if (section) {
    const targetPosition = section.offsetTop - 117

    const currentScrollPosition = window.scrollY

    if (Math.abs(currentScrollPosition - targetPosition) > 25) {
      await window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  } else {
    sideEffect?.(id)
  }
}

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <header className="px-5 extraDesktop:px-[32px] grid  grid-cols-[auto_1fr] gap-x-10 extraDesktop:gap-x-[60px]  bg-sbm-white fixed top-0 w-full left-0 z-[999] h-[80px] shadow-header">
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

      <div className="extraDesktop:hidden flex items-center ">
        <div className=" maxLaptop:hidden flex items-center w-full gap-4 maxMobile:hidden ml-auto">
          <FirstLineLinks />
        </div>
        <div className="ml-auto">
          <HeaderMenu className="maxMobile:hidden" />
          <MobileNavbar
            toggleVisibility={toggleVisibility}
            isVisible={isVisible}
          />
        </div>
      </div>

      <div className="maxDesktop:hidden flex flex-col justify-end extraDesktop:grid laptop:grid-cols-1 extraDesktop:grid-cols-[1fr_auto] gap-x-[60px]">
        <div className="flex items-center gap-4 maxMobile:hidden ml-auto">
          <FirstLineLinks />
        </div>
        <div className="gap-4 flex items-center ml-auto maxLaptop:hidden">
          <SecondLineLinks />
        </div>
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
    <article className="tablet:hidden">
      <button onClick={toggleVisibility}>
        <BurgerMenu className="w-10" />
      </button>
      <div className="absolute top-[80px] left-0 w-full bg-sbm-white px-4 tablet:hidden">
        <nav
          className={clsx(
            ` transition-all duration-500 overflow-hidden max-h-0`,
            {
              'max-h-[500px] ': isVisible,
            }
          )}
        >
          <div className="h-fit w-full flex items-center flex-col gap-2 py-2">
            <FirstLineLinks />
            <SecondLineLinks />
          </div>
        </nav>
      </div>
    </article>
  )
}

const FirstLineLinks = () => {
  const pathname = usePathname()
  const router = useRouter()

  const sideEffect = (id?: string) => {
    if (pathname !== '/') {
      router.push(`/?id=${id}`)
    }
  }

  return (
    <>
      <ButtonV2
        onClick={() =>
          handleScrollToSection('WHAT_SCHOOL_BUS_MANAGER', sideEffect)
        }
        variant="linkBlack"
      >
        What’s School Bus Manager
      </ButtonV2>
      <ButtonV2
        onClick={() =>
          handleScrollToSection('WHY_SCHOOL_BUS_MANAGER', sideEffect)
        }
        variant="linkGray"
      >
        Why School Bus Manager
      </ButtonV2>
      <ButtonV2
        onClick={() => handleScrollToSection('FEATURES', sideEffect)}
        variant="linkGray"
      >
        Features
      </ButtonV2>
      <ButtonV2
        onClick={() => handleScrollToSection('PRODUCTS', sideEffect)}
        variant="linkGray"
      >
        Products
      </ButtonV2>
      <CustomLinkV2 variant="linkGray" href={page_links.pricing}>
        Pricing
      </CustomLinkV2>
      <CustomLinkV2 variant="blue" href={page_links.trial}>
        free trial
      </CustomLinkV2>
    </>
  )
}

const SecondLineLinks = () => {
  return (
    <>
      <CustomLinkV2
        className="normal-case"
        variant="linkOrange"
        href={page_links.contactUs}
      >
        Contact Us
      </CustomLinkV2>
      <CustomLinkV2 href={'tel:+18886676883'} variant="linkOrange">
        1.888.66.ROUTE
      </CustomLinkV2>
      <CustomLinkV2
        variant="orange"
        target="_blank"
        href={'https://app.schoolbusmanager.com/'}
      >
        Sign In
      </CustomLinkV2>
    </>
  )
}
