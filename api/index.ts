import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'

export default async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    if (req.method !== 'GET') throw new Error('Only GET methods are allowed')
    const queryIp = req.query.ip

    let ip = queryIp || req.headers['x-forwarded-for'] || req.headers['CF-Connecting-IP']

    console.log({
      queryIp,
      cfConnectionIp: req.headers['CF-Connecting-IP'],
      xForwadedFor: req.headers['x-forwarded-for'],
    })

    await fetch('https://api6.ipify.org').then(async (res) => {
      const ipify = await res.text()
      console.log({ ipify })
    })

    if (process.env.NODE_ENV === 'development') {
      await fetch('https://api6.ipify.org').then(async (res) => (ip = await res.text()))
    }
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
