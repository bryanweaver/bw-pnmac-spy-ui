import CSS from "csstype";

const style: CSS.Properties = {
  width: "386px",
  height: "386px",
  zIndex: 10
};

const Details = () => {
  return (
    <div className="position-relative top-50" style={style}>
      Spy Details
    </div>
  );
};

export default Details;
