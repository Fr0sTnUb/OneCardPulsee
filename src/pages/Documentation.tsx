import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const Documentation = () => {
  useEffect(() => {
    trackPageView('/documentation')
  }, [])

  return (
    <>
      <Helmet>
        <title>Documentation | Spectra</title>
        <meta 
          name="description" 
          content="Spectra Documentation - Complete guides, API documentation, and resources for developers and users. Learn how to use Spectra's features effectively." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/documentation" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Documentation & <span className="gradient-text">Resources</span>
            </h1>
            <p className="legal-page-subtitle">
              Everything you need to know about Spectra
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>Welcome to Spectra Documentation</h2>
              <p>
                This documentation provides comprehensive guides and resources to help you make the most of your Spectra credit card and our platform. Whether you're a new user or looking to explore advanced features, you'll find everything you need here.
              </p>
            </section>

            <section>
              <h2>Getting Started</h2>
              <h3>1. Applying for Your Card</h3>
              <p>
                Getting your Spectra metal credit card is quick and easy:
              </p>
              <ol>
                <li>Download the Spectra mobile app or visit our website</li>
                <li>Click "Apply Now" and fill in your details</li>
                <li>Complete the digital onboarding process (takes less than 5 minutes)</li>
                <li>Get instant approval decision</li>
                <li>Receive your metal card at your registered address</li>
              </ol>

              <h3>2. Activating Your Card</h3>
              <p>
                Once you receive your card:
              </p>
              <ol>
                <li>Open the Spectra mobile app</li>
                <li>Navigate to "Activate Card"</li>
                <li>Enter your card details</li>
                <li>Set your PIN</li>
                <li>Start using your card immediately</li>
              </ol>

              <h3>3. Setting Up Your Account</h3>
              <p>
                Complete your profile setup:
              </p>
              <ul>
                <li>Verify your email and phone number</li>
                <li>Set up biometric authentication for quick access</li>
                <li>Enable transaction notifications</li>
                <li>Configure your spending preferences</li>
                <li>Set transaction limits</li>
              </ul>
            </section>

            <section>
              <h2>Mobile App Features</h2>
              <h3>Card Controls</h3>
              <p>
                The Spectra app gives you complete control over your card:
              </p>
              <ul>
                <li><strong>Freeze/Unfreeze:</strong> Instantly freeze your card if lost or stolen</li>
                <li><strong>Transaction Limits:</strong> Set daily, weekly, or monthly spending limits</li>
                <li><strong>Geographic Controls:</strong> Enable or disable domestic/international usage</li>
                <li><strong>Channel Controls:</strong> Control online, offline, and contactless payments</li>
                <li><strong>Real-time Alerts:</strong> Get instant notifications for all transactions</li>
              </ul>

              <h3>Transaction Management</h3>
              <ul>
                <li>View all transactions in real-time</li>
                <li>Search and filter transactions</li>
                <li>Download statements</li>
                <li>View spending analytics and insights</li>
                <li>Track rewards and points</li>
              </ul>

              <h3>Rewards & Points</h3>
              <ul>
                <li>View your reward points balance</li>
                <li>See points earned per transaction</li>
                <li>Redeem points instantly</li>
                <li>Track your top spending categories</li>
                <li>View rewards history</li>
              </ul>
            </section>

            <section>
              <h2>Rewards Program</h2>
              <h3>How It Works</h3>
              <p>
                Spectra offers a transparent and rewarding points system:
              </p>
              <ul>
                <li><strong>5X Rewards:</strong> Earn 5X points on your top 2 spending categories</li>
                <li><strong>Standard Rewards:</strong> Earn 1X points on all other purchases</li>
                <li><strong>Instant Credits:</strong> Points are credited immediately after transaction</li>
                <li><strong>No Expiration:</strong> Points never expire</li>
                <li><strong>Fractional Points:</strong> Get points for every rupee spent, no rounding</li>
              </ul>

              <h3>Top Spending Categories</h3>
              <p>
                Your top 2 categories are automatically determined based on your spending patterns. Categories include:
              </p>
              <ul>
                <li>Dining & Restaurants</li>
                <li>Shopping & Retail</li>
                <li>Travel & Hotels</li>
                <li>Entertainment</li>
                <li>Fuel & Gas</li>
                <li>Groceries</li>
                <li>And more</li>
              </ul>

              <h3>Redeeming Points</h3>
              <p>
                Redeeming your points is simple:
              </p>
              <ol>
                <li>Open the Spectra app</li>
                <li>Go to "Rewards" section</li>
                <li>Select "Redeem Points"</li>
                <li>Choose your redemption option</li>
                <li>Confirm and enjoy!</li>
              </ol>
            </section>

            <section>
              <h2>EMI (Equated Monthly Installments)</h2>
              <h3>Converting Transactions to EMI</h3>
              <p>
                Convert eligible transactions to EMIs easily:
              </p>
              <ol>
                <li>Go to "Transactions" in the app</li>
                <li>Select an eligible transaction</li>
                <li>Choose "Convert to EMI"</li>
                <li>Select tenure (3, 6, 9, or 12 months)</li>
                <li>Review terms and confirm</li>
              </ol>

              <h3>EMI Dashboard</h3>
              <p>
                Manage all your EMIs from one place:
              </p>
              <ul>
                <li>View all active EMIs</li>
                <li>Track upcoming payments</li>
                <li>Prepay EMIs (if allowed)</li>
                <li>View EMI history</li>
                <li>Get points on EMI transactions</li>
              </ul>

              <h3>Repaying EMIs with Points</h3>
              <p>
                You can use your reward points to repay EMI installments, making it even more convenient to manage your finances.
              </p>
            </section>

            <section>
              <h2>MyFamily Feature</h2>
              <h3>Adding Family Members</h3>
              <p>
                Share your credit limit with family members:
              </p>
              <ol>
                <li>Go to "MyFamily" in the app</li>
                <li>Click "Add Family Member"</li>
                <li>Enter their details</li>
                <li>Set spending limits and controls</li>
                <li>They'll receive their own card</li>
              </ol>

              <h3>Managing Family Cards</h3>
              <ul>
                <li>View spending by each family member</li>
                <li>Set individual spending limits</li>
                <li>Control card usage (freeze/unfreeze)</li>
                <li>Track all family transactions</li>
                <li>Remove family members anytime</li>
              </ul>

              <h3>Family Benefits</h3>
              <ul>
                <li>Each family member gets their own card</li>
                <li>Separate offers and rewards</li>
                <li>Unified billing and statements</li>
                <li>Centralized control and monitoring</li>
              </ul>
            </section>

            <section>
              <h2>Payments & Billing</h2>
              <h3>Making Payments</h3>
              <p>
                Pay your credit card bill easily:
              </p>
              <ul>
                <li><strong>Auto-Pay:</strong> Set up automatic payments from your bank account</li>
                <li><strong>Manual Payment:</strong> Pay anytime through the app</li>
                <li><strong>UPI:</strong> Pay using UPI apps</li>
                <li><strong>Net Banking:</strong> Pay through your bank's net banking</li>
                <li><strong>NEFT/RTGS:</strong> Transfer funds directly</li>
              </ul>

              <h3>Understanding Your Statement</h3>
              <ul>
                <li><strong>Statement Date:</strong> Your billing cycle end date</li>
                <li><strong>Due Date:</strong> Payment due date (usually 20-25 days after statement date)</li>
                <li><strong>Minimum Amount Due:</strong> Minimum payment required to keep account active</li>
                <li><strong>Total Amount Due:</strong> Full outstanding balance</li>
                <li><strong>Available Credit:</strong> Remaining credit limit</li>
              </ul>

              <h3>Payment Methods</h3>
              <p>
                We support multiple payment methods for your convenience. Choose the one that works best for you.
              </p>
            </section>

            <section>
              <h2>Security Features</h2>
              <h3>Account Security</h3>
              <ul>
                <li><strong>Biometric Login:</strong> Use fingerprint or face recognition</li>
                <li><strong>Multi-Factor Authentication:</strong> Add extra security layer</li>
                <li><strong>Transaction PIN:</strong> Set a secure PIN for transactions</li>
                <li><strong>Session Management:</strong> View and manage active sessions</li>
              </ul>

              <h3>Card Security</h3>
              <ul>
                <li><strong>Instant Freeze:</strong> Freeze card immediately if lost</li>
                <li><strong>Transaction Alerts:</strong> Get notified of all transactions</li>
                <li><strong>Spending Controls:</strong> Set limits and restrictions</li>
                <li><strong>Geographic Controls:</strong> Control where your card can be used</li>
              </ul>

              <h3>Fraud Protection</h3>
              <p>
                Our advanced fraud detection system monitors your account 24/7 and alerts you of suspicious activity. You're protected against unauthorized transactions.
              </p>
            </section>

            <section>
              <h2>Fees & Charges</h2>
              <h3>No Hidden Fees</h3>
              <p>
                We believe in transparency. There are:
              </p>
              <ul>
                <li>No Joining Fees</li>
                <li>No Annual Fees</li>
                <li>No Rewards Redemption Fees</li>
              </ul>

              <h3>Standard Charges</h3>
              <p>
                Some charges may apply:
              </p>
              <ul>
                <li><strong>Interest:</strong> Only if you don't pay full amount by due date</li>
                <li><strong>Late Payment Fee:</strong> As per RBI guidelines</li>
                <li><strong>Cash Advance Fee:</strong> For ATM withdrawals</li>
                <li><strong>Foreign Transaction Fee:</strong> For international transactions</li>
              </ul>
              <p>
                All charges are clearly disclosed in your statement and app.
              </p>
            </section>

            <section>
              <h2>Customer Support</h2>
              <h3>Getting Help</h3>
              <p>
                We're here to help you 24/7:
              </p>
              <ul>
                <li><strong>In-App Support:</strong> Chat with our support team</li>
                <li><strong>Email:</strong> support@spectra.com</li>
                <li><strong>Phone:</strong> 24/7 helpline (available in app)</li>
                <li><strong>FAQ:</strong> Check our frequently asked questions</li>
              </ul>

              <h3>Common Questions</h3>
              <ul>
                <li>How do I activate my card?</li>
                <li>How do I redeem reward points?</li>
                <li>How do I convert a transaction to EMI?</li>
                <li>How do I add a family member?</li>
                <li>What should I do if my card is lost?</li>
                <li>How do I update my contact information?</li>
              </ul>
            </section>

            <section>
              <h2>API Documentation (For Developers)</h2>
              <h3>Spectra API</h3>
              <p>
                We provide APIs for developers to integrate Spectra services:
              </p>
              <ul>
                <li><strong>Authentication:</strong> OAuth 2.0 based authentication</li>
                <li><strong>Transaction API:</strong> Retrieve transaction data</li>
                <li><strong>Card Control API:</strong> Manage card settings programmatically</li>
                <li><strong>Rewards API:</strong> Access rewards and points data</li>
                <li><strong>Webhooks:</strong> Real-time event notifications</li>
              </ul>

              <h3>Getting Started with API</h3>
              <ol>
                <li>Register for API access</li>
                <li>Get your API keys</li>
                <li>Review API documentation</li>
                <li>Start building integrations</li>
              </ol>

              <p>
                <em>Note: API access is currently available for select partners. Contact us for more information.</em>
              </p>
            </section>

            <section>
              <h2>Best Practices</h2>
              <h3>Card Usage</h3>
              <ul>
                <li>Use your card regularly to maximize rewards</li>
                <li>Pay your full balance by due date to avoid interest</li>
                <li>Set up auto-pay for convenience</li>
                <li>Monitor your spending through the app</li>
                <li>Review your statements regularly</li>
              </ul>

              <h3>Security</h3>
              <ul>
                <li>Never share your card details or PIN</li>
                <li>Enable transaction notifications</li>
                <li>Use biometric authentication</li>
                <li>Freeze your card when not in use</li>
                <li>Report suspicious activity immediately</li>
              </ul>

              <h3>Rewards</h3>
              <ul>
                <li>Focus spending on top categories for 5X rewards</li>
                <li>Redeem points regularly</li>
                <li>Use points for EMI payments</li>
                <li>Track your rewards balance</li>
              </ul>
            </section>

            <section>
              <h2>Additional Resources</h2>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                <li><a href="/security">Security Information</a></li>
                <li><a href="/cookie-policy">Cookie Policy</a></li>
                <li>Video tutorials (available in app)</li>
                <li>Blog articles and tips</li>
              </ul>
            </section>

            <section>
              <h2>Updates & Changes</h2>
              <p>
                This documentation is regularly updated. We'll notify you of significant changes through:
              </p>
              <ul>
                <li>In-app notifications</li>
                <li>Email updates</li>
                <li>App update notes</li>
              </ul>
              <p>
                Last Updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation

