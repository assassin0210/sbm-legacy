import { QueryClient } from '@tanstack/react-query'

import { PriceCard, PriceCardCustom } from '@/app/pricing/component/PriceCard'
import { CheckLong } from '@/assets/icon/checkLong'
import { ContactInfoSection } from '@/features/ContactInfoSection'
import { queryPricing } from '@/shared/api/getPricing'
import { page_links } from '@/shared/constants/page_links'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P12, P14, P16, P24, P38 } from '@/shared/ui/Typography'

const Pricing = async () => {
  const queryClient = await new QueryClient()
  const response = await queryClient.fetchQuery(queryPricing())

  const pricing = Object.keys(response ?? {})
    .map((el) => ({
      ...response[el],
      type: el,
    }))
    .sort((a, b) => a.monthly - b.monthly)

  return (
    <div className="">
      <section className="bg-sbm-neutral-900 pt-6 pb-16">
        <div className="container-v2 mt-28">
          <P38
            weight="font-semibold"
            color="text-sbm-secondary"
            className="text-center"
            as="h1"
          >
            Start with School Bus Manager risk free for 15 days, then choose the
            perfect plan for you.
          </P38>
          <P24 className="text-center mt-10" weight="font-semibold" as="h2">
            All School Bus Manager plans include:
          </P24>
          <div className="w-fit mx-auto grid laptop:grid-cols-3 mt-10 gap-x-10">
            <ul className="flex flex-col gap-3">
              {list1.map((el) => (
                <li className="grid grid-cols-[auto_1fr] gap-1" key={el}>
                  <CheckLong className="flex-shrink-0 inline text-sbm-primary" />{' '}
                  <P12
                    weight="font-semibold"
                    className="uppercase leading-normal inline"
                  >
                    {el}
                  </P12>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {list2.map((el) => (
                <li className="grid grid-cols-[auto_1fr] gap-1" key={el}>
                  <CheckLong className="flex-shrink-0 inline text-sbm-primary" />{' '}
                  <P12
                    weight="font-semibold"
                    className="uppercase leading-normal inline"
                  >
                    {el}
                  </P12>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {list3.map((el) => (
                <li className="grid grid-cols-[auto_1fr] gap-1" key={el}>
                  <CheckLong className="flex-shrink-0 inline text-sbm-primary" />{' '}
                  <P12
                    weight="font-semibold"
                    className="uppercase leading-normal inline"
                  >
                    {el}
                  </P12>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-v2 pt-12">
        <P38
          weight="font-semibold"
          color="text-sbm-primary"
          className="text-center"
        >
          Our pricing, like our routing software, is simple.
        </P38>
        <div className="grid desktop:grid-cols-4 laptop:grid-cols-3  tablet:grid-cols-2  mx-auto w-full gap-10 mt-10">
          {pricing.map((el, index) => (
            <PriceCard key={index} items={el} />
          ))}
          <PriceCardCustom key={4} />
        </div>
        <P14
          className="text-center max-w-[1130px] mx-auto mt-10 leading-[20px]"
          color="text-sbm-neutral-300"
          weight="font-semibold"
        >
          All new subscriptions and renewals require a 12-month minimum
          commitment. We do not prorate. We do not refund.
        </P14>
        <P16
          as="div"
          className="text-center mt-2"
          color="text-sbm-neutral-300"
          weight="font-semibold"
        >
          <span>If you manage more than 2500 riders please </span>
          <CustomLink
            className=" text-[14px] font-bold underline"
            variant="primaryGhost"
            href={page_links.contactUs}
          >
            contact us
          </CustomLink>
        </P16>
      </section>
      <div className="bg-sbm-neutral-900 mt-20 py-16">
        <ContactInfoSection title="Contact sales and support" />
      </div>
    </div>
  )
}

const list1 = [
  'account setup, Software Provisioning & Configuration',
  'Invite your whole team - Unlimited Users and Roles',
  'Help with importing your initial data',
]
const list2 = [
  'Training for your staff Thats Quick and Easy!',
  'Automatic nightly data backups with up to 1 week of archives',
  'Private and secure - data is yours',
]
const list3 = [
  'Support is always free - we love to help our users.',
  'Latest up-to-date maps -  And a Dedicated map support team',
  'Software updates are always FREE',
]

export default Pricing
