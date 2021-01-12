import react from "react";

const ImageList = (props) => {
  console.log(props.images);

  const imageList = props.images.map(({ id, description, urls }) => {
    return (
      <div id={id}>
        <img alt={description} src={urls.regular} />
      </div>
    );
  });

  return <div> {imageList} </div>;
};

export default ImageList;
