import { ShoppingBag, Users, DollarSign, FileText } from "react-feather";
function card(props) {
  const icongen = () => {
    switch (props.serial) {
      case "1":
        return (
          <div>
            <ShoppingBag />
          </div>
        );
      case "2":
        return (
          <div>
            <Users />
          </div>
        );
      case "3":
        return (
          <div>
            <DollarSign />
          </div>
        );
      case "4":
        return (
          <div>
            <FileText />
          </div>
        );
      default:
        return <div> Loading...</div>;
    }
  };
  return (
    <div className="card lightmode_card">
      <div className="flex justify align cardgrp">
        {icongen()}
        <div className="flex flex-col justify align" style={{ gap: "5px" }}>
          <div className="card-number">{props.number}</div>
          <div className="card-name">{props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default card;
