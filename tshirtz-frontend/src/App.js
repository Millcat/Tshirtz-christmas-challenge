import React from "react";
import "./App.css";
import NavMain from "./components/NavMain";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="tshirtz-app">
      <NavMain />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
