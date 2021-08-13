import { Link } from "react-router-dom";
import { Home, User, Activity, Settings, Divide } from "react-feather";
function ItemList(props) {
  const set = () => {};
  return (
    <div className="sidebarhover" onClick={set()}>
      <div className="hovericon">
        {props.icon == "home" ? <Home /> : ""}
        {props.icon == "profile" ? <User /> : ""}
        {props.icon == "activity" ? <Activity /> : ""}
        {props.icon == "split" ? <Divide /> : ""}
        {props.icon == "settings" ? <Settings /> : ""}
      </div>
      <div>
        <Link to={props.link} className="sidelinks">
          {props.title}
        </Link>
      </div>
    </div>
  );
}

export default ItemList;
