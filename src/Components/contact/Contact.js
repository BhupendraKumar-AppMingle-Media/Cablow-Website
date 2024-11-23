import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "../navbar/Navbar";
import Client from "../client/Client";
import logo from '../../Assets/logo-small.jpg';
import "./Contact.css";
import Footer from '../footer/Footer';

const Contact = () => {
  return (
    <div>
      <div className="container mt-5  mb-5 d-flex justify-content-center">
        <div className="row">
          {/* Form Section */}
          <div className="contact-custom col-md-6 border border-gray-300 hover:border-green-500 transition-all duration-300 p-5">
            <h2>CONTACT US</h2>
            <form className='contactus-form-label'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              {/* Mobile Number Field */}
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
              </div>
              <div className="d-flex justify-content-center">
      <button type="submit" className="btn-custom1 btn btn-primary">Submit</button>
    </div>
            </form>
          </div>

          {/* Company Details and Logo Section */}
          <div className="col-md-6 text-center">
            <div className="company-details mt-5">
              <img
                src={logo}
                alt="Company Logo"
                className="img-fluid mb-4"
              />
              <h1>CABLOW</h1>
              <p>Badarpur,New Delhi,India</p>
              <p><strong>Email:</strong> cablowhelp@gmail.com</p>
              <p><strong>Phone:</strong> 7703924728</p>
              <button type="button" className="btn-custom btn btn-success">Visit Us</button>
            </div>
          </div>
        </div>
      </div>

      <Client/>

      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
