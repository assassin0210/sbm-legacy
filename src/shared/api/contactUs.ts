import { useMutation } from '@tanstack/react-query'

import { instance } from '@/shared/api/instance'
import { api_links } from '@/shared/constants/api_links'

export interface IRegistrationBody {
  name: string
  email: string
  subject: string
  body: string
  verifyCode: string
  file: File | undefined
}

export const contactUsRequest = async (data: IRegistrationBody) => {
  try {
    const response = await instance.postForm<any>(api_links.contactUs, data)
    return response.data
  } catch (e) {
    return Promise.reject(e)
  }
}

export const useContactUs = () =>
  useMutation({
    mutationFn: contactUsRequest,
  })
