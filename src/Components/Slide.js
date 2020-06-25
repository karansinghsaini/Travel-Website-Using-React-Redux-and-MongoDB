import React from 'react';
import {Carousel,Button} from 'react-bootstrap';
import Aus from './../images/australia.jpg';
import Spain from './../images/spain.jpg';
import UK from './../images/uk.jpg';

import './../CSS/Slide.css';

const Slides = () => {
  
    return (
      <Carousel >
        <Carousel.Item>
          <img
            className="images"
            src={Aus}
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>Australia</h3>
            <p>Australia is world famous for its natural wonders and wide open spaces, its beaches, deserts, "the bush", and "the Outback".</p>
            <a href='https://www.australia.com/en-us' target='blank'>
                            <Button variant="primary" style={{position: 'relative', marginTop:'24px'}}>Know More</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src={Spain}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Spain</h3>
            <p>Spain is pretty famous for its delicious and spicy dishes. And one of those is paella – a rice dish that originated in Valencia.</p>
            <a href='https://www.spain.info/en/' target='blank'>
                            <Button variant="primary" style={{position: 'relative', marginTop:'24px'}}>Know More</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="images"
            src={UK}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>United Kingdom</h3>
            <p>
            The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe.
            </p>
            <a href='https://www.visitengland.com/' target='blank'>
                            <Button variant="primary" style={{position: 'relative', marginTop:'24px'}}>Know More</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default (Slides);