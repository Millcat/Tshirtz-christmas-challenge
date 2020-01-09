import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import TshirtsList from "./TshirtsList";
import tshirtsData from "../data/tshirts.json";

function MainContent(props) {
  const [tshirts, setTshirts] = useState(tshirtsData.data);

  useEffect(() => {
    // get the filtered Tshirts by 3 filters : price, brands, colors. All empty array by default:
    // getFilteredTshirts([], [], []);
    // setTshirts(tshirtsData.data);
  }, []);

  const getFilteredTshirts = (prices, brands, colors) => {
    console.log(
      "you are in get filteredTshirts: ",
      "prices ==>",
      prices,
      "brands ==>",
      brands,
      "colors ==>",
      colors
    );
  };

  return (
    <div className="main-content">
      <Filters
        onFilters={(prices, brands, colors) =>
          getFilteredTshirts(prices, brands, colors)
        }
      />
      <TshirtsList tshirts={tshirts} />
    </div>
  );
}

export default MainContent;
