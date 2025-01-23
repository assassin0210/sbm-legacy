import Image from 'next/image'
import Link from 'next/link'

import campminder from '@/assets/images/campminder.png'
import campsite from '@/assets/images/campsite.png'
import cpLogo from '@/assets/images/cp_logo.svg'
import { page_links } from '@/shared/constants/page_links'
import { P48 } from '@/shared/ui/Typography'

export const DataPartners = () => {
  return (
    <section className="container mt-16 mb-20 laptop:mt-32  laptop:mb-40">
      <P48
        weight="font-normal"
        color="text-sbm-primary"
        className="text-center"
        as="h2"
      >
        Data Exchange Partners
      </P48>
      <div className="flex tablet:items-end maxMobile:items-center justify-around maxMobile:flex-col gap-8 tablet:mx-20 mt-10">
        <Link href={page_links.childplus}>
          <Image className="w-[178px]" src={cpLogo} alt={''} />
        </Link>
        <Link href={page_links.root}>
          <Image className="w-[150px]" src={campsite} alt={''} />
        </Link>
        <Link href={page_links.root}>
          <Image className="w-[266px]" src={campminder} alt={''} />
        </Link>
      </div>
    </section>
  )
}
