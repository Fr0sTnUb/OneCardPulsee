import { useState } from 'react'
import { trackEvent } from '../utils/analytics'
import './AIMarketingSection.css'

const AIMarketingSection = () => {
  const [campaignContent, setCampaignContent] = useState('')
  const [priorityThemes, setPriorityThemes] = useState('cards, rewards, fintech loyalty')
  const [suggestedClusters, setSuggestedClusters] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleGenerateKeywords = () => {
    trackEvent('AI Marketing', 'Generate Keywords', 'Button Click')
    setLoading(true)

    // Simulate AI keyword generation
    setTimeout(() => {
      const mockClusters = [
        'Credit card rewards',
        'Metal credit card benefits',
        'Fintech loyalty programs',
        'No fees credit card',
        'Digital banking rewards',
        'Credit card cashback',
        'Rewards redemption',
        'Card benefits India'
      ]
      setSuggestedClusters(mockClusters)
      setLoading(false)
      trackEvent('AI Marketing', 'Keywords Generated', `Count: ${mockClusters.length}`)
    }, 1500)
  }

  return (
    <section id="ai-marketing" className="ai-marketing-section">
      <div className="ai-marketing-container">
        <div className="ai-marketing-header">
          <h2 className="section-title">
            AI <span className="gradient-text">Marketing Lab</span>
          </h2>
          <p className="section-description">
            Drop your latest feature pitch or campaign copy and Pulse will surface keyword sprints tailored to your focus areas.
          </p>
        </div>
        <div className="ai-marketing-content">
          <div className="ai-marketing-input">
            <div className="card input-card">
              <h3 className="input-card-title">Campaign content</h3>
              <textarea
                className="campaign-textarea"
                placeholder="Paste your product story or landing page copy..."
                value={campaignContent}
                onChange={(e) => setCampaignContent(e.target.value)}
                rows={8}
              />
              <div className="priority-themes">
                <label className="priority-label">Priority themes (comma-separated)</label>
                <input
                  type="text"
                  className="priority-input"
                  placeholder="cards, rewards, fintech loyalty"
                  value={priorityThemes}
                  onChange={(e) => setPriorityThemes(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary generate-btn"
                onClick={handleGenerateKeywords}
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate AI keywords'}
              </button>
            </div>
          </div>
          <div className="ai-marketing-output">
            <div className="card output-card">
              <h3 className="output-card-title">Suggested clusters</h3>
              <p className="output-subtitle">Focus-aligned picks</p>
              <p className="output-description">
                Powered by NLP: tokenization, stemming, and relevance scoring to accelerate SEO experimentation.
              </p>
              {loading ? (
                <div className="loading-keywords">
                  <div className="spinner-small"></div>
                  <p>Analyzing content and generating keywords...</p>
                </div>
              ) : suggestedClusters.length > 0 ? (
                <div className="clusters-list">
                  {suggestedClusters.map((cluster, index) => (
                    <div key={index} className="cluster-item">
                      {cluster}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>Enter campaign content and click "Generate AI keywords" to get started.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIMarketingSection

