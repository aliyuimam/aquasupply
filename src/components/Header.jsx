import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-2xl font-extrabold text-blue-700"
        >
          <img src="/water.svg" alt="Water Logo" className="w-8 h-8 mr-2" />
          AquaSupply
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10 font-medium text-gray-700">
          <a href="#" className="hover:text-blue-700 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-700 transition">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-700 transition">
            Delivery
          </a>
          <a href="#" className="hover:text-blue-700 transition">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="/login" className="text-gray-700 hover:text-blue-700">
            Log in
          </a>
          <a
            href="/signup"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-700 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Delivery
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Contact
            </a>
            <div className="flex flex-col space-y-3 w-full px-6 mt-4">
              <a
                href="/login"
                className="text-center text-gray-700 border border-gray-300 rounded-lg py-2 hover:text-blue-700"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="text-center bg-blue-700 text-white rounded-lg py-2 hover:bg-blue-600"
              >
                Sign up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
