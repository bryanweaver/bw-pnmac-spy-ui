import CSS from "csstype";
import React from "react";
import { useSelector } from "react-redux";
import { getSpy } from "../../store/appSlice";

const style: CSS.Properties = {
  width: "386px",
  height: "386px",
  zIndex: 10
};

const Avatar = () => {
  const spy = useSelector(getSpy);
  return (
    <div style={style} className="position-relative top-50">
      {spy != null && (
        <React.Fragment>
          <img src={spy.picture.large} style={style} alt="spy avatar" />
          <div className="fs-5">
            codename: {spy.login.username.toUpperCase()}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Avatar;
