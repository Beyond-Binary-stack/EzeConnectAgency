import { useState } from 'react'
import { ArrowRight, CheckCircle, Users, Clock, Award, Building2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Employers = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    employeesNeeded: '',
    jobPosition: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // EmailJS integration
    const templateParams = {
      company_name: formData.companyName,
      contact_person: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      employees_needed: formData.employeesNeeded,
      job_position: formData.jobPosition,
      message: formData.message,
      to_email: 'rkayemba@students.vu.ac.ug'
    }

    emailjs.send(
      'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
      templateParams,
      'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text)
      alert('Thank you for your request! We will contact you shortly.')
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        employeesNeeded: '',
        jobPosition: '',
        message: ''
      })
    })
    .catch((error) => {
      console.error('Email send error:', error.text)
      alert('There was a problem submitting your form. Please try again.')
    })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find the Right Talent for Your Business
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let Eze Connect Agency help you recruit suitable workers across different industries
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make recruitment simple and effective for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Qualified Candidates",
                description: "Pre-screened and verified professionals"
              },
              {
                icon: Clock,
                title: "Fast Recruitment",
                description: "Quick turnaround on staffing needs"
              },
              {
                icon: Users,
                title: "Flexible Staffing",
                description: "Temporary and permanent solutions"
              },
              {
                icon: Building2,
                title: "Multiple Categories",
                description: "Diverse job categories covered"
              },
              {
                icon: Award,
                title: "Professional Support",
                description: "Dedicated account management"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-3">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                Request Recruitment Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tell us about your staffing needs and our team will get back to you with suitable candidates. We'll work with you to understand your requirements and find the right talent for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Free consultation on your recruitment needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Access to our database of qualified candidates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-1 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexible staffing solutions tailored to your needs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="employer-request"
                method="POST"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees Needed *
                    </label>
                    <input
                      type="number"
                      name="employeesNeeded"
                      value={formData.employeesNeeded}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g., 5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Position *
                    </label>
                    <input
                      type="text"
                      name="jobPosition"
                      value={formData.jobPosition}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g., Accountant"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us directly and our team will respond to your inquiry as soon as possible.
          </p>
          <a
            href="tel:+256751282514"
            className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Call Us: +256 751 282 514
          </a>
        </div>
      </section>
    </div>
  )
}

export default Employers
