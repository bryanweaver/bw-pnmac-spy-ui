import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchSpy, getIsLoading } from "../../store/appSlice";

const ActionButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(getIsLoading);

  return (
    <button
      className="btn btn-lg btn-dark mt-5"
      onClick={() => dispatch(fetchSpy())}
    >
      {loading && <span className="spinner-border spinner-border-sm"></span>}
      {loading ? " Searching..." : "Next Asset"}
    </button>
  );
};

export default ActionButton;
