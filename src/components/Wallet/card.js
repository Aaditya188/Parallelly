import {
  Receipt,
  FileEarmarkArrowUpFill,
  WalletFill
} from "react-bootstrap-icons";
function card(props) {
  return (
    <div className="card no-hover wallet_card">
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
            <div className="balance">{props.balance}</div>
          </div>
        </div>
        <div className="flex width-100" style={{ flex: "0.5", gap: "20px" }}>
          <div className="flex flex-col justify align ">
            <div className=" flex white_space valid_thru">Vaild Thuru</div>
            <div className=" flex white_space ">{props.valid}</div>
          </div>
          <div className="flex flex-col justify align align flex_1">
            <div className=" flex white_space valid_thru">Account Holder</div>
            <div className=" flex white_space">{props.cardHolder}</div>
          </div>
          <div className="flex flex-col justify align align">
            <div className=" flex white_space">{props.cardNu}</div>
          </div>
        </div>
      </div>
      <div className="progress_container">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default card;
