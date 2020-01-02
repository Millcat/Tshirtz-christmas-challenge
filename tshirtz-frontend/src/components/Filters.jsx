import React from "react";

function Filters() {
  function handleReset(e) {
    console.log("reset btn clicked");
  }

  return (
    <div className="filters">
      <button className="reset-filter-btn" onClick={handleReset}>
        Reset Filters
      </button>
      {/* add a onChange={handleChangeReset} on the button ==> find All tshirts and set input-range / checkboxes / colors not selected*/}
      <hr />

      <div className="price-filter">
        <h3 className="filter-title">Price Max</h3>
        <input
          className="input-range"
          type="range"
          name="priceInput"
          min="0"
          max="500"
        />
        {/* add a onChange={handleChangeRange} in the input type range */}
        <p>€</p>
        {/* add {price} before the € sign */}
      </div>
      <hr />

      <div className="filter-brands">
        <h3 className="filter-title">Brands</h3>
        <label htmlFor="brand">
          Example
          {/* replace Example by brands values */}
          <input className="input-checkbox" type="checkbox" name="brandInput" />
          {/* add a onChange={handleChangeRange} in the input type range */}
        </label>
      </div>
      <hr />

      <div className="filter-colors">
        <h3 className="filter-title">Colors</h3>
        <div className="all-colors">
          {/* 7 colorBox per line */}
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
          <div className="colorBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
