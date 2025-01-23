import { P14 } from '@/shared/ui/Typography'

export const StepNumber = ({ num }: { num: number }) => {
  return (
    <div className="flex-shrink-0 mt-1 w-[30px] h-[30px] flex items-start justify-center border-[5px] rounded-[5px] border-sbm-blue-10">
      <P14 weight="font-bold" color="text-sbm-orange-20">
        {num}
      </P14>
    </div>
  )
}
