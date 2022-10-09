import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CollectionProduct = ({ id, imgSrc, title, price, rating }) => {
  let dummie_discount = price - (price * 20) / 100;

  const navigation = useNavigate();

  const handleProceed = () => {
    return navigation("/product/" + id);
  };

  return (
    <div
      onClick={handleProceed}
      className="w-full bg-white h-max cursor-pointer hover:scale-95 hover:shadow-lg transition-all duration-200 ease-in p-2 rounded-lg"
    >
      <img src={imgSrc} className="aspect-video w-full object-cover" />

      <div className="my-3">
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

        <button
          onClick={handleProceed}
          className="text-white  bg-rose-500 rounded-md flex-grow ml-3 py-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CollectionProduct;
