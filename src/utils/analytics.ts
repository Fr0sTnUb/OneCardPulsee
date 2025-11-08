const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? ''

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

const isGtagAvailable = (): boolean =>
  typeof window !== 'undefined' && typeof window.gtag === 'function'

let hasWarnedMissingId = false

const ensureMeasurementConfigured = (): boolean => {
  if (GA_MEASUREMENT_ID) return true

  if (!hasWarnedMissingId && import.meta.env.DEV) {
    console.warn('VITE_GA_MEASUREMENT_ID is not configured; GA events will be skipped.')
    hasWarnedMissingId = true
  }
  return false
}

export const trackPageView = (path: string) => {
  if (!ensureMeasurementConfigured() || !isGtagAvailable()) return

  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title
    })
  } catch (error) {
    console.error('Error tracking page view:', error)
  }
}

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (!ensureMeasurementConfigured() || !isGtagAvailable()) return

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

export const initGA = () => {
  if (!ensureMeasurementConfigured()) return

  if (isGtagAvailable()) {
    console.log('Google Analytics gtag.js is loaded.')
  } else if (import.meta.env.DEV) {
    console.warn('Google Analytics gtag.js is not yet available.')
  }
}

export { GA_MEASUREMENT_ID }
