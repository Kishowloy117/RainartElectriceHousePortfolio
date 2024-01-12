import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './slider';
import Showbar from '../Showbar/showbar';
import Fade from 'react-reveal/Fade';
import './about.css';
import VrLogo from '../Assets/VRlogo.png'

const AboutUs = () => {
  return (
    <div>
      <Slider />
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h1 className="main-heading">About Us</h1>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <h4 >
            We import world class switch and sockets from Chaina since 1998.We start our journey by importing SWE series in 1998.
            According to our response SWE company gave us the sole distributorship in whole Bangladesh.
            By the grace of the almighty we successfully handled the  spreading the quality of our products in Bangladeshi  market.
            Now we are well renowned in the Bangladeshi market.we imported AULMO DZ30 series in 2020 first time and also we have been doing great with AULMO since 2020.
            Keep us in your prayers.
            </h4>
          </Col>
        </Row>

        {/* Our Brands */}
        <Row className="mt-4 mb-4">
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h1 className="main-heading">Our Brands</h1>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col md={4} className="text-center d-flex justify-content-center align-items-center mb-4 mt-4">
          <Fade left > 
            <img
              src="http://www.aulmo.com/template/aoerma/images/cico.png" // Replace with the actual image source
              alt="Brand 1"
              style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}
            />
            </Fade>
          </Col>
          <Col md={8} className="text-center mt-4 mb-4">
           <Fade right > 
            <p className="px-md-5">AULMO Electric has set up subsidary companies in 32 countries ,56 sales offices and agents outside of Germany.
                It integrates the best architects,product designers,engineers in Germany,owns a set of perfect switch quality standards and system.
                AULMO Electric Headquarter was set up in Saarbucken,an old city with a history for over 1000 years,in Saarland.</p>
            </Fade>
          </Col>

          <Col md={4} className="text-center d-flex justify-content-center align-items-center mb-4 mt-4">
          <Fade left >
          <img
              src="https://icdn.tradew.com/stylefile/20557/logo.png?x-oss-process=image/resize,m_fill,h_50,w_210/format,webp" // Replace with the actual image source
              alt="Brand 2"
              style={{ width: '100%', maxWidth: '220px', margin: '0 auto' }}
            />

          </Fade>
          </Col>
          <Col md={8} className="text-center mb-4 mt-4">
          <Fade right > 
            <p className="px-md-5">This company annually produces electrical accessories more than 80 million pcs and its products sell well in Europe & America, Middle East, Africa and southeast Asia. Through innovation at all levels, SWE is redefining power and automation for the world of new energy to achieve safer and smarter operations, thereby maximizing resource efficiency and contributing to a low-carbon future.</p>
            </Fade>
          </Col>

          <Col md={4} className="text-center d-flex justify-content-center align-items-center mb-4 mt-4">
          <Fade left >
          <img
              src={VrLogo}
              alt="Brand 3"
              style={{ width: '100%', maxWidth: '220px', margin: '0 auto' }}
            />
          </Fade>
          </Col>
          <Col md={8} className="text-center mb-4 mt-4">
            <Fade right>
            <p className="px-md-5">AULMO Electric has set up subsidary companies in 32 countries ,56 sales offices and agents outside of Germany. It integrates the best architects,product designers,engineers in Germany,owns a set of perfect switch quality standards and system. AULMO Electric Headquarter was set up in Saarbucken,an old city with a history for over 1000 years,in Saarland.</p>
            </Fade>
          </Col>
        </Row>

        <Row className="mt-4 mb-4 align-items-center justify-content-center"> 
          <h1  className="main-heading text-center mb-4">Contact Details</h1>
        </Row>
        {/* Contact Details */}
        <Row className="mt-4 align-items-center justify-content-center">
          <Col md={{ span: 5}} className=" text-center d-flex align-items-center justify-content-center">
          <Fade left>
            <div>
              <h3>+8801753-534473</h3>
              <h3>example@example.com</h3>
              <h3>129/3,Sifat Abdullah Market Nawabpur Road,Dhaka-1100 , Dhaka, Bangladesh</h3>
            </div>
            </Fade>
          </Col>
          <Col md={{ span: 7}}>
          <Fade right>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7293020240954!2d90.4094007748449!3d23.72135898989163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f8ad93010f%3A0xfc1b0465a1541354!2s129%20Nawabpur%20Rd%2C%20Dhaka%201200!5e0!3m2!1sen!2sbd!4v1703196719801!5m2!1sen!2sbd" 
          width="100%" 
          height="450" 
          style={{ 
            border: 0,
            borderRadius: '30px', // Rounded border
            transition: 'box-shadow 0.3s' // Smooth transition for hover effect
          }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          className="map iframe-hover-effect"
          ></iframe>
          </Fade>
          </Col>
        </Row>

        {/* Google Map Location */}
        <Row className="mt-4">
    <div className="d-flex justify-content-center w-100 d-md-none"> {/* This will show only on small screens */}
        <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frainartelectrichouse&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500" 
            height="500" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</Row>


      </Container>
    </div>
  );
};

export default AboutUs;
