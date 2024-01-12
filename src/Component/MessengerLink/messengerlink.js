// MessengerLink.js
import React from 'react';
import './messengerlink.css'; // Import the CSS file for styling
import MessengerGif from '../Assets/messengericon.png';

function MessengerLink() {
  const openMessenger = () => {
    // Assuming you want to redirect to Facebook Messenger
    window.open('https://m.me/rainartelectrichouse', '_blank');
  };

  return (
    <div>
      <img 
        src={MessengerGif} 
        alt="Open Messenger" 
        className="messenger-icon" 
        onClick={openMessenger} 
      />
    </div>
  );
}

export default MessengerLink;
