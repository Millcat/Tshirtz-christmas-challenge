import React from "react";

function TshirtBox(props) {
  return (
    <div className="tshirt-box">
      <h3 className="tshirt-name">{props.tshirt.name}</h3>
      <img
        className="tshirt-picture"
        src={props.tshirt.picture}
        alt="tshirt view"
      />
      <p className="price">{props.tshirt.price} €</p>
    </div>
  );
}

export default TshirtBox;
