import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SLSU Procurement Office</h3>
            <p className="mb-4 text-gray-400">Empowering universities with efficient and transparent procurement solutions.</p>
            {/* <div className="flex space-x-4">
              <a href="#" className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark transition duration-300">
                <i className="fab fa-apple mr-2"></i>
                App Store
              </a>
              <a href="#" className="bg-white text-primary px-3 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                <i className="fab fa-google-play mr-2"></i>
                Google Play
              </a>
            </div> */}
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
            <li><a href="#about" className="text-primary-light hover:text-white transition duration-300"><i className="fas fa-angle-right mr-2"></i>About Us</a></li>
              <li><a href="#services" className="text-primary-light hover:text-white transition duration-300"><i className="fas fa-angle-right mr-2"></i>Services</a></li>
              <li><a href="#resources" className="text-primary-light hover:text-white transition duration-300"><i className="fas fa-angle-right mr-2"></i>Resources</a></li>
              <li><a href="#faq" className="text-primary-light hover:text-white transition duration-300"><i className="fas fa-angle-right mr-2"></i>FAQ</a></li>
              <li><a href="#contact" className="text-primary-light hover:text-white transition duration-300"><i className="fas fa-angle-right mr-2"></i>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300"><i className="fas fa-angle-right mr-2"></i>E-Procurement Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300"><i className="fas fa-angle-right mr-2"></i>Supplier Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300"><i className="fas fa-angle-right mr-2"></i>Contract Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300"><i className="fas fa-angle-right mr-2"></i>Spend Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i>Southern Luzon State University, Lucban, Quezon</li>
              <li className="flex items-center"><i className="fas fa-phone-alt mr-2"></i>(042) 540 4087</li>
              <li className="flex items-center"><i className="fas fa-envelope mr-2"></i>slsulucban@edu.ph</li>
              <li className="flex items-center"><i className="fas fa-globe mr-2"></i>www.slsu.edu.ph</li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition duration-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition duration-300"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2023 Southern Luzon State University | Lucban, Quezon, Philippines.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

