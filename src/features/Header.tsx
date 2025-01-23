'use client'
import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'

import { BurgerMenu } from '@/assets/icon/burderMenu'
import { page_links } from '@/shared/constants/page_links'
import { Button } from '@/shared/ui/Button'
import { CustomLink } from '@/shared/ui/CustomLink'

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
    <header className="bg-sbm-white fixed top-0 w-full left-0 z-[999] h-[80px] px-5 py-2 flex items-center shadow-header">
      <Link
        className="relative h-full flex-shrink-0 flex w-[166px] laptop:w-[233px] mr-4 desktop:mr-20"
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
      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-end maxLaptop:ml-auto desktop:justify-between w-full">
        <div className="flex gap-4 maxLaptop:hidden ml-auto">
          <FirstLineLinks />
        </div>
        <div className="gap-4 flex items-center ml-auto maxMobile:hidden">
          <SecondLineLinks />
        </div>
        <HeaderMenu />
        <MobileNavbar
          toggleVisibility={toggleVisibility}
          isVisible={isVisible}
        />
      </div>
    </header>
  )
}

const HeaderMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="maxMobile:hidden desktop:hidden  laptop:ml-8">
      <Popover.Root open={open} onOpenChange={(v) => setOpen(v)}>
        <Popover.Trigger className="cursor-pointer" asChild>
          <BurgerMenu className="w-10" />
        </Popover.Trigger>
        <Popover.Content
          className="bg-neutral-00 flex flex-col bg-sbm-neutral-900 gap-2 w-fit overflow-auto shadow-lg border border-neutral-05 rounded-lg p-1 z-[2]"
          sideOffset={5}
        >
          <PopoverContent />
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

const PopoverContent = () => {
  return (
    <>
      <FirstLineLinks />
      <div className="tablet:hidden">
        <SecondLineLinks />
      </div>
    </>
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
          <div className=" h-fit w-full flex flex-col gap-2 py-2">
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
      <Button
        onClick={() =>
          handleScrollToSection('WHAT_SCHOOL_BUS_MANAGER', sideEffect)
        }
        className="uppercase font-bold tablet:ml-auto w-fit"
        variant="blackGhost"
      >
        What’s School Bus Manager
      </Button>
      <Button
        onClick={() =>
          handleScrollToSection('WHY_SCHOOL_BUS_MANAGER', sideEffect)
        }
        className="uppercase font-bold w-fit"
        variant="grayGhost"
      >
        Why School Bus Manager
      </Button>
      <Button
        onClick={() => handleScrollToSection('FEATURES', sideEffect)}
        className="uppercase font-bold w-fit"
        variant="grayGhost"
      >
        Features
      </Button>
      <Button
        onClick={() => handleScrollToSection('PRODUCTS', sideEffect)}
        className="uppercase font-bold w-fit"
        variant="grayGhost"
      >
        Products
      </Button>
      <CustomLink
        className="uppercase font-bold"
        variant="grayGhost"
        href={page_links.pricing}
      >
        Pricing
      </CustomLink>
    </>
  )
}

const SecondLineLinks = () => {
  return (
    <>
      <CustomLink
        className="uppercase font-bold "
        size="small"
        variant="primary"
        href={page_links.trial}
      >
        free trial
      </CustomLink>
      <CustomLink
        className="font-bold"
        variant="secondaryGhost"
        href={page_links.contactUs}
      >
        Contact Us
      </CustomLink>
      <CustomLink
        href={'tel:+18886676883'}
        className=" font-bold"
        variant="secondaryGhost"
      >
        1.888.66.ROUTE
      </CustomLink>
      <CustomLink
        className="font-bold "
        size="small"
        variant="secondary"
        target="_blank"
        href={'https://app.schoolbusmanager.com/'}
      >
        Sign In
      </CustomLink>
    </>
  )
}
