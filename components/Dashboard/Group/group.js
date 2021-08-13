import { Clipboard } from "react-feather";
import { Alert } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
function group(props) {
  return (
    <div className="card no-hover group-maker ">
      <div className="flex-col justify align">
        <div style={{ marginBottom: "10px", whiteSpace: "nowrap" }}>
          Share Your Code to earn Extra points !
        </div>
        <div className="flex">
          <input value={props.clipboard} className="width-100 disabled-input" type="text" disabled />
          <Clipboard
            className="clipboard hover-icon"
            onClick={() => {
              Alert.success("Copied to Clipboard");
              var val = document.querySelector(".disabled-input");
              navigator.clipboard.writeText(val.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default group;
