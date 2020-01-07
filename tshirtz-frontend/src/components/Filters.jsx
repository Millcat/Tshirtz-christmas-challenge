import React, { useState } from "react";
import "../css/filters.css";

function Filters() {
  const [range, setRange] = useState();
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([
    { name: "black", isSelected: false },
    { name: "white", isSelected: false },
    { name: "green", isSelected: false },
    { name: "pink", isSelected: false },
    { name: "yellow", isSelected: false },
    { name: "blue", isSelected: false },
    { name: "purple", isSelected: false },
    { name: "red", isSelected: false }
  ]);
  console.log(colors);

  function handleReset(e) {
    console.log("reset btn clicked");
    setRange();
    setBrands([]); // vide le tableau de filtre Brands mais ne pas oublier de décocher cases dans le useEffect...sinon les cases seront toujours cochées
  }

  function handleChangeRange(e) {
    const range = e.target.value;
    console.log(range);
    setRange(range);
  }

  function handleChecked(e) {
    const brandName = e.target.name;
    const isChecked = e.target.checked;
    console.log(brandName, isChecked);
    // console.log(brandName, "=>", isChecked);
    // const isBrandSelected = isChecked ? brandName :

    if (isChecked) {
      setBrands([...brands, brandName]);
    } else {
      setBrands(brands.filter(b => b !== brandName));
    }

    // setBrands(isBrandSelected);
  }

  console.log(brands);

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
        <p>{range}€</p>
      </div>
      <hr />

      <div className="filter-brands">
        <h3 className="filter-title">Brands</h3>
        <div className="brand-filter">
          <label htmlFor="primark" className="brand">
            Primark
          </label>
          <input
            className="input-checkbox"
            type="checkbox"
            name="primark"
            id="primark"
            onChange={handleChecked}
          />
        </div>
        <div className="brand-filter">
          <label htmlFor="dior" className="brand">
            Dior
          </label>
          <input
            className="input-checkbox"
            type="checkbox"
            name="dior"
            id="dior"
            onChange={handleChecked}
          />
          {/* add a onChange={handleChangeChecked*/}
        </div>
      </div>
      <hr />

      <div className="filter-colors">
        <h3 className="filter-title">Colors</h3>
        <div className="all-colors">
          {colors.map(color => (
            <div
              key={color.name}
              className={
                "colorBox " +
                color.name +
                (color.isSelected ? "isSelected" : "")
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
