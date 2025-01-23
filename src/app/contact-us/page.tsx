import Image from 'next/image'
import React from 'react'

import { ContactForm } from '@/app/contact-us/components/contactForm'
import { ContactInfoSection } from '@/features/ContactInfoSection'
import { P24, P48 } from '@/shared/ui/Typography'

import map from '../../assets/images/contactMap.png'

const ContactUs = () => {
  return (
    <div className="">
      <section className="bg-sbm-neutral-900 py-20">
        <div className="container max-w-[1170px] mt-20">
          <P48
            weight="font-semibold"
            color="text-sbm-secondary"
            className="text-start"
            as="h1"
          >
            Contact School Bus Manager
          </P48>
          <P24 className="text-start mt-3" weight="font-normal" as="h2">
            Have a question or comment about our software? Whatever you need,
            we’re here to help.
          </P24>
        </div>
        <ContactForm />
      </section>
      <ContactInfoSection className="pb-20 pt-14" title="Contact Info" />
      <section className="min-h-[526px] relative">
        <div className="absolute inset-0">
          <Image
            className="object-cover object-center w-full h-full"
            src={map}
            height={526}
            width={2000}
            alt="map"
          />
        </div>
      </section>
    </div>
  )
}

export default ContactUs
