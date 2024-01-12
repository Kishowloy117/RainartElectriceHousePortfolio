import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  './showbar.css';
import AulmoGold from '../Assets/Banner/aulmoGold.jpg'
import AulmoWhite from '../Assets/Banner/aulmoWhite.jpg'
import SweBanner from '../Assets/Banner/sweSwitch.jpg'
import LedSpotLight from '../Assets/Banner/spotLight.jpg'
import LedPannelLight from '../Assets/Banner/floodLight.jpg'

export default function () {
  return (
    <div>
        <Carousel data-bs-theme="dark" className="w-100 mx-lg-auto custom-carousel " style={{ aspectRatio: '16/9', height: '100%' }}>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={AulmoGold}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={AulmoWhite}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={SweBanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={LedSpotLight}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          src={LedPannelLight}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
