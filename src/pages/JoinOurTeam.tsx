import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import './LegalPage.css'

const JoinOurTeam = () => {
  useEffect(() => {
    trackPageView('/join-our-team')
  }, [])

  return (
    <>
      <Helmet>
        <title>Join Our Team | Careers at Spectra</title>
        <meta 
          name="description" 
          content="Join Spectra's team and help build India's best metal credit card. We're looking for passionate individuals who share our vision of simplicity, transparency, and innovation." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.getonecard.app/join-our-team" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-page-container">
          <div className="legal-page-header">
            <h1 className="legal-page-title">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="legal-page-subtitle">
              Build the future of financial services with us
            </p>
          </div>
          <div className="legal-page-content">
            <section>
              <h2>Why Join Spectra?</h2>
              <p>
                At Spectra, we're building India's best metal credit card with full-stack technology, backed by principles of simplicity, transparency, and giving control back to users. We're a new kid on the block, eager to learn and grow together.
              </p>
              <p>
                We're looking for passionate individuals who share our vision and want to make a meaningful impact in the fintech space. If you're excited about building innovative products, solving complex problems, and working in a fast-paced environment, Spectra might be the perfect place for you.
              </p>
            </section>

            <section>
              <h2>Our Culture</h2>
              <p>
                We believe in creating an environment where everyone can thrive:
              </p>
              <ul>
                <li><strong>Innovation First:</strong> We encourage creative thinking and experimentation</li>
                <li><strong>Transparency:</strong> Open communication and honest feedback</li>
                <li><strong>Growth Mindset:</strong> Continuous learning and development</li>
                <li><strong>Work-Life Balance:</strong> We value your well-being</li>
                <li><strong>Diversity & Inclusion:</strong> Everyone's voice matters</li>
                <li><strong>Impact-Driven:</strong> Your work directly impacts millions of users</li>
              </ul>
            </section>

            <section>
              <h2>Open Positions</h2>
              
              <h3>Engineering</h3>
              <ul>
                <li><strong>Senior Full-Stack Engineer:</strong> Build scalable backend systems and intuitive frontend experiences</li>
                <li><strong>Mobile Developer (iOS/Android):</strong> Create powerful mobile experiences for our app</li>
                <li><strong>DevOps Engineer:</strong> Ensure reliable infrastructure and smooth deployments</li>
                <li><strong>Security Engineer:</strong> Protect our platform and user data</li>
                <li><strong>Data Engineer:</strong> Build data pipelines and analytics infrastructure</li>
              </ul>

              <h3>Product & Design</h3>
              <ul>
                <li><strong>Product Manager:</strong> Define and execute product strategy</li>
                <li><strong>UX Designer:</strong> Design intuitive user experiences</li>
                <li><strong>UI Designer:</strong> Create beautiful and functional interfaces</li>
                <li><strong>Product Analyst:</strong> Drive data-informed product decisions</li>
              </ul>

              <h3>Business & Operations</h3>
              <ul>
                <li><strong>Growth Marketing Manager:</strong> Drive user acquisition and retention</li>
                <li><strong>Customer Success Manager:</strong> Ensure exceptional user experience</li>
                <li><strong>Operations Manager:</strong> Optimize business processes</li>
                <li><strong>Risk Analyst:</strong> Manage credit and fraud risk</li>
                <li><strong>Compliance Officer:</strong> Ensure regulatory compliance</li>
              </ul>

              <h3>Data & Analytics</h3>
              <ul>
                <li><strong>Data Scientist:</strong> Build ML models for fraud detection and personalization</li>
                <li><strong>Business Analyst:</strong> Provide insights to drive business decisions</li>
                <li><strong>Analytics Engineer:</strong> Build analytics infrastructure</li>
              </ul>
            </section>

            <section>
              <h2>What We Offer</h2>
              <h3>Compensation & Benefits</h3>
              <ul>
                <li>Competitive salary and equity participation</li>
                <li>Comprehensive health insurance for you and your family</li>
                <li>Flexible work arrangements and remote options</li>
                <li>Learning and development budget</li>
                <li>Wellness programs and gym memberships</li>
                <li>Generous paid time off</li>
                <li>Parental leave</li>
              </ul>

              <h3>Perks</h3>
              <ul>
                <li>Latest tech equipment and tools</li>
                <li>Free meals and snacks</li>
                <li>Team outings and events</li>
                <li>Conference and training opportunities</li>
                <li>Stocked pantry</li>
                <li>Flexible working hours</li>
              </ul>
            </section>

            <section>
              <h2>Our Hiring Process</h2>
              <p>
                We've designed our hiring process to be transparent and respectful of your time:
              </p>
              <ol>
                <li><strong>Application:</strong> Submit your resume and cover letter</li>
                <li><strong>Initial Screening:</strong> Brief call with our talent team</li>
                <li><strong>Technical Assessment:</strong> Role-specific assessment (if applicable)</li>
                <li><strong>Interviews:</strong> Meet the team (2-3 rounds)</li>
                <li><strong>Final Round:</strong> Meet leadership and discuss offer</li>
                <li><strong>Offer:</strong> We make an offer and welcome you to the team!</li>
              </ol>
              <p>
                We aim to complete the process within 2-3 weeks and keep you informed at every step.
              </p>
            </section>

            <section>
              <h2>How to Apply</h2>
              <p>
                Ready to join us? Here's how to apply:
              </p>
              <ol>
                <li>Browse our open positions above</li>
                <li>Send your resume and cover letter to <strong>careers@spectra.com</strong></li>
                <li>Include the position title in the subject line</li>
                <li>Tell us why you're excited about Spectra</li>
              </ol>
              <p>
                Don't see a position that matches your skills? We're always looking for talented people. Send us your resume at <strong>careers@spectra.com</strong> with "General Application" in the subject line, and we'll keep you in mind for future opportunities.
              </p>
            </section>

            <section>
              <h2>Internship Opportunities</h2>
              <p>
                We offer internship opportunities for students and recent graduates who want to learn and grow with us. Our internships are:
              </p>
              <ul>
                <li>Paid internships with competitive stipends</li>
                <li>Mentorship from experienced team members</li>
                <li>Real projects that impact our product</li>
                <li>Potential for full-time conversion</li>
                <li>Flexible duration (3-6 months)</li>
              </ul>
              <p>
                To apply for internships, send your resume and a brief note about your interests to <strong>internships@spectra.com</strong>.
              </p>
            </section>

            <section>
              <h2>Life at Spectra</h2>
              <p>
                Working at Spectra means being part of a mission-driven team that's changing how people interact with financial services. You'll work alongside talented individuals, learn from industry experts, and have the opportunity to make a real impact.
              </p>
              <p>
                We're headquartered in India and are building a diverse, inclusive team. We believe that great products come from great teams, and great teams come from diverse perspectives.
              </p>
            </section>

            <section>
              <h2>Equal Opportunity</h2>
              <p>
                Spectra is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                Have questions about working at Spectra? We'd love to hear from you:
              </p>
              <ul>
                <li><strong>Email:</strong> careers@spectra.com</li>
                <li><strong>LinkedIn:</strong> Follow us for updates on new positions</li>
                <li><strong>Address:</strong> FPL Technologies Pvt. Ltd., India</li>
              </ul>
              <p>
                We're all ears! We're a new kid on the block, eager to learn. All ideas and suggestions are welcome.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default JoinOurTeam

