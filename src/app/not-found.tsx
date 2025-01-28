import '../styles/styles.scss'

import { PageLayout } from '@/app/components/PageLayout'

const NotFound = () => {
  return (
    <PageLayout title="Not Found (#404)">
      <div className="container mt-6">
        <p className="!text-[#a94442] bg-[#f2dede] border border-[#ebccd1] p-4 rounded">
          Page not found.
        </p>
        <p className="mt-4">
          The above error occurred while the Web server was processing your
          request.
        </p>
        <p>Please contact us if you think this is a server error. Thank you.</p>
      </div>
    </PageLayout>
  )
}

export default NotFound
