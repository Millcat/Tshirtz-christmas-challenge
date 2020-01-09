import React, { useState } from "react";
import Filters from "./Filters";
import TshirtsList from "./TshirtsList";
import tshirtsData from "../data/tshirts.json";

function MainContent(props) {
  const [tshirts, setTshirts] = useState(tshirtsData.data);

  const getFilteredTshirts = (maxPrice, brands, colors) => {
    console.log("you are in get filteredTshirts: ");

    const colorsName = colors
      .filter(color => color.isSelected)
      .map(color => color.name);
    // ex: ["Blue", "Yellow"]

    const brandsName = brands
      .filter(brand => brand.isSelected)
      .map(brand => brand.name);
    // ex: ["Celio", "Dior"]

    const filteredTshirts = tshirtsData.data.filter(tshirt => {
      return (
        (brandsName.length === 0 || brandsName.includes(tshirt.brand)) &&
        (colorsName.length === 0 || colorsName.includes(tshirt.color)) &&
        tshirt.price <= maxPrice
      );
    });

    setTshirts(filteredTshirts);
  };

  return (
    <div className="main-content">
      <Filters
        onFilters={(maxPrice, brands, colors) =>
          getFilteredTshirts(maxPrice, brands, colors)
        }
      />
      <TshirtsList tshirts={tshirts} />
    </div>
  );
}

export default MainContent;
