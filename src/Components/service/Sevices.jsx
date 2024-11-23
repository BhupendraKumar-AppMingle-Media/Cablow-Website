



import React from 'react'
import Card2 from '../../Components/card2/Card2'
import Card from '../../Components/card/Card'

// import Navbar from '../Navbar'

import Navbar from "../navbar/Navbar"

import Client from "../client/Client"

import Footer from '../footer/Footer';
import Testimonials from '../Testimonials/Testimonials'
import './Services.css'

const Sevices = () => {
  return (
    <div className='navbar-services'>

  

<div className='services-about'>
  <h1 id='services-h1' className='text-center '>Services</h1>

  <p>
    "Cablow offers a quick, affordable, and reliable two-wheeler ride-hailing service, perfect for navigating through busy city traffic. Whether you're heading to work, running errands, or catching up with friends, Cablow ensures a hassle-free experience with just a few taps on your phone. With real-time tracking, transparent pricing, and safe drivers, Cablow is designed to provide a smooth, convenient commute for everyone. Book your ride instantly and enjoy seamless travel, cutting down on wait times and traffic delays. Cablow is your go-to solution for fast and efficient city rides. Our app makes it easy to connect with nearby riders, ensuring you always have a ride when you need it."
  </p>
</div>

   
      

      <Card2/>

     

      
      <Card/>


      <Testimonials/>



      <Client/>

<div className='footer'>
<Footer/>

</div>




    </div>
  )
}

export default Sevices






