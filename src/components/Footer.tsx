import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from './Icons'
import './Footer.css'

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    trackEvent('Social Media', 'Click', platform)
  }

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/onecard', icon: FacebookIcon },
    { name: 'Twitter', url: 'https://twitter.com/onecard', icon: TwitterIcon },
    { name: 'Instagram', url: 'https://instagram.com/onecard', icon: InstagramIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/onecard', icon: LinkedInIcon },
    { name: 'YouTube', url: 'https://youtube.com/onecard', icon: YouTubeIcon }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Spectra</h3>
            <p className="footer-location">Made By Fr0sT</p>
            <p className="footer-tagline">
              We are all ears! To healthcare needs!!
            </p>
            <div className="footer-social">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      onClick={() => handleSocialClick(social.name)}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="#analytics">Analytics Dashboard</a></li>
              <li><a href="#seo">SEO Suite</a></li>
              <li><a href="#ai-marketing">AI Marketing Lab</a></li>
              <li><a href="#social-intelligence">Social Intelligence</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/privacy-policy" onClick={() => trackEvent('Footer', 'Click', 'Privacy Policy')}>Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" onClick={() => trackEvent('Footer', 'Click', 'Terms and Conditions')}>Terms Of Service</Link></li>
              <li><Link to="/cookie-policy" onClick={() => trackEvent('Footer', 'Click', 'Cookie Policy')}>Cookie Policy</Link></li>
              <li><Link to="/security" onClick={() => trackEvent('Footer', 'Click', 'Security')}>Security</Link></li>
              <li><Link to="/documentation" onClick={() => trackEvent('Footer', 'Click', 'Documentation')}>Documentation</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/join-our-team" onClick={() => trackEvent('Footer', 'Click', 'Join Our Team')}>Join Our Team</Link></li>
              <li><Link to="/contact-us" onClick={() => trackEvent('Footer', 'Click', 'Contact Us')}>Contact Us</Link></li>
              <li><Link to="/blog" onClick={() => trackEvent('Footer', 'Click', 'Blog')}>Blog</Link></li>
              <li><Link to="/support" onClick={() => trackEvent('Footer', 'Click', 'Support')}>Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-certifications">
            <span>Secure & Encrypted</span>
            <span>Real-time Analytics</span>
            <span>AI-Powered Insights</span>
          </div>
          <p>&copy; 2025 Spectra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

