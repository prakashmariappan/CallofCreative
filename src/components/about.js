import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page_topcon">
        <div className="pagebackarrow_con" onClick={() => navigate(-1)}>
          <button className="nav_backbtn"></button>
          <div className="pagebt backtext">Back</div>
        </div>
        <div className="page_heading">About</div>
      </div>
      <div className="content">
        Heuristic Puzzle Forge is developed by the 'Team NetWeavers' for
        students and developers who can learn UI/UX design by playing this game.
        Call of Creative is a thriving online gaming community where gamers of
        all backgrounds can come to celebrate their shared love for gaming.
        While encouraging strategy, skill development, and a sense of
        accomplishment, the game is made to provide enjoyment, excitement, and
        much knowledge about UI/UX Design.
      </div>
      <div className="footer_name">
        <h1 className="footer_title">Created by Team NetWeavers</h1>
      </div>
    </>
  );
};

export default About;
