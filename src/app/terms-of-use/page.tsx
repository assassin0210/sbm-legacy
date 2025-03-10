import '../../styles/styles.scss'

import parse from 'html-react-parser'
import { notFound } from 'next/navigation'

import { PageLayout } from '@/app/components/PageLayout'
import { instance } from '@/shared/api/instance'
import { api_links } from '@/shared/constants/api_links'

const Terms = async () => {
  try {
    const { data } = await instance.get(api_links.staticPages(1))

    return (
      <PageLayout title={data.title || ''}>
        <div className="container-v2 terms">{parse(data.content || '')}</div>
      </PageLayout>
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: any) {
    notFound()
  }
}

export default Terms
