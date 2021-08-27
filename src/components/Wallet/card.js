import {
  Receipt,
  FileEarmarkArrowUpFill,
  WalletFill
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
function card(props) {
  const Datas = useSelector((state) => state.alluser.user);
  return (
    <div className="card no-hover wallet_card relatives">
      <div className="flex">
        <div
          className="flex justify align "
          style={{ flex: "0.5", gap: "20px" }}
        >
          <div
            className="blue_color flex justify align"
            style={{ fontSize: "50px" }}
          >
            <WalletFill />
          </div>
          <div className="flex flex-col justify align">
            <div className="main_balanace">Main Balance</div>
            <div className="balance">
              {Datas ? Datas.wallet[0].card[0].balance : props.balance}
            </div>
          </div>
        </div>
        <div className="flex width-100" style={{ flex: "0.5", gap: "20px" }}>
          <div className="flex flex-col justify align ">
            <div className=" flex white_space valid_thru">Vaild Thuru</div>
            <div className=" flex white_space ">
              {Datas ? Datas.wallet[0].card[0].valid : props.valid}
            </div>
          </div>
          <div className="flex flex-col justify align align flex_1">
            <div className=" flex white_space valid_thru">Account Holder</div>
            <div className=" flex white_space">
              {Datas ? Datas.wallet[0].card[0].card_holder : props.cardHolder}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify align align width-100"
        style={{
          display: "flex",
          fontSize: " 30px",
          position: "absolute",
          letterSpacing: "10px"
        }}
      >
        {/* <div className=" flex white_space">
          {Datas ? Datas.wallet[0].card[0].card_num : props.card_num}
        </div> */}
      </div>
      <div className="progress_container">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default card;
