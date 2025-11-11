import { trackEvent } from '../utils/analytics'
import './SEOSection.css'

const SEOSection = () => {
  const seoFeatures = [
    {
      title: 'Meta & Schema',
      description: 'Pre-configured metadata mirrors Spectra\'s polish, boosting click-through and SERP clarity with JSON-LD markup.'
    },
    {
      title: 'Keyword Architecture',
      description: 'Semantic clusters keep your messaging aligned with user intent, reinforced by AI-generated recommendations.'
    },
    {
      title: 'Media Accessibility',
      description: 'Strategic alt tags narrate your visuals for search engines and screen readers alike.'
    },
    {
      title: 'Technically Ready',
      description: 'Lightweight, mobile-responsive layout scores high on speed audits and Core Web Vitals.'
    }
  ]

  const handleFeatureClick = (featureTitle: string) => {
    trackEvent('SEO Section', 'Click', `Feature: ${featureTitle}`)
  }

  return (
    <section id="seo" className="seo-section">
      <div className="seo-container">
        <div className="seo-header">
          <h2 className="section-title">
            SEO Engineered for <span className="gradient-text">Fintech Discovery</span>
          </h2>
          <p className="section-description">
            Rich meta strategy, purposeful schema, and meticulous alt text ensure your experiences surface exactly when prospects need you.
          </p>
        </div>
        <div className="seo-grid">
          {seoFeatures.map((feature, index) => (
            <div
              key={index}
              className="card seo-card"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <h3 className="seo-card-title">{feature.title}</h3>
              <p className="seo-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SEOSection

