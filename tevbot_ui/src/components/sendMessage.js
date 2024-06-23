import React from 'react';
import '../styles/sendMessage.css';

const SendMessage = () => {
  return (
    <div className="SendMessage">
      <div className="form">
        {/* Icon microphone */}
        {/* <span className="icon">
          <i className="fas fa-microphone"></i>
        </span> */}
        {/* Input for search */}
        <input type="text" className="form-control form-input" placeholder="Search anything..." />
    
      </div>
    </div>
  );
}

export default SendMessage;
