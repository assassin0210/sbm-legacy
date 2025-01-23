import Link from 'next/link'

export const Contacts = () => {
  return (
    <div>
      <h3 className="text-[24px] mb-1 mt-0">Toll Free</h3>
      <Link
        className="block w-fit text-sbm-blue-30 hover:text-sbm-blue-40 hover:underline transition"
        href={'tel:+18886676883'}
      >
        1.888.66.ROUTE
      </Link>
      <Link
        className="block w-fit text-sbm-blue-30 hover:text-sbm-blue-40 hover:underline transition"
        href={'tel:+18886676883'}
      >
        1.888.667.6883
      </Link>
      <h3 className="text-[24px] mb-1">Main</h3>
      <Link
        className="block w-fit text-sbm-blue-30 hover:text-sbm-blue-40 hover:underline transition"
        href={'tel:+13868826218'}
      >
        1.888.66.ROUTE
      </Link>
      <h3 className="text-[24px] mb-1">Address</h3>

      <address className="not-italic">
        <strong>Mailing</strong>
        <br />
        3817 S Nova Road, Suite 5007
        <br />
        Port Orange, FL 32127
      </address>
      <h3 className="text-[24px] mb-1">Business Hours</h3>
      <p>Mon-Fri 9:00am to 5:00pm EST</p>
    </div>
  )
}
