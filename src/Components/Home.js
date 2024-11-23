import React, { useRef } from "react";
// Importing Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import mycar from "../Assets/car.png";
import Navbar from "../Components/navbar/Navbar";

import Client from "../Components/client/Client";
import Footer from "../Components/footer/Footer";

import Cards from "../Components/card/Card";
import Cards2 from "../Components/card2/Card2";

import DownloadApp from "../Components/downloadapp/DownloadApp";
import Fordrivers from "../Components/fordriver/Fordrivers";

import Testimonials from "../Components/Testimonials/Testimonials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHome, // Import for bike
  faTaxi, // Import for auto
  faMotorcycle, // Import for scooty
} from "@fortawesome/free-solid-svg-icons";

import Steps from '../Components/step/Steps';
import Banner from '../Components/banner/Banner';
import Process from '../Components/process/Process';

const Home = () => {
  const bannerRef = useRef(null); // Create a reference for the Banner section

  const scrollToBanner = () => {
    if (bannerRef.current) {
      bannerRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the Banner section
    }
  };

  return (
    <div className="home">
      <div className="yellow_part">
        <div className="car">
          <img src={mycar} alt="no_Car" />
        </div>

        <div>
          <div className="yellow-buttom">
            <div className="icons-cars">
              <div className="d-flex justify-content-center mb-4 custom-car-logo">
                <FontAwesomeIcon
                  icon={faHome} // Bike icon
                  size="2x"
                  className="mx-3 icon-black"
                />
                <FontAwesomeIcon
                  icon={faTaxi} // Auto icon
                  size="2x"
                  className="mx-3 icon-black"
                />
                <FontAwesomeIcon
                  icon={faCar} // Car icon
                  size="2x"
                  className="mx-3 icon-black"
                />
                <FontAwesomeIcon
                  icon={faMotorcycle} // Scooty icon
                  size="2x"
                  className="mx-3 icon-black"
                />
              </div>
            </div>

            {/* Button that scrolls to the Banner section */}
            <button className="button" onClick={scrollToBanner}> 
              ATTACH YOUR VEHICLE
            </button>
          </div>
        </div>
      </div>   

      <Cards />
      <Cards2 />
      <DownloadApp />

      {/* Banner section with a ref */}
      <div ref={bannerRef}>
        <Banner />
      </div>

      <Process />
      <Fordrivers />
      <Testimonials />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
