import '../../styles/styles.scss'

import { QueryClient } from '@tanstack/react-query'
import parse from 'html-react-parser'

import { PageLayout } from '@/app/components/PageLayout'
import { queryStaticPage } from '@/shared/api/getStaticPages'

const Terms = async () => {
  const queryClient = await new QueryClient()
  const response = await queryClient.fetchQuery(queryStaticPage(4))

  return (
    <PageLayout title={response.title || ''}>
      <div className="container terms">{parse(response.content || '')}</div>
    </PageLayout>
  )
}

export default Terms
