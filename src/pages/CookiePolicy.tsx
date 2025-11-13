import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const CookiePolicy = () => {
  useEffect(() => {
    trackPageView('/cookie-policy')
  }, [])

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Spectra</title>
        <meta 
          name="description" 
          content="Spectra Cookie Policy - Learn about how we use cookies and similar technologies to enhance your experience. Manage your cookie preferences." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/cookie-policy" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Cookie <span className="gradient-text">Policy</span>
            </h1>
            <p className="legal-page-subtitle">
              Last Updated: January 2025
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how Spectra ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website or use our mobile application. This policy should be read alongside our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. We believe in transparency, so we want you to understand how these technologies work and how you can control them.
              </p>
            </section>

            <section>
              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use an app. They are widely used to make websites and apps work more efficiently and provide information to the website owners.
              </p>
              <p>
                Cookies allow a website to recognize your device and store some information about your preferences or past actions. This helps us provide you with a better, faster, and more personalized experience.
              </p>
            </section>

            <section>
              <h2>3. Types of Cookies We Use</h2>
              <h3>3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website and app to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have asked for cannot be provided.
              </p>
              <p><strong>Examples:</strong></p>
              <ul>
                <li>Authentication cookies to keep you logged in</li>
                <li>Security cookies to protect against fraud</li>
                <li>Session cookies to maintain your session</li>
                <li>Load balancing cookies for performance</li>
              </ul>
              <p>
                <strong>Can you opt-out?</strong> No, these cookies are essential and cannot be disabled.
              </p>

              <h3>3.2 Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization. They remember choices you make (such as language preferences) and provide enhanced, more personalized features.
              </p>
              <p><strong>Examples:</strong></p>
              <ul>
                <li>Language preference cookies</li>
                <li>Region/location cookies</li>
                <li>User interface customization cookies</li>
                <li>Remembering your preferences</li>
              </ul>
              <p>
                <strong>Can you opt-out?</strong> Yes, but disabling these may affect functionality.
              </p>

              <h3>3.3 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website and app by collecting and reporting information anonymously. This helps us improve our services and user experience.
              </p>
              <p><strong>Examples:</strong></p>
              <ul>
                <li>Google Analytics cookies</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
                <li>Performance monitoring</li>
              </ul>
              <p>
                <strong>Can you opt-out?</strong> Yes, you can opt-out through cookie settings or browser preferences.
              </p>

              <h3>3.4 Marketing/Advertising Cookies</h3>
              <p>
                These cookies are used to deliver advertisements that are relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
              </p>
              <p><strong>Examples:</strong></p>
              <ul>
                <li>Targeted advertising cookies</li>
                <li>Social media integration cookies</li>
                <li>Retargeting cookies</li>
                <li>Conversion tracking cookies</li>
              </ul>
              <p>
                <strong>Can you opt-out?</strong> Yes, you can opt-out through cookie settings.
              </p>
            </section>

            <section>
              <h2>4. Cookies We Use</h2>
              <h3>4.1 Our Own Cookies</h3>
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>spectra_session</td>
                    <td>Maintains your login session</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td>spectra_preferences</td>
                    <td>Stores your preferences (language, theme)</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>spectra_security</td>
                    <td>Security and fraud prevention</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>spectra_analytics</td>
                    <td>Analytics and usage tracking</td>
                    <td>2 years</td>
                  </tr>
                </tbody>
              </table>

              <h3>4.2 Third-Party Cookies</h3>
              <p>
                We also use third-party cookies from trusted partners:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> To analyze website usage and improve user experience</li>
                <li><strong>Google Tag Manager:</strong> To manage tags and tracking scripts</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality (Facebook, Twitter, LinkedIn)</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
              </ul>
            </section>

            <section>
              <h2>5. Similar Technologies</h2>
              <p>
                In addition to cookies, we use other similar technologies:
              </p>
              <ul>
                <li><strong>Local Storage:</strong> Stores data locally in your browser for faster access</li>
                <li><strong>Session Storage:</strong> Temporary storage for your session data</li>
                <li><strong>Web Beacons/Pixels:</strong> Small images used to track email opens and page views</li>
                <li><strong>Fingerprinting:</strong> Device fingerprinting for security and fraud prevention</li>
                <li><strong>SDKs:</strong> Software development kits in our mobile app for analytics and functionality</li>
              </ul>
            </section>

            <section>
              <h2>6. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li><strong>Authentication:</strong> To keep you logged in and secure</li>
                <li><strong>Security:</strong> To detect and prevent fraud</li>
                <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                <li><strong>Analytics:</strong> To understand how you use our services</li>
                <li><strong>Performance:</strong> To improve website and app performance</li>
                <li><strong>Personalization:</strong> To provide personalized content and offers</li>
                <li><strong>Marketing:</strong> To deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2>7. Managing Your Cookie Preferences</h2>
              <h3>7.1 Cookie Settings</h3>
              <p>
                You can manage your cookie preferences through:
              </p>
              <ul>
                <li>Our cookie consent banner (when you first visit)</li>
                <li>Cookie settings page in your account</li>
                <li>Browser settings (see below)</li>
              </ul>

              <h3>7.2 Browser Settings</h3>
              <p>
                Most browsers allow you to control cookies through their settings. Here's how:
              </p>
              <ul>
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
              </ul>

              <h3>7.3 Mobile App Settings</h3>
              <p>
                For our mobile app, you can manage preferences through:
              </p>
              <ul>
                <li>App Settings → Privacy → Cookie Preferences</li>
                <li>Device settings for app permissions</li>
              </ul>

              <h3>7.4 Opt-Out Tools</h3>
              <p>
                You can also use these opt-out tools:
              </p>
              <ul>
                <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                <li>Network Advertising Initiative opt-out</li>
              </ul>
            </section>

            <section>
              <h2>8. Impact of Disabling Cookies</h2>
              <p>
                If you disable cookies, some features of our website and app may not function properly:
              </p>
              <ul>
                <li>You may need to log in repeatedly</li>
                <li>Your preferences may not be saved</li>
                <li>Some features may not work as expected</li>
                <li>Personalization may be limited</li>
                <li>Performance may be affected</li>
              </ul>
              <p>
                Essential cookies cannot be disabled as they are necessary for basic functionality.
              </p>
            </section>

            <section>
              <h2>9. Do Not Track Signals</h2>
              <p>
                Some browsers send "Do Not Track" (DNT) signals. Currently, there is no industry standard for responding to DNT signals. We continue to monitor developments in this area and will update our practices accordingly.
              </p>
              <p>
                However, you can still control cookies through your browser settings and our cookie preferences.
              </p>
            </section>

            <section>
              <h2>10. Third-Party Cookies</h2>
              <p>
                Third-party cookies are set by domains other than ours. We use third-party services that may set their own cookies:
              </p>
              <ul>
                <li><strong>Analytics Providers:</strong> Google Analytics, etc.</li>
                <li><strong>Social Media:</strong> Facebook, Twitter, LinkedIn buttons</li>
                <li><strong>Payment Processors:</strong> Secure payment gateways</li>
                <li><strong>Content Delivery Networks:</strong> For faster content delivery</li>
              </ul>
              <p>
                These third parties have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2>11. Cookies in Mobile Apps</h2>
              <p>
                Our mobile app uses similar technologies:
              </p>
              <ul>
                <li><strong>App Analytics:</strong> To understand app usage</li>
                <li><strong>Crash Reporting:</strong> To improve app stability</li>
                <li><strong>Push Notifications:</strong> To send you relevant updates</li>
                <li><strong>Device Identifiers:</strong> For security and personalization</li>
              </ul>
              <p>
                You can manage these through app settings or device permissions.
              </p>
            </section>

            <section>
              <h2>12. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. We will notify you of significant changes by:
              </p>
              <ul>
                <li>Posting the updated policy on this page</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending notifications through the app or email</li>
              </ul>
              <p>
                We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            <section>
              <h2>13. Your Rights</h2>
              <p>
                Under applicable data protection laws, you have the right to:
              </p>
              <ul>
                <li>Know what cookies are being used</li>
                <li>Control which cookies are set</li>
                <li>Delete cookies that have been set</li>
                <li>Opt-out of non-essential cookies</li>
                <li>Access information about cookies used</li>
              </ul>
              <p>
                You can exercise these rights through your browser settings, our cookie preferences, or by contacting us.
              </p>
            </section>

            <section>
              <h2>14. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18. We do not knowingly collect personal information from children or use cookies to track children's online activities.
              </p>
            </section>

            <section>
              <h2>15. Contact Us</h2>
              <p>
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> privacy@spectra.com</li>
                <li><strong>Subject:</strong> Cookie Policy Inquiry</li>
                <li><strong>Address:</strong> FPL Technologies Pvt. Ltd., India</li>
              </ul>
              <p>
                For more information about how we handle your personal data, please see our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiePolicy

