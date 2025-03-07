'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Spinner } from '@/assets/icon/spinner'
import { IRegistrationBody, useContactUs } from '@/shared/api/contactUs'
import { isValidEmail } from '@/shared/helpers/validations'
import { Button } from '@/shared/ui/Button'
import { FormInput, FormTextarea } from '@/shared/ui/Input'
import {
  defaultPhoneValue,
  getPhoneByCode,
} from '@/shared/ui/PhoneInput/constants'
import { FormPhoneInput } from '@/shared/ui/PhoneInput/PhoneInput'
import { ErrorMessage, P14, P16 } from '@/shared/ui/Typography'

interface IForm {
  name: string
  email: string
  // file: File | null
  body: string
  phone: {
    phoneNumber: string
    phoneCode: string
  }
}

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine(isValidEmail, 'Invalid email'),
  // file: z.any(),
  body: z.string().min(1, 'This field is required'),
  phone: z
    .object({
      phoneNumber: z.string().min(1, 'Phone number is required'),
      phoneCode: z.string().min(1, 'Phone code is required'),
    })
    .superRefine(({ phoneNumber, phoneCode }, ctx) => {
      if (!isValidPhoneNumber(phoneNumber, phoneCode as CountryCode)) {
        ctx.addIssue({
          code: 'custom',
          message: 'Invalid phone number',
        })
      }
    }),
})

export const ContactForm = () => {
  const methods = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      // file: null,
      body: '',
      phone: defaultPhoneValue,
    },
    resolver: zodResolver(contactFormSchema),
  })

  const postContactUs = useContactUs()
  const [loading, setLoading] = useState(false)
  const handleFormSubmit = async (data: IForm) => {
    setLoading(true)
    const recaptchaToken = await window.grecaptcha
      .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '', {
        action: 'submit',
      })
      .catch(() => {
        setLoading(false)
      })

    if (!recaptchaToken) {
      setLoading(false)
      return
    }

    const body: IRegistrationBody = {
      name: data.name,
      email: data.email,
      subject:
        getPhoneByCode(data.phone.phoneCode, data.phone.phoneNumber) || '',
      body: data.body,
      // file: data.file || undefined,
      verifyCode: recaptchaToken || '',
    }

    await postContactUs.mutateAsync(body)
    setLoading(false)
    methods.reset()
  }

  const isLoading = postContactUs.isPending || loading

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className=" mt-12 container-v2"
      >
        <div className="grid tablet:grid-cols-3 gap-5">
          <FormInput placeholder="Your name" name="name" />
          <FormInput placeholder="Your email" name="email" />
          <FormPhoneInput name="phone" />
        </div>
        <FormTextarea
          className="mt-5"
          name="body"
          placeholder="Questions, comments, suggestions, or anything else you’d like to share with us..."
        />

        {/*<Controller*/}
        {/*  name="file"*/}
        {/*  render={({ field }) => <UploadFile {...field} />}*/}
        {/*/>*/}

        <Button
          size="medium"
          type="submit"
          className="w-fit mt-4 h-[48px] mx-auto block uppercase"
          variant="green"
          disabled={isLoading}
        >
          <P14
            className={clsx('uppercase', { 'opacity-0': isLoading })}
            weight="font-bold"
            color="text-sbm-white"
          >
            submit
          </P14>
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-inherit">
              <Spinner width={25} height={25} className="animate-spin" />
            </div>
          )}
        </Button>

        {postContactUs.isError && (
          <ErrorMessage className="text-center">
            Server Error. Please try again
          </ErrorMessage>
        )}
        {postContactUs.isSuccess && (
          <P16
            weight="font-medium"
            color="text-sbm-green"
            className="text-center mt-2"
          >
            Thank you! Your message has been successfully sent.
          </P16>
        )}
      </form>
    </FormProvider>
  )
}
