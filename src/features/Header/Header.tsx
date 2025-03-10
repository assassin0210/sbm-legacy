'use client'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'

import { DesktopHeader } from '@/features/Header/DesktopHeader'
import { MobileHeader } from '@/features/Header/MobileHeader'
import { page_links } from '@/shared/constants/page_links'
import { ButtonV2 } from '@/shared/ui/Button'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'

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
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  )
}

export const FirstLineLinks = () => {
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
        className="normal-case !text-[16px]"
      >
        What’s School Bus Manager
      </ButtonV2>
      <ButtonV2
        className="normal-case !text-[16px]"
        onClick={() =>
          handleScrollToSection('WHY_SCHOOL_BUS_MANAGER', sideEffect)
        }
        variant="linkGray"
      >
        Why School Bus Manager
      </ButtonV2>
      <ButtonV2
        className="normal-case !text-[16px]"
        onClick={() => handleScrollToSection('FEATURES', sideEffect)}
        variant="linkGray"
      >
        Features
      </ButtonV2>
      <ButtonV2
        className="normal-case !text-[16px]"
        onClick={() => handleScrollToSection('PRODUCTS', sideEffect)}
        variant="linkGray"
      >
        Products
      </ButtonV2>
      <CustomLinkV2
        className="normal-case !text-[16px]"
        variant="linkGray"
        href={page_links.pricing}
      >
        Pricing
      </CustomLinkV2>
      <CustomLinkV2
        // className="normal-case"
        variant="blue"
        href={page_links.trial}
      >
        Free trial
      </CustomLinkV2>
    </>
  )
}

export const SecondLineLinks = () => {
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
        className="flex items-center gap-3 normal-case"
        href={'https://app.schoolbusmanager.com/'}
      >
        <FontAwesomeIcon className="-rotate-135" icon={faKey} />
        <span>Sign In</span>
      </CustomLinkV2>
    </>
  )
}
