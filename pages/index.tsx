import { NextPage, NextPageContext, NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

const App: NextPage = () => null // ignore this because we overide the response within the server at .getInitialProps

interface PageContext extends NextPageContext {
  req: NextApiRequest
  res: NextApiResponse
}

App.getInitialProps = async ({ req, res }: PageContext) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  try {
    const ip = req.headers['x-forwarded-for']
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
    res.write(JSON.stringify(data))
    res.end()
  } catch (error) {
    res.write(JSON.stringify({ message: error.message }))
    res.end()
  }
}

export default App
