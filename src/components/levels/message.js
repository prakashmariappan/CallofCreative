// Import necessary dependencies
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Backcomp from "../backcomp";

// Define the component
const ContentBox = () => {
  // Define history to navigate between pages
  const navigate = useNavigate();
  const location = useLocation();

  const name = location.state.name;
  let uniquemessage = "Hi " + name + ", Welcome to the World of Heuristic!";
  // Define the messages and the initial state
  const messages = [
    uniquemessage,
    "This Level will cover the Nielsen Usability Heuristics: Match between system and the real world",
    "Match between system and  the real world speaks the user's language and presents information in a familiar manner.",
    "Hint: The heading, content, and button should all employ language and concepts that the user is comfortable with.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/Dashboard/Level1/Window");
    }
  };

  return (
    <>
      <div className="page_topcon">
        <div className="pagebackarrow_con" onClick={() => navigate(-1)}>
          <button className="nav_backbtn"></button>
          <div className="pagebt backtext">Back</div>
        </div>
        <div className="page_heading">Level 1</div>
      </div>
      <div>
        <div className="content-box">
          <p>{messages[currentIndex]}</p>
            <div
              className="message_button lan_button"
              onClick={handleNextClick}
            >
              {currentIndex < messages.length - 1 ? "Next" : "Play Game"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
