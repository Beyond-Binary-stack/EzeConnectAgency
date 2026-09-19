import { ArrowRight, CheckCircle, Users, Briefcase, Heart } from 'lucide-react'
import { jobCategories } from '../data/jobCategories'

const Home = () => {
  const displayCategories = jobCategories.slice(0, 12)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2">
                <span className="text-red-400 text-sm font-medium">
                  TRUSTED RECRUITMENT AGENCY
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connecting Talent with
                <span className="text-red-500"> Opportunities</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Eze Connect Agency connects job seekers with the right employment opportunities while helping employers find reliable and qualified talent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all hover:shadow-lg hover:shadow-red-500/30">
                  Find a Job
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="inline-flex items-center justify-center bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  Hire Talent
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-700 h-[500px] flex items-center justify-center">
                <div className="text-white text-center">
                  <Users className="mx-auto mb-4" size={64} />
                  <p className="text-xl">Professional Team</p>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500 rounded-full p-3">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-900">500+</div>
                    <div className="text-sm text-gray-600">Candidates Placed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Trusted Recruitment Partner",
                description: "Reliable and professional services"
              },
              {
                icon: Briefcase,
                title: "Professional & Reliable",
                description: "Quality-focused recruitment"
              },
              {
                icon: Users,
                title: "For Job Seekers & Employers",
                description: "Serving both sides of the market"
              },
              {
                icon: Heart,
                title: "Building Better Futures",
                description: "Committed to career growth"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center bg-navy-800 rounded-full p-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                About Eze Connect Agency
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Eze Connect Agency is a trusted recruitment agency dedicated to connecting individuals with employment opportunities and helping employers find the right talent for their organizations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We support recruitment across multiple industries and job categories, providing professional recruitment services, talent matching, employer support, and career opportunities.
              </p>
              <button className="inline-flex items-center text-red-500 font-semibold hover:text-red-600 transition-colors">
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-xl w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <Briefcase className="mx-auto mb-4" size={64} />
                  <p className="text-xl">Professional Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              We Hire For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We recruit professionals across diverse industries and job categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {displayCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-sm font-medium text-navy-900">{category}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">And many other positions available.</p>
            <button className="inline-flex items-center bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-900 transition-colors">
              View All Jobs
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Looking for Your Next Opportunity?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Tell us about your skills and experience and let us help connect you with suitable employment opportunities.
          </p>
          <button className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all hover:shadow-lg hover:shadow-red-500/30">
            Find a Job
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
