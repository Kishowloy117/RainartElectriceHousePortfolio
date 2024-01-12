// ScrollToTop.js
import React from 'react';
import './scrolltotop.css'; // Import the CSS file for styling
import Arrow from '../Assets/TopArrow.png';

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <img src={Arrow} alt="Scroll To Top" className="scroll-to-top-btn" onClick={scrollToTop} />
    </div>
  );
}

export default ScrollToTop;
