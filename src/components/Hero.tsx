import { trackEvent } from '../utils/analytics'
import './Hero.css'

const Hero = () => {
  const handleCTAClick = (label: string) => {
    trackEvent('User Interaction', 'Click', label)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <span>Say Hi to</span>
          </div>
          <h1 className="hero-title">
            OneCard<span className="gradient-text">Pulse</span>
          </h1>
          <p className="hero-description">
            India's best metal credit card. Built with full-stack tech. Backed by the principles of 
            simplicity, transparency, and giving back control to the user.
          </p>
          <div className="hero-cta">
            <a href="#apply" className="btn btn-primary" onClick={() => handleCTAClick('Apply Now')}>
              Apply Now
            </a>
            <a href="#features" className="btn btn-secondary" onClick={() => handleCTAClick('Learn More')}>
              Learn More
            </a>
          </div>
          <div className="hero-partners">
            <p className="partners-label">Our Banking Partners:</p>
            <div className="partners-logos">
              <span>BOBCARD</span>
              <span>CSB Bank</span>
              <span>Federal Bank</span>
              <span>IDFC Bank</span>
            </div>
          </div>
        </div>
        <div className="hero-visual slide-in">
          <div className="card-visual">
            <div className="metal-card">
              <div className="card-shine"></div>
              <div className="card-content">
                <div className="card-chip"></div>
                <div className="card-number">**** **** **** 1234</div>
                <div className="card-details">
                  <div className="card-name">NITESH SHA</div>
                  <div className="card-expiry">12/25</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

