import React from 'react';
import './whatspecial.css';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Eco from '../../../Assets/eco.png'
import Fire from '../../../Assets/fire.png'
import Shock from '../../../Assets/shock.png'
import Parameter from '../../../Assets/parameter.png'

const WhatSpecial = () => {
  return (
    <div className="container custom">
      <h1 className="large-title">What's Special</h1>
        <div className="image-row d-flex justify-content-center align-items-center">
          {/* Image 1 */}
          <Fade left > 
          <div className="image-container text-center">
            <img src={Eco}
            alt="Image 1" className="center-image"/>
          </div>
          </Fade>
          <Fade top > 
          <div className="image-container text-center">
            <img src={Fire}
            alt="Image 1" className="center-image"/>
          </div>
          </Fade>
          <Fade right > 
          <div className="image-container text-center">
            <img src={Shock}
            alt="Image 1" className="center-image"/>
          </div>
          </Fade>
          
        </div>
    </div>
  );
};

export default WhatSpecial;
