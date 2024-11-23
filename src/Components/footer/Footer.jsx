import React from 'react';
import './Footer.css';

const Footer = ({ scrollToTestimonials }) => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="about-us text-center">
  <h2 id='footer-color-green'>About Us</h2>
  <p>We are a fast and reliable bike taxi service, making daily commutes quick, affordable, and hassle-free.</p>
  <p>Our mission is to provide seamless transportation solutions, helping you beat the traffic and reach your destination on time, every time.</p>
</div>


          {/* Explore Section */}
          <div className="explore text-center" >
            <h2 id='footer-color-green'>Explore</h2>
            <ul>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Explore More Section */}
          <div className="explore-more text-center">
            <h2 id='footer-color-green'>Explore More</h2>
            <ul>
            <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              
              
              <li><a href="/download-app">Download App</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="contact-us  text-center">
            <h2 id='footer-color-green'>Contact Us</h2>
            <p>Phone: 7703924728</p>
            <p>Email:cablowhelp@gmail.com</p>
            <p>Address: Badarpur,New Delhi, India</p>
            
           
           
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p><strong id='footer-color-green'>CABLOW</strong> 2024 © All Rights Reserved <strong id='footer-color-green'>Powered by AppmingleMedia</strong></p>
      </div>
    </footer>
  );
};

export default Footer;
