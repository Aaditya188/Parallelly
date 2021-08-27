import { useEffect, useState } from "react";
import DATA from "../../Data/demo_post_data.js";
import {
  Wallet,
  FileEarmarkArrowUpFill,
  WalletFill
} from "react-bootstrap-icons";
import $ from "jquery";
import Card from "./card";
import Table from "./history";
const data = DATA[0].wallet[0].card;
function body() {
  const [receipt, setreceipt] = useState(false);
  const [nowdate, Setnowdate] = useState("");
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
                <Wallet />
              </div>
              <div>
                <a
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
                  Add Money
                </a>
              </div>
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
            // cardNum={cards.card_num}
          />
        ))}
        <Table table={DATA[0]} />
      </div>
      {receipt ? (
        <div className="absolute flex flex-col justify align">
          <div className="paid paid_card  white_space no-hover flex justify align text-align width-100">
            <p>Money Added Successfully</p>
          </div>
          <div className="receipt width-100">
            <div className="paper flex flex-col justify align width-100">
              <div className="title">Add Money</div>
              <div
                className="flex justify align width-100"
                style={{
                  gap: "30px",
                  padding: "10px 0",
                  marginBottom: "20px"
                }}
              >
                <div className="date ">Date: {nowdate}</div>
                <div className=" white_space ">Total amount: $ 10</div>
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
                    }, 3000);
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
  );
}

export default body;
