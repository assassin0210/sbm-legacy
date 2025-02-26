import {
  P14,
  P16,
  P18,
  P24,
  P28,
  P30,
  P34,
  P38,
  P48,
} from '@/shared/ui/Typography'

export const WhatSchoolBusManager = () => {
  return (
    <section
      id="WHAT_SCHOOL_BUS_MANAGER"
      className="pt-12 pb-16 laptop:pb-20 laptop:pt-24 bg-sbm-neutral-900"
    >
      <div className="container">
        <div className="desktop:ml-[200px]">
          <P38
            weight="font-normal"
            as="h2"
            color="text-sbm-orange-20"
            className="text-sbm-blue-20 maxMobile:text-center "
          >
            What's School Bus Manager?
          </P38>
          <div className=" relative grid gap-7 laptop:grid-cols-[auto_1fr]">
            <div className="">
              <P30 className="mt-0" as="h3">
                Watch this video.
              </P30>
              <P14
                color="text-sbm-neutral-100"
                className="!leading-[24px] max-w-[360px] mt-8"
              >
                School Bus Manager is the simplest school bus routing program on
                the market today. No more building routes by hand. No more
                typing addresses into google or map quest.
                <br />
              </P14>
            </div>
            <div className="desktop:perspective-800 w-full max-w-[660px] laptop:pr-3 ">
              <div className="transform desktop:-rotate-y-[10deg] shadow-neutral-500 shadow-xl mt-6">
                <div className="w-full h-full flex">
                  <div className="w-full flex-shrink-0 relative pb-[66.6%]  max-w-[760px]">
                    <iframe
                      title="video"
                      className="absolute w-full h-full "
                      src="https://www.youtube.com/embed/ZgxyFUTmTVM"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
