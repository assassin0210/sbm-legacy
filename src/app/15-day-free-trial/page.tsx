import { clsx } from 'clsx'
import Image from 'next/image'

import { StartedForm } from '@/app/15-day-free-trial/components/StartedForm'
import { CheckLong } from '@/assets/icon/checkLong'
import { ContactInfoSection } from '@/features/ContactInfoSection'
import { page_links } from '@/shared/constants/page_links'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P14, P20, P24, P30, P38 } from '@/shared/ui/Typography'

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
      <section className="pt-32 bg-sbm-neutral-900">
        <div
          className={clsx(
            'container-v2 max-w-[1024px] pb-32 relative',
            "maxTablet:before:hidden before:content-[''] before:absolute before:w-[4px] before:bg-sbm-secondary before:-right-0 before:h-[calc(100%+80px)] before:top-[71px]"
          )}
        >
          <P38
            weight="font-semibold"
            as="h2"
            color="text-sbm-secondary"
            className=" text-center"
          >
            Try School Bus Manager free for 15 days!
          </P38>

          <P24
            className={clsx(
              'text-center mt-0 relative',
              "maxTablet:after:hidden after:content-[''] after:absolute after:h-[4px] after:bg-sbm-secondary after:-right-6 after:w-[calc(50%+50px)] after:top-1/2 after:-translate-y-1/2"
            )}
            weight="font-semibold"
            as="h2"
          >
            <span className="z-10 laptop:relative bg-sbm-neutral-900 px-8">
              Getting started is easy as…
            </span>
          </P24>

          <div className=" grid tablet:grid-cols-2 laptop:grid-cols-3 w-fit tablet:px-8  gap-x-8 mt-10 max-w-[980px] mx-auto">
            {steps2.map((item, index) => (
              <article
                className="maxTablet:flex maxTablet:flex-col maxTablet:items-center maxTablet:text-center"
                key={item.title}
              >
                <div className="flex items-center justify-center  w-[60px] h-[60px] bg-sbm-secondary rounded-full flex-shrink-0">
                  <P30
                    weight="font-medium"
                    color="text-sbm-white"
                    className=" pl-2"
                  >
                    {index + 1}.
                  </P30>
                </div>
                <P20
                  className="mt-8"
                  weight="font-semibold"
                  color="text-sbm-secondary"
                >
                  {item.title}
                </P20>
                <P14
                  className="mt-3"
                  color="text-sbm-neutral-100"
                  weight="font-semibold"
                >
                  {item.subtitle}
                </P14>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={clsx(
          'container-v2 pt-8 pb-12 laptop:pb-20 laptop:pt-16 relative',
          "maxTablet:before:hidden before:content-[''] before:absolute before:w-[4px] before:bg-sbm-secondary before:left-0 before:h-[calc(100%-83px)] before:top-[150px]"
        )}
      >
        <P38
          weight="font-semibold"
          color="text-sbm-primary"
          className="text-center mb-3"
          as="h2"
        >
          Quick facts about your free trial:
        </P38>
        <P24
          color="text-sbm-neutral"
          weight="font-semibold"
          className={clsx(
            'relative text-center font-semibold',
            "maxTablet:before:hidden before:content-[''] before:absolute before:h-[4px] before:bg-sbm-secondary before:-left-6 before:w-[calc(50%-50px)] before:top-1/2 before:-translate-y-1/2",
            "maxTablet:after:hidden after:content-[''] after:absolute after:h-[4px] after:bg-sbm-secondary after:-right-12 desktop:after:-right-[1px] after:w-[calc(50%+50px)] after:top-1/2 after:-translate-y-1/2"
          )}
        >
          <span className="z-10 relative bg-sbm-white px-8 ">
            Really free, no obligations
          </span>
        </P24>

        <div className=" maxTablet:flex maxTablet:justify-center maxTablet:flex-col laptop:grid laptop:grid-cols-2 gap-12 mt-10">
          <Image
            className="max-w-[380px] laptop:max-w-[480px] mx-auto w-full object-cover"
            width={480}
            height={420}
            src={computer.src}
            alt="Computer"
          />
          <div className="pt-4 ">
            <ul className="space-y-4 maxTablet:w-fit maxTablet:mx-auto">
              {items.map((el, index) => (
                <li className="flex gap-1" key={index}>
                  <CheckLong className="text-sbm-primary" />
                  <P14 weight="font-semibold" className="uppercase">
                    {el.text}
                  </P14>
                </li>
              ))}
            </ul>
            <P14
              className="mt-10 leading-[30px] maxTablet:text-center"
              color="text-sbm-neutral-100"
              weight="font-semibold"
              as="div"
            >
              When you subscribe during the free trial period, you'll keep using
              the exact same account so all your work is preserved. Once the
              trial period is over you can decide which plan is right for you.{' '}
              <CustomLink
                className="inline text-[14px] underline font-semibold"
                variant="primaryGhost"
                href={page_links.pricing}
              >
                See Pricing Details
              </CustomLink>
            </P14>
          </div>
        </div>
      </section>

      <section className="pt-10 bg-sbm-neutral-900" id="start-form">
        <div className="container-v2 pb-16">
          <P38 className=" maxTablet:before:hidden relative text-center font-semibold text-sbm-secondary before:content-[''] before:absolute before:h-[4px] before:bg-sbm-secondary before:-left-6 before:w-[calc(50%-50px)] before:top-1/2 before:-translate-y-1/2">
            <span className="z-10 laptop:relative bg-sbm-neutral-900 tablet:px-8">
              Get started for free
            </span>
          </P38>
          <StartedForm />
        </div>
      </section>

      <ContactInfoSection
        className="pb-12 pt-8"
        title="Contact sales and support"
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
    title: 'Import your rider data',
    subtitle:
      'Output an XLS or CSV file from your Student Information System and import directly into School Bus Manager. We will even import your first data file for you for free!',
  },
  {
    title: 'Start building routes',
    subtitle:
      'We can teach you how to build routes in 60 minutes or less, output turn-by-turn directions, take attendance, and more!',
  },
]

export default DaysFreeTrial
