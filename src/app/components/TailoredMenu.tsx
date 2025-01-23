import Image from 'next/image'

import { CheckLong } from '@/assets/icon/checkLong'
import { P16, P18, P20, P38, P48 } from '@/shared/ui/Typography'

import bullets from '../../assets/images/bullets.png'
import desktop from '../../assets/images/Desktop.png'
import mobile from '../../assets/images/mobile.png'
import tablet from '../../assets/images/tablet.png'

const desktopText = [
  {
    text: 'FIELD TRIP SOFTWARE',
  },
  {
    text: 'GPS Tracking',
  },
  {
    text: 'Attendance Taking',
  },
  {
    text: 'PARENTS PORTAL',
  },
  {
    text: 'TEXT MESSAGING',
  },
  {
    text: 'Email Communication',
  },
  {
    text: 'Data Integration SFTP & API',
  },
  {
    text: 'AI ROUTE BUILDING',
  },
  {
    text: 'PARENTS APP',
  },
  {
    text: 'DRIVER CONSOLE',
  },
]

export const TailoredMenu = () => {
  return (
    <section id="PRODUCTS" className="relative">
      <div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom, #50D0F3 10%,  #005D88 80%)`,
        }}
      ></div>
      <div className="container relative z-10 pt-32 pb-20">
        <P48
          weight="font-bold"
          color="text-sbm-white"
          className="text-center"
          as="h2"
        >
          A Tailored Menu for Transportation Operations
        </P48>
        <P38 className="text-center" color="text-sbm-neutral">
          Choose and pay only for what you need.
        </P38>
        <Image
          className="max-w-[1200px] w-full maxMobile:hidden mx-auto mt-12"
          src={bullets}
          alt={'Bullets'}
        />

        <div className="grid desktop:grid-cols-3 mt-12 tablet:hidden">
          <div className="flex flex-col items-center">
            <Image
              width={300}
              className="mb-5"
              height={200}
              src={desktop}
              alt="PC"
            />
            <div>
              <P38
                className='relative after:content-[""] before:absolute before:w-20 before:h-20 before:bg-sbm-secondary before:-left-7 before:flex-none before:rounded-full  before:-top-3 before:z-0'
                color="text-sbm-white"
                weight="font-semibold"
              >
                <span className=" uppercase relative z-10">
                  ROUTING SOFTWARE
                </span>
              </P38>
              <P16 className="my-2 pl-6" color="text-sbm-white">
                Platform + Add Ons
              </P16>

              <ul className="space-y-1 w-fit maxLaptop:mx-auto">
                {desktopText.map((item, index) => (
                  <li className="" key={index}>
                    <P20
                      className="inline pr-3"
                      color="text-sbm-white"
                      weight={'font-medium'}
                    >
                      +
                    </P20>
                    <P16 className="inline" color="text-sbm-white">
                      {item.text}
                    </P16>
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
            <ul>
              <li>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  VOICE GUIDED GPS NAVIGATION
                </P16>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  LIVE VEHICLE TRACKING
                </P16>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  LIVE ATTENDANCE TAKING
                </P16>
                <P16 as="div" color="text-sbm-white">
                  <P20
                    className="inline pr-3"
                    color="text-sbm-white"
                    weight={'font-medium'}
                  >
                    +
                  </P20>
                  2-WAY DRIVER COMMUNICATION
                </P16>
              </li>
            </ul>
            <P18 className="" weight="font-semibold" color="text-sbm-white">
              for Android / ios
            </P18>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={120}
              height={300}
              src={mobile}
              alt="Mobile"
              className="mb-10"
            />
            <ul>
              <li>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  VETA NOTIFICATIONS
                </P16>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  PARENTS COMMUNICATION
                </P16>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  REAL-TIME RIDER LOCATION
                </P16>
                <P16 className="flex gap-2" color="text-sbm-white">
                  <CheckLong />
                  REAL-TIME VEHICLE LOCATION
                </P16>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
