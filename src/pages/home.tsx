import ActionButton from "../components/button";
import SpyDetails from "../components/details";
import SpyAvatar from "../components/avatar";
import Map from "../components/map";

const HomePage = () => {
  return (
    <div className="container h-100">
      <ActionButton />
      <div className="d-flex">
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
