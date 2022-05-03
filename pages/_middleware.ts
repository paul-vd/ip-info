import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'ZA'
  return NextResponse.json({ country_code: country, ip: request.ip, ...request.geo })
}
