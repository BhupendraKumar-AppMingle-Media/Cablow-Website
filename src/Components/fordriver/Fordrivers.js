import React from 'react'
import "./Fordrivers.css";
import car from "../../Assets/halfcar.png";

import Form from '../form/Form.jsx';

const Fordrivers = ({ scrollToSection }) => {
  return (
    <div className='main'>  
      <div className='main-border'>
        <div className="content-border"></div>
      </div>

      <div className='fordrivers'>
        <div className='fordrivers-details'>
          <h3 className='fw-bolder'>For Drivers</h3>
          <h2 className='fw-bolder'>DO YOU WANT TO EARN WITH US</h2>

          <p>Join us and start earning with our reliable platform for drivers.</p>

          <ul>
            <li>Luxury cars</li>
            <li>Fixed price</li>
            <li>Good application</li>
            <li>Stable orders</li>
            <li>Cash payment</li>
            <li>Minimum fee</li>
          </ul>

        </div>

        <div className='fordrivers-img'>
          <img src={car} alt="car" />
        </div>
      </div>

      <div className='main-border'>
        <div className="content-border"></div>
      </div>
    </div> 
  )
}

export default Fordrivers;
