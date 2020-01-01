import React from "react";
import Filters from "./Filters";
import TshirtsList from "./TshirtsList";

function MainContent() {
  return (
    <div className="main-content">
      <Filters />
      <TshirtsList />
    </div>
  );
}

export default MainContent;
