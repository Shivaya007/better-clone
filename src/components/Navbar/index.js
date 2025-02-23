"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Desktop Navigation grouped together */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-gray-800">
              Better Clone
            </Link>
            
            {/* Desktop Navigation - Now next to logo */}
            <div className="flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-800 transition-colors duration-200 text-gray-700">
                Home
              </Link>
              <Link href="/About-us" className="hover:text-gray-800 transition-colors duration-200 text-gray-700">
                About Us
              </Link>
              <Link href="/mortage-calculator" className="hover:text-gray-800 transition-colors duration-200 text-gray-700">
                Calculator
              </Link>
            </div>
          </div>

          {/* Get Started button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Get Started - Always on right */}
            <Link 
              href="/Start" 
              className="hidden md:block hover:text-gray-800 transition-colors duration-200 text-gray-700"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none text-gray-800"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden pb-4 bg-green-50 transition-all duration-200 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 px-4">
            <Link
              href="/"
              className="text-gray-800 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/About-us"
              className="text-gray-800 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/mortage-calculator"
              className="text-gray-800 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              href="/Start"
              className="text-gray-800 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}