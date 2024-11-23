import React from "react";

import img1 from "../../Assets/mobile.png";

import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="DownloadApp">
      <div className="img-div">
        <div className="DownloadApp-top">
          <h2 className="fw-bolder">GET MORE BENEFITS</h2>

          <h1 className="fw-bold">DOWNLOAD THE APP</h1>
        </div>

        <div className="DownloadApp-buttom">
        <div className="DownloadApp-details-total">


          <div className="DownloadApp-details">
            <div className="DownloadApp-details-container">
              <h3 className="fw-bold custom-class-color">FAST BOOKING</h3>
              <p  className="custom-class-color">
                Quickly book your ride with just a few taps on the app.
              </p>
            </div>
            <div  className="custom-class-color">
              <h3 className="fw-bold custom-class-color">EASY TO USE</h3>
              <p custom-class-color>
                Simple and intuitive design, making it easy for everyone to use.
              </p>
            </div>
          </div>

          <div className="DownloadApp-img  d-flex justify-content-center  custom-class-color">
            <img   className="custom-class-color"  src={img1} />
          </div>

          <div className="DownloadApp-details">
            <div className="DownloadApp-details-container">
              <h3 className="fw-bold custom-class-color">GPS SEARCHING</h3>
              <p custom-class-color>
                Find nearby rides using real-time GPS tracking.
              </p>
            </div>
            <div className="earn-color">
              <h3 className="fw-bold  custom-class-color" style={{}}>BONUSES FOR RIDE</h3>
              <p className="custom-class-color">
                Earn rewards and bonuses for every ride you take.
              </p>
            </div>
          </div>


          </div>



        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
