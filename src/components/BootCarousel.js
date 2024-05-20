import React from 'react';
import {Carousel} from 'react-bootstrap';
import { images } from '../constants';

const BootCarousel = () => {
  return (
    <div>
        
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.palet_03} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mousaka</h3>
          <p>Greek Mediterranean.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.palet_02} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Burgers</h3>
          <p>Greek Mediterranean.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.palet_01} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Coctails</h3>
          <p>
          Greek Mediterranean.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </div>
  );
};

export default BootCarousel;