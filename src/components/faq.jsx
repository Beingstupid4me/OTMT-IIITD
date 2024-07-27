import React, { useState } from 'react';
import './faq.css';

const FaqPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button id="faqBtn" onClick={togglePopup}>
        FAQ+
      </button>

      {isOpen && (
        <div id="faqPopup" className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>&times;</span>
            <h2>Frequently Asked Questions</h2>
            <p>Here you can find the answers to the most common questions.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqPopup;

