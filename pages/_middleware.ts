import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'ZA'

  console.log('Hello World')

  const body = {
    ...request.geo,
    country_code: country,
    ip: request.ip,
    ua: request.ua,
  }

  return new Response(JSON.stringify(body), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
}
