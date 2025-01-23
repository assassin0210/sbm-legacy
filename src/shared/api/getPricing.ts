import { UndefinedInitialDataOptions } from '@tanstack/react-query'

import { instance } from '@/shared/api/instance'
import { api_links } from '@/shared/constants/api_links'

export const getPricing = async () => {
  try {
    const { data } = await instance.get<IPricingObject>(api_links.pricing)

    return data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return {}
  }
}

export const queryPricing =
  (): UndefinedInitialDataOptions<IPricingObject> => ({
    queryKey: ['pricing'],
    queryFn: async () => {
      return await getPricing()
    },
  })

export type IPricingObject = Record<string, IPricing>

export interface IPricing {
  label: string
  monthly: number
  setup_fee: number
  child_limit: number
  user_limit: number
  type: string
}
