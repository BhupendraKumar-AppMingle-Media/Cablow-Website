import React from 'react';
import './Process.css';
import qr from '../../Assets/qr.png';

const Process = () => {
  return (

    
    <div className='container process-container d-flex justify-content-between align-items-center mt-5 mb-5'>
      <div className='qr-contain-main'>
        <h1 id='h1-how-does-work'>How does it work?</h1>
        <ul className="timeline">
          <li className="timeline-card">
            <span aria-hidden="true" className="fa fa-stack fa-2x circle-custom" style={{ fontSize: "1.7rem" }}>
              <i aria-hidden="true" className="fa fas fa-circle fa-stack-2x"></i> &nbsp;
            </span>
            <div className="subcard">
              <h6 className="timeline-title">Fill in the order form</h6>
            </div>
          </li>
          <li className="timeline-card">
            <span aria-hidden="true" className="fa fa-stack fa-2x circle-custom" style={{ fontSize: "1.7rem" }}>
              <i aria-hidden="true" className="fa fas fa-circle fa-stack-2x"></i> &nbsp;
            </span>
            <div className="subcard">
              <h6 className="timeline-title">Wait for offers from drivers</h6>
            </div>
          </li>
          <li className="timeline-card">
            <span aria-hidden="true" className="fa fa-stack fa-2x circle-custom" style={{ fontSize: "1.7rem" }}>
              <i aria-hidden="true" className="fa fas fa-circle fa-stack-2x"></i> &nbsp;
            </span>
            <div className="subcard">
              <h6 className="timeline-title">Accept the best offer</h6>
            </div>
          </li>
          <li className="timeline-card">
            <span aria-hidden="true" className="fa fa-stack fa-2x circle-custom" style={{ fontSize: "1.7rem" }}>
              <i aria-hidden="true" className="fa fas fa-circle fa-stack-2x"></i> &nbsp;
            </span>
            <div className="subcard">
              <h6 className="timeline-title">Call the driver and discuss the details of your ride</h6>
            </div>
          </li>
        </ul>
        
      </div>

      <div className="button-centre">
        <div className="qr-card">
          <p className='fw-bold'>Scan the code with your camera to download the app</p>
          <img
            src={qr}
            alt="QR Code"
            className="qr-code"
          />
        </div>
        <button className="button-process">CABLOW APP</button>
      </div>

    </div>
  );
};

export default Process;
