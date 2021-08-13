import Header from "./header.js";
import Dashboard from "./Dashboard/body.js";
import Footer from "./footer";
function Content(props) {
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header userData={props.userData} />
        </div>
        <div>{props.active == "Dashboard" ? <Dashboard /> : ""}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
