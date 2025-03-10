'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { useFormSchema } from '@/app/campshow/components/useFormSchema'
import { firebaseApiKey, firebaseProjectId } from '@/shared/constants/common'
import { Button } from '@/shared/ui/Button'
import { FormInput } from '@/shared/ui/Input'
import {
  countryByCode,
  defaultPhoneValue,
} from '@/shared/ui/PhoneInput/constants'
import { FormPhoneInput } from '@/shared/ui/PhoneInput/PhoneInput'
import { ErrorMessage, P14, P30 } from '@/shared/ui/Typography'

const firebaseConfig = {
  apiKey: firebaseApiKey,
  projectId: firebaseProjectId,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const defaultValues = {
  companyName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  firstName: '',
  lastName: '',
  phone: defaultPhoneValue,
  email: '',
}

const Campshow = () => {
  const schema = useFormSchema()
  const methods = useForm({ defaultValues, resolver: zodResolver(schema) })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onSubmit = async (data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { phone, ...rest } = data

    const _phone = `${countryByCode[data.phone.phoneCode]?.dial_code} ${data?.phone.phoneNumber}`
    setLoading(true)
    await addDoc(collection(db, 'customers'), {
      ...rest,
      phone: _phone,
      createdAt: new Date(),
    })
      .then(() => {
        setSuccessMessage(true)
      })
      .catch(() => {
        setErrorMessage(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <main className="pt-20 mt-12  container-v2">
      <P30 className="text-center" weight="font-semibold">
        Schoolbusmanager
      </P30>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-2 tablet:grid-cols-4 mt-10  gap-4"
        >
          <FormInput
            className="col-span-2"
            placeholder="Company name"
            name="companyName"
          />
          <FormInput
            className="col-span-2"
            placeholder="Steet Address (no P.O.Boxes)"
            name="address"
          />
          <FormInput
            className="col-span-2"
            name="city"
            placeholder="City of Town"
          />
          <FormInput
            className="col-span-1"
            name="state"
            placeholder="State of Province"
          />
          <FormInput
            className="col-span-1"
            name="zip"
            placeholder="Zip or Pastal Code"
          />
          <FormInput
            className="col-span-2"
            name="firstName"
            placeholder="First Name"
          />
          <FormInput
            className="col-span-2"
            name="lastName"
            placeholder="Last Name"
          />
          <FormPhoneInput className="tablet:col-span-2" name="phone" />
          <FormInput
            className="tablet:col-span-2"
            name="email"
            placeholder="Yout email"
          />
          <div className="col-span-2 tablet:col-span-4 flex justify-center">
            <Button
              isLoading={loading}
              className="mx-auto w-fit mt-3 px-10 py-3 font-semibold"
              variant="green"
            >
              Submit
            </Button>
          </div>
        </form>

        {errorMessage && (
          <ErrorMessage className="text-center mt-3">
            Error! Form submission failed. Please try again.
          </ErrorMessage>
        )}

        {successMessage && (
          <P14
            className="mt-3 text-center"
            weight="font-medium"
            color="text-sbm-green"
          >
            Your form has been submitted successfully
          </P14>
        )}
      </FormProvider>
    </main>
  )
}

export default Campshow
