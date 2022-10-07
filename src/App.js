import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <Navbar />
      <button>generate json</button>
    </div>
  );
}

export default App;
