import countriesAndPhones from './countryAndPhoneCodes.json'

export const countryByCode: Record<
  string,
  { name: string; dial_code: string; code: string }
> = countriesAndPhones.reduce(
  (acc, item) => ({ ...acc, [item.code]: item }),
  {}
)

export const defaultPhoneValue = {
  phoneNumber: '',
  phoneCode: 'US',
}

export const phoneOptions = countriesAndPhones.map((country) => ({
  countryName: country.name,
  dial_code: country.dial_code,
  value: country.code,
}))

export const getPhoneByCode = (code?: string, phone?: string) => {
  if (!code) {
    return null
  }
  return countryByCode?.[code].dial_code + phone
}
