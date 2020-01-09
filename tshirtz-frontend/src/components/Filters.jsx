import React, { useState } from "react";
import "../css/filters.css";

function Filters(props) {
  const [price, setPrice] = useState(500);

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

  const [brands, setBrands] = useState([
    { name: "Celio", isSelected: false },
    { name: "Dior", isSelected: false },
    { name: "NafNaf", isSelected: false },
    { name: "Nike", isSelected: false }
  ]);

  function handleReset(e) {
    const resetPrice = 500;
    setPrice(resetPrice);
    const resetBrands = brands.map(brand => ({ ...brand, isSelected: false }));
    setBrands(resetBrands);
    const resetColors = colors.map(color => ({ ...color, isSelected: false }));
    setColors(resetColors);
    props.onFilters(price, resetBrands, resetColors);
  }

  function handleChangePrice(e) {
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
    props.onFilters(selectedPrice, brands, colors);
  }

  function handleBrand(brandName) {
    const selectedBrands = brands.map(brand => {
      if (brand.name !== brandName) return brand;
      return {
        ...brand,
        isSelected: !brand.isSelected
      };
    });
    setBrands(selectedBrands);
    props.onFilters(price, selectedBrands, colors);
  }

  function handleColors(colorName) {
    const selectedColors = colors.map(color => {
      if (color.name !== colorName) return color;
      return {
        ...color,
        isSelected: !color.isSelected
      };
    });
    setColors(selectedColors);
    props.onFilters(price, brands, selectedColors);
  }

  return (
    <div className="filters">
      <button className="reset-filter-btn" onClick={handleReset}>
        Reset Filters
      </button>
      <hr />

      <div className="price-filter">
        <h3 className="filter-title">Price Max</h3>
        <input
          className="input-range"
          type="range"
          name="priceInput"
          min="0"
          max="500"
          step="1"
          defaultValue={price}
          onChange={handleChangePrice}
        />
        <p>{price}€</p>
      </div>
      <hr />

      <div className="filter-brands">
        <h3 className="filter-title">Brands</h3>
        {brands.map((brand, i) => (
          <div className="brand-filter" key={i}>
            <label htmlFor={brand.name} className="brand">
              {brand.name}
            </label>
            <input
              className="input-checkbox"
              type="checkbox"
              checked={brand.isSelected}
              name={brand.name}
              id={brand.name}
              onChange={() => handleBrand(brand.name)}
            />
          </div>
        ))}
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
