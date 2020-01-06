import React from "react";
import tshirtsData from "../data/tshirts.json";

function TshirtBox() {
  const tshirts = tshirtsData.data;

  return tshirts.map((tshirt, i) => (
    <div className="tshirt-box" key={i}>
      <h3 className="tshirt-name">{tshirt.name}</h3>
      <img className="tshirt-picture" src={tshirt.picture} alt="tshirt view" />
      <p className="price">{tshirt.price} €</p>
    </div>
  ));
}

export default TshirtBox;
