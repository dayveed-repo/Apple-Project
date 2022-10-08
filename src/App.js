import React from "react";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import { Navbar } from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="w-screen h-screen bg-white overflow-y-scroll">
      <Navbar />
      <Banner />
      <Collections />
      <Products />
    </div>
  );
}

export default App;
