import { useState, FormEvent } from 'react'
import { trackEvent } from '../utils/analytics'
import './ApplicationForm.css'

interface FormData {
  fullName: string
  email: string
  phone: string
  dateOfBirth: string
  panCard: string
  annualIncome: string
  employmentStatus: string
  city: string
  pincode: string
  agreeToTerms: boolean
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panCard: '',
    annualIncome: '',
    employmentStatus: '',
    city: '',
    pincode: '',
    agreeToTerms: false
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number'
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    } else {
      const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear()
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be at least 18 years old'
      }
    }

    if (!formData.panCard.trim()) {
      newErrors.panCard = 'PAN card number is required'
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard.toUpperCase())) {
      newErrors.panCard = 'Please enter a valid PAN card number'
    }

    if (!formData.annualIncome) {
      newErrors.annualIncome = 'Annual income is required'
    }

    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Employment status is required'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required'
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = true as any
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      trackEvent('Form', 'Validation Error', 'Application Form')
      return
    }

    setIsSubmitting(true)

    // Track form submission
    trackEvent('Form', 'Submit', 'Credit Card Application')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      trackEvent('Form', 'Success', 'Credit Card Application')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          panCard: '',
          annualIncome: '',
          employmentStatus: '',
          city: '',
          pincode: '',
          agreeToTerms: false
        })
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      trackEvent('Form', 'Error', 'Credit Card Application')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Application Submitted Successfully!</h3>
        <p>Thank you for applying. Our team will review your application and contact you within 24-48 hours.</p>
        <p className="success-note">You will receive a confirmation email shortly.</p>
      </div>
    )
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2 className="form-title">Apply for Spectra</h2>
        <p className="form-subtitle">Fill in your details to get started</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            maxLength={10}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth *</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
            className={errors.dateOfBirth ? 'error' : ''}
          />
          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="panCard">PAN Card Number *</label>
          <input
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleChange}
            placeholder="ABCDE1234F"
            maxLength={10}
            className={errors.panCard ? 'error' : ''}
            style={{ textTransform: 'uppercase' }}
          />
          {errors.panCard && <span className="error-message">{errors.panCard}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="annualIncome">Annual Income *</label>
          <select
            id="annualIncome"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
            className={errors.annualIncome ? 'error' : ''}
          >
            <option value="">Select annual income</option>
            <option value="0-3L">Below ₹3 Lakhs</option>
            <option value="3-5L">₹3 - ₹5 Lakhs</option>
            <option value="5-10L">₹5 - ₹10 Lakhs</option>
            <option value="10-25L">₹10 - ₹25 Lakhs</option>
            <option value="25L+">Above ₹25 Lakhs</option>
          </select>
          {errors.annualIncome && <span className="error-message">{errors.annualIncome}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="employmentStatus">Employment Status *</label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className={errors.employmentStatus ? 'error' : ''}
          >
            <option value="">Select employment status</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self Employed</option>
            <option value="business">Business Owner</option>
            <option value="student">Student</option>
            <option value="retired">Retired</option>
          </select>
          {errors.employmentStatus && <span className="error-message">{errors.employmentStatus}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className={errors.city ? 'error' : ''}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode *</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="6-digit pincode"
            maxLength={6}
            className={errors.pincode ? 'error' : ''}
          />
          {errors.pincode && <span className="error-message">{errors.pincode}</span>}
        </div>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className={errors.agreeToTerms ? 'error' : ''}
          />
          <span>I agree to the <a href="#terms" target="_blank">Terms & Conditions</a> and <a href="#privacy" target="_blank">Privacy Policy</a> *</span>
        </label>
        {errors.agreeToTerms && <span className="error-message">You must agree to the terms and conditions</span>}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>

      <p className="form-note">
        * All fields are mandatory. Your information is secure and will be used only for application processing.
      </p>
    </form>
  )
}

export default ApplicationForm

