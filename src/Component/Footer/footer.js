import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../Assets/RainartLogo.png';
import FacebookLogo from '../Assets/facebookLogo.png';
import WhatsappLogo from '../Assets/whatsappLogo.png';
import EmailLogo from '../Assets/gmailLogo.png';
import PhoneLogo from '../Assets/phoneLogo.png';
import MapLogo from '../Assets/mapLogo.png';
import  './footer.css';

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 mt-4">
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <img
              src={Logo} 
              alt="Logo"
              height="100"
              className="d-inline-block align-top"
            />
            <div className="d-flex align-items-center mt-2">
              <img 
                src={MapLogo}
                alt="Phone Icon" 
                style={{ width: '30px', height: '30px', marginRight: '10px' }}  // Adjust dimensions and spacing as needed
              />
              <span className='mt-4'>
              129/3,Sifat Abdullah Market Nawabpur Road,Dhaka-1100,
            <p>Dhaka, Bangladesh</p>
              </span>
            </div>
            <div className="d-flex align-items-center">
              <img 
                src={EmailLogo}
                alt="Email Icon" 
                style={{ width: '30px', height: '30px', marginRight: '10px' }}  // Adjust dimensions and spacing as needed
              />
              <a href="mailto:akiramilon@gmail.com" className="text-dark">akiramilon@gmail.com</a>
            </div>
            <div className="d-flex align-items-center mt-2">
              <img 
                src={PhoneLogo}
                alt="Phone Icon" 
                style={{ width: '40px', height: '40px', marginRight: '0px' }}  // Adjust dimensions and spacing as needed
              />
              <span>01785526451, 01316329148</span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <img 
                src={FacebookLogo}
                alt="Phone Icon" 
                style={{ width: '40px', height: '40px', marginRight: '0px' }}  // Adjust dimensions and spacing as needed
              />
              <img 
                src={WhatsappLogo}
                alt="Phone Icon" 
                style={{ width: '45px', height: '45px', marginRight: '0px', marginLeft: '10%'}}  // Adjust dimensions and spacing as needed
              />
            </div>
          </Col>
          <Col lg={4} md={12}>
          <div className='custom-quick-link'>
            <h5>Switch And Socket</h5>
              <ul className="list-unstyled">
                <li><a href="/swe-products" className="text-dark">SWE</a></li>
                <li><a href="/aulmo-products-wh" className="text-dark">AULMO WHITE</a></li>
                <li><a href="/aulmo-products-gl" className="text-dark">AULMO GOLD</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={12}>
          <div className='custom-quick-link'>
            <h5>Light</h5>
              <ul className="list-unstyled">
                <li><a href="/led-light" className="text-dark">LED BULB</a></li>
                <li><a href="/flood-light" className="text-dark">LED FLOOD LIGHT</a></li>
                <li><a href="/led-pannel" className="text-dark">LED PANEL LIGHT</a></li>
                <li><a href="/spot-lights" className="text-dark">LED SPOT LIGHT</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
