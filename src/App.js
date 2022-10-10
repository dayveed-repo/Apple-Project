import React from "react";
import Banner from "./components/Banner/Banner";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionDetails from "./components/Collections/CollectionDetails";
import ProductDetails from "./components/Products/ProductDetails";
import ProductPricePlan from "./components/PricePlan/ProductPricePlan";

const Home = () => {
  return (
    <>
      <Banner />
      <Collections />
      <Products />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-gray-200 overflow-y-scroll">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection/:name" element={<CollectionDetails />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route
            path="/product/:productId/pricing"
            element={<ProductPricePlan />}
          />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
