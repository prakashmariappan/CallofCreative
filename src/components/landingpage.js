import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  const [enterplayermodal, setenterplayerModal] = useState(false);
  const [moreinfomodal, setmoreinfoModal] = useState(false);
  const toggleEnterplayer = () => {
    setenterplayerModal(!enterplayermodal);
  };
  const toggleMoreInfo = () => {
    setmoreinfoModal(!moreinfomodal);
  };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorBio, setErrorBio] = useState("");
  const [isEmptyname, setIsEmptyname] = useState(false);
  const [isEmptybio, setIsEmptybio] = useState(false);
  const handleButtonClick = () => {
    if (name.trim() === "") {
      setErrorName("Name is Required");
      setIsEmptyname(!isEmptyname);
    }
    if (bio.trim() === "") {
      setErrorBio("Bio is Required");
      setIsEmptybio(!isEmptybio);
    } else {
      navigate("/Dashboard", { state: { name, bio } });
    }
  };

  return (
    <>
      <div className="landing_page-con">
        <div className="logo_con"></div>
        <div className="landing_page_button_con">
          <button className="lan_button" onClick={toggleEnterplayer}>
            Get Started
          </button>
          <button className="lan_button" onClick={toggleMoreInfo}>
            More Info
          </button>
        </div>
      </div>
      <div className="footer_name">
        <h1 className="footer_title">Created by Team NetWeavers</h1>
      </div>
      {enterplayermodal && (
        <div className="modal">
          <div className="overlay">
            <div className="enter_player_con popup_con">
              <div className="popup_heading ep">Enter your Details</div>
              <label className="label_name">{errorName}</label>
              <input
                id="name-input"
                type="text"
                className={isEmptyname ? "empty-input" : "default"}
                placeholder="Enter Your Name"
                autoComplete="off"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrorName(""); // Clear error message when the user types
                  setIsEmptyname(false);
                }}
              />
              <label className="label_bio">{errorBio}</label>
              <input
                id="bio-input"
                type="text"
                className={isEmptybio ? "empty-input" : " default"}
                placeholder="Enter Your Bio"
                autoComplete="off"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                  setErrorBio(""); // Clear error message when the user types
                  setIsEmptybio(false);
                }}
              />

              <div className="popup_button_con ep_btn">
                <button
                  className="popup_button primary"
                  onClick={handleButtonClick}
                >
                  Ok
                </button>
                <button
                  className="popup_button secondary"
                  onClick={toggleEnterplayer}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {moreinfomodal && (
        <div className="modal">
          <div className="overlay">
            <div className="more_info_con popup_con">
              <div className="popup_heading">More Info</div>
              <div className="moreinfo_content_con">
                Heuristic Puzzle Forge is developed by the 'Team NetWeavers' for
                students and developers who can learn Nielsen's Heuristics Law by playing
                this game. While encouraging strategy, skill development, and a
                sense of accomplishment, the game is made to provide enjoyment,
                excitement, and much knowledge about Nielsen's Heuristics Law.
              </div>
              <button className="close_btn" onClick={toggleMoreInfo}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landingpage;
