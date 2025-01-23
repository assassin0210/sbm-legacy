'use client'
import { clsx } from 'clsx'
import React, { memo } from 'react'
import { Controller, FieldValues, RegisterOptions } from 'react-hook-form'

import { Input } from '@/shared/ui/Input'
import { countryByCode } from '@/shared/ui/PhoneInput/constants'
import { PhoneDropdown } from '@/shared/ui/PhoneInput/CountryCodeDropdown'
import { P14 } from '@/shared/ui/Typography'

interface IProps {
  error?: string | boolean
  value?: { phoneNumber: string; phoneCode: string }
  onChange: (v: { phoneCode?: string; phoneNumber?: string }) => void

  className?: string
}
export const PhoneInput = (props: IProps) => {
  const { value, onChange, error, className } = props

  const code = countryByCode?.[value?.phoneCode || '']?.dial_code

  return (
    <article className={clsx(className, 'w-full')}>
      <div className={'flex gap-0.5 w-full'}>
        <PhoneDropdown
          onChange={(v) =>
            onChange({
              phoneNumber: value?.phoneNumber,
              phoneCode: v,
            })
          }
          value={value?.phoneCode ?? 'US'}
        />
        <Input
          error={error as string}
          customComponent={<CodePreview code={code} />}
          inputStyle={{ paddingLeft: 21 + (code?.length || 0) * 6 }}
          inputClassName="rounded-l-none w-full"
          className="w-full relative"
          type="number"
          value={value?.phoneNumber ?? ''}
          onChange={(e) =>
            onChange({
              phoneNumber: e.target.value,
              phoneCode: value?.phoneCode,
            })
          }
        />
      </div>
    </article>
  )
}

const CodePreview = ({ code }: { code?: string }) => {
  if (!code) {
    return null
  }

  const code_ = code?.[0] === '+' ? code : '+' + code

  return (
    <P14
      weight="font-medium"
      className={clsx(' absolute left-2 top-1/2  transform -translate-y-1/2')}
    >
      {code_}
    </P14>
  )
}

interface IFormPhoneInput extends Omit<IProps, 'value' | 'onChange'> {
  name: string
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'disabled' | 'setValueAs' | 'valueAsNumber' | 'valueAsDate'
  >
}
export const FormPhoneInput = memo((_props: IFormPhoneInput) => {
  const { name, rules, ...props } = _props

  return (
    <Controller
      rules={rules}
      name={name ?? ''}
      render={({ field: { onChange, value, ...rest }, fieldState }) => (
        <PhoneInput
          {...rest}
          {...props}
          error={fieldState?.error?.message}
          onChange={(v) => onChange(v)}
          value={value}
        />
      )}
    />
  )
})
