import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    // Only handle scroll-based active section on home page
    if (location.pathname !== '/') {
      return
    }

    // Update active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      
      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveSection('home')
        return
      }
      
      const sections = ['features', 'intelligence', 'analytics', 'seo', 'ai-marketing', 'social-intelligence', 'apply']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    const handleNavbarScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleNavbarScroll)
    return () => window.removeEventListener('scroll', handleNavbarScroll)
  }, [])

  const handleNavClick = (section: string) => {
    trackEvent('Navigation', 'Click', section)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => handleNavClick('Logo')}>
          <span className="logo-text">Spectra</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/"
              className={location.pathname === '/' && (activeSection === 'home' || activeSection === '') ? 'active' : ''}
              onClick={() => handleNavClick('Home')}
            >
              Home
            </Link>
          </li>
          {location.pathname === '/' && (
            <>
              <li>
                <a 
                  href="#features" 
                  className={activeSection === 'features' ? 'active' : ''}
                  onClick={() => handleNavClick('Features')}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#analytics" 
                  className={activeSection === 'analytics' ? 'active' : ''}
                  onClick={() => handleNavClick('Analytics')}
                >
                  Analytics
                </a>
              </li>
              <li>
                <a 
                  href="#seo" 
                  className={activeSection === 'seo' ? 'active' : ''}
                  onClick={() => handleNavClick('SEO')}
                >
                  SEO
                </a>
              </li>
              <li>
                <a 
                  href="#ai-marketing" 
                  className={activeSection === 'ai-marketing' ? 'active' : ''}
                  onClick={() => handleNavClick('AI Marketing')}
                >
                  AI Lab
                </a>
              </li>
              <li>
                <a 
                  href="#social-intelligence" 
                  className={activeSection === 'social-intelligence' ? 'active' : ''}
                  onClick={() => handleNavClick('Social Intelligence')}
                >
                  Engage
                </a>
              </li>
            </>
          )}
          <li>
            <Link 
              to="/apply" 
              className={`btn btn-primary navbar-cta ${location.pathname === '/apply' ? 'active' : ''}`}
              onClick={() => handleNavClick('Apply Now')}
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

