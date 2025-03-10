import Image from 'next/image'

import {
  desktopText,
  firstList,
  secondList,
} from '@/app/components/DesktopImage'
import { CheckLong } from '@/assets/icon/checkLong'
import desktop from '@/assets/images/Desktop.png'
import mobile from '@/assets/images/mobile.png'
import tablet from '@/assets/images/tablet.png'
import waypoint from '@/assets/images/waypoint.png'
import { P14, P16, P24, P34 } from '@/shared/ui/Typography'

export const MobileTailored = () => {
  return (
    <div className="grid desktop:grid-cols-3 gap-y-8 mt-12 laptop:hidden">
      <div className="flex flex-col items-center">
        <Image
          width={300}
          className="mb-5"
          height={200}
          src={desktop}
          alt="PC"
        />
        <div>
          <P34
            className='relative after:content-[""] before:absolute before:w-20 before:h-20 before:bg-sbm-secondary before:-left-7 before:flex-none before:rounded-full  before:-top-3 before:z-0'
            color="text-sbm-white"
            weight="font-semibold"
          >
            <span className=" uppercase relative z-10">ROUTING SOFTWARE</span>
          </P34>
          <P24
            className="leading-[20px] pl-12 !text-[26px]"
            weight="font-semibold"
            color="text-sbm-white"
          >
            Platform
          </P24>

          <ul className="space-y-1 w-fit maxLaptop:mx-auto mt-6">
            {desktopText.map((item, index) => (
              <li className="" key={index}>
                <P16
                  className="inline pr-3"
                  color="text-sbm-white"
                  weight={'font-medium'}
                >
                  +
                </P16>
                <P14 className="inline" color="text-sbm-white">
                  {item.text}
                </P14>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          width={300}
          height={200}
          src={tablet}
          className="mb-11"
          alt="Tablet"
        />
        <div>
          <P16
            className="ml-4 block mb-3"
            weight="font-semibold"
            color="text-sbm-white"
          >
            Driver Console <br />
            for Android / iOS
          </P16>
          <ul>
            {firstList.map((text, index, array) => (
              <li key={text}>
                <P14
                  className="flex gap-1 items-center !leading-[30px] "
                  color="text-sbm-white"
                >
                  {index === array.length - 1 ? (
                    <P16
                      className="inline pr-0.5 pl-0.5 leading-[18px]"
                      as="span"
                      color="text-sbm-white"
                      weight={'font-medium'}
                    >
                      +
                    </P16>
                  ) : (
                    <CheckLong className="scale-[80%]" />
                  )}
                  {text}
                </P14>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          width={120}
          height={300}
          src={mobile}
          alt="Mobile"
          className="mb-10"
        />
        <div>
          <P14
            className="ml-4 block mb-3"
            weight="font-semibold"
            color="text-sbm-white"
          >
            Parents App <br />
            for Android / iOS
          </P14>
          <ul>
            {secondList.map((text) => (
              <li key={text}>
                <P14
                  className="flex gap-1 items-center !leading-[30px] "
                  color="text-sbm-white"
                >
                  <CheckLong className="scale-[80%]" />
                  {text}
                </P14>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        className=" p-2 bg-white rounded-sm w-[340px] mx-auto"
        alt="waipoint"
        src={waypoint}
      />
    </div>
  )
}
