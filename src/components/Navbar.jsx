import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Employers', path: '/employers' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-navy-900">
                <span className="text-red-500">EZE</span>
                <span className="text-navy-800"> CONNECT</span>
              </div>
              <div className="ml-2 text-xs text-gray-600 font-medium tracking-wider">
                AGENCY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${
                  location.pathname === link.path
                    ? 'text-red-500'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-red-500 ${
                  location.pathname === link.path
                    ? 'text-red-500'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
