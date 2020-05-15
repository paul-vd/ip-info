import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'

async function getUserIP(req: NowRequest) {
  let ip: string = ''
  if (!ip) {
    const xForwadedFor = req.headers['x-forwarded-for']
    if (xForwadedFor) {
      if (typeof xForwadedFor === 'string') ip = xForwadedFor.split(',')[0]
      else ip = xForwadedFor[0]
    } else {
      const realip = req.headers['x-forwarded-for']
      if (realip && typeof realip === 'string') ip = realip.split(',')[0]
      else ip = req.connection.remoteAddress || ''
    }
  }

  if (!ip || process.env.NODE_ENV === 'development') await fetch('https://api6.ipify.org').then(async (res: any) => (ip = await res.text()))
  return ip
}

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    if (req.method !== 'GET') throw new Error('Only GET methods are allowed')
    const queryIp = req.query.ip

    let ip = queryIp as string

    if (!ip) ip = await getUserIP(req)

    if (!ip) throw new Error('No valid ip found')
    const response = await fetch(`https://freegeoip.app/json/${ip}`, {
      method: 'get',
      mode: 'no-cors',
      headers: {
        accept: 'application/json',
      },
    })
    if (!response.ok) throw new Error('API error')
    const data = await response.json()
    return res.json(data)
  } catch (error) {
    return res.json({ message: error.message })
  }
}
