import { clsx } from 'clsx'
import Link, { LinkProps } from 'next/link'
import React, { FC, HTMLProps } from 'react'

import { buttonVariants } from '@/shared/cvaConfigs/buttonConfig'
import { IButtonVariant, TButtonSize } from '@/shared/types/common'

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
