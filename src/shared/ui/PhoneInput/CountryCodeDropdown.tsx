import * as Popover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import React, {
  ChangeEvent,
  memo,
  useCallback,
  useRef,
  useState,
  useTransition,
} from 'react'
import ReactCountryFlag from 'react-country-flag'

import { Chevron } from '@/assets/icon/chevron'
// import { Icon } from '@/shared/components/ui/Icon/Icon'
// import { Input } from '@/shared/components/ui/Input/Input'
// import { P14 } from '@/shared/components/ui/Typography'
import { Input } from '@/shared/ui/Input'
import { countryByCode, phoneOptions } from '@/shared/ui/PhoneInput/constants'
import { P14 } from '@/shared/ui/Typography'

interface IProps {
  disabled?: boolean
  error?: string | boolean
  onChange?: (v: string) => void
  value: string
}

export const PhoneDropdown = memo((props: IProps) => {
  const { error, disabled, onChange, value } = props
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState(false)

  const [search, setSearch] = useState('')
  const [options, setOptions] = useState(phoneOptions)
  const [, startTransition] = useTransition()

  const _onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase()
    setSearch(searchTerm)
    startTransition(() =>
      setOptions(
        phoneOptions.filter((option) =>
          option.dial_code
            .concat(option.value, option.countryName)
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      )
    )
  }, [])

  return (
    <Popover.Root open={open} onOpenChange={(v) => setOpen(v)}>
      <Popover.Trigger disabled={disabled} ref={triggerRef} asChild>
        <button
          data-error={!!error}
          className={clsx(
            'h-9 w-16 pl-2 pr-1 flex items-center justify-between border border-[#ccc] bg-sbm-white rounded-l outline-none transition',
            'border border-[#ccc] outline-none transition',
            'focus:border-sbm-blue-10 focus:shadow-focusInput',
            {
              '!border-sbm-error !shadow-none': error,
            }
          )}
          disabled={disabled}
        >
          <ReactCountryFlag
            style={{
              fontSize: '20px',
            }}
            svg
            aria-label={
              countryByCode?.[value]?.name ?? phoneOptions[0].countryName
            }
            countryCode={value ?? phoneOptions[0].value}
          />
          <Chevron
            width={20}
            height={20}
            className={clsx('transition', {
              'rotate-180': open,
              'opacity-50': !!props.disabled,
            })}
          />
        </button>
      </Popover.Trigger>

      <Popover.Content
        className="bg-sbm-white z-20 relative w-[220px] shadow-2xl border border-neutral-05 rounded-lg p-0"
        side="bottom"
        asChild
        align="start"
        sideOffset={5}
      >
        <div>
          <div className={'p-4 pb-2 mb-2 border-b border-neutral-05'}>
            <Input
              placeholder="Search..."
              className=""
              value={search}
              onChange={_onChange}
            />
          </div>
          <div className="max-h-[320px] overflow-auto pb-4">
            {options.map(({ value, countryName }) => (
              <button
                title={countryName}
                className="flex py-1 pl-4 gap-2 hover:bg-primary-30 w-full text-start cursor-pointer"
                onClick={() => {
                  onChange?.(value)
                  setOpen(false)
                }}
                key={value}
              >
                <ReactCountryFlag
                  style={{
                    fontSize: '20px',
                  }}
                  svg
                  aria-label={countryName}
                  countryCode={value}
                />
                <P14 className="truncate w-full">{countryName}</P14>
              </button>
            ))}
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
})
