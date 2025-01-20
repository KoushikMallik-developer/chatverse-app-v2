import React, { useState } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log('Menu Toggled', isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-sm fixed w-full z-10 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <MessageCircle className="h-8 w-8 text-blue-500" />
                        <Link to="/">
                            <span className="ml-2 text-xl font-bold">
                                ChatVerse
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/features"
                            className="text-neutral-300 hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            to="/pricing"
                            className="text-neutral-300 hover:text-white transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/about"
                            className="text-neutral-300 hover:text-white transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="text-neutral-300 hover:text-white transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/auth"
                            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-neutral-300 hover:text-white transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-neutral-900 border-t border-neutral-800 py-2">
                    <Link
                        to="/features"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        to="/pricing"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-neutral-300 hover:text-white transition-colors"
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/auth"
                        onClick={closeMenu}
                        className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Header
