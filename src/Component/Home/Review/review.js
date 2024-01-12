// Reviews.js
import React from 'react';
import './review.css'; 
import Person from '../../Assets/kishowloy.jpg'
import Milon from '../../Assets/Juwel.jpeg'
import Juwel from '../../Assets/MilonUncle.jpeg'
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div>
    <div className="title-container">
      <h1><strong>Happy Clients</strong></h1>
    </div>
    <div className="reviews-container">
      <div className="review-item" style={{backgroundColor:'white'}}>
        <Row>
            <Col lg={2} md={12}>
             <img src={Person} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={6} md={12}>
            <p><strong>Kishowloy016</strong></p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>This Aulmo series is very modern stylish series.I think best designing series for me.</p>
            </div>
        </div>
      </div>
      <div className="review-item" style={{backgroundColor:'white'}}>
        <Row>
            <Col lg={2} md={12}>
             <img src={Milon} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={6} md={12}>
            <p><strong>JhoelRana546</strong></p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>I bought SWE series from Rainart Electric House for my new apartment,It's very well functioned and long lasting switches and sockets also.Stuffs are very friendly.</p>
            </div>
        </div>
      </div>
      <div className="review-item" style={{backgroundColor:'white'}}>
        <Row>
            <Col lg={2} md={12}>
             <img src={Juwel} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={6} md={12}>
            <p><strong>AkiraMilon</strong></p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>Perfect Lumen,Perfect PF with two yrs guarantee😊😊That's VR Led light.</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  //////

  

  );
};

export default Reviews;
