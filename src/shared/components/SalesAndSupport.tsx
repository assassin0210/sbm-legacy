import { clsx } from 'clsx'
import Link from 'next/link'

import { P14, P28 } from '@/shared/ui/Typography'

export const SalesAndSupport = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'border border-gray-200 px-4 pb-4 h-fit mt-[30px]',
        className
      )}
    >
      <P28 weight="font-normal" className="mt-5" color="text-sbm-black-10">
        Sales and Support
      </P28>
      <P14 className="block mt-1">(9:00am-5:00pm ET)</P14>
      <P14 className="block mt-8">
        Call:{' '}
        <Link
          className=" w-fit text-sbm-blue-30 hover:text-sbm-blue-40 hover:underline transition"
          href={'tel:+18886676883'}
        >
          1.888.66.ROUTE
        </Link>{' '}
        (888-667-6883)
      </P14>
    </div>
  )
}
