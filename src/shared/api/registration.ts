import { useMutation } from '@tanstack/react-query'

import { instance } from '@/shared/api/instance'
import { api_links } from '@/shared/constants/api_links'

export interface IRegistrationBody {
  email: string
  password: string
  firstName: string
  lastName: string
  city: string
  zipCode: string
  streetAddress: string
  phone: string
  companyName: string
  state: string
  username: string
  billingPlan: string
  represent: string
  described: string
  captchaToken: string
}

export const registrationRequest = async (body: IRegistrationBody) => {
  try {
    const { data } = await instance.post<any>(api_links.register, body)
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export const useRegister = () =>
  useMutation({
    mutationFn: registrationRequest,
  })
