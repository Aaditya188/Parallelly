import { useEffect } from "react";
import Header from "../components/header.js";
import Footer from "./footer";
function Content(props) {
  useEffect(() => {
    document.querySelector(".flex-2").style.display = "flex";
  }, []);
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header />
        </div>
        <div>FRIENDS</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Content;
