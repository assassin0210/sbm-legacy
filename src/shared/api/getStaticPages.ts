import { UndefinedInitialDataOptions } from '@tanstack/react-query'

import { instance } from '@/shared/api/instance'
import { api_links } from '@/shared/constants/api_links'

export const enum pagesEnum {
  terms = 1,
  policy = 2,
  licence = 3,
  security = 4,
}

export const getStaticPages = async (id: pagesEnum) => {
  try {
    const { data } = await instance.get(api_links.staticPages(id))

    return data
  } catch (e: any) {
    console.warn('error', e)
    return {}
  }
}

export const queryStaticPage = (
  id: pagesEnum
): UndefinedInitialDataOptions<any> => ({
  queryKey: ['static-pages', id],
  queryFn: async () => {
    return await getStaticPages(id)
  },
})
