import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import * as Icons from 'lucide-react'

const Services = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? Icon : Icons.Briefcase
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive recruitment solutions for job seekers and employers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = getIcon(service.icon)
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center bg-navy-800 rounded-full p-4 mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                How We Help Job Seekers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Eze Connect Agency, we understand that finding the right job is about more than just matching skills to requirements. It's about finding a role where you can grow, contribute, and build a meaningful career.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized job matching based on your skills and preferences",
                  "Career guidance and interview preparation support",
                  "Access to exclusive job opportunities across multiple industries",
                  "Continuous support throughout your job search journey"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop"
                alt="Job seeker preparing for interview"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Business team meeting"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                How We Help Employers
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Building a great team starts with finding the right people. We partner with employers to understand their unique needs and deliver candidates who not only have the right skills but also fit your company culture.
              </p>
              <ul className="space-y-3">
                {[
                  "Access to a pre-screened pool of qualified candidates",
                  "Flexible staffing solutions for temporary and permanent positions",
                  "Industry-specific recruitment expertise",
                  "Streamlined hiring process to save you time and resources"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-1 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you're looking for your next opportunity or building your team, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all hover:shadow-lg hover:shadow-red-500/30"
            >
              Find a Job
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/employers"
              className="inline-flex items-center justify-center bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
