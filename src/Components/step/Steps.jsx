import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

import car11 from '../../Assets/car11.png'
import car22 from '../../Assets/car22.png'

const RideHailingInterface = () => {
//   const drivers = [
//     {
//       name: 'Michael',
//       rating: 4.9,
//       car: 'Hyundai Accent, 2012',
//       date: '25 August',
//       time: '17:00',
//       price: 100,
//       passengers: 1,
//       image: '/api/placeholder/80/60'
//     },
//     {
//       name: 'Richard',
//       rating: 4.9,
//       car: 'Toyota Corolla, 2019',
//       date: '25 August',
//       time: '18:00',
//       price: 150,
//       passengers: 1,
//       image: '/api/placeholder/80/60'
//     }
//   ];

  return (
    <div className="container ">
        
    <div className="row justify-content-center">
      {/* Cards Section */}
      <div className="col-12 col-md-7">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="card w-100 h-auto">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <a href="#" className="btn btn-primary">Button</a> */}
                
              </div>
            </div>
          </div>
  
          <div className="col-12">
            <div className="card w-100 h-auto">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <a href="#" className="btn btn-primary">Button</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      
  
      {/* List Section */}
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center mt-4 mt-md-0">
        <ol className="list-group list-group-numbered w-100">
          <li className="list-group-item">Fill in the order form</li>
          <li className="list-group-item">Wait for offers from drivers</li>
          <li className="list-group-item">Accept the best offer</li>
          <li className="list-group-item">Call the driver and discuss the details of your ride</li>
        </ol>
      </div>
    </div>
  </div>
  
  );
};

export default RideHailingInterface;