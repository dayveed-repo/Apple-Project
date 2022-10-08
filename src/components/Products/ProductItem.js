import React from "react";
import { MdShoppingCart } from "react-icons/md";

const ProductItem = ({ imgSrc, title, price, rating }) => {
  let dummie_discount = price - (price * 20) / 100;

  return (
    <div className="w-full h-max cursor-pointer hover:scale-95 hover:bg-gray-200 transition-all duration-200 ease-in p-2 rounded-lg">
      <img src={imgSrc} className="aspect-video w-full object-cover" />

      <div className="mt-3">
        <h4 className="text-sm font-medium">{title}</h4>

        <div className="flex items-end space-x-4">
          <h3 className="text-2xl font-semibold">
            ${dummie_discount.toFixed(2)}
          </h3>
          <h3 className="text-red-600 line-through">${price}</h3>
        </div>

        <p className="text-xs mt-3 text-gray-600 font-medium">{rating}</p>
      </div>

      <div className="w-full mb-0 flex items-center">
        <button className="border border-rose-500 p-2 rounded-md text-rose-500">
          <MdShoppingCart />
        </button>

        <button className="text-white  bg-rose-500 rounded-md flex-grow ml-3 py-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
