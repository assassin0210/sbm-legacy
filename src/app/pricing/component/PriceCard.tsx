import Link from 'next/link'

import { IPricing } from '@/shared/api/getPricing'
import { page_links } from '@/shared/constants/page_links'
import { ButtonV2 } from '@/shared/ui/Button'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P12, P14, P16, P20, P30 } from '@/shared/ui/Typography'

export const PriceCard = ({ items }: { items: IPricing }) => {
  const type = items.label.split(' ')

  return (
    <article className="border border-black bg-sbm-white pb-8 w-full">
      <div className="bg-sbm-primary-10 py-4 px-6">
        <P14
          weight="font-medium"
          color="text-sbm-white"
          className="text-center"
        >
          SCHOOL BUS MANAGER
        </P14>
        <p className="mt-2 mx-auto font-semibold bg-sbm-white w-fit h-fit text-sbm-primary-10  px-5 text-[20px] leading-[26px] uppercase">
          {type[type.length - 1]}
        </p>
      </div>

      <div className="bg-sbm-neutral-200 text-center flex flex-col items-end gap-1 justify-center mt-8 py-2.5">
        <P16 className="text-center block mx-auto" weight="font-semibold">
          Manage up to
        </P16>
        <div className="flex mx-auto gap-1.5 items-center">
          <P20 weight="font-bold">{items.child_limit}</P20>
          <P16 className="leading-[28px]" weight="font-semibold">
            riders
          </P16>
        </div>
      </div>

      <P30
        className="text-center block mt-8 tablet:mt-12 leading-[36px]"
        weight="font-semibold"
      >
        ${items.monthly * 10}
      </P30>
      <P16 className="text-center block" weight="font-semibold">
        paid annually
      </P16>

      <Link href={page_links.trial + `?type=${items.type}`}>
        <ButtonV2
          className="block !px-6 py-2 text-center w-fit mx-auto mt-6 tablet:mt-10"
          variant="blue"
        >
          SIGN UP NOW
        </ButtonV2>
      </Link>
      <P20 weight="font-bold" className="text-center block mt-8">
        + ${items.setup_fee}
      </P20>
      <P12 className="text-center block leading-[18px]" weight="font-medium">
        one-time startup fee
        <br />
        in the first year only
      </P12>
    </article>
  )
}

export const PriceCardCustom = () => {
  return (
    <article className="border border-black bg-sbm-white pb-8 w-full">
      <div className="bg-sbm-primary-10 py-4 px-6">
        <P14
          weight="font-medium"
          color="text-sbm-white"
          className="text-center"
        >
          SCHOOL BUS MANAGER
        </P14>
        <p className="mt-2 mx-auto font-semibold bg-sbm-white w-fit h-fit text-sbm-primary-10  px-5 text-[20px] leading-[26px] uppercase">
          enterprise
        </p>
      </div>

      {/*<div className="bg-sbm-neutral-200 text-center flex flex-col items-end gap-1 justify-center mt-8 py-2.5">*/}
      {/*  <P16 className="text-center block mx-auto" weight="font-semibold">*/}
      {/*    Manage more than*/}
      {/*  </P16>*/}
      {/*  <div className="flex mx-auto gap-1.5 items-center">*/}
      {/*    <P20 weight="font-bold">2500</P20>*/}
      {/*    <P16 className="leading-[28px]" weight="font-semibold">*/}
      {/*      riders*/}
      {/*    </P16>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <P20
        as="div"
        className="text-center mt-9 text-black leading-[36px]"
        weight="font-semibold"
      >
        <span>
          If you manage
          <br /> more than
          <br /> 2500 riders
        </span>

        <P20 className="mt-4" color="text-sbm-secondary" weight="font-semibold">
          Call us toll free
        </P20>
        <CustomLink
          className="text-[20px] block font-semibold mt-1"
          variant="grayGhost"
          href={'tel:+18886676883'}
        >
          1.888.667.6883
        </CustomLink>

        <Link href="/contact-us">
          <ButtonV2
            className="block !px-6 py-2 text-center w-fit mx-auto mt-6 tablet:mt-[43px]"
            variant="blue"
            // onClick={async () => {
            //   await router.push(page_links.trial + `?type=${items.type}`)
            // }}
          >
            contact us
          </ButtonV2>
        </Link>
        {/*<CustomLink*/}
        {/*  className=" text-[14px] font-bold underline"*/}
        {/*  variant="primaryGhost"*/}
        {/*  href={page_links.contactUs}*/}
        {/*>*/}
        {/*  contact us*/}
        {/*</CustomLink>*/}
      </P20>

      {/*<P30*/}
      {/*  className="text-center block mt-8 tablet:mt-12 leading-[36px]"*/}
      {/*  weight="font-semibold"*/}
      {/*>*/}
      {/*  123*/}
      {/*</P30>*/}
      {/*<P16 className="text-center block" weight="font-semibold">*/}
      {/*  paid annually*/}
      {/*</P16>*/}

      {/*<ButtonV2*/}
      {/*  className="block !px-6 py-2 text-center w-fit mx-auto mt-6 tablet:mt-10"*/}
      {/*  variant="blue"*/}
      {/*  // onClick={async () => {*/}
      {/*  //   await router.push(page_links.trial + `?type=${items.type}`)*/}
      {/*  // }}*/}
      {/*>*/}
      {/*  SIGN UP NOW*/}
      {/*</ButtonV2>*/}
      {/*<P20 weight="font-bold" className="text-center block mt-8">*/}
      {/*  + 123*/}
      {/*</P20>*/}
      {/*<P12 className="text-center block leading-[18px]" weight="font-medium">*/}
      {/*  one-time startup fee*/}
      {/*  <br />*/}
      {/*  in the first year only*/}
      {/*</P12>*/}
    </article>
  )
}
