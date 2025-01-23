import { pagesEnum } from '@/shared/api/getStaticPages'

export const api_links = {
  staticPages: (id: pagesEnum) => `/api/v2/company/page/${id}`,
  pricing: '/api/v2/company/subscription-plans',
  register: '/api/v2/company/register',
  contactUs: '/api/v2/company/contact-us',
}
