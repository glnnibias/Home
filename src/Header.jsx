import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="bg-gray-100 py-2 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                Find A Location
              </a>
              <a href="tel:+15551234567" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-phone-alt text-primary mr-2"></i>
                (042) 540 4087
              </a>
              <a href="mailto:info@uniprocure.com" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-envelope text-primary mr-2"></i>
                slsulucban@edu.ph
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-primary">
                <i className="fas fa-user text-primary mr-2"></i>
                Sign In
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Southern Luzon State University Procurement
        </a>
        <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Mission', 'Services', 'Resources', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-primary'}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 my-1 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 my-1 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 my-1 ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-md mt-2 py-2 px-4 space-y-2">
          {['Home', 'About', 'Mission', 'Services', 'Resources', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-200">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

