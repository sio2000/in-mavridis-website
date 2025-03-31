import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { path: '/', label: language === 'el' ? 'Αρχική' : 'Home' },
    { path: '/architectural-office', label: language === 'el' ? 'Αρχιτεκτονικό Γραφείο' : 'Architectural Office' },
    { path: '/engineering-services', label: language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services' },
    { path: '/portfolio', label: language === 'el' ? 'Έργα' : 'Portfolio' },
    { path: '/blog', label: language === 'el' ? 'Blog' : 'Blog' },
    { path: '/contact', label: language === 'el' ? 'Επικοινωνία' : 'Contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
<<<<<<< HEAD
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
=======
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt={language === 'el' ? 'Σύμβουλοι Μηχανικοί Logo' : 'Engineering Consultants Logo'} 
                className="h-12" 
              />
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            </Link>
          </div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-8">
=======
          <div className="hidden md:flex items-center space-x-4">
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
<<<<<<< HEAD
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
=======
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
              >
                {item.label}
              </Link>
            ))}
<<<<<<< HEAD
            {/* Desktop Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span>{language === 'el' ? 'EN' : 'ΕΛ'}</span>
=======
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'el' ? 'EN' : 'ΕΛ'}
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            </button>
          </div>

          {/* Mobile menu button */}
<<<<<<< HEAD
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
=======
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
=======
            className="md:hidden"
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
<<<<<<< HEAD
              {/* Mobile Language Indicator */}
              <div className="px-3 py-2 text-sm text-gray-500">
                {language === 'el' ? 'Γλώσσα: Ελληνικά' : 'Language: English'}
              </div>
=======
>>>>>>> 10c52ec (ρώτο ανέβασμα αρχείου στο GitHub)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;