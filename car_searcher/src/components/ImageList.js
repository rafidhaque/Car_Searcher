import react from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images);

  const imageList = props.images.map(({ id, description, urls }) => {
    return (
      <div id={id}>
        <ImageCard desc={description} urls={urls.regular} />
      </div>
    );
  });

  return <div className="image-list"> {imageList} </div>;
};

export default ImageList;
