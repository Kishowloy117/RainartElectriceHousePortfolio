// MessengerLink.js
import React from 'react';
import './messengerlink.css'; // Import the CSS file for styling
import MessengerGif from '../Assets/messengericon.png';

function MessengerLink() {
  const openMessenger = () => {
    // Assuming you want to redirect to Facebook Messenger
    window.location.href = 'https://www.messenger.com/';
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
