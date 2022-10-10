import React from "react";

const PaymentOption = ({
  optionNum,
  name,
  selectedOption,
  setselectedOption,
  icon,
}) => {
  const changeOption = () => {
    setselectedOption(optionNum);
  };

  return (
    <div
      onClick={changeOption}
      className={`w-full cursor-pointer flex items-start space-x-2 border-2 rounded-xl px-3 py-2 ${
        optionNum === selectedOption ? "border-rose-500" : "border-gray-400"
      }`}
    >
      <div
        className={`w-4 h-4 flex items-center justify-center rounded-full border-2 ${
          optionNum === selectedOption ? "border-rose-500" : "border-gray-400"
        } `}
      >
        {optionNum === selectedOption && (
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        )}
      </div>

      <div className="space-y-2 w-full">
        <h3 className="font-semibold flex items-center">
          {icon} {name}
        </h3>

        {optionNum === 2 && selectedOption === 2 ? (
          <div className="w-full md:w-2/3">
            <input
              type="text"
              className="mb-3 cardInput w-full"
              placeholder="Card Number"
            />
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="cvv"
                className="cardInput w-1/2"
              />
              <input type="date" className="cardInput w-1/2" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaymentOption;
