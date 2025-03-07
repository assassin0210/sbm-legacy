import { clsx } from 'clsx'
import Image from 'next/image'

import why1 from '@/assets/images/why-1.png'
import { P16, P20, P30, P38 } from '@/shared/ui/Typography'

export const WhySchoolBusManager = () => {
  const items = [
    {
      title: "It's Simple",
      subtitle:
        'School Bus Manager is a SIMPLE and intuitive bus routing solution that is designed for all skill levels so you’ll be up and running quickly. It’s web-based so it requires no installation. It’s fully compatible with both PC and Mac. It backs itself up daily. It’s always on the latest version, and you won’t need any IT guys to run it.',
    },
    {
      title: "It's Affordable",
      subtitle:
        'School Bus Manager eliminates the need for routing buses by hand, streamlining your transportation operation. It pays for itself saving you money, time and errors, while increasing your profitability and efficiency. Requiring no big upfront investment our pricing is designed to suit any size district or operation.',
    },
    {
      title: "It's Powerful",
      subtitle:
        'School Bus Manager delivers unparalleled power and efficiency for managing transportation operations. Designed to simplify even the most complex routing tasks. The platform transforms traditional operations into streamlined, highly reliable processes. With a strong focus on accuracy, scalability, and intuitive design, School Bus Manager empowers you to optimize transportation strategies while building trust and transparency with riders and their families.',
    },
  ]

  return (
    <div
      className="container py-8 laptop:pt-12 laptop:pb-16 laptop:py-[50px] bg-sbm-white"
      id="WHY_SCHOOL_BUS_MANAGER"
    >
      <P38
        weight="font-normal"
        as="h2"
        color="text-sbm-secondary"
        className=" text-center"
      >
        Why School Bus Manager?
      </P38>
      <P30
        className="text-center mt-4"
        weight="font-normal"
        as="h3"
        color="text-sbm-neutral"
      >
        Works on any computer with a web browser and an internet connection.
      </P30>

      <Image
        className="mx-auto max-w-[520px] w-full py-10 mt-4"
        alt=""
        src={why1}
      />

      <div className="max-w-[1100px] flex maxTablet:flex-col  mt-10 gap-y-4 gap-x-6 text-left pb-[30px] w-fit mx-auto">
        {items.map((el, index) => (
          <article
            key={index}
            className={clsx('', {
              'laptop:w-[calc(100%+210px)]': index === 2,
              'laptop:w-[calc(100%-110px)]': index !== 2,
            })}
          >
            <P20
              as="h3"
              weight="font-medium"
              color="text-sbm-secondary"
              className=""
            >
              {el.title}
            </P20>
            <P16 color="text-sbm-neutral-100" className="tracking-normal mt-4">
              {el.subtitle}
            </P16>
          </article>
        ))}
      </div>
    </div>
  )
}
