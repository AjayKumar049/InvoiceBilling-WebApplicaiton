import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-500/100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Brand Name */}
          <div className="flex-shrink-0 text-white font-bold text-lg">
            Invoice-BillingSystem
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/login"
  
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-sky-600"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;