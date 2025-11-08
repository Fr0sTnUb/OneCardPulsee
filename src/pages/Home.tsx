import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import IntelligenceSection from '../components/IntelligenceSection'
import Features from '../components/Features'
import AnalyticsSection from '../components/AnalyticsSection'
import SEOSection from '../components/SEOSection'
import AIMarketingSection from '../components/AIMarketingSection'
import SocialIntelligenceSection from '../components/SocialIntelligenceSection'
import './Home.css'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OneCardPulse - India's Best Metal Credit Card | No Hidden Fees Ever</title>
        <meta 
          name="description" 
          content="India's best metal credit card. Built with full-stack tech. No hidden fees ever. No joining fees, no annual fees, no rewards redemption fees. Apply now!" 
        />
        <meta 
          name="keywords" 
          content="onecardpulse, onecard, credit card, metal credit card, no fees credit card, rewards credit card, India credit card, best credit card, digital credit card, OneCardPulse credit card" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:title" content="OneCardPulse - India's Best Metal Credit Card" />
        <meta property="og:description" content="India's best metal credit card. Built with full-stack tech. Backed by the principles of simplicity, transparency, and giving back control to the user." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.getonecard.app/" />
        <meta property="og:image" content="https://www.getonecard.app/og-image.jpg" />
        <meta property="og:site_name" content="OneCardPulse" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OneCardPulse - India's Best Metal Credit Card" />
        <meta name="twitter:description" content="India's best metal credit card. No hidden fees ever." />
        <meta name="twitter:image" content="https://www.getonecard.app/og-image.jpg" />
        <link rel="canonical" href="https://www.getonecard.app/" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "OneCardPulse",
            "description": "India's best metal credit card with no hidden fees",
            "brand": {
              "@type": "Brand",
              "name": "OneCardPulse"
            },
            "offers": {
              "@type": "Offer",
              "description": "No joining fees, no annual fees, no rewards redemption fees"
            }
          }`}
        </script>
      </Helmet>
      <div className="home">
        <Hero />
        <IntelligenceSection />
        <Features />
        <AnalyticsSection />
        <SEOSection />
        <AIMarketingSection />
        <SocialIntelligenceSection />
        <section id="apply" className="apply-section">
          <div className="apply-container">
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="apply-description">
              Join millions of users who trust OneCardPulse for their financial needs. 
              Apply now and get your metal credit card in minutes.
            </p>
            <a href="#apply" className="btn btn-primary apply-btn">
              Apply Now
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

