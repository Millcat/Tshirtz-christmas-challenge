import React, { useState } from "react";
import "../css/filters.css";

function Filters() {
  const [range, setRange] = useState();

  function handleReset(e) {
    console.log("reset btn clicked");
    setRange();
  }

  function handleChangeRange(e) {
    const range = e.target.value;
    console.log(range);
    setRange(range);
  }

  function handleChecked(e) {
    const value = e.target.checked;
    console.log(value);
  }

  return (
    <div className="filters">
      <button className="reset-filter-btn" onClick={handleReset}>
        Reset Filters
      </button>
      {/* add a onClick={handleReset} on the button ==> find All tshirts and set input-range / checkboxes / colors not selected*/}
      <hr />

      <div className="price-filter">
        <h3 className="filter-title">Price Max</h3>
        <input
          className="input-range"
          type="range"
          name="priceInput"
          min="0"
          max="500"
          onChange={handleChangeRange}
        />
        {/* add a onChange={handleChangeRange} in the input type range */}
        <p>{range}€</p>
      </div>
      <hr />

      <div className="filter-brands">
        <h3 className="filter-title">Brands</h3>
        <div>
          <label htmlFor="brand" className="brand">
            Primark
          </label>
          <input
            className="input-checkbox"
            type="checkbox"
            name="brandInput"
            onChange={handleChecked}
          />
          {/* add a onChange={handleChangeChecked*/}
        </div>
      </div>
      <hr />

      <div className="filter-colors">
        <h3 className="filter-title">Colors</h3>
        <div className="all-colors">
          <div className="colorBox black"></div>
          <div className="colorBox white"></div>
          <div className="colorBox green"></div>
          <div className="colorBox pink"></div>
          <div className="colorBox yellow"></div>
          <div className="colorBox blue"></div>
          <div className="colorBox purple"></div>
          <div className="colorBox red"></div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
