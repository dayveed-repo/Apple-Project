import React from "react";
import products from "../../app/storeData/product.json";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="w-full max-w-4xl px-4 mx-auto mt-10 mb-20 space-y-4">
      <h2 className="SectionName">Products</h2>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem
            title={product?.product_title}
            imgSrc={product?.product_main_image_url}
            rating={product?.reviews}
            price={product?.app_sale_range.min}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
