import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { trackPageView, trackEvent } from '../utils/analytics'
import './LegalPage.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    trackPageView('/contact-us')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent('Contact Form', 'Submit', formData.subject)
    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Spectra</title>
        <meta 
          name="description" 
          content="Get in touch with Spectra. We're all ears! Contact us for support, partnerships, media inquiries, or any questions about our services." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/contact-us" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="legal-page-subtitle">
              We're all ears! We are a new kid on the block, eager to learn. All ideas and suggestions are welcome.
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>Get in Touch</h2>
              <p>
                Have a question, suggestion, or feedback? We'd love to hear from you! Whether you're a customer, partner, or just curious about Spectra, we're here to help.
              </p>
            </section>

            <section>
              <h2>Contact Form</h2>
              <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media Inquiry</option>
                    <option value="careers">Careers</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </section>

            <section>
              <h2>Other Ways to Reach Us</h2>
              
              <h3>Customer Support</h3>
              <ul>
                <li><strong>Email:</strong> support@spectra.com</li>
                <li><strong>In-App Support:</strong> Available 24/7 through the Spectra mobile app</li>
                <li><strong>Phone:</strong> Available through the mobile app</li>
                <li><strong>Response Time:</strong> We aim to respond within 24 hours</li>
              </ul>

              <h3>General Inquiries</h3>
              <ul>
                <li><strong>Email:</strong> hello@spectra.com</li>
                <li><strong>Address:</strong> FPL Technologies Pvt. Ltd., India</li>
              </ul>

              <h3>Partnerships</h3>
              <ul>
                <li><strong>Email:</strong> partnerships@spectra.com</li>
                <li>Interested in partnering with us? We'd love to explore opportunities</li>
              </ul>

              <h3>Media & Press</h3>
              <ul>
                <li><strong>Email:</strong> press@spectra.com</li>
                <li>For media inquiries, press releases, and interview requests</li>
              </ul>

              <h3>Careers</h3>
              <ul>
                <li><strong>Email:</strong> careers@spectra.com</li>
                <li>Check out our <a href="/join-our-team">Join Our Team</a> page for open positions</li>
              </ul>
            </section>

            <section>
              <h2>Office Locations</h2>
              <p>
                We're headquartered in India and are expanding our presence. For specific office addresses and directions, please contact us via email.
              </p>
            </section>

            <section>
              <h2>Social Media</h2>
              <p>
                Connect with us on social media for updates, news, and community:
              </p>
              <ul>
                <li><strong>LinkedIn:</strong> Follow us for company updates and career opportunities</li>
                <li><strong>Twitter:</strong> Get the latest news and product updates</li>
                <li><strong>Facebook:</strong> Join our community</li>
                <li><strong>Instagram:</strong> See behind-the-scenes content</li>
                <li><strong>YouTube:</strong> Watch tutorials and product demos</li>
              </ul>
            </section>

            <section>
              <h2>Response Times</h2>
              <p>
                We're committed to responding to all inquiries promptly:
              </p>
              <ul>
                <li><strong>Customer Support:</strong> Within 24 hours (24/7 for urgent issues)</li>
                <li><strong>General Inquiries:</strong> Within 48 hours</li>
                <li><strong>Partnerships:</strong> Within 3-5 business days</li>
                <li><strong>Media Inquiries:</strong> Within 24-48 hours</li>
              </ul>
            </section>

            <section>
              <h2>Feedback & Suggestions</h2>
              <p>
                Your feedback helps us improve. Whether it's a feature request, bug report, or general suggestion, we value your input. Use the contact form above or email us directly at <strong>feedback@spectra.com</strong>.
              </p>
              <p>
                We're a new kid on the block, eager to learn. All ideas and suggestions are welcome!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs

