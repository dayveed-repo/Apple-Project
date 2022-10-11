import React, { useState } from "react";
import { useSelector } from "react-redux";
import PaymentOption from "./PaymentOption";
import { BsCreditCardFill } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { currentOrder } = useSelector((state) => state.store);
  const [selectedOption, setselectedOption] = useState(1);

  const navigation = useNavigate();

  const ConfirmOrder = () => {
    return navigation(`/product/${currentOrder?.product_id}/orderConfirmed`);
  };

  const calPrice = () => {
    if (currentOrder?.discountPercent) {
      return (
        (currentOrder.price -
          (currentOrder.discountPercent / 100) * currentOrder?.price) *
        currentOrder.quantity
      );
    } else {
      return currentOrder.price * currentOrder.quantity;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-20">
      <div className="divide-y divide-gray-300 pb-3 border-b border-gray-400">
        <div className="priceCost">
          <h3>Subtotal: </h3>
          <p> ${calPrice()}</p>
        </div>

        <div className="priceCost">
          <h3>Delivery Price: </h3>
          <p>$14</p>
        </div>

        <div className="priceCost">
          <h3>Discount: </h3>
          <p>
            {currentOrder?.discountPercent ? currentOrder.discountPercent : 0}%
          </p>
        </div>

        <div className="priceCost">
          <h3>Total: </h3>
          <p>${calPrice() + 14}</p>
        </div>
      </div>

      <div className="py-5 border-b border-gray-400 space-y-3">
        <h4 className="text-sm text-gray-600">Add delivery address</h4>

        <textarea
          type="text"
          className="bg-white w-1/3 px-3 py-1 outline-none shadow-lg"
          placeholder="Address"
        />
      </div>

      <div className="space-y-3 pt-5">
        <h3 className="text-sm text-gray-600">Choose Payment Method</h3>

        <PaymentOption
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
          optionNum={1}
          icon={<IoCashOutline className="text-green-500 mr-2" />}
          name={"Pay with Cash"}
        />
        <PaymentOption
          selectedOption={selectedOption}
          setselectedOption={setselectedOption}
          optionNum={2}
          icon={<BsCreditCardFill className="text-amber-500 mr-2" />}
          name={"Pay with Card"}
        />
      </div>

      <div className="w-full flex justify-end mt-10">
        <button
          onClick={ConfirmOrder}
          className="px-4 py-2 bg-rose-500 text-white rounded-md"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
