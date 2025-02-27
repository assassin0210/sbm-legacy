import Image from 'next/image'

import { page_links } from '@/shared/constants/page_links'
import { CustomLinkV2 } from '@/shared/ui/CustomLink'
import { P42 } from '@/shared/ui/Typography'

import iStok from '../../assets/images/getStartedWithSBM.png'

export const GetStartedWithSbm = () => {
  return (
    <section className="relative h-[500px]  laptop:h-[800px]">
      <div className="absolute left-0 top-0 w-full h-[500px] laptop:h-[800px]  overflow-hidden">
        <Image
          className="object-cover object-center w-full h-full"
          src={iStok.src}
          width={2000}
          height={800}
          alt="sbm-map"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      <div className="container relative z-10">
        <P42
          color="text-sbm-white"
          className="block text-center pt-12 laptop:pt-24 maxTablet:text-[32px] maxTablet:leading-[40px]"
          as="h2"
          weight="font-normal"
        >
          To Get Started with School Bus Manager
        </P42>
        <div className="flex justify-center flex-wrap gap-4 mt-[60px]">
          <CustomLinkV2
            href={page_links.trial}
            variant="blue"
            className="uppercase py-3 h-fit px-8"
          >
            free 15 day trial
          </CustomLinkV2>
          <CustomLinkV2
            href="tel:+18886676883"
            className="uppercase py-3 h-fit px-8"
            variant="black"
          >
            request a demo
          </CustomLinkV2>
        </div>
      </div>
    </section>
  )
}
