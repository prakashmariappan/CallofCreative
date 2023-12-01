import React, { useState } from "react";

const ImageComponent = (props) => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="toggleimg">
      <div className=""></div>
      <button
        className="timg_btn"
        onMouseEnter={toggleImage}
        onMouseLeave={toggleImage}
        title="Reference Image"
      ></button>
      <div className="backtext"></div>
      {showImage && (
        <div className="refimge_con">
          {/*<div className='ref_text'>Arrange images based on this order</div>*/}
          <img className="ref_img" src={props.src} alt="ref" />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
