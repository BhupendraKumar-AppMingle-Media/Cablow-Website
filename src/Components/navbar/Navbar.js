import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from React Icons
import './Navbar.css';
import desktoplogo from '../../Assets/desktoplogo.png';
import logosmall from '../../Assets/logo-small.jpg';
import logomedium from '../../Assets/logo-medium.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of the navbar
  const handleCloseMenuOnClickOutside = (e) => {
    if (!e.target.closest('.navbar') && isOpen) {
      setIsOpen(false);
    }
  };

  // Track window resize to change the logo dynamically
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Adding event listener to detect clicks outside the navbar
    document.addEventListener('mousedown', handleCloseMenuOnClickOutside);
    window.addEventListener('resize', handleResize); // Listen for window resize events

    // Cleanup event listener when component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleCloseMenuOnClickOutside);
      window.removeEventListener('resize', handleResize); // Clean up resize listener
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo changes based on screen size */}
        <div className="logo">
          <img src={isMobile ? logomedium : desktoplogo} alt="Company Logo" />
        </div>

        {/* Menu Items */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {/* Close Icon at the top-right corner */}
          {isOpen && (
            <div className="close-icon" onClick={toggleMenu}>
              <FaTimes size={30} color="black" />
            </div>
          )}

          <a href="/" className="navbar-item">Home</a>
          <a href="/services" className="navbar-item">Services</a>
          <a href="/about" className="navbar-item">About Us</a>
          <a href="/contact" className="navbar-item">Contact</a>
          <button type="button" className="btn btn-warning fw-bold">DOWNLOAD APP</button>
        </div>

        {/* Toggle Icon (Hamburger or Cross depending on state) */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} color="black" /> : <FaBars size={30} color="black" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
