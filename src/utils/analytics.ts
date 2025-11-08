const GA_MEASUREMENT_ID = 'G-M1QKWVFG9Y'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Track page views
export const trackPageView = (path: string) => {
  if (GA_MEASUREMENT_ID && isGtagAvailable()) {
    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: path,
        page_title: document.title,
      })
      console.log('📊 Page view tracked:', path)
    } catch (error) {
      console.error('❌ Error tracking page view:', error)
    }
  }
}

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (GA_MEASUREMENT_ID && isGtagAvailable()) {
    try {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
      console.log('🎯 Event tracked:', { category, action, label })
    } catch (error) {
      console.error('❌ Error tracking event:', error)
    }
  }
}

// Initialize function (gtag is already loaded in HTML, so this is just for compatibility)
export const initGA = () => {
  if (isGtagAvailable()) {
    console.log('✅ Google Analytics gtag.js is loaded with ID:', GA_MEASUREMENT_ID)
  } else {
    console.warn('⚠️ Google Analytics gtag.js is not yet available')
  }
}

export { GA_MEASUREMENT_ID }

