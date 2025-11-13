import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const Security = () => {
  useEffect(() => {
    trackPageView('/security')
  }, [])

  return (
    <>
      <Helmet>
        <title>Security | Spectra</title>
        <meta 
          name="description" 
          content="Learn about Spectra's security measures, data protection, and how we keep your financial information safe. ISO 27001 and PCI DSS certified." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/security" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Security & <span className="gradient-text">Protection</span>
            </h1>
            <p className="legal-page-subtitle">
              Your security is our top priority
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>Our Commitment to Security</h2>
              <p>
                At Spectra, we take security seriously. We employ industry-leading security measures and best practices to protect your personal and financial information. Security is not just a feature—it's fundamental to everything we do.
              </p>
              <p>
                We are ISO 27001 certified and PCI DSS compliant, demonstrating our commitment to maintaining the highest standards of information security management.
              </p>
            </section>

            <section>
              <h2>Data Encryption</h2>
              <h3>End-to-End Encryption</h3>
              <p>
                All sensitive data transmitted between your device and our servers is encrypted using industry-standard TLS (Transport Layer Security) protocols. This ensures that your information cannot be intercepted or read by unauthorized parties.
              </p>

              <h3>Data at Rest</h3>
              <p>
                Your data stored in our databases is encrypted using AES-256 encryption, one of the strongest encryption standards available. This means even if someone gains access to our storage systems, they cannot read your information without the encryption keys.
              </p>

              <h3>Payment Card Data</h3>
              <p>
                We comply with PCI DSS (Payment Card Industry Data Security Standard) requirements. Card numbers are tokenized and never stored in plain text. We use secure payment processors and never have direct access to your full card details.
              </p>
            </section>

            <section>
              <h2>Authentication & Access Control</h2>
              <h3>Multi-Factor Authentication</h3>
              <p>
                We offer multi-factor authentication (MFA) to add an extra layer of security to your account. This requires something you know (password) and something you have (mobile device) to access your account.
              </p>

              <h3>Biometric Authentication</h3>
              <p>
                Our mobile app supports biometric authentication (fingerprint, face recognition) for quick and secure access. Biometric data is stored securely on your device and never transmitted to our servers.
              </p>

              <h3>Password Security</h3>
              <p>
                We enforce strong password requirements and use secure password hashing algorithms. Passwords are never stored in plain text and cannot be retrieved by our staff.
              </p>

              <h3>Session Management</h3>
              <p>
                Active sessions are monitored and automatically expire after periods of inactivity. You can view and manage active sessions through the mobile app.
              </p>
            </section>

            <section>
              <h2>Fraud Prevention</h2>
              <h3>Real-Time Monitoring</h3>
              <p>
                Our advanced fraud detection systems monitor transactions in real-time, using machine learning algorithms to identify suspicious patterns and potential fraud. Unusual activity triggers immediate alerts and may result in temporary account restrictions.
              </p>

              <h3>Transaction Controls</h3>
              <p>
                You have full control over your card usage through our mobile app:
              </p>
              <ul>
                <li>Set transaction limits for different types of purchases</li>
                <li>Enable or disable domestic/international transactions</li>
                <li>Control online and offline usage</li>
                <li>Manage contactless payment settings</li>
                <li>Freeze or unfreeze your card instantly</li>
              </ul>

              <h3>Transaction Alerts</h3>
              <p>
                Receive instant notifications for all transactions via SMS, email, and push notifications. This allows you to quickly identify and report any unauthorized activity.
              </p>
            </section>

            <section>
              <h2>Infrastructure Security</h2>
              <h3>Secure Servers</h3>
              <p>
                Our infrastructure is hosted on secure, compliant cloud platforms with:
              </p>
              <ul>
                <li>Regular security audits and penetration testing</li>
                <li>Intrusion detection and prevention systems</li>
                <li>DDoS (Distributed Denial of Service) protection</li>
                <li>Firewall protection and network segmentation</li>
                <li>Regular security patches and updates</li>
              </ul>

              <h3>Access Controls</h3>
              <p>
                Access to our systems is restricted to authorized personnel only, following the principle of least privilege. All access is logged and monitored. Employees undergo background checks and security training.
              </p>

              <h3>Backup and Recovery</h3>
              <p>
                We maintain secure, encrypted backups of your data. Our disaster recovery plan ensures business continuity and data availability even in the event of system failures.
              </p>
            </section>

            <section>
              <h2>Mobile App Security</h2>
              <h3>App Security</h3>
              <p>
                Our mobile app is built with security best practices:
              </p>
              <ul>
                <li>Code obfuscation to prevent reverse engineering</li>
                <li>Certificate pinning to prevent man-in-the-middle attacks</li>
                <li>Secure storage for sensitive data on your device</li>
                <li>Regular security updates and patches</li>
                <li>Compliance with mobile app security standards</li>
              </ul>

              <h3>Device Security</h3>
              <p>
                We recommend you:
              </p>
              <ul>
                <li>Keep your device operating system updated</li>
                <li>Use a secure lock screen (PIN, pattern, or biometric)</li>
                <li>Install apps only from trusted sources</li>
                <li>Enable device encryption if available</li>
                <li>Be cautious when using public Wi-Fi networks</li>
              </ul>
            </section>

            <section>
              <h2>Compliance & Certifications</h2>
              <h3>ISO 27001 Certified</h3>
              <p>
                We are ISO 27001 certified, demonstrating our commitment to maintaining an effective Information Security Management System (ISMS). This certification requires regular audits and continuous improvement of our security practices.
              </p>

              <h3>PCI DSS Compliant</h3>
              <p>
                As a Visa service provider, we maintain PCI DSS compliance, ensuring secure handling of payment card data. This includes regular security assessments and compliance validation.
              </p>

              <h3>Regulatory Compliance</h3>
              <p>
                We comply with all applicable financial regulations in India, including:
              </p>
              <ul>
                <li>Reserve Bank of India (RBI) guidelines</li>
                <li>Information Technology Act, 2000</li>
                <li>Personal Data Protection Bill requirements</li>
                <li>Banking regulations and guidelines</li>
              </ul>
            </section>

            <section>
              <h2>Incident Response</h2>
              <p>
                We have a comprehensive incident response plan to address security incidents quickly and effectively:
              </p>
              <ul>
                <li>24/7 security monitoring and threat detection</li>
                <li>Rapid incident response team</li>
                <li>Automated threat containment</li>
                <li>Post-incident analysis and improvement</li>
                <li>Regulatory notification procedures</li>
              </ul>
              <p>
                In the event of a security incident affecting your data, we will notify you promptly and take immediate steps to mitigate the impact.
              </p>
            </section>

            <section>
              <h2>Your Role in Security</h2>
              <p>
                Security is a shared responsibility. Here's how you can help protect your account:
              </p>
              <ul>
                <li><strong>Strong Passwords:</strong> Use a unique, strong password for your Spectra account</li>
                <li><strong>Enable MFA:</strong> Activate multi-factor authentication for additional security</li>
                <li><strong>Regular Monitoring:</strong> Review your transactions regularly and report suspicious activity</li>
                <li><strong>Secure Device:</strong> Keep your mobile device secure and updated</li>
                <li><strong>Phishing Awareness:</strong> Be cautious of emails, calls, or messages asking for your credentials</li>
                <li><strong>Public Wi-Fi:</strong> Avoid accessing your account on public Wi-Fi networks</li>
                <li><strong>Logout:</strong> Always log out when using shared devices</li>
                <li><strong>Report Issues:</strong> Immediately report lost cards or suspected fraud</li>
              </ul>
            </section>

            <section>
              <h2>Security Best Practices</h2>
              <h3>Card Security</h3>
              <ul>
                <li>Never share your card details, CVV, or PIN with anyone</li>
                <li>Keep your card in a safe place</li>
                <li>Sign your card immediately upon receipt</li>
                <li>Destroy old cards properly</li>
                <li>Use the card freeze feature in the app when not in use</li>
              </ul>

              <h3>Online Security</h3>
              <ul>
                <li>Only use trusted websites for online transactions</li>
                <li>Look for HTTPS and padlock icons in your browser</li>
                <li>Never enter card details on suspicious websites</li>
                <li>Use virtual card numbers for online purchases when available</li>
                <li>Enable transaction notifications</li>
              </ul>
            </section>

            <section>
              <h2>Reporting Security Issues</h2>
              <p>
                If you discover a security vulnerability or suspect fraudulent activity, please report it immediately:
              </p>
              <ul>
                <li><strong>Security Vulnerabilities:</strong> security@spectra.com</li>
                <li><strong>Fraud or Unauthorized Transactions:</strong> Report through the mobile app or call our 24/7 helpline</li>
                <li><strong>Lost or Stolen Card:</strong> Freeze your card immediately through the app</li>
              </ul>
              <p>
                We take all security reports seriously and will investigate promptly. We also have a Responsible Disclosure Policy for security researchers.
              </p>
            </section>

            <section>
              <h2>Regular Security Updates</h2>
              <p>
                We continuously improve our security measures and will keep you informed of important updates. We recommend:
              </p>
              <ul>
                <li>Keeping the Spectra mobile app updated</li>
                <li>Reading security notifications we send</li>
                <li>Reviewing this security page periodically</li>
                <li>Following our security recommendations</li>
              </ul>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                For security-related questions or concerns:
              </p>
              <ul>
                <li><strong>Email:</strong> security@spectra.com</li>
                <li><strong>24/7 Helpline:</strong> Available through our mobile app</li>
                <li><strong>In-App Support:</strong> Use the support feature in the mobile app</li>
              </ul>
              <p>
                Remember: Spectra will never ask for your password, PIN, or OTP via email, phone, or SMS. If someone asks for this information, it's a scam.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Security

