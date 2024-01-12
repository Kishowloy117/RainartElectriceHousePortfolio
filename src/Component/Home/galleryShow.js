import React from 'react';
import './gallery.css';
import Fade from 'react-reveal/Fade';
import Front from '../Assets/packet1.png'
import ThreepinSocket from '../Assets/threepinSocket.png'
import CallingBell from '../Assets/callingBell.png'
import LedPannel from '../Assets/LedPannel.png'

const ImageGallery = () => {
  return (
    <div className=" custom">
      <h1 className="large-title">EXPLORE OUR RANGE</h1>
        <div className="image-row d-flex justify-content-center align-items-center">
          {/* Image 1 */}
          <Fade left > 
          <div className="image-container ">
            <img src={LedPannel}
            alt="Image 1" className='center-image'/>
          </div>
          </Fade>

          {/* Image 2 */}
          <Fade top > 
          <div className="image-container">
            <img src={ThreepinSocket}
            alt="Image 2" className='center-image'/>
          </div>
          </Fade>

          {/* Image 3 */}
          <Fade right > 
          <div className="image-container">
            <img src={CallingBell}
            alt="Image 3" className='center-image'/>
          </div>
          </Fade>
          
        </div>

        <div className="image-row">
          {/* Image 1 */}
          {/* <Fade left > 
          <div className="image-container">
            <img src={LedPannel}
            alt="Image 1" className='center-image'/>
          </div>
          </Fade> */}

          {/* <Fade top > 
          <div className="image-container">
            <img src="https://images.squarespace-cdn.com/content/v1/5ac49e72e2ccd173f1f9ccc3/1622096650589-RU438EAAEA22845QJF95/SP_Walnut_Box+copy.jpg?format=750w"
            alt="Image 2" className='center-image'/>
          </div>
          </Fade>

          <Fade right > 
          <div className="image-container">
            <img src="https://images.squarespace-cdn.com/content/v1/5ac49e72e2ccd173f1f9ccc3/1622096650589-RU438EAAEA22845QJF95/SP_Walnut_Box+copy.jpg?format=750w"
            alt="Image 3" className='center-image'/>
          </div>
          </Fade> */}
          
        </div>
    </div>
  );
};

export default ImageGallery;
