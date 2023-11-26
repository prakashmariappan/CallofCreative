import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ id, image, name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { key: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const imageStyle = {
    border: isDragging ? "2px solid #a9a9a9" : "0px",
  };

  return (
    <img
      ref={drag}
      alt="Drag Component"
      src={image}
      data-name={name}
      className="image_styling"
      style={imageStyle}
    />
  );
};

export default Picture;
