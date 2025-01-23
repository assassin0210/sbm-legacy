'use client'

import { clsx } from 'clsx'
import { ClassAttributes, CSSProperties, forwardRef, ReactNode } from 'react'
import { Controller, FieldValues, useFormContext } from 'react-hook-form'
import { UseControllerProps } from 'react-hook-form/dist/types/controller'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

import { ErrorMessage } from '@/shared/ui/Typography'

type InputProps = ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string
    error?: string
    inputClassName?: string
    customComponent?: ReactNode
    inputStyle?: CSSProperties
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, error, inputClassName, inputStyle, customComponent, ...rest },
    ref
  ) => {
    return (
      <article className={clsx(className)}>
        <div className="relative">
          <input
            className={clsx(
              'h-9 w-full py-1.5 px-3 text-sm text-[#55555] bg-sbm-white ' +
                ' border border-[#ccc] rounded outline-none transition' +
                ' focus:border-sbm-blue-10 focus:shadow-focusInput',
              {
                '!border-[#a94442] !shadow-none': error,
              },
              inputClassName
            )}
            {...rest}
            ref={ref}
            value={rest?.value || ''}
            style={inputStyle}
            onWheel={
              rest.type === 'number'
                ? (e: any) => {
                    e.target?.blur?.()
                  }
                : undefined
            }
            inputMode={rest.type === 'number' ? 'numeric' : 'text'}
          />
          {customComponent}
        </div>

        {!!error && <ErrorMessage className="">{error}</ErrorMessage>}
      </article>
    )
  }
)

export const FormInput = (
  props: InputProps & {
    name: UseControllerProps['name']
    rules?: Omit<
      RegisterOptions<FieldValues, string>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
  }
) => {
  const { control } = useFormContext()
  const { name, rules, className, ...rest } = props
  return (
    <Controller
      name={name}
      rules={rules as UseControllerProps['rules']}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...rest}
          {...field}
          className={className}
          error={fieldState?.error?.message}
        />
      )}
    />
  )
}

type ITextarea = React.InputHTMLAttributes<HTMLTextAreaElement> &
  Pick<InputProps, 'className' | 'error'>

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  (props, ref) => {
    const { className, error, ...rest } = props

    return (
      <article className={className || ''}>
        <textarea
          ref={ref}
          className={clsx(
            'w-full min-h-[180px] py-1.5 px-3 text-sm text-[#55555] bg-sbm-white border border-[#ccc] rounded outline-none transition focus:border-sbm-blue-10 focus:shadow-focusInput',
            {
              '!border-[#a94442] !shadow-none': error,
            }
          )}
          {...rest}
        />
        {!!error && <ErrorMessage>{error}</ErrorMessage>}
      </article>
    )
  }
)

export const FormTextarea = (
  props: ITextarea & {
    name: UseControllerProps['name']
    rules?: Omit<
      RegisterOptions<FieldValues, string>,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
  }
) => {
  const { control } = useFormContext()
  const { name, rules, className, ...rest } = props
  return (
    <Controller
      name={name}
      rules={rules as UseControllerProps['rules']}
      control={control}
      render={({ field, fieldState }) => (
        <Textarea
          {...rest}
          {...field}
          className={className}
          error={fieldState?.error?.message}
        />
      )}
    />
  )
}
