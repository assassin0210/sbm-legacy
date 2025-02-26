import { clsx } from 'clsx'
import React from 'react'

import { Spinner } from '@/assets/icon/spinner'
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
  isLoading?: boolean
}

export const Button = ({
  variant,
  size,
  className,
  children,
  isLoading,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IProps) => {
  return (
    <button
      {...rest}
      disabled={rest.disabled || isLoading}
      className={buttonVariants({
        variant,
        size,
        className: clsx(className, 'relative'),
      })}
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-inherit'
          )}
        >
          <Spinner width={25} height={25} className={clsx('animate-spin')} />
        </div>
      )}
      <div
        className={clsx({
          'opacity-0': isLoading,
        })}
      >
        {children}
      </div>
    </button>
  )
}

interface IPropsV2 {
  variant?: IButtonVariantV2
  size?: TButtonSize
  isLoading?: boolean
}

export const ButtonV2 = ({
  variant,
  // size,
  className,
  children,
  isLoading,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IPropsV2) => {
  return (
    <button
      {...rest}
      disabled={rest.disabled || isLoading}
      className={buttonVariantsV2({
        variant,
        // size,
        className: clsx(className),
      })}
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-inherit'
          )}
        >
          <Spinner width={25} height={25} className={clsx('animate-spin')} />
        </div>
      )}
      <div
        className={clsx({
          'opacity-0': isLoading,
        })}
      >
        {children}
      </div>
    </button>
  )
}
