import { clsx } from 'clsx'
import { ClassAttributes, ElementType } from 'react'

import { TextThemeColorKeys } from '../../../tailwind.config'

type IProps = ClassAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLParagraphElement> & {
    weight?: IWeight
    color?: TextThemeColorKeys
    as?: ElementType
  }

export type IWeight =
  | 'font-black'
  | 'font-extrabold'
  | 'font-medium'
  | 'font-normal'
  | 'font-bold'
  | 'font-semibold'

export const P28 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-black' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx('text-[28px] leading-9', weight, color, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const P58 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-black' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx(
        'maxMobile:text-[40px]  text-[58px] leading-normal',
        weight,
        color,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
export const P48 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-normal' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx(
        'maxMobile:!text-[40px] text-[48px] leading-normal',
        weight,
        color,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const P38 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-normal' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx(
        'maxMobile:text-[32px] text-[38px] leading-normal',
        weight,
        color,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
export const P34 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-normal' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx(
        'maxMobile:text-[28px] text-[34px] leading-normal',
        weight,
        color,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
export const P30 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-normal' as IWeight,
    color = 'text-sbm-neutral',
    as,
    ...rest
  } = props

  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx(
        'maxMobile:text-[24px] text-[30px] leading-normal',
        weight,
        color,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const P24 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-normal' as IWeight,
    color = 'text-sbm-neutral',
    ...rest
  } = props
  return (
    <p
      className={clsx('text-2xl leading-8', weight, color, className)}
      {...rest}
    >
      {children}
    </p>
  )
}

export const P20 = (props: IProps) => {
  const {
    className = '',
    children,
    weight = 'font-black' as IWeight,
    color = 'text-sbm-neutral',

    ...rest
  } = props
  return (
    <p
      className={clsx('text-xl leading-7', weight, color, className)}
      {...rest}
    >
      {children}
    </p>
  )
}

export const P18 = (props: IProps) => {
  const {
    className = '',
    children,
    color = 'text-sbm-neutral',
    weight = 'font-normal' as IWeight,
    ...rest
  } = props
  return (
    <p
      className={clsx('text-lg leading-6.5', weight, color, className)}
      {...rest}
    >
      {children}
    </p>
  )
}
export const P16 = (props: IProps) => {
  const {
    className = '',
    children,
    color = 'text-sbm-neutral',
    weight = 'font-normal' as IWeight,
    as,
    ...rest
  } = props
  const Tag = as ? as : 'p'
  return (
    <Tag
      className={clsx('text-[16px] leading-6', weight, color, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const P14 = (props: IProps) => {
  //

  const {
    className = '',
    color = 'text-sbm-neutral',
    children,
    weight = 'font-normal' as IWeight,
    as,
    ...rest
  } = props
  const Tag = as ? as : 'p'

  return (
    <Tag
      className={clsx('text-sm leading-5', weight, color, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
export const P12 = (props: IProps) => {
  //

  const {
    className = '',
    color = 'text-sbm-neutral',
    children,
    weight = 'font-normal' as IWeight,
    as,
    ...rest
  } = props
  const Tag = as ? as : 'p'

  return (
    <Tag
      className={clsx('text-[12px] leading-5', weight, color, className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export const ErrorMessage = (props: IProps) => {
  const {
    className = '',
    color = 'text-sbm-error',
    children,
    weight = 'font-normal' as IWeight,
    ...rest
  } = props
  return (
    <p
      className={clsx('text-sm leading-6 font-sans ', weight, color, className)}
      {...rest}
    >
      {children}
    </p>
  )
}
