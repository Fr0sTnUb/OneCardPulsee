import { GoogleAuth } from 'google-auth-library'

const {
  GA_PROPERTY_ID,
  GA_CLIENT_EMAIL,
  GA_PRIVATE_KEY
} = process.env

const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']

const parseMetricValue = (metrics = [], index) =>
  Number(metrics[index]?.value ?? 0)

const buildAuthClient = async () => {
  if (!GA_PROPERTY_ID || !GA_CLIENT_EMAIL || !GA_PRIVATE_KEY) {
    throw new Error(
      'Missing GA_PROPERTY_ID, GA_CLIENT_EMAIL, or GA_PRIVATE_KEY environment variables.'
    )
  }

  const auth = new GoogleAuth({
    credentials: {
      client_email: GA_CLIENT_EMAIL,
      private_key: GA_PRIVATE_KEY.replace(/\\n/g, '\n')
    },
    scopes: SCOPES
  })

  return auth.getClient()
}

const runRealtimeReport = async (authClient, body) => {
  const accessTokenResponse = await authClient.getAccessToken()
  const accessToken =
    typeof accessTokenResponse === 'string'
      ? accessTokenResponse
      : accessTokenResponse?.token

  if (!accessToken) {
    throw new Error('Unable to retrieve Google Analytics access token.')
  }

  const response = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runRealtimeReport`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Google Analytics API error (${response.status}): ${errorText}`
    )
  }

  return response.json()
}

export default async function handler(_req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  try {
    const authClient = await buildAuthClient()

    const [overviewReport, outboundReport] = await Promise.all([
      runRealtimeReport(authClient, {
        metrics: [
          { name: 'activeUsers' },
          { name: 'newUsers' },
          { name: 'sessions' },
          { name: 'userEngagementDuration' },
          { name: 'engagementRate' },
          { name: 'screenPageViews' }
        ]
      }),
      runRealtimeReport(authClient, {
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: {
              matchType: 'EXACT',
              value: 'click'
            }
          }
        }
      })
    ])

    const overviewMetrics =
      overviewReport.totals?.[0]?.metricValues ??
      overviewReport.rows?.[0]?.metricValues ??
      []

    const outboundMetrics =
      outboundReport.totals?.[0]?.metricValues ??
      outboundReport.rows?.[0]?.metricValues ??
      []

    const activeUsers = parseMetricValue(overviewMetrics, 0)
    const newUsers = parseMetricValue(overviewMetrics, 1)
    const sessions = parseMetricValue(overviewMetrics, 2)
    const totalEngagementSeconds = parseMetricValue(overviewMetrics, 3)
    const engagementRate = parseMetricValue(overviewMetrics, 4)
    const pageViews = parseMetricValue(overviewMetrics, 5)
    const outboundClicks = parseMetricValue(outboundMetrics, 0)

    const sessionDuration =
      sessions > 0 ? totalEngagementSeconds / sessions : 0
    const bounceRate =
      engagementRate > 0 ? Math.max(0, 100 - engagementRate * 100) : 0

    res.status(200).json({
      pageViews,
      outboundClicks,
      bounceRate: Number(bounceRate.toFixed(1)),
      sessionDuration: Number(sessionDuration.toFixed(0)),
      activeUsers,
      newUsers,
      generatedAt: Date.now(),
      source: 'ga4'
    })
  } catch (error) {
    console.error('GA realtime proxy error:', error)
    res.status(500).json({
      error: 'Failed to retrieve GA4 realtime data',
      details: error.message
    })
  }
}
