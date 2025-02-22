"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">Better Clone</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-green-600 transition-colors duration-200">Home</Link>
            <Link href="/About-us" className="hover:text-green-600 transition-colors duration-200">About Us</Link>
            <Link href="/mortage-calculator" className="hover:text-green-600 transition-colors duration-200">Calculator</Link>
            <Link href="/Start" className="hover:text-green-600 transition-colors duration-200">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
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

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden pb-4 bg-white transition-all duration-200 ease-in-out`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-black-600 hover:text-green-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/About-us"
              className="text-black-600 hover:text-green-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/mortage-calculator"
              className=" text-black-600 hover:text-green-600 transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              href="/Start"
              className=" text-black-600 hover:text-green-600 transition-colors duration-200 py-2"
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