import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'

import { BurgerMenu } from '@/assets/icon/burderMenu'
import { handleScrollToSection } from '@/features/Header'
import { page_links } from '@/shared/constants/page_links'
import { ButtonV2 } from '@/shared/ui/Button'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'

export const HeaderMenu = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={clsx(className)}>
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
  const pathname = usePathname()
  const router = useRouter()

  const sideEffect = (id?: string) => {
    if (pathname !== '/') {
      router.push(`/?id=${id}`)
    }
  }

  return (
    <div className="flex flex-col gap-1 px-2 py-2">
      <div className="flex flex-col">
        <ButtonV2
          className="text-left"
          onClick={() =>
            handleScrollToSection('WHAT_SCHOOL_BUS_MANAGER', sideEffect)
          }
          variant="linkBlack"
        >
          What’s School Bus Manager
        </ButtonV2>
        <ButtonV2
          className="text-left"
          onClick={() =>
            handleScrollToSection('WHY_SCHOOL_BUS_MANAGER', sideEffect)
          }
          variant="linkGray"
        >
          Why School Bus Manager
        </ButtonV2>
        <ButtonV2
          className="text-left"
          onClick={() => handleScrollToSection('FEATURES', sideEffect)}
          variant="linkGray"
        >
          Features
        </ButtonV2>
        <ButtonV2
          className="text-left"
          onClick={() => handleScrollToSection('PRODUCTS', sideEffect)}
          variant="linkGray"
        >
          Products
        </ButtonV2>
        <CustomLinkV2 variant="linkGray" href={page_links.pricing}>
          Pricing
        </CustomLinkV2>
        <CustomLinkV2 variant="linkBlack" href={page_links.trial}>
          free trial
        </CustomLinkV2>
      </div>

      {/*//*/}
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
        variant="linkOrange"
        target="_blank"
        href={'https://app.schoolbusmanager.com/'}
      >
        Sign In
      </CustomLinkV2>
    </div>
  )
}
