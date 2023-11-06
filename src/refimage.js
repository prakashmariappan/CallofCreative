import React, { useState } from 'react';
const ImageComponent = (props) => {
  const [showImage, setShowImage] = useState();

  const toggleImage = () => {
    setShowImage(!showImage);
  };
  const hideimage = () =>{
    setShowImage (!showImage)
  }

  return (
    <div className='toggleimg'>
      <button className='timg_btn' onMouseEnter={toggleImage} onMouseLeave={hideimage}></button>
      {showImage &&
      <div className='refimge_con'>
       <img className='ref_img' src={props.src} alt="Your Image" />
      </div>}
    </div>
  );
};

export default ImageComponent;




