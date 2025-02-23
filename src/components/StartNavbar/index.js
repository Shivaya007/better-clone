"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function StartNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-green-800 shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl text-white">
                            Different Navbar
                        </Link>
                    </div>

        
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-white hover:text-green-200 transition-colors duration-200">
                            Back to Home
                        </Link>
                        <Link href="/contact" className="text-white hover:text-green-200 transition-colors duration-200">
                            Contact
                        </Link>
                        <Link href="/login" className="text-white hover:text-green-200 transition-colors duration-200">
                            Login
                        </Link>
                    </div>

        
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 focus:outline-none"
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

            
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:hidden pb-4 transition-all duration-200 ease-in-out`}
                >
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/"
                            className="text-white hover:text-green-200 transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:text-green-200 transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className="text-white hover:text-green-200 transition-colors duration-200 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

