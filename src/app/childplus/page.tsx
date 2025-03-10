import Image from 'next/image'

import { PageLayout } from '@/app/components/PageLayout'
import cpLogo from '@/assets/images/cp_logo.svg'
import { SalesAndSupport } from '@/shared/components/SalesAndSupport'
import { P16, P24, P38 } from '@/shared/ui/Typography'

import exportImg from '../../assets/images/cp_export.png'
import saveImg from '../../assets/images/cp_save_as.png'

const Childplus = () => {
  return (
    <PageLayout className="" title="Childplus">
      <div className="container-v2">
        <article className=" maxMobile:flex-col flex gap-[30px]  mt-[60px] mb-10  items-center">
          <Image
            className="w-[165px] h-16"
            src={cpLogo}
            alt="Child plus partner"
          />

          <P38
            weight="font-medium"
            as="h1"
            className="w-full block border-b border-gray-300 pb-2"
          >
            School Bus Manager is now a ChildPlus Data Exchange Partner!
          </P38>
        </article>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 tablet:col-span-3">
            <P16>
              We are happy to announce that School Bus Manager and ChildPlus
              have teamed up in a data exchange partnership. This means that the
              easiest to use school bus routing program on the market today -
              just got even easier!
            </P16>
            <P16 className="mt-2">
              Any ChildPlus user can simply export report #1527 from their
              ChildPlus system then import the data directly into School Bus
              Manager in a few simple steps. All associated rider data inside
              School Bus Manager will update automatically in seconds,
              eliminating the need for data entry by hand. The system is fully
              compatible with ChildPlus version 4.6.0.0 or later. To export your
              data from ChildPlus follow the step-by-step instructions below.
            </P16>
            <h2 className="text-[30px] font-medium maxMobile:text-center mt-12">
              How to export you ChildPlus data:
            </h2>

            <ul className="flex flex-col gap-5">
              {items.map((el, index) => (
                <li
                  className="maxMobile:flex-col maxMobile:items-center flex items-start gap-4"
                  key={index}
                >
                  <div className="flex items-center justify-center  w-[60px] h-[60px] bg-sbm-secondary rounded-full flex-shrink-0">
                    <P24
                      weight="font-normal"
                      color="text-sbm-white"
                      className=" pl-2"
                    >
                      {index + 1}.
                    </P24>
                  </div>
                  <div>
                    <P16
                      className="mt-4 maxMobile:text-center"
                      weight="font-medium"
                    >
                      {el.text}
                    </P16>
                    {el.image}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <SalesAndSupport className="maxMobile:col-span-5 col-span-2  bg-sbm-white-20" />
        </div>
      </div>
    </PageLayout>
  )
}

const items = [
  {
    text: 'Open Report # 1527',
  },
  {
    text: 'Select the appropriate program term, site, classrooms and enrollment status(es) that you would like to include on the filter page',
  },
  {
    text: 'Click on the Export link on the top right of the filter page',
    image: (
      <Image
        className="max-w-[120px] w-full object-contain maxMobile:mx-auto"
        src={exportImg}
        alt="step presentation"
      />
    ),
  },
  {
    text: 'This will open up a window prompting you to save the file',
  },
  {
    text: 'Click on the “Save as type” field and select Comma – Separated Values (*.csv)',
    image: (
      <Image
        className="max-w-[700px] w-full object-contain maxMobile:mx-auto"
        src={saveImg}
        alt="step presentation"
      />
    ),
  },
  {
    text: 'Select a location to save the file to',
  },
  {
    text: 'Name the file',
  },
  {
    text: 'Click on save. Your file is now ready to be imported into School Bus Manager',
  },
]

export default Childplus
