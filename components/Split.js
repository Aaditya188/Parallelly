import Header from "../components/header.js";
import Footer from "./footer";
import Body from "./Split/body";
function split() {
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default split;
