import { isValidPhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

import { isValidEmail } from '@/shared/helpers/validations'

export const useFormSchema = () => {
  return z
    .object({
      companyName: z.string(),
      address: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      firstName: z.string(),
      lastName: z.string(),

      phone: z
        .object({
          phoneNumber: z.any().nullable().optional(),
          phoneCode: z.any().optional(),
        })
        .optional(),
      email: z
        .string()
        .min(1, 'Email is required')
        .refine(isValidEmail, 'Incorrect email'),
    })
    .superRefine((form, ctx) => {
      const email = form.email
      const firstName = form.firstName?.trim() || ''
      const lastName = form.lastName?.trim() || ''

      const phone = form?.phone
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
          message: 'This field is required',
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

      if (!firstName) {
        ctx.addIssue({
          code: 'custom',
          path: ['firstName'],
          message: 'This field is required',
        })
      }

      if (!lastName) {
        ctx.addIssue({
          code: 'custom',
          path: ['lastName'],
          message: 'This field is required',
        })
      }

      if (!form.city.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['city'],
          message: 'City is required',
        })
      }

      if (!form.zip.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['zip'],
          message: 'This field is required',
        })
      } else {
        if (form.zip.trim().length > 10) {
          ctx.addIssue({
            code: 'custom',
            path: ['zip'],
            message: 'Invalid zip code',
          })
        }
      }

      if (!form.address.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['address'],
          message: 'This field is required',
        })
      }

      if (!form.companyName) {
        ctx.addIssue({
          code: 'custom',
          path: ['companyName'],
          message: 'This field is required',
        })
      }
      //
      if (!form.state) {
        ctx.addIssue({
          code: 'custom',
          path: ['state'],
          message: 'This field is required',
        })
      }
      if (!form.firstName) {
        ctx.addIssue({
          code: 'custom',
          path: ['username'],
          message: 'This field is required',
        })
      }

      if (!form.phone) {
        ctx.addIssue({
          code: 'custom',
          path: ['phone'],
          message: 'This field is required',
        })
      }
    })
}
