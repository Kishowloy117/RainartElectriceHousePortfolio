import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AboutBanner from '../Assets/Banner/aboutBanner.jpg'

function IndividualIntervalsExample() {
  return (

    <div>
        <Carousel data-bs-theme="dark" className="w-100 mx-lg-auto custom-carousel " style={{ aspectRatio: '16/9', height: '100%' }}>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={AboutBanner}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
            width= "100%"
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5ac49e72e2ccd173f1f9ccc3/14550d73-0e68-4044-a381-cb93275ca0d7/CHOCOLATE+DATES_BANNER.jpg?format=1500w"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            width= "100%"
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5ac49e72e2ccd173f1f9ccc3/f09bd6f4-f871-47a9-ad8a-44b76ddfdf6d/STUFFED+DATES_BANNER.jpg?format=1500w"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           width= "100%"
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5ac49e72e2ccd173f1f9ccc3/1a575017-171b-41fc-abdc-8b1a84ef6ff1/LUXURY+GIFT+BOXES.jpg?format=1500w"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;