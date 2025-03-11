import { P14, P30, P38 } from '@/shared/ui/Typography'

export const WhatSchoolBusManager = () => {
  return (
    <section
      id="WHAT_SCHOOL_BUS_MANAGER"
      className="content-block pt-12 pb-16 laptop:pb-20 laptop:pt-24 bg-sbm-neutral-900 "
    >
      <div className="container max-w-[1050px] mx-auto">
        <div className="">
          <P38
            weight="font-normal"
            as="h2"
            color="text-sbm-orange-20"
            className="text-sbm-blue-20 maxMobile:text-center "
          >
            What's School Bus Manager?
          </P38>
          <div className=" maxTablet:flex-col flex gap-16 mt-4 ">
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

            <div className="w-full tablet:w-full laptop:w-full laptop:max-w-[600px] relative mt-3">
              <iframe
                title="video"
                className="w-full mobile:h-[380px]  tablet:h-[500px]   laptop:h-[340px]"
                src="https://www.youtube.com/embed/ZgxyFUTmTVM"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
