'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next-nprogress-bar'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { useFormSchema } from '@/app/15-day-free-trial/components/useFormSchema'
import { queryPricing } from '@/shared/api/getPricing'
import { IRegistrationBody, useRegister } from '@/shared/api/registration'
import { page_links } from '@/shared/constants/page_links'
import { Button } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { FormInput } from '@/shared/ui/Input'
import {
  defaultPhoneValue,
  getPhoneByCode,
} from '@/shared/ui/PhoneInput/constants'
import { FormPhoneInput } from '@/shared/ui/PhoneInput/PhoneInput'
import { FormSelect } from '@/shared/ui/Select'
import { ErrorMessage, P14 } from '@/shared/ui/Typography'

interface IForm {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  city: string
  zipCode: string
  streetAddress: string
  phone: {
    phoneNumber: string
    phoneCode: string
  }
  companyName: string
  state: string
  username: string
  billingPlan: string
  represent: string
  described: string
  captchaToken: string
  agree: boolean
}

export const StartedForm = () => {
  const router = useRouter()
  const pricing = useQuery(queryPricing())
  const schema = useFormSchema()

  const bilingOptions = Object.keys(pricing.data ?? {}).map((key) => ({
    label: `up to ${pricing.data?.[key].child_limit} riders`,
    value: key,
  }))

  const defaultValues: IForm = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    city: '',
    zipCode: '',
    streetAddress: '',
    phone: defaultPhoneValue,
    companyName: '',
    state: '',
    username: '',
    billingPlan: bilingOptions[0].value,
    represent: representOptions[0].value,
    described: describeOptions[0].value,
    captchaToken: '',
    agree: false,
  }

  const methods = useForm<IForm>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  })
  const [error, setError] = useState('')
  const register = useRegister()
  const onSubmit = async (data: IForm) => {
    setError('')
    const recaptchaToken = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
      { action: 'submit' }
    )

    const result: IRegistrationBody = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      zipCode: data.zipCode,
      streetAddress: data.streetAddress,
      phone: getPhoneByCode(data.phone.phoneCode, data.phone.phoneNumber) || '',
      companyName: data.companyName,
      state: data.state,
      username: data.username,
      billingPlan: data.billingPlan,
      represent: data.represent,
      described: data.described,
      captchaToken: recaptchaToken,
    }

    register
      .mutateAsync(result)
      .then(() => {
        router.push(page_links.appLogin)
      })
      .catch(() => {
        setError('Server Error. Please try again')
      })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="h-fit mt-2">
        <div className="grid grid-cols-2 tablet:grid-cols-6 gap-3 tablet:gap-5">
          <FormInput
            placeholder="First Name"
            className="col-span-1 tablet:col-span-2"
            name="firstName"
          />
          <FormInput
            placeholder="Last Name"
            className="col-span-1 tablet:col-span-2"
            name="lastName"
          />
          <FormPhoneInput className="col-span-2" name="phone" />
          <FormInput
            placeholder="Name of the school,organization, or company you represent"
            className="col-span-2 tablet:col-span-4"
            name="companyName"
          />
          <FormInput
            placeholder="Yout email"
            className="col-span-2"
            name="email"
          />
          {/*//*/}
          <FormInput
            placeholder="Steet Address (no P.O.Boxes)"
            className="col-span-2 tablet:col-span-6"
            name="streetAddress"
          />
          {/*//*/}
          <FormInput
            placeholder="City of Town"
            className="col-span-1 tablet:col-span-3"
            name="city"
          />
          <FormInput
            placeholder="State of Province"
            className="col-span-1"
            name="state"
          />
          <FormInput
            placeholder="Zip or Pastal Code"
            className="col-span-1 tablet:col-span-2"
            name="zipCode"
          />
          {/*//*/}
          <FormInput
            placeholder="Create a username (can be email)"
            className="col-span-1 tablet:col-span-2"
            name="username"
          />
          <FormInput
            placeholder="Create a password (min of 6 char.)"
            className="col-span-1 tablet:col-span-2"
            name="password"
            type="password"
          />
          <FormInput
            placeholder="Confirm password"
            className="col-span-1 tablet:col-span-2"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-x-3 gap-y-6 mt-6 items-centerss">
          <article>
            <P14
              weight="font-bold"
              className=" uppercase maxMobile:text-[12px]"
            >
              I manage:
            </P14>
            <FormSelect
              className="col-span-1"
              name="billingPlan"
              options={bilingOptions}
            />
          </article>

          <article>
            <P14
              weight="font-bold"
              className=" uppercase maxMobile:text-[12px]"
            >
              I represent a:
            </P14>
            <FormSelect
              className="col-span-1"
              name="represent"
              options={representOptions}
            />
          </article>

          <article>
            <P14 weight="font-bold" className="uppercase maxMobile:text-[12px]">
              I Describe Myself As:
            </P14>
            <FormSelect
              className="col-span-1"
              name="described"
              options={describeOptions}
            />
          </article>
        </div>

        <Controller
          name="agree"
          render={({ field, fieldState }) => {
            return (
              <article className="mx-auto w-fit mt-8">
                <div className="inline">
                  <P14 className="mx-auto inline" weight="font-bold">
                    I have read the{' '}
                    <Link
                      className="text-sbm-primary underline"
                      href={page_links.termsOfUse}
                    >
                      Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link
                      className="text-sbm-primary underline"
                      href={page_links.eula}
                    >
                      EULA
                    </Link>{' '}
                    and I agree:{' '}
                  </P14>{' '}
                  <Checkbox {...field} checked={field.value} />
                </div>

                {fieldState.error?.message && (
                  <ErrorMessage className="!m-0 flex">
                    {fieldState.error?.message}
                  </ErrorMessage>
                )}
              </article>
            )
          }}
        />

        <Button
          size="medium"
          type="submit"
          className="w-fit mt-4 h-[48px] mx-auto block"
          variant="green"
          isLoading={register.isPending}
        >
          Start your free trial
        </Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </FormProvider>
  )
}

const manageOptions = [
  {
    label: 'up to 500 riders',
    value: '0',
  },
  {
    label: 'up to 1000 riders',
    value: '1',
  },
  {
    label: 'up to 2500 riders',
    value: '2',
  },
  {
    label: 'up to 5000 riders',
    value: '3',
  },
]
// School/School District
// Head Strat
// Camp
// Adult Center
// Transportation provider
// Consulting
// Other
const representOptions = [
  { label: 'School/School District', value: 'School/School District' },
  { label: 'Head Start', value: 'Head Start' },
  { label: 'Camp', value: 'Camp' },
  { label: 'Adult Center', value: 'Adult Center' },
  { label: 'Transportation provider', value: 'Transportation provider' },
  { label: 'Consulting', value: 'Consulting' },
  { label: 'Other', value: 'Other' },
]

const describeOptions = [
  {
    label: 'Bus Contractor',
    value: '0',
  },
  {
    label: 'IT Manager',
    value: '1',
  },
  {
    label: 'Transportation Coordinator',
    value: '2',
  },
  {
    label: 'School Administrator',
    value: '3',
  },
]
