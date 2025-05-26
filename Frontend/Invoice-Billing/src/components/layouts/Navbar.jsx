import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-sky-500/100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Brand Name */}
          <div className="flex-shrink-0 text-white font-bold text-lg">
            Invoice-BillingSystem
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
