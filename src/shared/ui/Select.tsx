'use client'
import { clsx } from 'clsx'
import { forwardRef, ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { ErrorMessage } from '@/shared/ui/Typography'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string
  error?: string
  options: { value: string | number; label: string }[]
}

export const Select = forwardRef<HTMLElement, SelectProps>(
  ({ className, error, options, ...rest }, ref) => {
    return (
      <article ref={ref} className={className || ''}>
        <select
          className={clsx(
            'h-9 w-full py-1.5  px-3 text-sm text-[#55555] bg-sbm-white border border-[#ccc] rounded outline-none transition focus:border-sbm-blue-10 focus:shadow-focusInput',
            {
              '!border-[#a94442] !shadow-none': error,
            }
          )}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </article>
    ) as ReactElement
  }
)

export const FormSelect = (
  props: SelectProps & {
    name: any
  }
) => {
  const { control } = useFormContext()
  const { name, ...rest } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>
        (
          <Select {...rest} {...field} error={fieldState.error?.message} />
        ) as ReactElement
      }
    />
  )
}
