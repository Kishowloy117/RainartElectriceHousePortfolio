// Reviews.js
import React from 'react';
import './review.css'; // Ensure you have this CSS file for styling
import Person from '../../Assets/kishowloy.jpg'
import { Container, Row, Col } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div>
    <div className="title-container">
      <h2>Customer Reviews</h2>
    </div>
    <div className="reviews-container">
      <div className="review-item">
        <Row>
            <Col lg={2} md={12}>
             <img src={Person} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={6} md={12}>
            <p>Ripon Rahman</p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>Good purchase</p>
            </div>
        </div>
      </div>
      <div className="review-item">
        <Row>
            <Col lg={3} md={12}>
             <img src={Person} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={4} md={12}>
            <p>Kishowloy Datta</p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>kora purchase</p>
            </div>
        </div>
      </div>
      <div className="review-item">
        <Row>
            <Col lg={3} md={12}>
             <img src={Person} alt="Person 3" className="people-image" />
            </Col>
            <Col lg={4} md={12}>
            <p>Kishowloy Datta</p>
            </Col>
        </Row>
        <div className='main-review'>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="review-content">
            <p>Review content here for Person 3...</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  //////

  

  );
};

export default Reviews;
