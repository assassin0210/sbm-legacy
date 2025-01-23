import { clsx } from 'clsx'

import { CustomLink } from '@/shared/ui/CustomLink'
import { P20, P24, P48 } from '@/shared/ui/Typography'

export const ContactInfoSection = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => {
  return (
    <section className={clsx('container', className)}>
      <P48 color="text-sbm-primary" weight="font-bold" className="text-center">
        {title}
      </P48>
      <div className="grid tablet:grid-cols-[auto_auto_auto] mx-auto tablet:mx-auto w-fit tablet:gap-10 gap-8 laptop:gap-16 desktop:gap-48 mt-12">
        <article>
          <P24 color="text-sbm-secondary" weight="font-semibold">
            Call Us Toll Free
          </P24>
          <CustomLink
            className="text-[20px] block font-semibold mt-3"
            variant="grayGhost"
            href={'tel:+18886676883'}
          >
            1.888.66.ROUTE
          </CustomLink>
          <CustomLink
            className="text-[20px] block font-semibold"
            variant="grayGhost"
            href={'tel:+18886676883'}
          >
            1.888.667.6883
          </CustomLink>
          <P20
            className="mt-6"
            color="text-sbm-neutral-100"
            weight="font-semibold"
          >
            Local: 1.386.882.6218
          </P20>
        </article>
        <article>
          <P24 color="text-sbm-secondary" weight="font-semibold">
            Mailing Address
          </P24>
          <P20
            className="mt-3"
            color="text-sbm-neutral-100"
            weight="font-semibold"
          >
            3817 S Nova Road, Suite 5007
            <br />
            Port Orange, FL 32127
          </P20>
        </article>
        <article>
          <P24 color="text-sbm-secondary" weight="font-semibold">
            Business Hours
          </P24>
          <P20
            className="mt-3"
            color="text-sbm-neutral-100"
            weight="font-semibold"
          >
            Mon-Fri 9:00am to 5:00pm EST
          </P20>
        </article>
      </div>
    </section>
  )
}
