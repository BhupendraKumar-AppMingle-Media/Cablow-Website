import React from 'react'

import img1 from '../../Assets/item1.png'
import img2 from '../../Assets/item2.png'
import img3 from '../../Assets/item3.png'
import img4 from '../../Assets/item4.png'

import './Client.css'

const Client = () => {
  return (
  
<div className="client1">

  
  {/* Left content */}
  <div className="client-contain">

    <div className="top">

      <div className='top-below'>
      <h3>OUR PARTNERS</h3>
      <h2>AND CLIENTS</h2>
      </div>

    </div>

  </div>

  {/* Right content */}
  <div className="image-logo-top">
    <div className=" image-logo-client">
      <div><img src={img1} alt="no image" /></div>
      <div> <img src={img2} alt="no image" /></div>
      <div><img src={img3} alt="no image" /></div>
      <div><img src={img4} alt="no image" /></div>
    </div>
  </div>




</div>


  )
}

export default Client
