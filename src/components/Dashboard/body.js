import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import Chart from "./chart";
import Group from "./Group/group";
import Table from "./table";
import DATA from "../../Data/demo_post_data";
function body(props) {
  useEffect(() => {
    document.querySelector(".flex-2").style.display = "flex";
  }, []);
  return (
    <div>
      <div>
        <div className="body-title">Dashboard</div>
      </div>
      <div className="grp-1">
        <div className="row-1">
          <Card
            serial="1"
            name="Total Groups"
            number={DATA[0].dashboard[0].groups}
          />
          <Card
            serial="2"
            name="Referrals"
            number={DATA[0].dashboard[0].refno}
          />
          <Card
            serial="3"
            name="Amount"
            number={DATA[0].dashboard[0].paid}
          />
          <Card
            serial="4"
            name="Pending"
            number={DATA[0].dashboard[0].pending}
          />
        </div>
        <Chart />
      </div>
      <div className="grp-1" style={{ margin: "50px" }}>
        <Table />
        <div className="grp-2">
          <Group clipboard = {DATA[0].dashboard[0].refcode}/>
       </div>
      </div>
    </div>
  );
}

export default body;
