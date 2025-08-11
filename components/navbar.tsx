import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Sign-Up', href: '/sign-up' },
    { name: 'Sign-In', href: 'sign-in' }
  ]

  return (
    <nav className={`relative w-full justify-between top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-xl' 
        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand with fancy effects */}
          <div className="flex items-center group">
            <Link href="/" className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              <h1 className={`relative text-2xl font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                ✨ NeoTech
              </h1>
            </Link>
          </div>

          {/* Navigation Links with fancy hover effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100' 
                      : 'bg-white/20 backdrop-blur-sm'
                  }`}></div>
                </Link>
                
                {/* Fancy underline effect */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-white'
                }`}></div>
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4">
              <Link href="/get-started">
                <button className="relative group px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative group p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
                <span className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } translate-y-2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isScrolled ? 'bg-gray-700' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-4 py-6 space-y-3 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-t border-gray-200' 
            : 'bg-gradient-to-b from-blue-600/90 to-purple-600/90 backdrop-blur-sm'
        }`}>
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Fancy background pattern */}
      <div className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>
    </nav>
  )
}

export default Navbar