import { useState } from 'react'
import { trackEvent } from '../utils/analytics'
import { generateMarketingKeywords } from '../utils/geminiApi'
import './AIMarketingSection.css'

const AIMarketingSection = () => {
  const [campaignContent, setCampaignContent] = useState('')
  const [priorityThemes, setPriorityThemes] = useState('cards, rewards, fintech loyalty')
  const [suggestedClusters, setSuggestedClusters] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerateKeywords = async () => {
    trackEvent('AI Marketing', 'Generate Keywords', 'Button Click')
    setLoading(true)
    setError(null)
    setSuggestedClusters([])

    try {
      const keywords = await generateMarketingKeywords(campaignContent, priorityThemes)
      setSuggestedClusters(keywords)
      trackEvent('AI Marketing', 'Keywords Generated', `Count: ${keywords.length}`)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate keywords. Please try again.'
      setError(errorMessage)
      trackEvent('AI Marketing', 'Error', errorMessage)
      console.error('Error generating keywords:', err)
    } finally {
      setLoading(false)
    }
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
                Powered by Google Gemini AI: Advanced NLP and relevance scoring to accelerate SEO experimentation.
              </p>
              {loading ? (
                <div className="loading-keywords">
                  <div className="spinner-small"></div>
                  <p>Analyzing content and generating keywords with AI...</p>
                </div>
              ) : error ? (
                <div className="error-state">
                  <p style={{ color: '#ef4444', marginBottom: '0.5rem' }}>⚠️ Error</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{error}</p>
                  <button
                    className="btn btn-primary"
                    onClick={handleGenerateKeywords}
                    style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                  >
                    Try Again
                  </button>
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

