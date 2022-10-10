import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const OrderConfirmed = () => {
  return (
    <div className="w-full h-[84vh] flex flex-col items-center justify-center space-y-5">
      <h3 className="text-2xl font-semibold text-green-500">
        Your Order has been Confirmed!!
      </h3>

      <AiFillCheckCircle className="text-5xl text-green-500" />

      <h4 className="text-gray-700">
        Thank you for purchasing our product. Your product will be delivered to
        you
      </h4>
    </div>
  );
};

export default OrderConfirmed;
