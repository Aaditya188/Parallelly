import ItemList from "./SideBar/item";
import { Drawer, Notification, Badge, Modal } from "rsuite";
import { useState } from "react";
import Notify from "./team";
import DATA from "../Data/demo_post_data.js";
import Logo from "../assets/logo-2.png";
import $ from "jquery";
function Sidebar(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toggle, Settoggle] = useState(false);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  function openv() {
    Notification["success"]({
      title: toggle ? "Light Mode" : "Dark Mode"
    });
  }
  const [show, setShow] = useState(false);
  // Function to open Modal
  const close = () => {
    setShow(false);
  };

  // Function to close Modal
  const open = () => {
    setShow(true);
  };
  return (
    <div className="sidebar lightmode_bkg">
      <div className="bkg">
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="company">
        <img src={Logo} alt="PARALLELY" style={{ width: "100%" }} />
      </div>
      <div className="sidebarcontent">
        <ItemList className="sidelink" icon="home" title="Dashboard" link="/" />
        <ItemList icon="profile" title="Profile" link="/userProfile" />
        <ItemList icon="split" title="Split" link="/split" />
        <ItemList icon="activity" title="Wallet" link="/activity" />
        <div onClick={toggleDrawer}>
          <ItemList icon="settings" title="Settings" />
        </div>
      </div>

      <Drawer show={isDrawerOpen} onHide={closeDrawer}>
        <Drawer.Header>
          <Drawer.Title>Settings</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div>
            <div className="flex-1" style={{ justifyContent: "space-around" }}>
              <div>Enable Dark Mode</div>

              <div className=" wrg-toggle">
                <div className=" wrg-toggle-container">
                  <div
                    className={
                      !toggle ? " wrg-toggle-uncheck" : "wrg-toggle-check"
                    }
                  >
                    <span>🌜</span>
                  </div>
                  <div
                    className={
                      toggle ? "wrg-toggle-uncheck" : "wrg-toggle-check"
                    }
                  >
                    <span>🌞</span>
                  </div>
                </div>
                <div
                  onClick={() => {
                    Settoggle(!toggle);
                    openv();
                    var x = document.querySelector(".lightmode_bkg");
                    x.classList.toggle("dark_bkg");

                    $(".card .header").toggleClass("dark_card");
                  }}
                  className={
                    !toggle ? "wrg-toggle-circle" : "wrg-toggle-circle_check"
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className="flex-1 hover-icon" onClick={open}>
            <div>Team Members</div>
          </div>
          <Modal show={show} onHide={close}>
            <Modal.Header>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Notify />
            </Modal.Body>
          </Modal>

          <div
            className="flex-1 hover-icon"
            style={{ justifyContent: "space-around" }}
          >
            {" "}
            Privacy Settings{" "}
          </div>
        </Drawer.Body>
        <Drawer.Footer></Drawer.Footer>
      </Drawer>
    </div>
  );
}

export default Sidebar;
