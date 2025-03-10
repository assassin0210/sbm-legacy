import { clsx } from 'clsx'
import Image from 'next/image'

import { CheckLong } from '@/assets/icon/checkLong'
import bullets from '@/assets/images/bullets.png'
import waypoint from '@/assets/images/waypoint.png'
import { P12, P14, P16, P28 } from '@/shared/ui/Typography'

export const DesktopImage = () => {
  return (
    <div className="max-w-[940px] relative mx-auto mt-12 w-full maxTablet:hidden">
      <Image
        className=" w-full -ml-4 "
        src={bullets}
        alt="Software on some devices"
      />
      <Image
        className="absolute right-[18px] bottom-1 p-2 bg-white rounded-sm w-[340px]"
        alt="waipoint"
        src={waypoint}
      />
      <div className="absolute top-[26px] laptop:top-[38px] right-[50px] ">
        <div>
          <P28
            className={clsx(
              'laptop:text-[28px] text-[18px] before:-left-4 before:w-12 before:h-12  relative after:content-[""] before:absolute laptop:before:w-16',
              'laptop:before:h-16 before:bg-sbm-secondary laptop:before:-left-7 before:flex-none before:rounded-full  before:-top-3 before:z-0'
            )}
            color="text-sbm-white"
            weight="font-semibold"
          >
            <span className=" uppercase relative z-10">ROUTING SOFTWARE</span>
          </P28>
          <P28
            className="leading-[20px] pl-11 !text-[26px]"
            weight="font-semibold"
            color="text-sbm-white"
          >
            Platform
          </P28>
        </div>
        <ul className="space-y-1.5  w-fit  mt-4">
          {desktopText.map((item, index) => (
            <li className=" flex items-center h-fit" key={index}>
              <P16
                className="leading-[27px] pr-2"
                color="text-sbm-white"
                weight={'font-medium'}
              >
                +
              </P16>
              <P14
                weight="font-semibold"
                className="inline !text-[12px] maxTablet:!leading-[20px] laptop:!text-[16px]"
                color="text-sbm-white"
              >
                {item.text}
              </P14>
            </li>
          ))}
        </ul>
      </div>
      <article className="absolute left-1 bottom-[12px] laptop:left-[40px] laptop:bottom-[28px] ">
        <div className="flex gap-24">
          <div>
            <P12
              className="ml-4 block mb-3"
              weight="font-semibold"
              color="text-sbm-white"
            >
              Driver Console <br />
              for Android / iOS
            </P12>
            <ul>
              {firstList.map((text, index, array) => (
                <li key={text}>
                  <P12
                    className="flex gap-1 items-center !leading-[30px]  !text-[10px] laptop:!text-[10px]"
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
                  </P12>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <P12
              className="ml-4 block mb-3"
              weight="font-semibold"
              color="text-sbm-white"
            >
              Parents App <br />
              for Android / iOS
            </P12>
            <ul>
              {secondList.map((text) => (
                <li key={text}>
                  <P12
                    className="flex gap-1 items-center !leading-[30px]  !text-[10px] laptop:!text-[10px]"
                    color="text-sbm-white"
                  >
                    <CheckLong className="scale-[80%]" />
                    {text}
                  </P12>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  )
}

export const firstList = [
  'VOICE GUIDED GPS NAVIGATION',
  'LIVE VEHICLE TRACKING',
  'LIVE ATTENDANCE TAKING',
  '2-WAY DRIVER COMMUNICATION',
]

export const secondList = [
  'ETA NOTIFICATIONS',
  'PARENTS COMMUNICATION',
  'REAL-TIME RIDER LOCATION',
  'REAL-TIME VEHICLE LOCATION',
]

export const desktopText = [
  {
    text: 'ROUTE OPTIMIZATION',
  },
  {
    text: 'FIELD TRIP MANAGEMENT',
  },
  {
    text: 'GPS TRACKING',
  },
  {
    text: 'ATTENDANCE TAKING',
  },
  {
    text: 'PARENTS PORTAL',
  },
  {
    text: 'TEXT MESSAGING',
  },
  {
    text: 'EMAIL COMMUNICATION',
  },
  {
    text: 'DATA INTEGRATION SFTP & API',
  },
  {
    text: (
      <>
        <span>PARENTS APP</span>
        <span className="!text-[12px] pl-2">for Android / iOS</span>
      </>
    ),
  },
  {
    text: (
      <>
        <span>DRIVER CONSOLE</span>
        <span className="!text-[12px] pl-2">for Android / iOS</span>
      </>
    ),
  },
]
