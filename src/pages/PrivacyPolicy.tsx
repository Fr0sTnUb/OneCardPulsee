import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    trackPageView('/privacy-policy')
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Spectra</title>
        <meta 
          name="description" 
          content="Spectra Privacy Policy - Learn how we collect, use, and protect your personal information. Transparency and user control are our core principles." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/privacy-policy" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="legal-page-subtitle">
              Last Updated: January 2025
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                At Spectra, we are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our metal credit card, mobile application, and website.
              </p>
              <p>
                By using Spectra's services, you agree to the collection and use of information in accordance with this policy. We believe in giving you full control over your data, backed by the principles of simplicity, transparency, and user empowerment.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Name, date of birth, and contact details (email, phone number, address)</li>
                <li>Government-issued identification documents</li>
                <li>Financial information including income, employment details, and bank account information</li>
                <li>Credit history and credit score information</li>
                <li>Transaction history and spending patterns</li>
                <li>Device information and mobile app usage data</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you use our services, we automatically collect:</p>
              <ul>
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Location data (with your consent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li><strong>Service Provision:</strong> To process your credit card application, manage your account, and provide our services</li>
                <li><strong>Verification:</strong> To verify your identity and prevent fraud</li>
                <li><strong>Communication:</strong> To send you important updates, transaction alerts, and customer support</li>
                <li><strong>Personalization:</strong> To customize your experience and provide relevant offers</li>
                <li><strong>Analytics:</strong> To improve our services, analyze usage patterns, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulatory requirements</li>
                <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Banking Partners:</strong> With our banking partners (BOBCARD, CSB Bank, Federal Bank, IDFC Bank, SBM Bank, South Indian Bank, Indian Bank) to provide credit card services</li>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul>
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure servers and databases with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for account access</li>
                <li>PCI DSS compliance for payment card data</li>
                <li>ISO 27001 certified security practices</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications and certain data processing activities</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw consent for data processing where applicable</li>
              </ul>
              <p>
                You can exercise these rights through our mobile app or by contacting our support team. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings. For more details, please refer to our <a href="/cookie-policy">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> privacy@spectra.com</li>
                <li><strong>Address:</strong> FPL Technologies Pvt. Ltd., India</li>
                <li><strong>Phone:</strong> Available through our mobile app</li>
              </ul>
              <p>
                We are committed to addressing your concerns promptly and transparently.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy

