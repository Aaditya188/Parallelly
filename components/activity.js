import Header from "../components/header.js";
import Footer from "./footer";
import Wallet from "./Wallet/body";
function Content(props) {
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header userData={props.userData} />
        </div>
        <div>
          <Wallet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
