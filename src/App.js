import "./styles.css";
import Content from "../components/content.js";
import Split from "../components/Split.js";
import Wallet from "../components/activity.js";
import UserProfile from "../components/userProfile.js";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Login from "../components/LoginSignup/login";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { auth } from "./Firebase";
import Loading from "../components/Loading";
import {
  FaRegCopy,
  FaList,
  FaEllipsisV,
  FaShareAlt,
  GrRefresh
} from "react-icons/fa";
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";
/*import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions/userActions";*/

export default function App() {
  const [Data, SetData] = useState({});
  const [user, SetUser] = useState(true);
  const [username, setUsername] = useState("");
  /*const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios
      .get("https://apimaking.herokuapp.com/users/610e42fb08a02a081466f892")
      .catch((err) => {
        console.log(err);
      });
    SetData(response.data);
    dispatch(setUser(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);*/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        SetUser(true);
        if (authUser.displayName) {
          //dont update username
        } else {
          //we just created someone
          return authUser.updateProfile({
            displayName: username
          });
        }
      } else {
        //LOGGED OUT
        SetUser(false);
      }
    });
    return () => {
      //perform clean up action
      unsubscribe();
    };

    /*document.oncontextmenu = new Function("return false;");
    document.onselectstart = new Function("return false;");*/
  }, [user]);
  if (false) {
    return <Loading />;
  }
  return (
    <Router>
      <Route exact path="/">
        {user ? <Redirect to="/" /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <ContextMenuTrigger id="contextmenu">
        <div className="parent">
          <div className="flex-2">
            <Sidebar />
          </div>
          <div className="flex-8">
            <Route exact path="/">
              <Content active="Dashboard" />
            </Route>
            <Route path="/about">
              <Content active="profile" />
            </Route>
            <Route path="/userProfile">
              <UserProfile text="Prof" />
            </Route>
            <Route path="/split">
              <Split text="Split" />
            </Route>
            <Route path="/activity">
              <Wallet text="ACTIVITY" />
            </Route>
          </div>
          <ContextMenu id="contextmenu">
            <MenuItem>
              <span>Refresh</span>
            </MenuItem>
            <MenuItem>
              <FaRegCopy className="copy" />
              <span>Copy</span>
            </MenuItem>
            <MenuItem>
              <FaEllipsisV className="openwith" />
              <span>Open with</span>
            </MenuItem>
            <MenuItem>
              <FaList className="watchlist" />
              <span>Add to watchlist</span>
            </MenuItem>
            <MenuItem>
              <RiSendPlaneFill className="send" />
              <span>Send</span>
            </MenuItem>
            <MenuItem>
              <RiDeleteBin6Line className="delete" />
              <span>Delete</span>
            </MenuItem>
            <MenuItem>
              <FaShareAlt className="share" />
              <span>Share</span>
            </MenuItem>
          </ContextMenu>
        </div>
      </ContextMenuTrigger>
    </Router>
  );
}
