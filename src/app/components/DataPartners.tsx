import Image from 'next/image'
import Link from 'next/link'

import campminder from '@/assets/images/campminder.png'
import campsite from '@/assets/images/campsite.png'
import cpLogo from '@/assets/images/cp_logo.svg'
import { page_links } from '@/shared/constants/page_links'
import { P38 } from '@/shared/ui/Typography'

export const DataPartners = () => {
  return (
    <section className=" container my-8 laptop:mt-20 laptop:mb-28">
      <P38
        weight="font-normal"
        as="h2"
        color="text-sbm-primary"
        className=" text-center"
      >
        Data exchange partners
      </P38>
      <div className="max-w-[1170px] mx-auto items-center flex tablet:items-end maxMobile:items-center justify-around maxMobile:flex-col gap-8 mt-8 laptop:mt-10">
        <Image className="w-[110px] h-fit" src={campsite} alt={'campsite'} />
        <Image
          className="w-[180px] mb-2 h-fit flex items-center justify-center"
          src={campminder}
          alt={'campminder'}
        />

        <Link aria-label="React more about partner" href={page_links.childplus}>
          <Image
            className="w-[130px] h-fit"
            src={cpLogo}
            alt={'child plus software'}
          />
        </Link>
      </div>
    </section>
  )
}
