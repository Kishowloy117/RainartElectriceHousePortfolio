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
    <div className="image-row d-flex justify-content-center align-items-center">
      <Fade left > 
          <div className="image-container2 text-center">
          <h3 className='mb-4'>Product Parameter</h3>
            <img src={Parameter}
            alt="Image 1" className="center-image"/>
          </div>
          </Fade>
      </div>
      <div className="image-row d-flex justify-content-center align-items-center">
      <Fade left > 
          <div className="image-container2 text-center">
          <h3 className='mb-4'></h3>
            <img src="http://www.aulmo.com/static/upload//image/DZ/4.jpg"
            alt="Image 1" className="center-image"/>
          </div>
          </Fade>
      </div>
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
