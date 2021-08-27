import Header from "./header.js";
import Dashboard from "./Dashboard/body.js";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { useState } from "react";
function Content(props) {
  const Datas = useSelector((state) => state.alluser.user);
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header userData={props.userData} />
        </div>
        <div>
          {props.active == "Dashboard" ? (
            <Dashboard data={Datas.dashboard} />
          ) : (
            ""
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
