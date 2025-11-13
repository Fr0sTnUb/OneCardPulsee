import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { trackPageView, trackEvent } from '../utils/analytics'
import './LegalPage.css'

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    trackPageView('/support')
  }, [])

  const faqCategories = [
    { id: 'all', name: 'All Topics' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'card-management', name: 'Card Management' },
    { id: 'rewards', name: 'Rewards & Points' },
    { id: 'payments', name: 'Payments & Billing' },
    { id: 'security', name: 'Security' },
    { id: 'troubleshooting', name: 'Troubleshooting' }
  ]

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I apply for a Spectra credit card?',
      answer: 'Applying for Spectra is quick and easy! Download our mobile app or visit our website, click "Apply Now", fill in your details, and complete the digital onboarding process. You\'ll get an instant approval decision, and if approved, your metal card will be delivered to your registered address.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'What are the eligibility criteria?',
      answer: 'To be eligible for a Spectra credit card, you must be at least 18 years old, a resident of India, have a valid government ID, and meet our creditworthiness criteria. We evaluate applications based on various factors including credit history, income, and financial profile.'
    },
    {
      id: 3,
      category: 'card-management',
      question: 'How do I activate my card?',
      answer: 'Once you receive your card, open the Spectra mobile app, navigate to "Activate Card", enter your card details, set your PIN, and you\'re ready to start using your card immediately!'
    },
    {
      id: 4,
      category: 'card-management',
      question: 'How do I freeze or unfreeze my card?',
      answer: 'You can freeze or unfreeze your card instantly through the Spectra mobile app. Go to Card Controls, select Freeze/Unfreeze, and toggle the option. This is useful if you\'ve misplaced your card or want to temporarily disable it.'
    },
    {
      id: 5,
      category: 'rewards',
      question: 'How do I earn 5X rewards?',
      answer: 'You automatically earn 5X rewards on your top 2 spending categories. These categories are determined based on your spending patterns. Points are credited instantly after each transaction and never expire.'
    },
    {
      id: 6,
      category: 'rewards',
      question: 'How do I redeem my reward points?',
      answer: 'Redeeming points is simple! Open the Spectra app, go to the "Rewards" section, select "Redeem Points", choose your redemption option, and confirm. You can also use points to repay EMI installments.'
    },
    {
      id: 7,
      category: 'payments',
      question: 'How do I pay my credit card bill?',
      answer: 'You can pay your bill through multiple methods: Auto-Pay (set up automatic payments), Manual Payment through the app, UPI, Net Banking, or NEFT/RTGS. All payment options are available in the app.'
    },
    {
      id: 8,
      category: 'payments',
      question: 'What are the fees and charges?',
      answer: 'There are no joining fees, no annual fees, and no rewards redemption fees. Standard charges may apply for late payments (as per RBI guidelines), cash advances, foreign transactions, and EMI processing (if applicable). All charges are clearly disclosed in your statement.'
    },
    {
      id: 9,
      category: 'security',
      question: 'How secure is my card and data?',
      answer: 'Security is our top priority. We use end-to-end encryption, are ISO 27001 certified, and PCI DSS compliant. Your card can be frozen instantly through the app, and you\'ll receive real-time transaction alerts. We also offer biometric authentication and multi-factor authentication for added security.'
    },
    {
      id: 10,
      category: 'security',
      question: 'What should I do if my card is lost or stolen?',
      answer: 'If your card is lost or stolen, immediately freeze it through the Spectra app. Then contact our 24/7 customer support to report it. We\'ll block the card and issue a replacement. You\'re protected against unauthorized transactions.'
    },
    {
      id: 11,
      category: 'troubleshooting',
      question: 'Why was my transaction declined?',
      answer: 'Transactions can be declined for several reasons: insufficient credit limit, card frozen, transaction limit reached, suspicious activity detected, or merchant issues. Check your card controls in the app and ensure your card is active. If issues persist, contact support.'
    },
    {
      id: 12,
      category: 'troubleshooting',
      question: 'How do I update my contact information?',
      answer: 'You can update your contact information (email, phone, address) through the Spectra app. Go to Profile Settings, select the information you want to update, make changes, and verify if required. Keeping your information updated ensures you receive important notifications.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Helmet>
        <title>Support | Help Center | Spectra</title>
        <meta 
          name="description" 
          content="Get help with your Spectra credit card. Browse FAQs, contact support, or find answers to common questions about card management, rewards, payments, and more." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/support" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Support & <span className="gradient-text">Help Center</span>
            </h1>
            <p className="legal-page-subtitle">
              We're here to help you 24/7
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>How Can We Help?</h2>
              <p>
                Find answers to common questions, get help with your account, or contact our support team. We're available 24/7 to assist you.
              </p>
            </section>

            <section>
              <h2>Search Help Articles</h2>
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  marginTop: '1rem'
                }}
              />
            </section>

            <section>
              <h2>Browse by Category</h2>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      trackEvent('Support', 'Category Click', category.name)
                    }}
                    style={{
                      padding: '0.5rem 1.25rem',
                      background: selectedCategory === category.id 
                        ? 'rgba(59, 130, 246, 0.2)' 
                        : 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '20px',
                      color: selectedCategory === category.id 
                        ? '#3b82f6' 
                        : 'var(--text-secondary)',
                      fontWeight: selectedCategory === category.id ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategory !== category.id) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)'
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategory !== category.id) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                      }
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2>Frequently Asked Questions</h2>
              <div style={{ marginTop: '2rem' }}>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <details
                      key={faq.id}
                      style={{
                        marginBottom: '1.5rem',
                        padding: '1.5rem',
                        background: 'rgba(59, 130, 246, 0.05)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                      onToggle={(e) => {
                        if (e.currentTarget.open) {
                          trackEvent('Support', 'FAQ Expand', faq.question)
                        }
                      }}
                    >
                      <summary
                        style={{
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          fontSize: '1.1rem',
                          marginBottom: '0.5rem',
                          listStyle: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {faq.question}
                      </summary>
                      <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.6 }}>
                        {faq.answer}
                      </p>
                    </details>
                  ))
                ) : (
                  <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>
                    No results found. Try a different search term or category.
                  </p>
                )}
              </div>
            </section>

            <section>
              <h2>Contact Support</h2>
              <p>
                Can't find what you're looking for? Our support team is available 24/7 to help you.
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem', 
                marginTop: '2rem' 
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>In-App Support</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Chat with our support team directly through the Spectra app
                  </p>
                  <a href="#" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Open App
                  </a>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Email Support</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <a href="mailto:support@spectra.com" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Email Us
                  </a>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Contact Form</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    Fill out our contact form for detailed inquiries
                  </p>
                  <a href="/contact-us" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Contact Us
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2>Quick Links</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                <a href="/documentation" style={{ color: '#3b82f6', textDecoration: 'none' }}>Documentation</a>
                <a href="/security" style={{ color: '#3b82f6', textDecoration: 'none' }}>Security Guide</a>
                <a href="/privacy-policy" style={{ color: '#3b82f6', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="/terms-and-conditions" style={{ color: '#3b82f6', textDecoration: 'none' }}>Terms & Conditions</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support

