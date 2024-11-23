import Footer from '../footer/Footer';
import React from 'react';
import image from '../../Assets/discount1.png';
import image1 from '../../Assets/car11.png';
import './Gallery.css'; // Ensure you add custom CSS if needed

const Gallery = () => {
  const images = [image1, image1, image1, image1, image1, image1, image1, image1];
  
  return (
    <>
      <div>
        {/* Carousel Section */}
        <div id="gallery2-carouselExampleControls" className="gallery2-carousel carousel slide" data-bs-ride="carousel">
          <div className="gallery2-carousel-inner carousel-inner">
            <div className="gallery2-carousel-item carousel-item active">
              <img className="gallery2-d-block gallery2-w-100 d-block w-100" src={image} alt="First slide"/>
            </div>
            <div className="gallery2-carousel-item carousel-item">
              <img className="gallery2-d-block gallery2-w-100 d-block w-100" src={image} alt="Second slide"/>
            </div>
            <div className="gallery2-carousel-item carousel-item">
              <img className="gallery2-d-block gallery2-w-100 d-block w-100" src={image} alt="Third slide"/>
            </div>
          </div>
          <a className="gallery2-carousel-control-prev carousel-control-prev" href="#gallery2-carouselExampleControls" role="button" data-bs-slide="prev">
            <span className="gallery2-carousel-control-prev-icon carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="gallery2-sr-only visually-hidden">Previous</span>
          </a>
          <a className="gallery2-carousel-control-next carousel-control-next" href="#gallery2-carouselExampleControls" role="button" data-bs-slide="next">
            <span className="gallery2-carousel-control-next-icon carousel-control-next-icon" aria-hidden="true"></span>
            <span className="gallery2-sr-only visually-hidden">Next</span>
          </a>
        </div>

        {/* Image Gallery Section */}
        <div className="gallery-container my-5 d-flex justify-content-center align-items-center">
          <div className="row g-4 d-flex justify-content-center align-items-center">
            {images.map((image, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                <div className="gallery-card-hover h-100 d-flex justify-content-center align-items-center">
                  <img src={image} className="gallery-card-img-top img-fluid" alt={`Image ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
