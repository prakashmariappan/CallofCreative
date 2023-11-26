import React from "react";
import { useNavigate } from "react-router-dom";

const Backcomp = () => {
  const navigate = useNavigate();
  return (
    <div className="backarrow_con" onClick={() => navigate(-2)}>
      <button className="nav_backbtn"></button>
      <div className="backtext">Back</div>
    </div>
  );
};

export default Backcomp;
