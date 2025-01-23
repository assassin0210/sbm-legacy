import Image from 'next/image'

import why1 from '@/assets/images/why-1.png'
import { P16, P24, P38, P48 } from '@/shared/ui/Typography'

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
      className="container pt-12 pb-16 laptop:py-[50px] bg-sbm-white"
      id="WHY_SCHOOL_BUS_MANAGER"
    >
      <P48
        weight="font-normal"
        as="h2"
        color="text-sbm-secondary"
        className=" text-center"
      >
        Why School Bus Manager?
      </P48>
      <P38
        className="text-center mt-4"
        weight="font-normal"
        color="text-sbm-neutral"
      >
        Works on any computer with a web browser and an internet connection.
      </P38>

      <Image className="mx-auto max-w-[680px] w-full py-10" alt="" src={why1} />

      <div className="grid tablet:grid-cols-3 mt-10 gap-y-4 gap-x-[30px] text-left pb-[30px] w-fit mx-auto">
        {items.map((el, index) => (
          <article key={index} className="tablet:max-w-[370px]">
            <P24 as="h3" color="text-sbm-secondary" className="">
              {el.title}
            </P24>
            <P16 color="text-sbm-neutral-100" className="tracking-normal mt-4">
              {el.subtitle}
            </P16>
          </article>
        ))}
      </div>
    </div>
  )
}
