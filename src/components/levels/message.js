// Import necessary dependencies
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define a generic ContentBox component
const ContentBox = ({ level, welcomeMessage, route, messages }) => {
  // Define history to navigate between pages
  const navigate = useNavigate();
  // Define the initial state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the "Next" button click
  const handleNextClick = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(route);
    }
  };

  // Function to handle the "Back" button click
  const handleBackClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="page_topcon">
        <div className="pagebackarrow_con" onClick={() => navigate(-1)}>
          <button className="nav_backbtn"></button>
          <div className="pagebt backtext">Back</div>
        </div>
        <div className="page_heading">{level}</div>
      </div>
      <div>
        <div className="content-box">
          <p>{currentIndex === 0 ? welcomeMessage : messages[currentIndex]}</p>
          <div className="message-button-con">
            <div className="message_button lan_button" onClick={handleBackClick}>
              Previous
            </div>
            <div className="message_button lan_button" onClick={handleNextClick}>
              {currentIndex < messages.length - 1 ? "Next" : "Play Game"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Define specific instances of the ContentBox component
const ContentBox1 = () => {
  const location = useLocation();
  const name = location.state.name || "Name Not Found";
  const level = "Level 1";
  const welcomeMessage = "Hi "+ name + ", Welcome to the World of Heuristic!";
  const route = "/Dashboard/Level1Window";
  const messages = [
    welcomeMessage,
    "This Level will cover the Nielsen Usability Heuristics : Match between system and the real world",
    "Match between system and the real world speaks the user's language and presents information in a familiar manner.",
    "Hint : The heading, content, and button should all employ language and concepts that the user is comfortable with.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox2 = () => {
  const level = "Level 2";
  const welcomeMessage = "Hi, Welcome to Level 2!";
  const route = "/Dashboard/Level2Window";
  const messages = [
    welcomeMessage,
    "This Level will cover the Nielsen Usability Heuristics : Consistency and standards.",
    "Consistency and standards define that users should not have to wonder whether different words, situations, or actions mean the same thing.",
    "Hint : Consistent placement of navigation elements, a standardized style, and a predictable order of elements can enhance usability.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox3 = () => {
  const level = "Level 3";
  const welcomeMessage = "Hi, Welcome to Level 3!";
  const route = "/Dashboard/Level3Window";
  const messages = [
    welcomeMessage,
    "This Level will cover the Nielsen Usability Heuristics : Recognition rather than recall.",
    "Recognition rather than recall minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another.",
    "Hint : In the context of an input box, providing clear labels for the name, mail, and message fields helps users by not requiring them to remember what information is expected.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox4 = () => {
  const level = "Level 4";
  const welcomeMessage = "Hi, Welcome to Level 4!";
  const route = "/Dashboard/Level4Window";
  const messages = [
    welcomeMessage,
    "This Level will cover two Nielsen Usability Heuristics : User control and freedom and Consistency and standards.",
    "User control and freedom allow users to control their interactions with the system. Consistency and standards specify how a user should not have to question whether various terms, situations, or behaviors signify the same thing.",
    "Hint : This could involve providing explicit navigation controls in the context of a card-swiping interface, allowing users to switch between cards at their leisure. Consistency can be demonstrated by using recognized iconography for navigation and maintaining a comparable layout for each card.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox5 = () => {
  const level = "Level 5";
  const welcomeMessage = "Hi, Welcome to Level 5!";
  const route = "/Dashboard/Level5Window";
  const messages = [
    welcomeMessage,
    "This Level will cover two Nielsen Usability Heuristics : Recognition rather than recall and Flexibility and efficiency of use.",
    "Recognition, rather than recall, reduces the user's memory load by making items, actions, and alternatives apparent. Flexibility and efficiency of use will accelerators may often speed up the interaction for the expert user, allowing the system to cater to both inexperienced and experienced users.",
    "Hint : Users should be able to recognize input information on a feedback card without needing to remember specifics. The design should make it easy for users to browse through feedback, and the inclusion of arrows increases the flexibility of user interaction.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox6 = () => {
  const level = "Level 6";
  const welcomeMessage = "Hi, Welcome to Level 6!";
  const route = "/Dashboard/Level6Window";
  const messages = [
    welcomeMessage,
    "This Level will cover two Nielsen Usability Heuristics : Aesthetic and minimalist design and Consistency and standards",
    "Every extra piece of information in a discourse competes with the relevant information, diminishing their relative exposure. Users should not have to guess whether different words, situations, or behaviors mean the same thing because of consistency and standards. Material that is irrelevant or only infrequently required should not be included in aesthetic and minimalist design.",
    "Hint : Consistent placement of footer elements, a standardized style, and a predictable order of elements can enhance usability. The context of a footer, it means presenting necessary information without unnecessary clutter, making it visually appealing and easy to navigate.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox7 = () => {
  const level = "Level 7";
  const welcomeMessage = "Hi, Welcome to Level 7!";
  const route = "/Dashboard/Level7Window";
  const messages = [
    welcomeMessage,
    "This Level will cover two Nielsen Usability Heuristics : Match between system and the real world and Consistency and standards",
    "Match between system and the real world speaks the user's language and presents information in a familiar manner. Consistency and standards define that users should not have to wonder whether different words, situations, or actions mean the same thing.",
    "Hint : The language, imagery, and overall design of the landing page should be familiar and relatable to the users. It should align with their expectations and understanding. Consistent placement of footer elements, a standardized style, and a predictable order of elements can enhance usability.",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

const ContentBox8 = () => {
  const level = "Level 8";
  const welcomeMessage = "Hi, Welcome to Level 8!";
  const route = "/Dashboard/Level8Window";
  const messages = [
    welcomeMessage,
    "This Level will cover two Nielsen Usability Heuristics : Consistency and standards and Match between system and the real world",
    "Consistency and standards define that users should not have to wonder whether different words, situations, or actions mean the same thing. Match between system and the real world speaks the user's language and presents information in a familiar manner.",
    "Hint : The heading, content, and button should all employ language and concepts that the user is comfortable with. Consistent placement of navigation elements, a standardized style, and a predictable order of elements can enhance usability. ",
  ];

  return <ContentBox level={level} welcomeMessage={welcomeMessage} route={route} messages={messages} />;
};

export { ContentBox1, ContentBox2, ContentBox3, ContentBox4, ContentBox5,  ContentBox6, ContentBox7, ContentBox8};
