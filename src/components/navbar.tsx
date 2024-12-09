"use client"; // Enables client-side rendering in Next.js
import React, { useState } from "react"; // React and useState for managing state
import Link from "next/link"; 
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa"; // FontAwesome icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the menu open/close state
  };

  return (
    <nav className="flex flex-col items-center p-4 bg-black">
      {/* Top section with logo and menu toggle button */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <span className="text-yellow-500 font-bold text-lg flex-grow text-center">
          Food<span className="text-white">tuck</span>
        </span>
        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="text-white" /> // Close icon
            ) : (
              <FaBars className="text-white" /> // Hamburger menu icon
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <Link href="/" className="hover:text-yellow-500 text-white">
            Home
          </Link>
          <Link href="/menu" className="hover:text-yellow-500 text-white">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 text-white">
            Blog
          </Link>
          <Link href="/pages" className="hover:text-yellow-500 text-white">
            Pages
          </Link>
          <Link href="/about" className="hover:text-yellow-500 text-white">
            About
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 text-white">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 text-white">
            Contact
          </Link>
        </div>
        {/* Search bar and shopping bag icon */}
        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative">
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
            />
            {/* Search icon */}
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
          </div>
          {/* Shopping bag icon */}
          <FaShoppingBag className="ml-4 text-white" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100" // Open state
            : "max-h-0 opacity-0 overflow-hidden" // Closed state
        }`}
      >
        <div className="flex flex-col items-center space-y-2 mt-2">
          {/* Mobile menu links */}
          <Link href="/" className="hover:text-yellow-500 text-white">
            Home
          </Link>
          <Link href="/menu" className="hover:text-yellow-500 text-white">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 text-white">
            Blog
          </Link>
          <Link href="/SignInPage" className="hover:text-yellow-500 text-white">
            Pages
          </Link>
          <Link href="/about" className="hover:text-yellow-500 text-white">
            About
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 text-white">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
