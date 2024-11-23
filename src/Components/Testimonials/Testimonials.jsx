import React from 'react';
import './Testimonials.css';

import man1 from '../../Assets/man1.png';
import man2 from '../../Assets/man2.png';

const Testimonials = () => {
  return (
    <div className="container my-5 custom-container">
      <div className="tariff-Testimonials">
        <div className="tariff-top-Testimonials">
          <h3>HAPPY CLIENTS</h3>
          {/* <h2>TESTIMONIALS</h2> */}
        </div>
      </div>

      <h2  id='rider-say' className="text-center mb-4">What Our Riders Say</h2>


      <div
        id="testimonialCarousel"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="testimonial-item">
              <img
                src={man1}
                className="rounded-circle testimonial-img mb-4"
                alt="client1"
              />
              <p className="testimonial-text">
                "I rely on this service daily to get to work. The rides are always
                on time, and the drivers are friendly and professional."
              </p>
              <h5 className="client-name">Rahul Mehta</h5>
              <p className="client-position">Software Engineer, Delhi</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="testimonial-item">
              <img
                src={man2}
                className="rounded-circle testimonial-img mb-4"
                alt="client2"
              />
              <p className="testimonial-text">
                "The booking process is so simple, and I love how affordable it is. I never worry about traffic anymore."
              </p>
              <h5 className="client-name">Sneha Kapoor</h5>
              <p className="client-position">Marketing Executive, Noida</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="testimonial-item">
              <img
                src={man1}
                className="rounded-circle testimonial-img mb-4"
                alt="client3"
              />
              <p className="testimonial-text">
                "Quick, convenient, and cost-effective! This service has been a game-changer for me in navigating city traffic."
              </p>
              <h5 className="client-name">Arjun Sharma</h5>
              <p className="client-position">College Student, Delhi</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;




