'use client'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'

import { DesktopHeader } from '@/features/Header/DesktopHeader'
import { MobileHeader } from '@/features/Header/MobileHeader'
import { page_links } from '@/shared/constants/page_links'
import { useNavScroll } from '@/shared/hooks/useMenuActive'
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

export const FirstLineLinks = ({ isMobile }: { isMobile?: boolean }) => {
  const pathname = usePathname()
  const router = useRouter()

  const sideEffect = (id?: string) => {
    if (pathname !== '/') {
      router.push(`/?id=${id}`)
    }
  }

  const activeCl = useNavScroll('WHAT_SCHOOL_BUS_MANAGER')

  return (
    <>
      <button
        className={clsx(
          'whitespace-nowrap group text-sbm-neutral-400 font-semibold hover:text-sbm-orange-20 transition ',
          {
            '!text-black !font-bold': activeCl === 'WHAT_SCHOOL_BUS_MANAGER',
          }
        )}
        onClick={() =>
          handleScrollToSection('WHAT_SCHOOL_BUS_MANAGER', sideEffect)
        }
      >
        What’s School Bus Manager
      </button>
      <button
        className={clsx(
          'whitespace-nowrap group text-sbm-neutral-400 font-semibold hover:text-sbm-orange-20 transition',
          { '!text-black !font-bold': activeCl === 'WHY_SCHOOL_BUS_MANAGER' }
        )}
        onClick={() =>
          handleScrollToSection('WHY_SCHOOL_BUS_MANAGER', sideEffect)
        }
      >
        Why School Bus Manager
      </button>
      <button
        className={clsx(
          'whitespace-nowrap group text-sbm-neutral-400 font-semibold hover:text-sbm-orange-20 transition',
          { '!text-black !font-bold': activeCl === 'FEATURES' }
        )}
        onClick={() => handleScrollToSection('FEATURES', sideEffect)}
      >
        Features
      </button>
      <button
        className={clsx(
          'whitespace-nowrap group text-sbm-neutral-400 font-semibold hover:text-sbm-orange-20 transition',
          { '!text-black !font-bold': activeCl === 'PRODUCTS' }
        )}
        onClick={() => handleScrollToSection('PRODUCTS', sideEffect)}
      >
        Products
      </button>

      <Link
        className={clsx(
          'whitespace-nowrap group text-sbm-neutral-400 font-semibold hover:text-sbm-orange-20 transition',
          { '!text-black !font-bold': pathname.includes('/pricing') }
        )}
        href={page_links.pricing}
      >
        Pricing
      </Link>

      {!isMobile ? (
        <Link
          className="text-sm uppercase whitespace-nowrap font-semibold text-white bg-sbm-blue-10 px-3 py-1.5 rounded-[20px] hover:bg-transparent hover:text-sbm-orange-20 transition"
          href={page_links.trial}
        >
          Free trial
        </Link>
      ) : (
        <Link
          className="normal-case font-semibold text-sbm-primary !text-[16px]"
          href={page_links.trial}
        >
          Free trial
        </Link>
      )}
    </>
  )
}

export const SecondLineLinks = ({ isMobile }: { isMobile?: boolean }) => {
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
      {!isMobile ? (
        <CustomLinkV2
          variant="orange"
          target="_blank"
          className="flex items-center gap-3 normal-case"
          href={'https://app.schoolbusmanager.com/'}
        >
          <FontAwesomeIcon className="-rotate-135" icon={faKey} />
          <span>Sign In</span>
        </CustomLinkV2>
      ) : (
        <Link
          className="normal-case font-semibold text-sbm-orange-20 !text-[14px]"
          href={page_links.trial}
        >
          <span>Sign In</span>
        </Link>
      )}
    </>
  )
}
