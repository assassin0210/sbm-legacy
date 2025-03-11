import { DesktopImage } from '@/app/components/DesktopImage'
import { MobileTailored } from '@/app/components/MobileTailored'
import { P30, P38 } from '@/shared/ui/Typography'

export const TailoredMenu = () => {
  return (
    <section id="PRODUCTS" className="content-block relative">
      <div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          background: `linear-gradient(180deg, #75cdef 0%, #265c84 100%)`,
        }}
      ></div>
      <div className="container relative z-10 py-8 laptop:py-16">
        <P38
          weight="font-semibold"
          as="h2"
          color="text-sbm-white"
          className=" text-center"
        >
          A tailored menu for transportation operations
        </P38>
        <P30
          className="text-center mt-1"
          weight="font-medium"
          as="h3"
          color="text-sbm-neutral"
        >
          Choose and pay only for what you need
        </P30>
        <DesktopImage />
        <MobileTailored />
      </div>
    </section>
  )
}
