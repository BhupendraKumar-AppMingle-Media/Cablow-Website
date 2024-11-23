import React from 'react';
import './Bannerabout.css'; // Custom styling

import image from '../../Assets/background2.png'

const Banner = () => {
  return (
    <div className="container-fluid p-0 welcome-custom">
      {/* Background image container */}
      <div className="position-relative welcome-custom">
        {/* Background image */}
        <img
          src={require('../../Assets/background2.png')} // Replace with your background image path
          alt="background"
          className="img-fluid w-100"
          style={{ height: '90vh', objectFit: 'cover' }}
        />

        {/* Overlay text */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light welcome-custom">
          <h1 className="display-3 fw-bold custom-color">WELCOME TO <span className="custom-color1">CABLOW</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
