import Image from 'next/image'

import bullets from '@/assets/images/bullets.png'

export const DesktopImage = () => {
  return (
    <div className="max-w-[940px] relative mx-auto mt-12 w-full maxMobile:hidden">
      <Image className=" w-full -ml-4 " src={bullets} alt={'Bullets'} />

      {/*<div className="absolute top-[26px] laptop:top-[38px] right-[100px] bg-orange-500">*/}
      {/*  <P24*/}
      {/*    className='laptop:text-[24px] text-[18px] before:-left-4 before:w-12 before:h-12  relative after:content-[""] before:absolute laptop:before:w-16 laptop:before:h-16 before:bg-sbm-secondary laptop:before:-left-7 before:flex-none before:rounded-full  before:-top-3 before:z-0'*/}
      {/*    color="text-sbm-white"*/}
      {/*    weight="font-semibold"*/}
      {/*  >*/}
      {/*    <span className=" uppercase relative z-10">ROUTING SOFTWARE</span>*/}
      {/*  </P24>*/}
      {/*  <P16 className="laptop:my-2 pl-6" color="text-sbm-white">*/}
      {/*    Platform + Add Ons*/}
      {/*  </P16>*/}
      {/*</div>*/}

      {/*<ul className="space-y-0 bg-orange-500 w-fit maxLaptop:mx-auto absolute right-24 top-[110px]  laptop:right-[150px] laptop:top-[140px]">*/}
      {/*  {desktopText.map((item, index) => (*/}
      {/*    <li className=" flex items-center h-fit" key={index}>*/}
      {/*      <P16*/}
      {/*        className="leading-[10px] laptop:leading-[27px] pr-2"*/}
      {/*        color="text-sbm-white"*/}
      {/*        weight={'font-medium'}*/}
      {/*      >*/}
      {/*        +*/}
      {/*      </P16>*/}
      {/*      <P14*/}
      {/*        weight="font-semibold"*/}
      {/*        className="inline !text-[12px] maxTablet:!leading-[20px] laptop:!text-[14px]"*/}
      {/*        color="text-sbm-white"*/}
      {/*      >*/}
      {/*        {item.text}*/}
      {/*      </P14>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<ul className="absolute right-[205px] bottom-[50px] laptop:right-[264px] laptop:bottom-[90px] bg-orange-500">*/}
      {/*  {secondList.map((text) => (*/}
      {/*    <li key={text}>*/}
      {/*      <P12*/}
      {/*        className="flex gap-1 !text-[10px] laptop:!text-[12px]"*/}
      {/*        color="text-sbm-white"*/}
      {/*      >*/}
      {/*        <CheckLong className="scale-75" />*/}
      {/*        {text}*/}
      {/*      </P12>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<ul className="absolute left-1 bottom-[72px] laptop:left-[20px] laptop:bottom-[90px] bg-orange-500">*/}
      {/*  {firstList.map((text, index, array) => (*/}
      {/*    <li key={text}>*/}
      {/*      <P12*/}
      {/*        className="flex gap-1 !text-[10px] laptop:!text-[12px]"*/}
      {/*        color="text-sbm-white"*/}
      {/*      >*/}
      {/*        {index === array.length - 1 ? (*/}
      {/*          <P16*/}
      {/*            className="inline pr-0.5 pl-0.5 leading-[18px]"*/}
      {/*            as="span"*/}
      {/*            color="text-sbm-white"*/}
      {/*            weight={'font-medium'}*/}
      {/*          >*/}
      {/*            +*/}
      {/*          </P16>*/}
      {/*        ) : (*/}
      {/*          <CheckLong className="scale-75" />*/}
      {/*        )}*/}
      {/*        {text}*/}
      {/*      </P12>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      {/*<P16*/}
      {/*  className="absolute left-[157px] bottom-[44px] !text-[14px]  laptop:!text-[16px]  laptop:left-[230px] laptop:bottom-[60px] bg-orange-500"*/}
      {/*  weight="font-semibold"*/}
      {/*  color="text-sbm-white"*/}
      {/*>*/}
      {/*  for Android / ios*/}
      {/*</P16>*/}
    </div>
  )
}

// const firstList = [
//   'VOICE GUIDED GPS NAVIGATION',
//   'LIVE VEHICLE TRACKING',
//   'LIVE ATTENDANCE TAKING',
//   '2-WAY DRIVER COMMUNICATION',
// ]
//
// const secondList = [
//   'VETA NOTIFICATIONS',
//   'PARENTS COMMUNICATION',
//   'REAL-TIME RIDER LOCATION',
//   'REAL-TIME VEHICLE LOCATION',
// ]
