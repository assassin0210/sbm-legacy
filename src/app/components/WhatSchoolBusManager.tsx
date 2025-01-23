import { P18, P48 } from '@/shared/ui/Typography'

export const WhatSchoolBusManager = () => {
  return (
    <section
      id="WHAT_SCHOOL_BUS_MANAGER"
      className="pt-12 pb-16 laptop:pb-20 laptop:pt-24 bg-sbm-neutral-900"
    >
      <div className="container">
        <div className="desktop:ml-40">
          <P48
            weight="font-normal"
            as="h2"
            className="text-sbm-blue-20 maxMobile:text-center "
          >
            What's School Bus Manager?
          </P48>
          <div className=" relative grid gap-6 laptop:grid-cols-[auto_1fr]">
            <div className="">
              <h3> Watch this video.</h3>
              <P18 className="laptop:max-w-[400px]">
                School Bus Manager is the simplest school bus routing program on
                the market today. No more building routes by hand. No more
                typing addresses into google or map quest.
                <br />
              </P18>
            </div>
            <div className="desktop:perspective-800 w-full max-w-[760px] laptop:pr-3">
              <div className="transform desktop:-rotate-y-[10deg]">
                <div className="w-full h-full flex">
                  <div className="w-full flex-shrink-0 relative pb-[66.6%] max-w-[760px]">
                    <iframe
                      title="video"
                      className="absolute w-full h-full"
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
