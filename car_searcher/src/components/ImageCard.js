import React from "react";

function ImageCard(props) {
  console.log(props);
  return (
    <div>
      <img alt={props.desc} src={props.urls} />
    </div>
  );
}

export default ImageCard;
