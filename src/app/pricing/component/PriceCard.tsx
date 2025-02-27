'use client'

import { useRouter } from 'next/navigation'

import { IPricing } from '@/shared/api/getPricing'
import { page_links } from '@/shared/constants/page_links'
import { ButtonV2 } from '@/shared/ui/Button'
import { P14, P16, P20, P30 } from '@/shared/ui/Typography'

export const PriceCard = ({ items }: { items: IPricing }) => {
  const type = items.label.split(' ')
  const router = useRouter()
  return (
    <article className="border border-black bg-sbm-white pb-8 w-full">
      <div className="bg-sbm-primary-10 py-2 px-2">
        <P16
          weight="font-normal"
          color="text-sbm-white"
          className="text-center"
        >
          SCHOOL BUS MANAGER
        </P16>
        <p className="mt-2 mx-auto font-semibold bg-sbm-white w-fit h-fit text-sbm-primary-10  px-5 text-[24px] leading-[30px] uppercase">
          {type[type.length - 1]}
        </p>
      </div>
      <P16 className="text-center pt-5" weight="font-semibold">
        Manage up to
      </P16>
      <div className="bg-sbm-neutral-200 flex items-end gap-2 justify-center py-2.5">
        <P20 weight="font-bold">{items.child_limit}</P20>
        <P16 className="leading-[28px]" weight="font-semibold">
          riders
        </P16>
      </div>
      <P30
        className="text-center block mt-4 tablet:mt-8 leading-[39px]"
        weight="font-bold"
      >
        ${items.monthly}
      </P30>
      <P16 className="text-center block tablet:mt-1" weight="font-semibold">
        per month*
      </P16>

      <P30
        className="text-center block mt-4 tablet:mt-6 leading-[36px]"
        weight="font-semibold"
      >
        ${items.monthly * 12}
      </P30>
      <P16 className="text-center block mt-1" weight="font-semibold">
        paid annually
      </P16>

      <ButtonV2
        className="block !px-6 py-2 text-center w-fit mx-auto mt-4 tablet:mt-6"
        variant="blue"
        onClick={async () => {
          await router.push(page_links.trial + `?type=${items.type}`)
        }}
      >
        SIGN UP NOW
      </ButtonV2>
      <P20 weight="font-bold" className="text-center block mt-8">
        + ${items.setup_fee}
      </P20>
      <P14 className="text-center block leading-[18px]" weight="font-semibold">
        one-time startup fee
        <br />
        in the first year only
      </P14>
    </article>
  )
}
