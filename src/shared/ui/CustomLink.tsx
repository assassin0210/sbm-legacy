import { clsx } from 'clsx'
import Link, { LinkProps } from 'next/link'
import React, { FC, HTMLProps } from 'react'

import {
  buttonVariants,
  buttonVariantsV2,
} from '@/shared/cvaConfigs/buttonConfig'
import {
  IButtonVariant,
  IButtonVariantV2,
  TButtonSize,
} from '@/shared/types/common'

interface IProps {
  variant?: IButtonVariant
  size?: TButtonSize
}

export const CustomLink: FC<
  LinkProps & Omit<HTMLProps<HTMLAnchorElement>, 'size'> & IProps
> = (props) => {
  const { className, variant, size, children, ...rest } = props
  return (
    <Link
      {...rest}
      className={buttonVariants({
        variant,
        size,
        className: clsx('', className || ''),
      })}
    >
      {children}
    </Link>
  )
}

interface IPropsV2 {
  variant?: IButtonVariantV2
  size?: TButtonSize
}

export const CustomLinkV2: FC<
  LinkProps & Omit<HTMLProps<HTMLAnchorElement>, 'size'> & IPropsV2
> = (props) => {
  const { className, variant = 'linkBlack', children, ...rest } = props
  return (
    <Link
      {...rest}
      className={buttonVariantsV2({
        variant: variant,
        // size,
        className: clsx(className),
      })}
    >
      {children}
    </Link>
  )
}
