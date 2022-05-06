import ActionButton from "../components/button";
import SpyDetails from "../components/details";
import SpyAvatar from "../components/avatar";
import Map from "../components/map";
import CSS from "csstype";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSpy } from "../store/appSlice";

const style: CSS.Properties = {
  backgroundColor: "black",
  color: "white"
};

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpy());
  }, []);

  return (
    <div style={style} className="container font-monospace">
      <ActionButton />
      <div className="d-flex justify-content-around">
        <div className="p-2">
          <SpyAvatar />
        </div>
        <div className="p-2">
          <Map />
        </div>
        <div className="p-2">
          <SpyDetails />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
