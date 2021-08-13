import { createRef, useEffect, useState } from "react";
import DATA from "../../Data/demo_post_data";
import { MinusCircle, Plus } from "react-feather";
import $ from "jquery";
import {
  Button,
  Dropdown,
  Modal,
  Whisper,
  Notification,
  ButtonToolbar
} from "rsuite";
import Color from "../../Data/color";
import { Popover } from "@material-ui/core";
function body() {
  const [receipt, setreceipt] = useState(false);
  const [Data, SetData] = useState(DATA);
  const [nowdate, Setnowdate] = useState("");
  const [list, updateList] = useState(DATA[0].friends);
  const [name, setName] = useState("");
  const [index, Setindex] = useState(0);
  const [iName, SetiName] = useState("");
  const [groups, Setgroups] = useState([]);
  const [gname, Setgname] = useState("");
  const [dogname, Setdogname] = useState(false);
  const [totalappear, Settotalappear] = useState(false);
  const [total, Settotal] = useState(0);
  const [foundUsers, setFoundUsers] = useState(DATA[0].friends);

  function addfrnd(user) {
    Setgroups([...groups, user]);
  }
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = list.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(DATA[0].friends);
    }

    setName(keyword);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  function opennotify(me, frnd, indexes) {
    Notification.open({
      title: "Message",
      duration: 10000,
      description: (
        <div>
          <p>
            {me} wants to owe $10 to {frnd}.
          </p>
          <ButtonToolbar>
            <Button
              onClick={() => {
                DATA[0].notify = DATA[0].notify + 1;
                groups[indexes].owe[0].money =
                  groups[indexes].owe[0].money + 10;
                groups[indexes].owe[0].hex_index = index;
                let x = [...DATA[0].notify_data];
                x.push({
                  id: DATA[0].notify_data.length + 1,
                  msg: me,
                  time: "2min ago"
                });
                Notification.close();
              }}
            >
              Accept
            </Button>
            <Button
              onClick={() => {
                Notification.close();
              }}
            >
              Cancel
            </Button>
          </ButtonToolbar>
        </div>
      )
    });
  }
  return (
    <div>
      <div className="body-title">Parallel - Split</div>
      <div
        className="flex width-100 justify align"
        style={{ gap: "20px", padding: "20px 30px" }}
      >
        <div className="relative flex width-100 justify align flex_1 card no-hover split_card_height ">
          <div
            className="absolute width-100 justify align text_align "
            style={{ top: "15px" }}
          >
            <div>Select your friends</div>
            <div
              className="flex width-100"
              style={{ gap: "10px", padding: "5px 20px" }}
              x
            >
              <input
                type="search"
                value={name}
                onChange={filter}
                className="width-100 srchfrnd create_srch"
                style={{ padding: "0 20px" }}
              />
            </div>
            <div
              className="noresult"
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginTop: "10px"
              }}
            >
              Please select from top to bottom
            </div>
            <div className="user-list">
              {foundUsers && foundUsers.length > 0 ? (
                foundUsers.map((user) => (
                  <li key={user.id} className="user_render">
                    <span className="flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-three-dots-vertical"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </div>
                    </span>
                    <span className="user_list_name">{user.name}</span>
                    <a className="addmyfrnd" onClick={() => addfrnd(user)}>
                      Add
                    </a>
                  </li>
                ))
              ) : (
                <div className="noresult">No friend with that name!</div>
              )}
            </div>
          </div>
        </div>
        <div className="relative flex width-100 justify align flex_1 card no-hover split_card_height ">
          <div
            className="text_align width-100 absolute flex flex-col"
            style={{ top: "20px", padding: "20px", gap: "5px" }}
          >
            <div
              className="flex width-100 justify align"
              style={{ gap: "10px" }}
            >
              <input
                className="width-100 create_srch"
                style={{ flex: "1", padding: "0 20px", height: "40px" }}
                placholder="Group Name"
                onChange={(e) => Setgname(e.target.value)}
              />
              <input
                className="width-100 create_srch"
                style={{ flex: "1", padding: "0 20px", height: "40px" }}
                placeholder="Amount to split"
                type="text"
                onChange={(e) => {
                  Settotal(e.target.value);
                }}
              />
              <a
                className="addmyfrnd cbtn"
                style={{ flex: "0.2", minWidth: "70px" }}
                onClick={() => {
                  if (gname != "") {
                    Setdogname(true);
                  }
                }}
              >
                Create
              </a>
            </div>
            Or
            <div
              className="flex width-100 justify align"
              style={{ gap: "10px" }}
            >
              <input
                className="width-100 create_srch"
                style={{ flex: "1", padding: "0 20px", height: "40px" }}
                placholder="Join a Group"
              />
              <a className="addmyfrnd jbtn" style={{ flex: "0.2" }}>
                Join
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex width-100 justify align flex_1 card no-hover split_card_height ">
          <div
            className="flex flex-col width-100 absolute"
            style={{ top: "20px" }}
          >
            <div
              className="flex align"
              style={{
                justifyContent: "space-evenly",
                textTransform: "uppercase",
                marginBottom: "10px"
              }}
            >
              <span style={{ fontSize: "20px" }}>
                {dogname ? gname : " Group Name:"}
              </span>
              <a
                className="addmyfrnd"
                onClick={() => {
                  if (gname != "") {
                    Setdogname(false);
                    Settotalappear(false);
                    Setgroups([]);
                  }
                }}
              >
                <MinusCircle />
              </a>
              <a
                className="addmyfrnd cbtn"
                style={{ padding: "5px 10px" }}
                onClick={() => {
                  var s = 0;
                  groups.map((user) => {
                    s = s + parseInt(user.total);
                  });
                  Settotal(s);

                  Settotalappear(true);
                }}
              >
                Split Now
              </a>
              <a
                className="addmyfrnd text_align"
                onClick={() => {
                  var t = new Date(Date.now() * 1000);
                  var formatted =
                    ("0" + t.getHours()).slice(-2) +
                    ":" +
                    ("0" + t.getMinutes()).slice(-2);
                  Setnowdate(formatted);
                  setreceipt(!receipt);
                }}
              >
                Pay Your Half
              </a>
            </div>
            <div>
              <div
                className="flex flex-col"
                style={{ marginBottom: "30px" }}
                className={dogname ? "" : ""}
              >
                {groups && groups.length > 0 ? (
                  groups.map((user) => (
                    <li key={user.id} className="user_render">
                      <span className="flex" style={{ flex: "0.3" }}>
                        <div style={{ marginLeft: "-5px" }}>
                          <div>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                              }}
                            >
                              <div
                                className="relative"
                                style={{
                                  padding: "10px",
                                  textAlign: "center"
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500"
                                  }}
                                >
                                  Select a person to send owe request
                                </div>
                                <div
                                  className="flex flex-col absolute justify align width-100"
                                  style={{ padding: "20px", gap: "20px" }}
                                >
                                  {groups.map((selectone) =>
                                    selectone.name !== "Yash" ? (
                                      <div className="flex width-100">
                                        <div
                                          className="flex_1 white_space"
                                          style={{
                                            color: `${Color[selectone.id].hex}`
                                          }}
                                        >
                                          {selectone.name}
                                        </div>
                                        <div className="flex_1">
                                          $
                                          <input
                                            className={selectone.name
                                              .split(/\s/)
                                              .join("")}
                                            type="text"
                                            placeholder="0"
                                            style={{
                                              width: "30px",
                                              textAlign: "center",
                                              marginLeft: "5px"
                                            }}
                                          />
                                        </div>
                                        <a
                                          className="flex_1 addmyfrnd"
                                          onClick={() => {
                                            opennotify(
                                              iName,
                                              selectone.name,
                                              selectone.id
                                            );
                                          }}
                                        >
                                          Request
                                        </a>
                                      </div>
                                    ) : (
                                      ""
                                    )
                                  )}
                                </div>
                              </div>
                            </Popover>
                          </div>
                          <Dropdown title="More">
                            <Dropdown.Item>
                              <span
                                onClick={(e) => {
                                  Setindex(user.id);
                                  SetiName(user.name);
                                  handleClick(e);
                                }}
                              >
                                Owe someone
                              </span>
                            </Dropdown.Item>
                          </Dropdown>
                        </div>
                      </span>
                      <span
                        className="user_list_name"
                        style={{ flex: "1", color: `${Color[user.id].hex}` }}
                      >
                        {user.name}
                      </span>
                      <span style={{ flex: "1", textAlign: "center" }}>
                        $
                        <span
                          contenteditable="true"
                          value={
                            groups.length > 0
                              ? Math.round(total / groups.length)
                              : 0
                          }
                          onClick={(e) => {
                            groups[user.id].total = e.target.textContent;
                          }}
                        >
                          {user.total}
                        </span>
                      </span>
                      <span style={{ flex: "1", textAlign: "center" }}>
                        {totalappear ? (
                          <span
                            style={{
                              color: `${
                                groups[user.id].owe[0].hex_index >= 0
                                  ? Color[groups[user.id].owe[0].hex_index].hex
                                  : "black"
                              }`
                            }}
                          >
                            {user.owe[0].money === 0 ? "" : user.owe[0].money}
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                      <a
                        className="addmyfrnd"
                        onClick={() => {
                          Setgroups(
                            groups.filter((person) => person.name != user.name)
                          );
                        }}
                      >
                        Delete
                      </a>
                    </li>
                  ))
                ) : (
                  <div className="noresult">Add friends </div>
                )}
              </div>
              {totalappear ? (
                <div className="flex justify align flex-col">
                  <div className="bline"></div>
                  <div
                    className="flex width-100"
                    style={{
                      fontSize: "30px",
                      justifyContent: "space-evenly",
                      marginTop: "6px"
                    }}
                  >
                    <div>TOTAL: </div>
                    <div>${total}</div>
                  </div>
                  <div
                    className="flex width-100 justify align"
                    style={{ fontSize: "20px" }}
                  >
                    <span>Per person cost:{" s"}</span>
                    <span>
                      {groups.length > 0
                        ? Math.round(total / groups.length)
                        : 0}
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {receipt ? (
          <div className="absolute flex flex-col justify align">
            <div className="paid paid_card  white_space no-hover flex justify align text-align width-100">
              <p>Paid successfully</p>
            </div>
            <div className="receipt width-100">
              <div className="paper flex flex-col justify align width-100">
                <div className="title">Receipt</div>
                <div
                  className="flex justify align width-100"
                  style={{
                    gap: "30px",
                    padding: "10px 0",
                    marginBottom: "20px"
                  }}
                >
                  <div className="date ">Date: {nowdate}</div>
                  <div className=" white_space ">
                    Total amount: $
                    {groups.length > 0 ? Math.round(total / groups.length) : 0}
                  </div>
                </div>
                <div
                  className="sign center flex flex-col justify align"
                  style={{ gap: "15px" }}
                >
                  <div className="barcode"></div>
                  0123456789
                  <div className="thankyou">Thank you for your business</div>
                  <input
                    type="button"
                    value="Pay Now"
                    onClick={() => {
                      $(".receipt").slideUp("slow");
                      $(".paid").slideDown("slow");
                      setTimeout(function () {
                        setreceipt(false);
                      }, 5000);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default body;
