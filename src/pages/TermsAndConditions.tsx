import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const TermsAndConditions = () => {
  useEffect(() => {
    trackPageView('/terms-and-conditions')
  }, [])

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Spectra</title>
        <meta 
          name="description" 
          content="Spectra Terms and Conditions - Read our terms of service for using Spectra credit card and related services. Transparency and clarity are our priorities." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/terms-and-conditions" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Terms and <span className="gradient-text">Conditions</span>
            </h1>
            <p className="legal-page-subtitle">
              Last Updated: January 2025
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Spectra's services, including our metal credit card, mobile application, website, and related services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and FPL Technologies Pvt. Ltd. ("Spectra", "we", "us", or "our"). We believe in simplicity and transparency, so we've made these Terms clear and easy to understand.
              </p>
            </section>

            <section>
              <h2>2. Eligibility</h2>
              <p>To use our Services, you must:</p>
              <ul>
                <li>Be at least 18 years of age</li>
                <li>Be a resident of India</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p>
                We reserve the right to verify your eligibility and may reject applications or suspend accounts that do not meet these requirements.
              </p>
            </section>

            <section>
              <h2>3. Credit Card Services</h2>
              <h3>3.1 Application and Approval</h3>
              <p>
                Applying for a Spectra credit card does not guarantee approval. We, along with our banking partners, reserve the right to approve or decline applications based on creditworthiness, verification, and other factors. Approval decisions are final and not subject to appeal.
              </p>

              <h3>3.2 Credit Limit</h3>
              <p>
                Your credit limit is determined based on various factors including your credit history, income, and financial profile. You can manage and control your credit limit through our mobile app, subject to our policies and regulatory requirements.
              </p>

              <h3>3.3 Card Usage</h3>
              <p>You agree to:</p>
              <ul>
                <li>Use the card only for lawful purposes</li>
                <li>Not use the card for illegal activities or fraud</li>
                <li>Protect your card and account credentials</li>
                <li>Report lost or stolen cards immediately</li>
                <li>Notify us of any unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2>4. Fees and Charges</h2>
              <h3>4.1 No Hidden Fees</h3>
              <p>
                We are committed to transparency. There are:
              </p>
              <ul>
                <li><strong>No Joining Fees</strong></li>
                <li><strong>No Annual Fees</strong></li>
                <li><strong>No Rewards Redemption Fees</strong></li>
              </ul>

              <h3>4.2 Other Charges</h3>
              <p>
                Standard charges may apply for:
              </p>
              <ul>
                <li>Late payment fees (as per RBI guidelines)</li>
                <li>Cash advance fees</li>
                <li>Foreign transaction fees</li>
                <li>Card replacement fees (if applicable)</li>
                <li>EMI processing fees (if applicable)</li>
              </ul>
              <p>
                All applicable fees and charges will be clearly disclosed before you incur them.
              </p>
            </section>

            <section>
              <h2>5. Rewards Program</h2>
              <p>
                Our rewards program offers:
              </p>
              <ul>
                <li><strong>5X Rewards:</strong> Earn 5X rewards on your top 2 spending categories</li>
                <li><strong>Instant Credits:</strong> Points are credited instantly to your account</li>
                <li><strong>No Expiration:</strong> Reward points never expire</li>
                <li><strong>Flexible Redemption:</strong> Redeem points easily through our mobile app</li>
                <li><strong>Fractional Points:</strong> No rounding off - get even fractional points</li>
              </ul>
              <p>
                Rewards program terms may be modified with prior notice. We reserve the right to modify, suspend, or terminate the rewards program at any time.
              </p>
            </section>

            <section>
              <h2>6. Payments and Billing</h2>
              <h3>6.1 Payment Obligations</h3>
              <p>
                You are responsible for paying all charges incurred on your card, including principal amounts, interest, fees, and other charges. Minimum payment amounts and due dates will be communicated through your statement and mobile app.
              </p>

              <h3>6.2 EMI Options</h3>
              <p>
                You may convert eligible transactions into EMIs through our app. EMI terms, interest rates, and processing fees will be disclosed at the time of conversion. You can manage EMIs through the EMI Dashboard in our app.
              </p>

              <h3>6.3 Late Payments</h3>
              <p>
                Late payment fees and interest charges may apply if payments are not received by the due date. Continued non-payment may result in account suspension or closure.
              </p>
            </section>

            <section>
              <h2>7. MyFamily Feature</h2>
              <p>
                The MyFamily feature allows you to share your credit limit with family members. By using this feature, you agree that:
              </p>
              <ul>
                <li>You are responsible for all charges made by authorized family members</li>
                <li>You can set spending limits and controls for family members</li>
                <li>Family members receive their own card with separate offers</li>
                <li>You can add or remove family members at any time through the app</li>
              </ul>
            </section>

            <section>
              <h2>8. Mobile App and Digital Services</h2>
              <p>
                Our mobile app provides powerful control over your credit card:
              </p>
              <ul>
                <li>Transaction limit management</li>
                <li>Domestic/international use controls</li>
                <li>Online/offline use settings</li>
                <li>Contactless payment controls</li>
                <li>Real-time transaction notifications</li>
              </ul>
              <p>
                You are responsible for maintaining the security of your app credentials and device. We are not liable for unauthorized access resulting from your failure to secure your device or credentials.
              </p>
            </section>

            <section>
              <h2>9. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Keep your account information up to date</li>
                <li>Maintain the security of your account credentials</li>
                <li>Monitor your account regularly</li>
                <li>Report suspicious activity immediately</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the Services for illegal purposes</li>
                <li>Not attempt to circumvent security measures</li>
              </ul>
            </section>

            <section>
              <h2>10. Prohibited Activities</h2>
              <p>You may not:</p>
              <ul>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Share your account credentials with others</li>
                <li>Use the card for money laundering or terrorist financing</li>
              </ul>
            </section>

            <section>
              <h2>11. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, and software, are owned by Spectra or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
              </p>
            </section>

            <section>
              <h2>12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Spectra and its banking partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, resulting from your use of the Services.
              </p>
              <p>
                Our total liability for any claims arising from the Services shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Spectra, its banking partners, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any rights of another.
              </p>
            </section>

            <section>
              <h2>14. Account Suspension and Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account and access to the Services at any time, with or without notice, for:
              </p>
              <ul>
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment or default</li>
                <li>Breach of security</li>
                <li>Any other reason we deem necessary</li>
              </ul>
              <p>
                You may close your account at any time by contacting customer support. Outstanding balances must be paid in full before account closure.
              </p>
            </section>

            <section>
              <h2>15. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or the Services shall be resolved through:
              </p>
              <ol>
                <li><strong>Good Faith Negotiation:</strong> Parties will attempt to resolve disputes through good faith negotiation</li>
                <li><strong>Mediation:</strong> If negotiation fails, disputes will be referred to mediation</li>
                <li><strong>Arbitration:</strong> Unresolved disputes will be settled through binding arbitration in accordance with Indian arbitration laws</li>
                <li><strong>Jurisdiction:</strong> Courts in India shall have exclusive jurisdiction over any disputes</li>
              </ol>
            </section>

            <section>
              <h2>16. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Material changes will be notified through:
              </p>
              <ul>
                <li>Email notification</li>
                <li>In-app notifications</li>
                <li>Posting on our website</li>
              </ul>
              <p>
                Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Services and close your account.
              </p>
            </section>

            <section>
              <h2>17. Banking Partners</h2>
              <p>
                Spectra credit cards are issued by our banking partners: BOBCARD, CSB Bank, Federal Bank, IDFC Bank, SBM Bank, South Indian Bank, and Indian Bank. These banks are responsible for card issuance, credit decisions, and regulatory compliance. Spectra provides the technology platform and user experience.
              </p>
            </section>

            <section>
              <h2>18. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2>19. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2>20. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> support@spectra.com</li>
                <li><strong>Address:</strong> FPL Technologies Pvt. Ltd., India</li>
                <li><strong>Phone:</strong> Available through our mobile app</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions

