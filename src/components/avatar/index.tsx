import CSS from "csstype";
import React from "react";

const style: CSS.Properties = {
  width: "386px",
  height: "386px"
};

const Avatar = () => {
  return (
    <div className="position-relative top-50">
      <div style={style}>Avatar image</div>
      <div>codename</div>
    </div>
  );
};

export default Avatar;
