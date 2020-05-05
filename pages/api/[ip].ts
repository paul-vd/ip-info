import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

function validIP(ip: string) {
  const ipArr = ip.split('.')
  let valid = true
  if (ipArr.length !== 4) return false
  ipArr.forEach((item) => {
    const itemNum = parseInt(item)
    if (!itemNum) valid = false
    else if (itemNum < 0 || itemNum > 255) valid = false
  })
  return valid
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.headers)
    const ip = req.query.ip as string
    if (!ip || !validIP(ip)) throw new Error('Invalid ip address')
    const response = await fetch(`https://freegeoip.app/json/${ip}`, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    })
    if (!response.ok) throw new Error('API error')
    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
}
