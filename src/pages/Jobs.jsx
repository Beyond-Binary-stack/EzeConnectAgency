import { useState } from 'react'
import { Search, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  const categories = ['All', ...new Set(jobs.map(job => job.category))]
  const employmentTypes = ['All', ...new Set(jobs.map(job => job.employmentType))]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    const matchesType = selectedType === 'All' || job.employmentType === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Available Jobs
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find your next opportunity from our current job listings
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Employment Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {employmentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
            </p>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="mr-1" size={16} />
                        {job.category}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="mr-1" size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1" size={16} />
                        {job.employmentType}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No jobs found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Register with us and we'll notify you when new opportunities matching your skills become available.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-900 transition-colors"
          >
            Register with Us
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Jobs
