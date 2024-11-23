import React from 'react';
import './Card.css'; // Import the CSS file

import car5 from "../../Assets/scooty.png";
import car6 from "../../Assets/auto.png";
import car7 from "../../Assets/car123.png";
import bike from "../../Assets/bike.png";

const Cards = () => {
  return (
    <div className="container my-4">
      <div className="tariff-card">
        <div className="tariff-top-card">
          <h3>SEE OUR</h3>
          <h2 id='our-services'>OUR SERVICES</h2>
        </div>
      </div>
      <div className="row ">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
          <div className="card h-100 custom-card">
            <img src={bike} className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h3 id='our-services-para1' className="card-title fw-bold">BIKE</h3>
              <p  className="card-text">
                Cut through traffic, reach on time and save money. With Cablow Bike, it’s that simple.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
          <div className="card h-100 custom-card">
            <img src={car6} className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h3 id='our-services-para2' className="card-title fw-bold">AUTO</h3>
              <p  className="card-text">
                Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
          <div className="card h-100 custom-card">
            <img src={car7} className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h3 id='our-services-para3' className="card-title fw-bold">CAR</h3>
              <p  className="card-text">
                Never wait for a car ride again! Get a Cablow Car within just 5 minutes! Anytime. Anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
          <div className="card h-100 custom-card">
            <img src={car5} className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <h3 id='our-services-para4' className="card-title fw-bold">SCOOTY</h3>
              <p  className="card-text">
                More wheels. More comfort. And lower price than any other scooty out there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
