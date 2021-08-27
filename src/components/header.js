import { Bell, LogOut } from "react-feather";
import { Badge, Modal } from "rsuite";
import { useState } from "react";
import Notify from "./NotificationList";
import { auth } from "../Firebase";
import DATA from "../Data/demo_post_data";
import { useSelector } from "react-redux";
function Header(props) {
  const Datas = useSelector((state) => state.alluser.user);
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
          <div className="user-name">{Datas ? Datas.name : DATA[0].name}</div>
          <div className="hover-icon" onClick={open}>
            <Badge content={Datas ? 1 : DATA[0].notify}>
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
