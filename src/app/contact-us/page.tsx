import Image from 'next/image'
import React from 'react'

import { ContactForm } from '@/app/contact-us/components/contactForm'
import { ContactInfoSection } from '@/features/ContactInfoSection'
import { P20, P38 } from '@/shared/ui/Typography'

import map from '../../assets/images/contactMap.png'

const ContactUs = () => {
  return (
    <div className="">
      <section className="bg-sbm-neutral-900 py-16">
        <div className="container-v2 mt-20">
          <P38
            weight="font-semibold"
            color="text-sbm-secondary"
            className="text-start"
            as="h1"
          >
            Contact School Bus Manager
          </P38>
          <P20 className="text-start mt-1" weight="font-normal" as="h2">
            Have a question or comment about our software? Whatever you need,
            we’re here to help.
          </P20>
        </div>
        <ContactForm />
      </section>
      <ContactInfoSection className="pb-16 pt-12" title="Contact info" />
      <section className="min-h-[380px] relative">
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
