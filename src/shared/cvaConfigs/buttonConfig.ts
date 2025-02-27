import { cva } from 'class-variance-authority'

export const variants = {
  linkOrange: '!px-5 font-normal text-sbm-orange-20 hover:text-sbm-black',
  linkBlack: '!px-5 font-normal text-sbm-black hover:text-sbm-orange-20',
  primary:
    ' bg-sbm-blue-10 rounded-full text-sbm-white hover:bg-white hover:text-sbm-blue-10',
  secondary:
    'bg-sbm-secondary rounded-full text-sbm-white  hover:bg-white hover:text-sbm-neutral',
  black:
    'bg-sbm-neutral rounded-full text-sbm-white  hover:bg-white hover:text-sbm-neutral',
  green: 'text-sbm-white rounded-full bg-sbm-green hover:bg-sbm-green-10',

  blackGhost: 'text-sbm-neutral hover:text-sbm-secondary  h-fit',
  grayGhost: 'text-sbm-neutral-100 hover:text-sbm-secondary  h-fit',
  primaryGhost: 'text-sbm-primary hover:text-sbm-neutral  h-fit',
  secondaryGhost: 'text-sbm-secondary hover:text-sbm-neutral  h-fit',
}
export const buttonVariants = cva(
  'whitespace-nowrap cursor-pointer  transition text-[15px] leading-normal',
  {
    variants: {
      variant: variants,
      size: {
        small: 'h-[38px] py-2 px-4 text-[15px]',
        medium: 'h-[48px] px-10 font-semibold',
      },
    },
    defaultVariants: {
      variant: 'linkBlack',
    },
  }
)

export const variantsV2 = {
  linkBlack: 'text-sbm-black hover:text-sbm-orange-20 ',
  linkGray: 'text-sbm-neutral-100 hover:text-sbm-secondary ',
  linkOrange: 'text-sbm-orange-20 hover:text-sbm-black ',
  black:
    'px-3 py-1.5 text-sbm-white hover:text-sbm-secondary  bg-sbm-neutral rounded-full text-sbm-white hover:bg-white hover:text-sbm-blue-10',
  blue: 'px-3 py-1.5 text-sbm-neutral hover:text-sbm-secondary  bg-sbm-blue-10 rounded-full text-sbm-white hover:bg-white hover:text-sbm-blue-10',
  orange:
    'px-3 py-1.5 text-sbm-white hover:text-sbm-secondary  bg-sbm-secondary rounded-full text-sbm-white hover:bg-white hover:text-sbm-orange-20',

  // linkOrange: '!px-5 font-normal text-sbm-orange-20 hover:text-sbm-black',
  // linkBlack: '!px-5 font-normal text-sbm-black hover:text-sbm-orange-20',
  // primary:
  //   ' bg-sbm-blue-10 rounded-full text-sbm-white hover:bg-white hover:text-sbm-blue-10',
  // secondary:
  //   'bg-sbm-secondary rounded-full text-sbm-white  hover:bg-white hover:text-sbm-neutral',
  // black:
  //   'bg-sbm-neutral rounded-full text-sbm-white  hover:bg-white hover:text-sbm-neutral',
  // green: 'text-sbm-white rounded-full bg-sbm-green hover:bg-sbm-green-10',
  //
  // blackGhost: 'text-sbm-neutral hover:text-sbm-secondary  h-fit',
  // grayGhost: 'text-sbm-neutral-100 hover:text-sbm-secondary  h-fit',
  // primaryGhost: 'text-sbm-primary hover:text-sbm-neutral  h-fit',
  // secondaryGhost: 'text-sbm-secondary hover:text-sbm-neutral  h-fit',
}

export const buttonVariantsV2 = cva(
  'whitespace-nowrap cursor-pointer  transition text-sm leading-normal relative leading-[14px] font-semibold uppercase',
  {
    variants: {
      variant: variantsV2,
    },
    defaultVariants: {
      variant: 'linkBlack',
    },
  }
)
