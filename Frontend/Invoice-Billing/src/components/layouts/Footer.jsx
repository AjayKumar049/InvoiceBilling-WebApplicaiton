import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left mb-2 sm:mb-0">
          © {new Date().getFullYear()} Invoice Billing System. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;