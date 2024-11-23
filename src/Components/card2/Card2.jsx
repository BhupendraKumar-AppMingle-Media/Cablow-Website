import React from 'react';
import './Cards2.css'; // Import the CSS file for custom styling
import building from "../../Assets/building.png"
import car5 from "../../Assets/cityrides.png";
import car6 from "../../Assets/citytocity.png";
import car1 from "../../Assets/card2img1.jpg";
import car2 from "../../Assets/card2img2.jpg";

const Cards2 = () => {
  return (
    <div className="container my-4">

      <div className="tariff-cards">
      <div className="tariff-top-cards">
        <h3>Welcome</h3>
        <h2 id='one-app'>ONE APP, MANY SERVICES</h2>
      </div>
      </div>


      <div className="container">
  <div className="row justify-content-center">
    {/* Card 1 */}
    <div className="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="card h-100 border-0 card-hover">
        <img
          src={car1}
          className="card-img-top img-fluid mx-auto d-block my-3"
          alt="Card 1"
        />
        <div className="card-body">
          <h3 id='cards-para1' className="card-title  fw-bold">City rides</h3>
          <p  className="card-text">
            Offer your fare
            Agree on a fair price directly with a driver
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-6 col-lg-3 d-flex justify-content-center mb-4">
      <div className="card h-100 border-0 card-hover">
        <img
          src={car2}
          className="card-img-top img-fluid mx-auto d-block my-3"
          alt="Card 2"
        />
        <div className="card-body">
          <h3  id='cards-para2'  className="card-title  fw-bold">Outstation</h3>
          <p className="card-text">
            Comfortable rides to other cities: on your schedule and for a fair fare
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



      </div>
    
  );
};

export default Cards2;
