import CSS from "csstype";
import { useSelector } from "react-redux";
import { getSpy } from "../../store/appSlice";

const style: CSS.Properties = {
  width: "386px",
  height: "386px",
  zIndex: 10
};

const tableStyle: CSS.Properties = {
  fontSize: "12px"
};

const tableColStyle: CSS.Properties = {
  width: "30%"
};

const tableHeadStyle: CSS.Properties = {
  backgroundColor: "black",
  fontSize: "22px"
};

const Details = () => {
  const spy = useSelector(getSpy);

  const eyeStyle: CSS.Properties = {
    backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };
  return spy != null ? (
    <div
      className="position-relative top-50 border border-white border-1 text-white"
      style={style}
    >
      <table className="font-monospace table table-dark" style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeadStyle} colSpan={2}>
              AGENT INTEL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableColStyle}>Name:</td>
            <td>
              {spy.name.title} {spy.name.first} {spy.name.last}
            </td>
          </tr>
          <tr>
            <td style={tableColStyle}>Codename:</td>
            <td>{spy.login.username}</td>
          </tr>
          <tr>
            <td rowSpan={3}>Last Known Whereabouts:</td>
            <td>
              {spy.location.street.number} {spy.location.street.name}
            </td>
          </tr>
          <tr>
            <td>
              {spy.location.city}, {spy.location.state}
            </td>
          </tr>
          <tr>
            <td>{spy.location.country}</td>
          </tr>
          <tr>
            <td>DOB:</td>
            <td>{new Date(spy.dob.date).toDateString()}</td>
          </tr>
          <tr>
            <td>Eye Color:</td>
            <td style={eyeStyle}></td>
          </tr>
          <tr>
            <td rowSpan={2}>Timezone Offset:</td>
            <td>{spy.location.timezone.offset}</td>
          </tr>
          <tr>
            <td>{spy.location.timezone.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div style={style}></div>
  );
};

export default Details;
