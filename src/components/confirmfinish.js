import React from "react";

const Confirmfinish = (props) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="enter_player_con popup_con">
          <div className=" quit_game_heading">
            Are you sure you want to finish the game?
          </div>
          <div className="popup_button_con">
            <button className="popup_button primary" onClick={props.checkimg}>
              Yes
            </button>
            <button className="popup_button secondary" onClick={props.toggle}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmfinish;
