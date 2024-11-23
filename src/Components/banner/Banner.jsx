import React from 'react';
import './Banner.css'; // Custom styling

const Banner = () => {
  return (
    <div className="container-fluid p-0 custom-banner">
      <div className="position-relative d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img
          src={require('../../Assets/background2.png')}
          alt="background"
          className="img-fluid w-100"
          style={{ height: '95vh', objectFit: 'cover' }}
        />

        <div className="position-absolute text-center text-light centered-content    custom-attach">
          {/* display-3 ==>remove attribute below */}
          <h1 className=" fw-bold custom-color">ATTACH YOUR <span className="custom-color1">VEHICLE</span></h1>
          
          {/* Form Section */}

          <div className='form-main'>


          <form className="input-section mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div className="mb-3">
              <label htmlFor="vehicle" className="form-label">Vehicle</label>
              <select className="form-select" id="vehicle">
                <option value="2">2 Wheeler</option>
                <option value="3">3 Wheeler</option>
                <option value="4">4 Wheeler</option>
              </select>
            </div>

            {/* Centered Small Button */}
            <div className="d-flex justify-content-center">
              <button className="button-banner-home">SUBMIT</button>
            </div>
          </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
