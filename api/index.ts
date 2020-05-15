import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'

function GetUserIP(req: NowRequest): string {
  console.log(req.headers)
  return ''
}

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    if (req.method !== 'GET') throw new Error('Only GET methods are allowed')
    const queryIp = req.query.ip

    let ip = queryIp as any

    GetUserIP(req)

    if (!ip) {
      ip = req.headers['x-forwarded-for']
      if (typeof ip === 'string') ip = ip.split(',')[0]
      else ip = ip[0]
    }

    if (!ip || process.env.NODE_ENV === 'development') {
      await fetch('https://api6.ipify.org').then(async (res: any) => (ip = await res.text()))
    }

    console.log({
      realIP: ip,
      queryIp,
      cfConnectionIp: req.headers['CF-Connecting-IP'],
      xForwadedFor: req.headers['x-forwarded-for'],
    })

    // if (process.env.NODE_ENV === 'development') {
    //   await fetch('https://api6.ipify.org').then(async (res) => (ip = await res.text()))
    // }
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
