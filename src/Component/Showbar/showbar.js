import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  './showbar.css';
import AulmoGold from '../Assets/Banner/aulmoGold.jpg'
import SpotLight from '../Assets/Banner/spotLightBanner.jpg'
import SweBanner from '../Assets/Banner/sweSwitch.jpg'
import LedSpotLight from '../Assets/Banner/spotLight.jpg'
import LedPannelLight from '../Assets/Banner/floodLight.jpg'
import RainartBanner from '../Assets/Banner/aboutBanner.jpg'

export default function () {
  return (
    <div>
        <Carousel data-bs-theme="dark" className="w-100 mx-lg-auto custom-carousel " style={{ aspectRatio: '16/9', height: '100%' }}>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={RainartBanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={AulmoGold}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={SweBanner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={LedSpotLight}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={LedPannelLight}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width= "100%"
          className="d-block w-100"
          loading="lazy"
          src={SpotLight}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
