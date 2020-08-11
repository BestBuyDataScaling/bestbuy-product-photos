import React from "react";

const Thumbnail = (props) => {
  return (
    <div className="thumbnail" onClick={props.thumbnailClicker}>
      <img className="thumbnail-image"
        src={props.image}
      />
    </div>
  );
};

export default Thumbnail;