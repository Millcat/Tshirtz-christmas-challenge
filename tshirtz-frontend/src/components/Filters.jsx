import React, { useState } from "react";
import "../css/filters.css";

function Filters() {
  const [price, setPrice] = useState();
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

  function handleReset(e) {
    console.log("reset btn clicked");
    setPrice(); // mettre le compteur sur la plus grande valeur par défaut
    setBrands([]); // vide le tableau de filtre Brands mais ne pas oublier de décocher cases dans le useEffect...sinon les cases seront toujours cochées
  }

  function handleChangePrice(e) {
    const price = e.target.value;
    console.log(price);
    setPrice(price);
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

  function handleColors(colorName) {
    // console.log(colorName);
    const selectedColors = colors.map(color => {
      if (color.name !== colorName) return color;

      return {
        ...color,
        isSelected: !color.isSelected
      };
      // sur selectedColors => faire un filter sur isSelected => true
      // puis refaire un map à la suite => pour select juste le color.name
    });

    setColors(selectedColors);
  }

  console.log(brands);
  console.log(colors);

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
          onChange={handleChangePrice}
        />
        <p>{price}€</p>
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
                (color.isSelected ? " isSelected" : "")
              }
              onClick={() => handleColors(color.name)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
