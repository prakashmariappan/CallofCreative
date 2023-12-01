import React from "react";
import { useNavigate } from "react-router-dom";
const Howtoplay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page_topcon">
        <div className="pagebackarrow_con" onClick={() => navigate(-1)} title="Go Back">
          <div className="nav_backbtn"></div>
          <div className="pagebt backtext">Back</div>
        </div>
        <div className="page_heading">How to Play</div>
      </div>
      <div className="howtoplay">
        <li className="list">Click the "Start" button to begin the game.</li>
        <li className="list">
          A game screen containing draggable items and target areas will appaer.
        </li>
        <li className="list">
          Click and hold your mouse button on it to move an item.
        </li>
        <li className="list">
          While Holding mouse, drag the item to the desired location.
        </li>
        <li className="list">Release your mouse button to drop the item.</li>
        <li className="list">
          After placing the item is correctly, you can move on to the next item.
        </li>
        <li className="list">
          Click the "Finish" Button to see your score box.
        </li>
      </div>
    </>
  );
};

export default Howtoplay;
