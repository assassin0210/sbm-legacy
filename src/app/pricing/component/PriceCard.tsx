import { IPricing } from '@/shared/api/getPricing'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P16, P18, P20, P24, P28, P48, P58 } from '@/shared/ui/Typography'

export const PriceCard = ({ items }: { items: IPricing }) => {
  return (
    <article className="border border-black bg-sbm-white pb-8 w-full">
      <div className="bg-sbm-primary-10 py-2 px-2">
        <P18
          weight="font-normal"
          color="text-sbm-white"
          className="text-center"
        >
          SCHOOL BUS MANAGER
        </P18>
        <p className="mt-2 mx-auto font-semibold bg-sbm-white w-fit h-fit text-sbm-primary-10  px-5 text-[28px] leading-[32px] uppercase">
          {items.type}
        </p>
      </div>
      <P18 className="text-center pt-5" weight="font-semibold">
        Manage up to
      </P18>
      <div className="bg-sbm-neutral-200 flex items-end gap-2 justify-center py-2.5">
        <P28 weight="font-bold">{items.child_limit}</P28>
        <P20 className="leading-[32px]" weight="font-semibold">
          riders
        </P20>
      </div>
      <P58
        className="text-center block mt-4 tablet:mt-16 leading-[39px]"
        weight="font-bold"
      >
        ${items.monthly}
      </P58>
      <P20 className="text-center block tablet:mt-1" weight="font-semibold">
        per month*
      </P20>

      <P48
        className="text-center block mt-4 tablet:mt-10 leading-[36px]"
        weight="font-semibold"
      >
        ${items.monthly * 12}
      </P48>
      <P20 className="text-center block mt-1" weight="font-semibold">
        paid annually
      </P20>
      <CustomLink
        className="block pt-[14px] text-center w-fit mx-auto mt-6 tablet:mt-10"
        size="medium"
        variant="primary"
        href="/"
      >
        SIGN UP NOW
      </CustomLink>
      <P24 weight="font-bold" className="text-center block mt-8">
        + ${items.setup_fee}
      </P24>
      <P16 className="text-center block leading-[18px]" weight="font-semibold">
        one-time startup fee
        <br />
        in the first year only
      </P16>
    </article>
  )
}
