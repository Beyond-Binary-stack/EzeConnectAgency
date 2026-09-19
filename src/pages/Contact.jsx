import { useState } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
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
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch with Eze Connect Agency for all your recruitment needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions about our services or need help with recruitment? We're here to assist you. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-3 flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Nateete Wakaliga Road,<br />
                      Opp. Petro City,<br />
                      Kukanya Plaza Building
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-3 flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                    <a
                      href="tel:+256751282514"
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      +256 751 282 514
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-3 flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a
                      href="mailto:rkayemba@students.vu.ac.ug"
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      rkayemba@students.vu.ac.ug
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center bg-green-500 rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/256751282514"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-500 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                  <p className="text-gray-500">Google Maps integration</p>
                  <p className="text-sm text-gray-400">Nateete Wakaliga Road, Kampala</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
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
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Business Hours
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-navy-900">Monday - Friday</p>
                <p className="text-gray-600">8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Saturday</p>
                <p className="text-gray-600">9:00 AM - 2:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900">Sunday</p>
                <p className="text-gray-600">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
