import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { initGA, trackPageView } from './utils/analytics'
import Home from './pages/Home'
import Apply from './pages/Apply'
import Analytics from './pages/Analytics'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Security from './pages/Security'
import Documentation from './pages/Documentation'
import CookiePolicy from './pages/CookiePolicy'
import JoinOurTeam from './pages/JoinOurTeam'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import Support from './pages/Support'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

// Component to track page views on route changes
function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search)
  }, [location])

  return null
}

function AppContent() {
  useEffect(() => {
    // Initialize Google Analytics on app load
    initGA()
    
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search)
    
    // Smooth scrolling for anchor links (only on home page)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor && window.location.pathname === '/') {
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            e.preventDefault()
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
    
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/" />
      </Helmet>
      <PageTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/security" element={<Security />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/join-our-team" element={<JoinOurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App

