import Image from 'next/image'

import { page_links } from '@/shared/constants/page_links'
import { CustomLink } from '@/shared/ui/CustomLink'
import { P58 } from '@/shared/ui/Typography'

import iStok from '../../assets/images/getStartedWithSBM.png'

export const GetStartedWithSbm = () => {
  return (
    <section className="relative h-[740px] desktop:h-[1000px]">
      <div className="absolute left-0 top-0 w-full h-[740px] desktop:h-[1000px] overflow-hidden">
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
        <P58
          color="text-sbm-white"
          className="block leading-[60px] text-center pt-24"
          as="h2"
          weight="font-normal"
        >
          To Get Started with School Bus Manager
        </P58>
        <div className="flex justify-center flex-wrap gap-4 mt-24">
          <CustomLink
            href={page_links.trial}
            className="uppercase pt-[14px]"
            size="medium"
            variant="primary"
          >
            free 15 day trial
          </CustomLink>
          <CustomLink
            href="tel:+18886676883"
            className="uppercase pt-[14px]"
            size="medium"
            variant="black"
          >
            request a demo
          </CustomLink>
        </div>
      </div>
    </section>
  )
}
