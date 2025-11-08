import { trackEvent } from '../utils/analytics'
import './SocialIntelligenceSection.css'

const SocialIntelligenceSection = () => {
  const socialFeatures = [
    {
      title: 'Social Launch Kit',
      description: 'Auto-generate UTM links and export high-performing snippets from your analytics highlights.',
      buttonText: 'Share on LinkedIn',
      buttonAction: 'linkedin'
    },
    {
      title: 'Always-On Listening',
      description: 'Track referral spikes and community chatter through integrated metrics overlays.',
      buttonText: 'Tweet Insights',
      buttonAction: 'twitter'
    },
    {
      title: 'Influencer Ready',
      description: 'Curated dashboards keep affiliates in sync with launch goals, mirroring OneCard\'s co-branded playbook.',
      buttonText: 'Share on Facebook',
      buttonAction: 'facebook'
    }
  ]

  const handleShareClick = (platform: string, featureTitle: string) => {
    trackEvent('Social Intelligence', 'Share', `${featureTitle} - ${platform}`)
    // In a real implementation, this would open the share dialog or navigate to the platform
    console.log(`Sharing ${featureTitle} on ${platform}`)
  }

  return (
    <section id="social-intelligence" className="social-intelligence-section">
      <div className="social-intelligence-container">
        <div className="social-intelligence-header">
          <h2 className="section-title">
            Amplify with <span className="gradient-text">Social Intelligence</span>
          </h2>
          <p className="section-description">
            Blend OneCard's community-driven ethos with ready-to-launch brand storytelling across LinkedIn, Instagram, and X.
          </p>
        </div>
        <div className="social-intelligence-grid">
          {socialFeatures.map((feature, index) => (
            <div
              key={index}
              className="card social-card"
            >
              <h3 className="social-card-title">{feature.title}</h3>
              <p className="social-card-description">{feature.description}</p>
              <button
                className="btn btn-social"
                onClick={() => handleShareClick(feature.buttonAction, feature.title)}
              >
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialIntelligenceSection

