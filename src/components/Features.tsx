import { trackEvent } from '../utils/analytics'
import { NoFeesIcon, MobileIcon, CardIcon, LightningIcon, GiftIcon, EMIIcon, FamilyIcon } from './Icons'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: NoFeesIcon,
      title: 'No Hidden Fees Ever',
      description: 'No Joining Fees. No Annual Fees. No Rewards Redemption Fees.',
      highlight: true
    },
    {
      icon: MobileIcon,
      title: 'Powerful Mobile App',
      description: 'Control all aspects of your One Credit Card from the powerful OneCard app - transaction limit, domestic/international use, online/offline use, contactless payments and much more.',
      alt: 'Powerful mobile app feature'
    },
    {
      icon: CardIcon,
      title: "It's Metal",
      description: 'A credit card that is exclusive and exquisitely crafted with metal, because you deserve only the best. Why settle for plastic cards anymore when you can have the premium feel of a Metal One Credit Card?',
      alt: 'Metal credit card feature'
    },
    {
      icon: LightningIcon,
      title: 'Seamless On-boarding',
      description: 'Get started using a completely digital on-boarding process, and activate your One Credit Card in less than 5 minutes.',
      alt: 'Seamless on-boarding feature'
    },
    {
      icon: GiftIcon,
      title: '5X Rewards on Top Spends',
      description: '5X rewards on Top 2 spend categories. Points are credited instantly and never expire. Just swipe right to redeem. No more rounding off, get even fractional points.',
      alt: '5X rewards feature'
    },
    {
      icon: EMIIcon,
      title: 'One Credit Card EMI',
      description: 'Shop in full, pay in parts. No calls, no emails, no documentation. Get points on EMI transactions, repay EMIs with reward points. Manage EMIs from the EMI Dashboard.',
      alt: 'EMI feature'
    },
    {
      icon: FamilyIcon,
      title: 'MyFamily',
      description: 'Share limit with your family. They get their own One Credit Card with separate offers while you keep track and control of their spending.',
      alt: 'MyFamily feature'
    }
  ]

  const handleFeatureClick = (featureTitle: string) => {
    trackEvent('User Interaction', 'Click', `Feature: ${featureTitle}`)
  }

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">OneCardPulse</span>?
          </h2>
          <p className="section-description">
            Experience a credit card designed for the digital age with cutting-edge features 
            and unparalleled benefits.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className={`card feature-card ${feature.highlight ? 'highlight' : ''}`}
                onClick={() => handleFeatureClick(feature.title)}
              >
                <div className="feature-icon">
                  <IconComponent size={56} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

