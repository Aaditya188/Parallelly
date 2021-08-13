import Header from "../components/header.js";
import Footer from "./footer";
import UserProfile from "./UserProfile/body";
function profile() {
  return (
    <div className="flex-8">
      <div className="mainheader">
        <div>
          <Header />
        </div>
        <div>
          <UserProfile />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default profile;
