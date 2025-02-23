"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left-aligned section: Logo & Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="font-bold text-xl text-white">
              Better Clone
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-300 text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/About-us" className="hover:text-gray-300 text-white transition-colors duration-200">
                About Us
              </Link>
              <Link href="/mortage-calculator" className="hover:text-gray-300 text-white transition-colors duration-200">
                Calculator
              </Link>
            </div>
          </div>

          {/* Right-aligned "Get Started" button for Desktop */}
          <div className="hidden md:block">
            <Link href="/Start" className="bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-green-600 text-white transition-all duration-300`}>
          <div className="flex flex-col space-y-4 px-4 py-3">
            <Link href="/" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/About-us" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/mortage-calculator" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Calculator
            </Link>
            <Link
              href="/Start"
              className="py-2 bg-white text-green-600 rounded-lg text-center shadow-md hover:bg-gray-200"
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

