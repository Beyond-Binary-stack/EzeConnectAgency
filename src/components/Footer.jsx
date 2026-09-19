import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Share2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-red-500">EZE</span>
                <span className="text-white"> CONNECT</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting talent with opportunities and helping businesses find the right people.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Employers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Nateete Wakaliga Road,<br />
                  Opp. Petro City,<br />
                  Kukanya Plaza Building
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+256751282514" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                    +256 751 282 514
                  </a>
                  <a href="tel:+256774809125" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                    +256 774 809 125
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <a href="mailto:rkayemba@students.vu.ac.ug" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  rkayemba@students.vu.ac.ug
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <p className="text-gray-300 text-sm mb-4">
              Ready to find your next opportunity or hire talented professionals?
            </p>
            <div className="space-y-2">
              <Link
                to="/jobs"
                className="block bg-red-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors text-center text-sm"
              >
                Find a Job
              </Link>
              <Link
                to="/employers"
                className="block bg-white text-navy-900 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center text-sm"
              >
                Hire Talent
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Eze Connect Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
