import axios from 'axios'

export async function POST(req: Request) {
  const data = await req?.json()

  const response = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
      response: data.recaptchaToken,
    },
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  return new Response(JSON.stringify(response.data))
}
