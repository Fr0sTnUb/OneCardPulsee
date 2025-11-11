const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? ''

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let hasWarnedMissingId = false
let scriptInjected = false
let gaInitialized = false

const ensureMeasurementConfigured = (): boolean => {
  if (GA_MEASUREMENT_ID) return true

  if (!hasWarnedMissingId && import.meta.env.DEV) {
    console.warn('VITE_GA_MEASUREMENT_ID is not configured; GA events will be skipped.')
    hasWarnedMissingId = true
  }
  return false
}

const ensureGtagStub = (): boolean => {
  if (typeof window === 'undefined') return false
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
  return true
}

const injectGaScript = () => {
  if (scriptInjected || typeof document === 'undefined') return

  if (document.querySelector(`script[data-gtag="${GA_MEASUREMENT_ID}"]`)) {
    scriptInjected = true
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.dataset.gtag = GA_MEASUREMENT_ID
  script.onload = () => {
    if (import.meta.env.DEV) {
      console.info('Google Analytics script loaded.')
    }
  }
  script.onerror = (error) => console.error('Failed to load Google Analytics', error)
  document.head.appendChild(script)
  scriptInjected = true
}

export const initGA = () => {
  if (!ensureMeasurementConfigured()) return
  if (!ensureGtagStub()) return

  injectGaScript()

  if (!gaInitialized) {
    window.gtag!('js', new Date())
    window.gtag!('config', GA_MEASUREMENT_ID, { send_page_view: false })
    gaInitialized = true
  }
}

export const trackPageView = (path: string) => {
  initGA()
  if (!gaInitialized) return

  try {
    window.gtag!('event', 'page_view', {
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
  if (!gaInitialized) return

  try {
    window.gtag!('event', action, {
      event_category: category,
      event_label: label,
      value
    })
  } catch (error) {
    console.error('Error tracking event:', error)
  }
}

export { GA_MEASUREMENT_ID }
