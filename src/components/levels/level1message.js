// Import necessary dependencies
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define the component
const ContentBox = () => {
  // Define history to navigate between pages
  const navigate = useNavigate();
  const location =useLocation();
  
  const name = location.state.name;
  let message = "Hi "+ name + " Welcome to the World of Heuristic";
  // Define the messages and the initial state
  const messages = [message, "Message 2", "Message 3"];
  const [currentIndex, setCurrentIndex] = useState(0);

  

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/Dashboard/Level1/Window');
    }
  };

  return (
    <div>
      <div className='content-box'>
        <p>{messages[currentIndex]}</p>
        <button onClick={handleNextClick}>
          {currentIndex < messages.length - 1 ? 'Next' : 'Go to Another Page'}
        </button>
      </div>
    </div>
  );
};

export default ContentBox;
