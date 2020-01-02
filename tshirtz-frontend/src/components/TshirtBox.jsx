import React from "react";

function TshirtBox() {
  return (
    <div className="tshirt-box">
      <h3 className="tshirt-name">pretty t-shirt</h3>
      <img
        className="tshirt-picture"
        src="https://www.royalloirevalley.fr/wp-content/uploads/2019/01/royalloirevalley-tshirt-roi-du-parc-chambord.jpg"
        alt="tshirt view"
      />
      <p className="price">20 €</p>
    </div>
  );
}

export default TshirtBox;
