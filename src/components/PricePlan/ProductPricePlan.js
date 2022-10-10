import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PriceOption from "./PriceOption";

const ProductPricePlan = () => {
  const { currentOrder } = useSelector((state) => state.store);

  const [selectedOption, setselectedOption] = useState(1);
  const navigation = useNavigate();

  const goToPayment = () => {
    navigation(`/product/${currentOrder?.product_id}/payment`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-20">
      <div className="flex">
        <img
          src={currentOrder?.image}
          className="h-24 w-36 object-cover aspect-square rounded-md"
          alt="product image"
        />

        <div className="ml-4">
          <h3 className="text-gray-800 font-medium">{currentOrder.title}</h3>
          <h4 className="text-sm text-gray-800">
            Price - ${currentOrder.price}
          </h4>
          <h4 className="text-sm mb-3 text-gray-800">
            quantity ({currentOrder.quantity})
          </h4>

          <div className="flex items-center">
            <h4 className="text-sm text-gray-700 font-light">
              Other Details:{" "}
            </h4>
            <p className="text-xs font-medium text-gray-800">
              {currentOrder?.color?.replace("\\/", " and ")} color, size{" "}
              {currentOrder.size}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-5 border-gray-300 space-y-3">
        <h3>Pricing Plans</h3>

        <PriceOption
          optionNum={1}
          selectedOption={selectedOption}
          name="Quick Buy"
          setselectedOption={setselectedOption}
        />
        <PriceOption
          optionNum={2}
          selectedOption={selectedOption}
          name="Buy Group Option"
          setselectedOption={setselectedOption}
        />
      </div>

      <button
        className="text-white bg-rose-600 rounded-lg mt-10 px-5 py-2"
        onClick={goToPayment}
      >
        {selectedOption === 1 ? "Make Payment" : "Next"}
      </button>
    </div>
  );
};

export default ProductPricePlan;
