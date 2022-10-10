import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductOrder } from "../../features/counterSlice";

function DiscountOperations() {
  const { currentOrder } = useSelector((state) => state.store);
  const [joinedGroup, setjoinedGroup] = useState(false);
  const [isQualified, setisQualified] = useState(false);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
  };

  const handleSimulate = () => {
    setisQualified(true);
  };

  const makePayment = () => {
    if (!currentOrder) return;
    dispatch(addProductOrder({ ...currentOrder, discountPercent: 70 }));
    return navigation(`/product/${currentOrder?.product_id}/payment`);
  };

  return (
    <div className="w-full mx-auto max-w-3xl mt-10 mb-20">
      <div className="w-full flex flex-col items-center">
        <h3 className="flex text-lg items-center text-center">
          Get <h4 className="mx-1 font-semibold text-rose-500">70%</h4> off on
          product price.
        </h3>

        <p className="text-gray-600 text-sm">
          To get access to discount follow the instructions below and carry out
          either of the operations
        </p>
      </div>

      <div className="space-y-3 mt-5">
        <h3 className="font-medium">
          Invite friends and family to signup to the application and Get them to
          buy the product by sharing them the link below
        </h3>
        <div className="flex items-center space-x-2">
          <FiCopy
            onClick={() =>
              copyLink(
                "https://apple/product/{currentOrder?.product_id}?ref=akin#2840"
              )
            }
            className="text-2xl cursor-pointer"
          />
          <p className="text-gray-600">
            https://apple/product/{currentOrder?.product_id}?ref=akin#2840
          </p>
        </div>

        <div>
          <button className="simulateBtn" onClick={handleSimulate}>
            simulate
          </button>
          <h4 className="simulateInfo">
            Clicking simulate assumes 1 person has signed up and purchased this
            product through your referral link(this is just for testing the
            process workflow)
          </h4>
        </div>
      </div>

      <p className="w-full text-center text-lg text-gray-700 my-10">Or</p>

      <div>
        <h3 className="font-medium mb-3">
          Join Buying group and get 10 people to join the group
        </h3>

        {joinedGroup ? (
          <>
            <h4>Joined Group #4188, members: 16</h4>

            <p className="text-sm text-gray-500 mb-3">
              share the link below and get 10 people to join this group to get
              the offer
            </p>

            <div className="flex items-center space-x-2">
              <FiCopy
                onClick={() =>
                  copyLink(
                    "https://apple/product/{currentOrder?.product_id}/buygroup/4183?ref=akin#2840"
                  )
                }
                className="text-2xl cursor-pointer"
              />
              <p className="text-gray-600">
                https://apple/product/{currentOrder?.product_id}
                /buygroup/4183?ref=akin#2840
              </p>
            </div>

            <div className="mt-3">
              <button onClick={handleSimulate} className="simulateBtn">
                simulate
              </button>
              <h4 className="simulateInfo">
                Clicking simulate assumes 10 people have joined the group
                through your referral link(this is just for testing the process
                workflow)
              </h4>
            </div>
          </>
        ) : (
          <h4
            href="#"
            onClick={() => setjoinedGroup(true)}
            className="text-blue-500 underline cursor-pointer"
          >
            Join Group
          </h4>
        )}
      </div>

      {isQualified && (
        <div className="w-full mt-10 pt-5 border-t border-gray-300 space-x-4 flex">
          <h3 className="font-medium text-green-600">
            Congratulations!!!, you have qualified for the discount on this
            product. Proceed to Make payment
          </h3>

          <button
            onClick={makePayment}
            className="w-40 rounded-lg text-center py-1 text-white bg-rose-500"
          >
            Make Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default DiscountOperations;
