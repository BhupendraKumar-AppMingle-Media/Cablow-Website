import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import image from '../../Assets/background.png';

import Banner2 from '../banner2/Bannerabout';

import Card from '../card/Card';
import Card2 from '../card2/Card2';
import Footer from '../footer/Footer';

import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container-fluid p-0">
      <Banner2/>

     


     <div className='  custom-about-main'>



      <div className='responsive-paragraph'>

      <h1 className="text-center my-4 about-h2-color">About Us - Cablow</h1>

          <p>
              Welcome to <strong>CAPBLOW</strong>, where your journey begins! As a leading cab aggregator service, we are dedicated to revolutionizing urban transportation. 
              Founded with the vision of providing seamless mobility solutions, our goal is to connect passengers with trusted drivers through our user-friendly mobile application, 
              making every trip easy, safe, and enjoyable.
            </p>

      </div>

      <div  className='responsive-paragraph'>
        <h2 className="text-center my-4 about-h2-color">Our Values</h2>
        <Row className="mb-5">
          <Col md={12}>
            <ul>
              <li><strong>Customer-Centric Approach:</strong> We put our customers at the heart of everything we do. Your feedback drives our innovation, helping us enhance our services continuously.</li>
              <li><strong>Safety First:</strong> We prioritize your safety above all else. Every driver is subjected to rigorous background checks and training, ensuring that you feel secure throughout your journey.</li>
              <li><strong>Environmental Responsibility:</strong> At Cablow, we are committed to sustainability. We actively promote eco-friendly transportation options, encouraging the use of hybrid and electric vehicles to reduce our carbon footprint.</li>
              <li><strong>Community Engagement:</strong> We believe in giving back to the communities we serve. Through various initiatives, we support local organizations and contribute to social causes that matter.</li>
            </ul>
          </Col>
        </Row>
        </div>
      




     </div>





    

      <Card/>
      <Card2/>
       

       <div className='responsive-paragraph'>
       <h2 className=" text-center my-4  about-h2-color">Our Technology</h2>
        <Row className="mb-5">
          <Col md={12}>
            <p>
              Cablow utilizes cutting-edge technology to deliver an exceptional user experience. Our app is designed with advanced features that make booking rides, managing your profile, and tracking your trips effortless. Additionally, we use data analytics to continuously optimize our operations, ensuring timely rides and improved service delivery.
            </p>
          </Col>
        </Row>

        <h2 className="text-center my-4 about-h2-color">Join Our Journey</h2>
        <Row className="mb-5">
          <Col md={12}>
            <p>
              As we look to the future, Cablow is committed to expanding our reach and enhancing our services. We are constantly innovating to introduce new features that make your travel experience even better. Whether you’re commuting to work, heading to an event, or exploring a new city, Cablow is here to make every journey enjoyable.
            </p>
          </Col>
        </Row>

        <h2 className="text-center my-4 about-h2-color">Become a Part of Cablow</h2>
        <Row>
          <Col md={12}>
            <p>
              We invite you to join our growing community of drivers and passengers. If you’re a driver looking to partner with us, you’ll benefit from flexible work hours, competitive earnings, and the support of a dedicated team. As a passenger, you’ll enjoy the convenience of on-demand transportation tailored to your needs.
            </p>
            <p>
              Thank you for choosing <strong>Cablow</strong>. Together, let’s redefine urban mobility and make every ride a memorable one!
            </p>
          </Col>
        </Row>
       </div>


      <Footer/>
    </div>
  )
}

export default About;
