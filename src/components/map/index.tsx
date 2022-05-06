import earth from "../../assets/earth.gif";
import CSS from "csstype";

const style: CSS.Properties = {
  width: "386px",
  height: "386px"
};

const Map = () => {
  return (
    <div className="position-relative top-50">
      <img style={style} src={earth} alt="i'm the earth" />
    </div>
  );
};

export default Map;
