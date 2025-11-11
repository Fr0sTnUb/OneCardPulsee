const DEFAULT_GA_ID = 'G-HBGVT511BH'
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || DEFAULT_GA_ID

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let hasWarnedMissingId = false

const ensureMeasurementConfigured = (): boolean => {
  if (GA_MEASUREMENT_ID) return true

  if (!hasWarnedMissingId && import.meta.env.DEV) {
    console.warn('VITE_GA_MEASUREMENT_ID is not configured; GA events will be skipped.')
    hasWarnedMissingId = true
  }
  return false
}

const ensureGtag = (): boolean => {
  if (typeof window === 'undefined') return false

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }

  return true
}

export const initGA = () => {
  if (!ensureMeasurementConfigured()) return
  ensureGtag()
}

export const trackPageView = (path: string) => {
  initGA()
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  try {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: `${window.location.origin}${path}`,
      page_title: document.title
    })
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  initGA()
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    })
  } catch (error) {
    console.error('Error tracking event:', error)
  }
}

export { GA_MEASUREMENT_ID }
