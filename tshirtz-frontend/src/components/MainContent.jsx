import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import TshirtsList from "./TshirtsList";
import tshirtsData from "../data/tshirts.json";

function MainContent(props) {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    // get the filtered Tshirts by 3 filters : price, brands, colors. All empty array by default:
    // getFilteredTshirts([], [], []);
    setTshirts(tshirtsData.data);
  }, []);

  // const getFilteredTshirts = ()

  return (
    <div className="main-content">
      <Filters />
      <TshirtsList tshirts={tshirts} />
    </div>
  );
}

export default MainContent;
