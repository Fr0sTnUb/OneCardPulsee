import { useEffect, useState } from 'react'
import { trackEvent } from '../utils/analytics'
import { EyeIcon, RefreshIcon, ChartIcon, ClockIcon, UsersIcon, NewIcon } from './Icons'
import './AnalyticsSection.css'

interface AnalyticsData {
  pageViews: number
  outboundClicks: number
  bounceRate: number
  sessionDuration: number
  activeUsers: number
  newUsers: number
}

const REALTIME_ENDPOINT = import.meta.env.VITE_GA_REALTIME_ENDPOINT

const getMockAnalytics = (): AnalyticsData => ({
  pageViews: Math.floor(Math.random() * 10000) + 5000,
  outboundClicks: Math.floor(Math.random() * 250) + 50,
  bounceRate: Number((Math.random() * 20 + 35).toFixed(1)),
  sessionDuration: Math.floor(Math.random() * 240) + 150,
  activeUsers: Math.floor(Math.random() * 4000) + 1500,
  newUsers: Math.floor(Math.random() * 1500) + 400
})

const fetchRealtimeMetrics = async (): Promise<AnalyticsData> => {
  if (!REALTIME_ENDPOINT) {
    throw new Error('Missing VITE_GA_REALTIME_ENDPOINT for GA4 realtime data bridge')
  }

  const response = await fetch(REALTIME_ENDPOINT, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(`GA realtime request failed (${response.status})`)
  }

  const payload = await response.json()

  return {
    pageViews: Number(payload.pageViews ?? 0),
    outboundClicks: Number(payload.outboundClicks ?? payload.outbound ?? 0),
    bounceRate: Number(payload.bounceRate ?? payload.bounce_rate ?? 0),
    sessionDuration: Number(
      payload.sessionDuration ??
      payload.avgSessionDuration ??
      payload.averageSessionDuration ??
      0
    ),
    activeUsers: Number(payload.activeUsers ?? payload.active_users ?? payload.users ?? 0),
    newUsers: Number(payload.newUsers ?? payload.new_users ?? 0)
  }
}

const AnalyticsSection = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    outboundClicks: 0,
    bounceRate: 0,
    sessionDuration: 0,
    activeUsers: 0,
    newUsers: 0
  })
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isRealtime, setIsRealtime] = useState(false)
  const [realtimeError, setRealtimeError] = useState<string | null>(null)

  useEffect(() => {
    trackEvent('Analytics', 'View Analytics Section', 'Analytics Section')

    const fetchAnalytics = () => {
      setLoading(true)

      fetchRealtimeMetrics()
        .then((data) => {
          setAnalyticsData(data)
          setIsRealtime(true)
          setRealtimeError(null)
        })
        .catch((error: Error) => {
          console.warn('Falling back to mock analytics data:', error.message)
          setAnalyticsData(getMockAnalytics())
          setIsRealtime(false)
          setRealtimeError(error.message)
        })
        .finally(() => {
          setLoading(false)
          setLastUpdated(new Date())
        })
    }

    fetchAnalytics()

    const interval = setInterval(fetchAnalytics, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const handleOutboundClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null

      if (!anchor || !anchor.href) return

      const url = new URL(anchor.href, window.location.href)
      if (url.hostname === window.location.hostname) return

      setAnalyticsData((prev) => ({
        ...prev,
        outboundClicks: prev.outboundClicks + 1
      }))

      trackEvent('Outbound Click', 'click', url.href)
    }

    document.addEventListener('click', handleOutboundClick)
    return () => document.removeEventListener('click', handleOutboundClick)
  }, [])

  const formatDuration = (seconds: number) => {
    if (!seconds) return '0s'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  const formatDate = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container">
        <div className="analytics-header">
          <h2 className="section-title">
            Website <span className="gradient-text">Analytics</span>
          </h2>
          <p className="analytics-subtitle">
            Real-time traffic, engagement, and conversion signals synced with GA4
          </p>
          <div className="ga4-info">
            <span className={`ga4-badge ${isRealtime ? 'ga4-badge-live' : 'ga4-badge-fallback'}`}>
              {isRealtime ? 'Live from GA4 real-time API' : 'Mock data until GA4 bridge configured'}
            </span>
            {!loading && (
              <span className="last-updated">Last updated: {formatDate(lastUpdated)}</span>
            )}
          </div>
          {!isRealtime && realtimeError && (
            <p className="analytics-warning">
              {realtimeError}. Set <code>VITE_GA_REALTIME_ENDPOINT</code> to a secured API that proxies GA4
              real-time metrics server-side so secrets stay hidden.
            </p>
          )}
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading analytics data...</p>
          </div>
        ) : (
          <div className="analytics-grid">
            <div className="card analytics-card">
              <div className="analytics-icon">
                <EyeIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">Page Views</h3>
                <p className="analytics-metric-value">
                  {analyticsData.pageViews.toLocaleString()}
                </p>
                <p className="analytics-metric-change">
                  Synced through your connected GA4 property
                </p>
              </div>
            </div>

            <div className="card analytics-card">
              <div className="analytics-icon">
                <RefreshIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">Outbound Clicks</h3>
                <p className="analytics-metric-value">
                  {analyticsData.outboundClicks.toLocaleString()}
                </p>
                <p className="analytics-metric-change">
                  Captured instantly when visitors click external links
                </p>
              </div>
            </div>

            <div className="card analytics-card">
              <div className="analytics-icon">
                <UsersIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">Active Users</h3>
                <p className="analytics-metric-value">
                  {analyticsData.activeUsers.toLocaleString()}
                </p>
                <p className="analytics-metric-change">
                  Users online in the last 30 minutes
                </p>
              </div>
            </div>

            <div className="card analytics-card">
              <div className="analytics-icon">
                <NewIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">New Users</h3>
                <p className="analytics-metric-value">
                  {analyticsData.newUsers.toLocaleString()}
                </p>
                <p className="analytics-metric-change">
                  First-time visitors tracked via GA4 identity
                </p>
              </div>
            </div>

            <div className="card analytics-card">
              <div className="analytics-icon">
                <ChartIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">Bounce Rate</h3>
                <p className="analytics-metric-value">
                  {analyticsData.bounceRate.toFixed(1)}%
                </p>
                <p className="analytics-metric-change">
                  Lower is better — measured live from GA4 engagement
                </p>
              </div>
            </div>

            <div className="card analytics-card">
              <div className="analytics-icon">
                <ClockIcon size={48} />
              </div>
              <div className="analytics-content">
                <h3 className="analytics-metric-label">Avg. Session Duration</h3>
                <p className="analytics-metric-value">
                  {formatDuration(analyticsData.sessionDuration)}
                </p>
                <p className="analytics-metric-change">
                  Real-time engaged time per visitor session
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="analytics-info">
          <p>
            <strong>Google Analytics Active:</strong> All key engagement metrics stream into GA4 in real time so you can drill down by destination URL inside the{' '}
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="analytics-link"
            >
              Google Analytics Dashboard
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSection
