import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import _ from "lodash";
import { useEffect, useState } from "react";
import Table from "./table";
import { Badge } from "rsuite";
import { Avatar } from "@material-ui/core";
import DATA from "../../Data/demo_post_data";
import { useSelector } from "react-redux";
function body(props) {
  const Datas = useSelector((state) => state.alluser.user);
  const [rating, Setrating] = useState(Datas ? Datas.rating : DATA[0].rating);
  /* const postdata = () => {
    axios
      .post("https://apimaking.herokuapp.com/users", Data)
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    postdata();
  }, []);*/
  return (
    <div>
      <div className="body-title">Profile</div>
      <div
        className="flex justify align"
        style={{ margin: "10px 25px 10px 20px" }}
      >
        <div className="profilecard">
          <div className="row-1">
            <div className="pnav">Profile</div>
            <div className="pnav">Edit Profile</div>
            <div className="pnav">Reset Password</div>
          </div>
          <div className="line"></div>
          <div
            className="flex justify align"
            style={{
              marginTop: "50px",
              justifyContent: "space-evenly",
              fontSize: "20px"
            }}
          >
            <div
              className="grp-1 flex flex-col glass"
              style={{ backgroundColor: "transparent" }}
            >
              <div class="profileimg">
                <img
                  src={DATA[0].prof_image}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%"
                  }}
                />
              </div>
              <div className="flex" style={{ gap: "10px" }}>
                {/*Datas ? Datas.name : DATA[0].name*/}
                <span>
                  {/* rating = 5  3.5= */}
                  {_.times(rating, (i) => (
                    <BsFillStarFill style={{ color: "wheat" }} />
                  ))}
                  {!Number.isInteger(rating) ? (
                    <BsStarHalf style={{ color: "wheat" }} />
                  ) : (
                    ""
                  )}
                  {_.times(5 - rating, (i) => (
                    <BsStar />
                  ))}
                  {"  (" + rating + ")"}
                </span>
              </div>
              <div>{Datas ? Datas.email : DATA[0].email}</div>
              <div>
                {DATA[0].reportStatus ? (
                  <Badge
                    className="statusbadge css-selector"
                    content={"GOOD"}
                    style={{ backgroundColor: "#2bc155" }}
                  ></Badge>
                ) : (
                  <Badge
                    className="statusbadge"
                    content={"BAD"}
                    style={{ backgroundColor: "F8485E" }}
                  ></Badge>
                )}
              </div>
              {/* <div>
                {Datas ? (
                  Datas.reportStatus
                ) : DATA[0].reportStatus ? (
                  <Badge
                    className="statusbadge css-selector"
                    content={"GOOD"}
                    style={{ backgroundColor: "#2bc155" }}
                  ></Badge>
                ) : (
                  <Badge
                    className="statusbadge css-selector"
                    content={"BAD"}
                    style={{ backgroundColor: "F8485E" }}
                  ></Badge>
                )}
              </div> */}
            </div>
            <div
              className="row-1 flex flex-col glass"
              style={{ backgroundColor: "transparent" }}
            >
              <Table table={DATA[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
