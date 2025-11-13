import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const Blog = () => {
  useEffect(() => {
    trackPageView('/blog')
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'Introducing Spectra: India\'s Best Metal Credit Card',
      excerpt: 'We\'re excited to introduce Spectra - a credit card built with full-stack tech, backed by principles of simplicity, transparency, and giving control back to users.',
      date: 'January 15, 2025',
      category: 'Product',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'No Hidden Fees Ever: Our Commitment to Transparency',
      excerpt: 'At Spectra, we believe in complete transparency. No joining fees, no annual fees, no rewards redemption fees. Here\'s why we made this commitment.',
      date: 'January 10, 2025',
      category: 'Company',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: '5X Rewards: Maximizing Your Credit Card Benefits',
      excerpt: 'Learn how to maximize your rewards with Spectra\'s 5X points on top spending categories. Tips and tricks to earn more points.',
      date: 'January 5, 2025',
      category: 'Tips',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Security First: How We Protect Your Data',
      excerpt: 'Security is fundamental to everything we do. Learn about our ISO 27001 certification, PCI DSS compliance, and advanced security measures.',
      date: 'December 28, 2024',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'MyFamily Feature: Share Credit Limit with Family',
      excerpt: 'Introducing MyFamily - share your credit limit with family members. They get their own card with separate offers while you maintain control.',
      date: 'December 20, 2024',
      category: 'Features',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'EMI Made Easy: Shop Now, Pay Later',
      excerpt: 'Convert any eligible transaction to EMI with just a few taps. Get points on EMI transactions and manage everything from the app.',
      date: 'December 15, 2024',
      category: 'Features',
      readTime: '4 min read'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog | Spectra</title>
        <meta 
          name="description" 
          content="Read the latest news, tips, and insights from Spectra. Learn about credit card best practices, financial tips, product updates, and more." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/blog" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Spectra <span className="gradient-text">Blog</span>
            </h1>
            <p className="legal-page-subtitle">
              Insights, tips, and updates from the Spectra team
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>Latest Posts</h2>
              <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    style={{
                      padding: '2rem',
                      background: 'rgba(59, 130, 246, 0.05)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(59, 130, 246, 0.2)',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          color: '#3b82f6',
                          fontWeight: 600
                        }}
                      >
                        {post.category}
                      </span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        {post.date}
                      </span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                        lineHeight: 1.3
                      }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                    <Link
                      to="#"
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0ea5e9'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#3b82f6'
                      }}
                    >
                      Read More →
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2>Categories</h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {['All', 'Product', 'Company', 'Tips', 'Security', 'Features'].map((category) => (
                  <button
                    key={category}
                    style={{
                      padding: '0.5rem 1.5rem',
                      background: category === 'All' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '20px',
                      color: category === 'All' ? '#3b82f6' : 'var(--text-secondary)',
                      fontWeight: category === 'All' ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                      e.currentTarget.style.color = '#3b82f6'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = category === 'All' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                      e.currentTarget.style.color = category === 'All' ? '#3b82f6' : 'var(--text-secondary)'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Stay updated with the latest news, tips, and product updates from Spectra. Subscribe to our newsletter and never miss a post.
              </p>
              <form
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for subscribing!')
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: '1',
                    minWidth: '250px',
                    padding: '0.75rem 1rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Subscribe
                </button>
              </form>
            </section>

            <section>
              <h2>About Our Blog</h2>
              <p>
                Welcome to the Spectra blog! Here, we share insights about:
              </p>
              <ul>
                <li>Product updates and new features</li>
                <li>Financial tips and best practices</li>
                <li>Credit card management advice</li>
                <li>Security and privacy insights</li>
                <li>Company news and culture</li>
                <li>Industry trends and analysis</li>
              </ul>
              <p>
                Our goal is to help you make the most of your Spectra credit card and stay informed about financial wellness. We're all ears - if there's a topic you'd like us to cover, <Link to="/contact-us">let us know</Link>!
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog

