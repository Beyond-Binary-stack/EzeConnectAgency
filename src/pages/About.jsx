import { ArrowRight, CheckCircle, Target, Users, Award, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Eze Connect Agency
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connecting talent with opportunities and building better futures
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Eze Connect Agency is a trusted recruitment agency dedicated to connecting individuals with employment opportunities and helping employers find the right talent for their organizations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand that finding the right job or the right candidate can be challenging. That's why we've built a recruitment agency that focuses on personalized service, industry expertise, and genuine connections.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team is committed to supporting recruitment across multiple industries and job categories, providing professional recruitment services, talent matching, employer support, and career opportunities that make a real difference.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional recruitment team"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-4 mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between talent and opportunity by providing exceptional recruitment services that empower job seekers and support employers in building successful teams.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center bg-navy-800 rounded-full p-4 mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Uganda's most trusted recruitment agency, known for our commitment to excellence, integrity, and the positive impact we make on people's lives and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment solutions for job seekers and employers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Professional Recruitment",
                description: "Expert matching of candidates with suitable positions"
              },
              {
                icon: Users,
                title: "Talent Matching",
                description: "Connecting the right people with the right opportunities"
              },
              {
                icon: Target,
                title: "Employer Support",
                description: "Helping businesses build their ideal teams"
              },
              {
                icon: Heart,
                title: "Career Opportunities",
                description: "Opening doors to meaningful employment"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center bg-navy-800 rounded-full p-3 mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Eze Connect Agency?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trusted & Reliable",
                description: "Built on integrity and proven results"
              },
              {
                title: "Industry Expertise",
                description: "Deep knowledge across multiple sectors"
              },
              {
                title: "Personalized Service",
                description: "Tailored solutions for your unique needs"
              },
              {
                title: "Fast Response",
                description: "Quick turnaround on all requests"
              },
              {
                title: "Quality Focus",
                description: "Rigorous screening and matching process"
              },
              {
                title: "Ongoing Support",
                description: "Continuous guidance throughout the process"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center bg-red-500 rounded-full p-3">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
