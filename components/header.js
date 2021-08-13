import { Bell, LogOut } from "react-feather";
import { Badge, Modal } from "rsuite";
import { useState } from "react";
import Notify from "./NotificationList";
import { auth } from "../src/Firebase";
import DATA from "../src/Data/demo_post_data";
function Header() {
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
    <div>
      <div className="header">
        <div className="flex-1 ">
          <input className="headsearch" type="search" placeholder="Search" />
        </div>
        <div className="headbell">
          <div className="user">
            <img src={DATA[0].prof_image} />
          </div>
         <div className="user-name">{DATA[0].name}</div>
          <div className="hover-icon" onClick={open}>
            <Badge content={DATA[0].notify}>
              <Bell />
            </Badge>
          </div>
          <div className="hover-icon">
            <LogOut onClick={() => auth.signOut()} />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={close}>
        <Modal.Header>
          <Modal.Title>You have {DATA[0].notify} new notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Notify />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Header;
