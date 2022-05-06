import CSS from "csstype";
import React from "react";

const style: CSS.Properties = {
  width: "386px",
  height: "386px"
};

const Avatar = () => {
  return (
    <React.Fragment>
      <div style={style}>Avatar image</div>
      <div>codename</div>
    </React.Fragment>
  );
};

export default Avatar;
