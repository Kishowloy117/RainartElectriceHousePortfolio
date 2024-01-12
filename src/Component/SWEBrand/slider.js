import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://icdn.tradew.com/file/201301/1529191/jpg/7627240.jpg?x-oss-process=image/format,webp" 
        width="100%"
        alt="Logo" />

        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FOpalSwitch%2Fposts%2F114894473789115%2F&psig=AOvVaw1io_sPdHTjnfQzOS2e5lXD&ust=1703245070170000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODYv7_ToIMDFQAAAAAdAAAAABAD" alt="Logo" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://icdn.tradew.com/file/201301/1529191/jpg/7627240.jpg?x-oss-process=image/format,webp" 
            width="100%"
        alt="Logo" />

        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FOpalSwitch%2Fposts%2F114894473789115%2F&psig=AOvVaw1io_sPdHTjnfQzOS2e5lXD&ust=1703245070170000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODYv7_ToIMDFQAAAAAdAAAAABAD" alt="Logo" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://icdn.tradew.com/file/201301/1529191/jpg/7627240.jpg?x-oss-process=image/format,webp" 
            width="100%"
        alt="Logo" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;