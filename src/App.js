import React from "react";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-white overflow-y-scroll">
      <Navbar />
      <Banner />
      <Collections />
    </div>
  );
}

export default App;
