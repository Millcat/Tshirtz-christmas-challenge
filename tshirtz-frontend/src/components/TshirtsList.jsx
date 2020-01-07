import React from "react";
import TshirtBox from "./TshirtBox";
import "../css/tshirts.css";

function TshirtsList(props) {
  return (
    <div className="tshirtsList">
      {props.tshirts.map(tshirt => (
        <TshirtBox tshirt={tshirt} key={tshirt.id} />
      ))}
    </div>
  );
}

export default TshirtsList;
