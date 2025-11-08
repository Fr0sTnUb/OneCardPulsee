import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { initGA, trackPageView } from './utils/analytics'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Google Analytics on app load
    initGA()
    
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search)
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
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
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

