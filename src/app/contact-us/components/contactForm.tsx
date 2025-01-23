'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { isValidPhoneNumber } from 'libphonenumber-js'
import React from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Spinner } from '@/assets/icon/spinner'
import { IRegistrationBody, useContactUs } from '@/shared/api/contactUs'
import { isValidEmail } from '@/shared/helpers/validations'
import { FormInput, FormTextarea } from '@/shared/ui/Input'
import {
  defaultPhoneValue,
  getPhoneByCode,
} from '@/shared/ui/PhoneInput/constants'
import { FormPhoneInput } from '@/shared/ui/PhoneInput/PhoneInput'
import { ErrorMessage, P14, P16 } from '@/shared/ui/Typography'
import { UploadFile } from '@/shared/ui/UploadFile/UploadFile'

interface IForm {
  name: string
  email: string
  file: File | null
  body: string
  phone: {
    phoneNumber: string
    phoneCode: string
  }
}

export const ContactForm = () => {
  const schema = z
    .object({
      name: z.string(),
      email: z.string(),
      file: z.any(),
      body: z.string(),
      phone: z
        .object({
          phoneNumber: z.any().nullable().optional(),
          phoneCode: z.any().optional(),
        })
        .optional(),
    })
    .superRefine((form, ctx) => {
      const email = form.email

      const phone = form?.phone

      if (!form.name) {
        ctx.addIssue({
          code: 'custom',
          path: ['name'],
          message: 'Name is required',
        })
      }
      if (!form.body) {
        ctx.addIssue({
          code: 'custom',
          path: ['body'],
          message: 'Body is required',
        })
      }

      if (!phone?.phoneNumber || !phone?.phoneCode) {
        ctx.addIssue({
          code: 'custom',
          path: ['phone'],
          message: 'Phone is required',
        })
      } else {
        const isValidPhone = isValidPhoneNumber(
          phone?.phoneNumber,
          phone?.phoneCode
        )
        if (!isValidPhone) {
          ctx.addIssue({
            code: 'custom',
            path: ['phone'],
            message: 'Invalid phone number',
          })
        }
      }
      if (!email) {
        ctx.addIssue({
          code: 'custom',
          path: ['email'],
          message: 'Email is required',
        })
      } else {
        if (!isValidEmail(email)) {
          ctx.addIssue({
            code: 'custom',
            path: ['email'],
            message: 'Invalid email',
          })
        }
      }
    })

  const methods = useForm<IForm>({
    defaultValues: {
      name: '',
      email: '',
      file: null,
      body: '',
      phone: defaultPhoneValue,
    },
    resolver: zodResolver(schema),
  })

  const postContactUs = useContactUs()

  const handleFormSubmit = async (data: IForm) => {
    const recaptchaToken = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
      { action: 'submit' }
    )

    const body: IRegistrationBody = {
      name: data.name,
      email: data.email,
      subject:
        getPhoneByCode(data.phone.phoneCode, data.phone.phoneNumber) || '',
      body: data.body,
      file: data.file || undefined,
      verifyCode: recaptchaToken,
    }

    postContactUs.mutateAsync(body).then(() => {
      methods.reset()
    })
  }
  const isLoading = postContactUs.isPending

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="container max-w-[1170px] mt-12"
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

        <Controller
          name="file"
          render={({ field }) => <UploadFile {...field} />}
        />

        <button
          disabled={isLoading}
          className=" relative h-12 mx-auto mt-5 w-fit block px-12 py-3 shadow-buttonShadow rounded-full"
          type="submit"
        >
          <P14
            className={clsx('uppercase', {
              'opacity-0': isLoading,
            })}
            weight="font-bold"
          >
            submit
          </P14>
          {isLoading && (
            <div
              className={clsx(
                'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-inherit'
              )}
            >
              <Spinner
                width={25}
                height={25}
                className={clsx('animate-spin')}
              />
            </div>
          )}
        </button>
        {postContactUs.isError && (
          <ErrorMessage className="text-center">
            Server Error. Please try again
          </ErrorMessage>
        )}
        {postContactUs.isSuccess && (
          <P16 className="text-green-600 text-center">
            Thank you! Your message has been successfully sent.
          </P16>
        )}
      </form>
    </FormProvider>
  )
}
