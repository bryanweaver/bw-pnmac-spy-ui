import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchSpy } from "../../store/appSlice";

const ActionButton = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className="btn btn-lg btn-dark mt-5"
      onClick={() => dispatch(fetchSpy())}
    >
      I do something
    </button>
  );
};

export default ActionButton;
