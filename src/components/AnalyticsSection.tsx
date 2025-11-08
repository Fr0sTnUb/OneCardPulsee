import './AnalyticsSection.css'

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container">
        <div className="analytics-header">
          <h2 className="section-title">
            Google <span className="gradient-text">Analytics</span>
          </h2>
          <p className="analytics-subtitle">
            We rely on GA4 to understand how visitors discover, explore, and revisit OneCardPulse.
            All conversions, engagement funnels, and attribution modeling happen directly inside the
            Google Analytics dashboard, keeping sensitive data within your existing analytics stack.
          </p>
        </div>

        <div className="analytics-info analytics-info--stacked">
          <p>
            <strong>Always-On Tracking:</strong> Page views, events, and conversions stream into GA4
            using your measurement ID, so you can slice the data across audiences, devices, and
            campaigns without exposing raw metrics in the marketing site itself.
          </p>
          <p>
            <strong>Deep-Dive In GA4:</strong> Jump into your{' '}
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="analytics-link"
            >
              Google Analytics property
            </a>{' '}
            to monitor real-time traffic, compare historical trends, or export reports into Looker
            Studio.
          </p>
          <p>
            <strong>Privacy Respectful:</strong> Because analysis lives inside GA4, we avoid storing
            duplicate visitor data in the marketing app, resulting in a faster site and simpler
            compliance story.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSection
