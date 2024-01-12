import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css'; 
import Gallery from './galleryShow';
import Fade from 'react-reveal/Fade';
import Showbar from '../Showbar/showbar';
import { Reveal } from 'react-reveal';
import ScrollImage from './ScrollEffect/scrollImage';
import Review from './Review/review'
import { Helmet } from "react-helmet"; 
import BannerEffect from './BannerEffect/bannerEffect'

export default function () {
  return (
    <div>
      <Helmet>  
        <html lang="en" />  
        <title>Rainart Electronics House</title>  
        <meta name="description" content="Shop Electric Switch and Light" />  
        <meta name="keywords" content="bulb, switch, flat light, shop, Aulmo, SWE, VR, light, electronic" />  
      </Helmet>  
      <Showbar/>
      <div className="container mt-5">
      <Row>
        {/* Label on the left side with large font and custom styles */}
        <Col xs={12} md={4} className="text-md-start text-center mb-3 mb-md-0 custom-label">
        <h1 className="display-3 font-weight-bold"> <strong>WHO WE ARE</strong></h1>
        </Col>
    
        {/* Description on the right side with custom styles */}
        <Col xs={12} md={8} className="text-md-start custom-description">
        <Fade left > 
          <h4 >
            {/* Nakheel Alya evokes authenticity and history that dates back 1400 years. We are named after the Al-Alya neighbourhood in South Madinah where palm tree farms provide the city with natural oases. We carry some of the most delectable and sought-after date varieties from Saudi Arabia. */}
            We are known for our high-quality switch and socket products as well as Led lighting products too. Our switch and socket products are CE, CB, CCC and SAA certified.
          </h4>
          </Fade>
          <Fade right>
          <h4 >
          Rainart Electric House is very careful about the details and quality of each wall switch socket. We ensure that our products meet the market standard.High quality but with a reasonable price makes our switch and socket replace for many of remaining brands in the market.What we do far exceed the expectations of our customers. That is not just our products, but also our integrity and honesty.
            {/* Nakheel Alya evokes authenticity and history that dates back 1400 years. We are named after the Al-Alya neighbourhood in South Madinah where palm tree farms provide the city with natural oases. We carry some of the most delectable and sought-after date varieties from Saudi Arabia. */}
          </h4>
          </Fade>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-end">
        <Col xs={12} md={4} className="d-flex justify-content-end">
          <Button className="custom-button" size="lg" href='/about'>Learn More</Button>
        </Col>
      </Row>
      </div>
      <BannerEffect/>
      {/* <Gallery/> */}
      {/* <ScrollImage/> */}
      {/* <Gallery/> */}
      <Review/>

    </div>
  );
}
