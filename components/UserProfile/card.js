import "../../src/styles.css";
import { ShoppingBag } from "react-feather";
import { FiFileText } from "react-icons/fi";
function card(props) {
  return (
    <div className="card">
      <div className="flex justify align cardgrp">
        <div>
          <ShoppingBag />
        </div>

        <div>
          <div>{props.name}</div>
          <div>{props.name}</div>
        </div>
      </div>
    </div>
  );
}

export default card;
