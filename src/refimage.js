import React, { useState } from 'react';

const ImageComponent = (props) => {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className='toggleimg'>
      <button className='timg_btn' onMouseEnter={toggleImage} onMouseLeave={toggleImage}></button>
      {showImage && (
        <div className='refimge_con'>
          <img className='ref_img' src={props.src} alt="Image" />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;





