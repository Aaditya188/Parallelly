import { useEffect } from "react";
import DATA from "../../src/Data/demo_post_data.js";
import {
  Receipt,
  FileEarmarkArrowUpFill,
  WalletFill
} from "react-bootstrap-icons";
import Card from "./card";
import Table from "./history";
const data = DATA[0].wallet[0].card;
function body() {
  useEffect(() => {
    document.querySelector(".flex-2").style.display = "flex";
  }, []);
  return (
    <div className="row-wallet" style={{ maxWidth: "0px !important" }}>
      <div>
        <div
          className="body-title flex align justify text_align"
          style={{ gap: "20px" }}
        >
          <div>My Wallet</div>
          <div className="flex width_100 flex_1" style={{ gap: "20px" }}>
            <div className="card card-1 flex justify align">
              <div className="white-circle">
                <FileEarmarkArrowUpFill />
              </div>
              <div>Transfer</div>
            </div>
            <div className="card card-2 flex justify align">
              <div className="white-circle">
                <Receipt />
              </div>
              <div>Send Money</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grp-1" style={{ gap: "20px", padding: "20px" }}>
        {data.map((cards) => (
          <Card
            balance={cards.balance}
            valid={cards.valid}
            cardHolder={cards.card_holder}
            cardNum={cards.card_num}
          />
        ))}
        <Table table={DATA[0]} />
      </div>
    </div>
  );
}

export default body;
