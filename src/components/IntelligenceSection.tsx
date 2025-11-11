import { trackEvent } from '../utils/analytics'
import { LightningIcon, ChartIcon, SparkleIcon } from './Icons'
import FintechWorkspaceImage from './FintechWorkspaceImage'
import './IntelligenceSection.css'

const IntelligenceSection = () => {
  const handleCTAClick = (label: string) => {
    trackEvent('Intelligence Section', 'Click', label)
  }

  const features = [
    {
      icon: LightningIcon,
      title: 'FLASH DIAGNOSTICS',
      description: 'Surface anomalies instantly with explainable AI callouts and suggested remediations.'
    },
    {
      icon: ChartIcon,
      title: 'GROWTH ACCELERANTS',
      description: 'Blend cohort trends, NPS signals, and campaign pacing into one sharable lane.'
    },
    {
      icon: SparkleIcon,
      title: 'STORY-DRIVEN DASHBOARDS',
      description: 'Transform raw metrics into narrative tiles that stakeholders can explore live.'
    }
  ]

  return (
    <section id="intelligence" className="intelligence-section">
      <div className="intelligence-container">
        <div className="intelligence-left">
          <div className="intelligence-content">
            <h2 className="intelligence-title">
              Intelligence For<br />
              <span className="gradient-text">Breakout Brands</span>
            </h2>
            <p className="intelligence-description">
              Inspired by Spectra's seamless experience, Pulse fuses real-time analytics, AI insights, and SEO craftsmanship to accelerate acquisition and retention.
            </p>
            
            <div className="feature-tags">
              <span className="feature-tag">REALTIME GA4 SYNC</span>
              <span className="feature-tag">AI KEYWORD PLAYBOOKS</span>
              <span className="feature-tag">RETENTION HEATMAPS</span>
            </div>

            <div className="intelligence-cta">
              <a 
                href="#analytics" 
                className="btn btn-primary intelligence-btn-primary"
                onClick={() => handleCTAClick('Explore Dashboard')}
              >
                Explore Dashboard
              </a>
              <a 
                href="#ai-marketing" 
                className="btn btn-secondary intelligence-btn-secondary"
                onClick={() => handleCTAClick('Boost SEO with AI')}
              >
                Boost SEO with AI
              </a>
            </div>

            <div className="intelligence-metrics">
              <div className="metric-item">
                <span className="metric-value">+42%</span>
                <span className="metric-text">conversion uplift unlocked via GA4 funnels</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3x</span>
                <span className="metric-text">faster keyword experiments through AI automation</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Zero-lag</span>
                <span className="metric-text">insights modeled on Spectra's customer-first DNA</span>
              </div>
            </div>

            <div className="intelligence-cards">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="intelligence-card">
                    <div className="intelligence-card-icon">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="intelligence-card-title">{feature.title}</h3>
                    <p className="intelligence-card-description">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="intelligence-right">
          <div className="intelligence-image-wrapper">
            {/* Fintech workspace SVG illustration */}
            <FintechWorkspaceImage />
            {/* Optional: Replace with actual image by uncommenting below and adding image to public folder */}
            {/* <img src="/fintech-workspace.jpg" alt="Fintech workspace" className="workspace-image" /> */}
            <div className="intelligence-image-overlay">
              <div className="pulse-card">
                <div className="pulse-card-label">CAMPAIGN PULSE</div>
                <div className="pulse-card-value">+18% lift</div>
                <div className="pulse-card-description">Week-over-week retention across premium cohorts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntelligenceSection

