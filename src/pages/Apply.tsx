import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import ApplicationForm from '../components/ApplicationForm'
import './Apply.css'

const Apply = () => {
  useEffect(() => {
    // Track page view
    trackPageView('/apply')
  }, [])

  return (
    <>
      <Helmet>
        <title>Apply for Spectra - Credit Card Application | Spectra</title>
        <meta 
          name="description" 
          content="Apply for Spectra metal credit card. Quick and easy application process. No hidden fees, no joining fees, no annual fees. Get approved in minutes." 
        />
        <meta 
          name="keywords" 
          content="apply for credit card, spectra application, credit card apply online, metal credit card application, spectra apply, credit card form" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Apply for Spectra - Credit Card Application" />
        <meta property="og:description" content="Apply for India's best metal credit card. Quick and easy application process." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.getonecard.app/apply" />
        <link rel="canonical" href="https://www.getonecard.app/apply" />
      </Helmet>
      <div className="apply-page">
        <div className="apply-page-container">
          <div className="apply-page-header">
            <h1 className="apply-page-title">
              Apply for <span className="gradient-text">Spectra</span>
            </h1>
            <p className="apply-page-subtitle">
              Join millions of users who trust Spectra for their financial needs. 
              Fill in your details below and get your metal credit card in minutes.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </div>
    </>
  )
}

export default Apply

