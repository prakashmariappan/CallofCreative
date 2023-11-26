import React, { useState } from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import Confetti from "./confetti";

const Win = (props) => {
  //Show Share Options Function
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  //Download & Other Socail Medias Routing Function
  const handleDownload = () => {
    html2canvas(document.getElementById("levelCompletionBox")).then(
      (canvas) => {
        saveAs(canvas.toDataURL(), "level_completion_screenshot.png");
      },
    );
  };

  const handleShareFacebook = () => {
    handleDownload();
    const facebookUrl = "https://www.facebook.com/";
    window.open(facebookUrl, "_blank");
  };
  const handleShareInstagram = () => {
    handleDownload();
    const instagramUrl = `https://www.instagram.com/`;
    window.open(instagramUrl, "_blank");
  };
  const handleShareWhatsApp = () => {
    handleDownload();
    const whatsappUrl = "https://web.whatsapp.com/";
    window.open(whatsappUrl, "_blank");
  };

  const navigate = useNavigate();
  //tryagian or play agian function
  const tryagain = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="modal">
        <div className="overlay">
          <Confetti />
          <div className="win_con popup_con" id="levelCompletionBox">
            <div className="score_popup_heading">You Win!!!</div>
            <div className="score_popup_sub_heading">
              Level {props.num} Completed
            </div>
            <div className="win_img"></div>
            <div className="score_button_con">
              <button className="popup_button sb secondary" onClick={tryagain}>
                Play Again
              </button>
              <button
                className="popup_button sb primary"
                onClick={() => {
                  navigate(props.src);
                }}
              >
                Play Next level
              </button>
            </div>
            <div className="home_div">
              <div
                className="go_to_home"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Go to Home
              </div>
              <div className="share" onClick={toggleOptions}></div>
            </div>
            {showOptions && (
              <div className="share_con">
                <button
                  className="sm download"
                  onClick={handleDownload}
                ></button>
                <button
                  className="sm facebook"
                  onClick={handleShareFacebook}
                ></button>
                <button
                  className="sm instagram"
                  onClick={handleShareInstagram}
                ></button>
                <button
                  className="sm whatsapp"
                  onClick={handleShareWhatsApp}
                ></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Win;
