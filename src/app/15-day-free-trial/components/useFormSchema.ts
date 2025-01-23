import { isValidPhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

import { isValidEmail, isValidPassword } from '@/shared/helpers/validations'

export const useFormSchema = () => {
  return z
    .object({
      email: z
        .string()
        .min(1, 'Email is required')
        .refine(isValidEmail, 'Incorrect email'),
      password: z.string(),
      confirmPassword: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      city: z.string(),
      zipCode: z.string(),
      streetAddress: z.string(),
      phone: z
        .object({
          phoneNumber: z.any().nullable().optional(),
          phoneCode: z.any().optional(),
        })
        .optional(),
      companyName: z.string(),
      state: z.string(),
      username: z.string(),
      billingPlan: z.string(),
      represent: z.string(),
      captchaToken: z.string(),
      described: z.string(),
      agree: z.boolean(),
    })
    .superRefine((form, ctx) => {
      const email = form.email
      const firstName = form.firstName?.trim() || ''
      const lastName = form.lastName?.trim() || ''
      const password = form?.password?.trim()
      const confirmPassword = form?.confirmPassword?.trim()

      const isValidPas = isValidPassword(password) && !!password

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

      if (!isValidPas) {
        ctx.addIssue({
          code: 'custom',
          path: ['password'],
          message: 'Must be at least 6 letters long',
        })
      }

      if (!confirmPassword) {
        ctx.addIssue({
          code: 'custom',
          path: ['confirmPassword'],
          message: 'Must be at least 6 letters long',
        })
      }

      if (password !== confirmPassword && isValidPas) {
        ctx.addIssue({
          code: 'custom',
          path: ['confirmPassword'],
          message: 'Passwords must be the same',
        })
      }

      if (!form.city.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['city'],
          message: 'City is required',
        })
      }

      if (!form.zipCode.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['zipCode'],
          message: 'This field is required',
        })
      } else {
        if (form.zipCode.trim().length > 10) {
          ctx.addIssue({
            code: 'custom',
            path: ['zipCode'],
            message: 'Invalid zip code',
          })
        }
      }

      if (!form.streetAddress.trim()) {
        ctx.addIssue({
          code: 'custom',
          path: ['streetAddress'],
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
      if (!form.username) {
        ctx.addIssue({
          code: 'custom',
          path: ['username'],
          message: 'This field is required',
        })
      }
      if (!form.billingPlan) {
        ctx.addIssue({
          code: 'custom',
          path: ['billingPlan'],
          message: 'This field is required',
        })
      }
      if (!form.represent) {
        ctx.addIssue({
          code: 'custom',
          path: ['represent'],
          message: 'This field is required',
        })
      }
      if (!form.described) {
        ctx.addIssue({
          code: 'custom',
          path: ['described'],
          message: 'This field is required',
        })
      }
      if (!form.agree) {
        ctx.addIssue({
          code: 'custom',
          path: ['agree'],
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
