import { clsx } from 'clsx'
import Image from 'next/image'

import { StartedForm } from '@/app/15-day-free-trial/components/StartedForm'
import { CheckLong } from '@/assets/icon/checkLong'
import { ContactInfoSection } from '@/features/ContactInfoSection'
import { page_links } from '@/shared/constants/page_links'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P16, P18, P24, P38, P48 } from '@/shared/ui/Typography'

import computer from '../../assets/images/computer.png'

const DaysFreeTrial = () => {
  const items = [
    {
      text: "It's a full account - there are no limitations",
    },
    {
      text: 'No credit card, no contract - no obligations',
    },
    {
      text: 'Support is always free - we love to help our users.',
    },
    {
      text: 'Invite your whole team - so everyone can test it out.',
    },
  ]

  return (
    <div className="">
      <section className="pt-36 laptop:pt-52 bg-sbm-neutral-900">
        <div
          className={clsx(
            'container max-w-[1240px] pb-32 relative',
            "maxTablet:before:hidden before:content-[''] before:absolute before:w-[4px] before:bg-sbm-secondary before:-right-0 before:h-[calc(100%+80px)] before:top-[100px]"
          )}
        >
          <P48
            weight="font-semibold"
            color="text-sbm-secondary"
            className=" maxTablet:!text-[38px] maxLaptop:text-[42px] laptop:h-[72px] text-center"
            as="h1"
          >
            Try School Bus Manager Free for 15 Days!
          </P48>
          <P38
            className={clsx(
              'text-center mt-0 relative',
              "maxTablet:after:hidden after:content-[''] after:absolute after:h-[4px] after:bg-sbm-secondary after:-right-4 after:w-[calc(50%+50px)] after:top-1/2 after:-translate-y-1/2"
            )}
            weight="font-semibold"
            as="h2"
          >
            <span className="z-10 laptop:relative bg-sbm-neutral-900 px-8">
              Getting Started is Easy as…
            </span>
          </P38>

          <div className=" grid tablet:grid-cols-2 laptop:grid-cols-3 w-fit mx-auto gap-x-12 mt-10">
            {steps2.map((item, index) => (
              <article
                className="maxTablet:flex maxTablet:flex-col maxTablet:items-center maxTablet:text-center"
                key={item.title}
              >
                <div className="flex items-center justify-center  w-[84px] h-[84px] bg-sbm-secondary rounded-full flex-shrink-0">
                  <P48
                    weight="font-normal"
                    color="text-sbm-white"
                    className=" pl-2"
                  >
                    {index + 1}.
                  </P48>
                </div>
                <P24
                  className="mt-8"
                  weight="font-semibold"
                  color="text-sbm-secondary"
                >
                  {item.title}
                </P24>
                <P18
                  className="mt-4"
                  color="text-sbm-neutral-100"
                  weight="font-semibold"
                >
                  {item.subtitle}
                </P18>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div
          className={clsx(
            'container max-w-[1240px] pt-10 pb-14 laptop:pb-32 laptop:pt-20 relative',
            "maxTablet:before:hidden before:content-[''] before:absolute before:w-[4px] before:bg-sbm-secondary before:left-0 before:h-[calc(100%-106px)] before:top-[180px]"
          )}
        >
          <P48
            weight="font-semibold"
            color="text-sbm-primary"
            className="text-center"
            as="h1"
          >
            Quick facts about your free trial:
          </P48>
          <P38
            color="text-sbm-neutral"
            className={clsx(
              'relative text-center font-semibold',
              "maxTablet:before:hidden before:content-[''] before:absolute before:h-[4px] before:bg-sbm-secondary before:-left-4 before:w-[calc(50%-50px)] before:top-1/2 before:-translate-y-1/2",
              "maxTablet:after:hidden after:content-[''] after:absolute after:h-[4px] after:bg-sbm-secondary after:-right-4 after:w-[calc(50%+50px)] after:top-1/2 after:-translate-y-1/2"
            )}
          >
            <span className="z-10 relative bg-sbm-white px-8">
              Really free, no obligations
            </span>
          </P38>

          <div className=" maxTablet:flex maxTablet:justify-center maxTablet:flex-col laptop:grid laptop:grid-cols-2 gap-20 mt-10">
            <Image
              className="max-w-[380px] laptop:max-w-[520px] mx-auto w-full object-cover"
              width={520}
              height={420}
              src={computer.src}
              alt="Computer"
            />
            <div className="pt-4 ">
              <ul className="space-y-4 maxTablet:w-fit maxTablet:mx-auto">
                {items.map((el, index) => (
                  <li className="flex gap-1" key={index}>
                    <CheckLong />
                    <P16 weight="font-semibold" className="uppercase">
                      {el.text}
                    </P16>
                  </li>
                ))}
              </ul>
              <P18
                className="mt-10 leading-[30px] maxTablet:text-center"
                color="text-sbm-neutral-100"
                weight="font-semibold"
                as="div"
              >
                When you subscribe during the free trial period, you'll keep
                using the exact same account so all your work is preserved. Once
                the trial period is over you can decide which plan is right for
                you.{' '}
                <CustomLink
                  className="inline text-[18px] underline font-semibold"
                  variant="primaryGhost"
                  href={page_links.pricing}
                >
                  See Pricing Details
                </CustomLink>
              </P18>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10 bg-sbm-neutral-900">
        <div className="container max-w-[1240px] pb-32">
          <P48 className=" maxTablet:before:hidden relative text-center font-semibold text-sbm-secondary before:content-[''] before:absolute before:h-[4px] before:bg-sbm-secondary before:-left-4 before:w-[calc(50%-50px)] before:top-1/2 before:-translate-y-1/2">
            <span className="z-10 laptop:relative bg-sbm-neutral-900 tablet:px-8">
              Get Started for Free
            </span>
          </P48>
          <StartedForm />
        </div>
      </section>

      <ContactInfoSection
        className="pb-20 pt-14"
        title="Contact Sales and Support"
      />
    </div>
  )
}

const steps2 = [
  {
    title: 'Sign up',
    subtitle:
      "Fill out the form. We'll call you to configure a few simple settings and enable your account",
  },
  {
    title: 'Import Your Rider Data',
    subtitle:
      'Output an XLS or CSV file from your Student Information System and import directly into School Bus Manager. We will even import your first data file for you for free!',
  },
  {
    title: 'Start Building Routes',
    subtitle:
      'We can teach you how to build routes in 30 minutes or less, output turn-by-turn directions, take attendance, and more!',
  },
]

export default DaysFreeTrial
