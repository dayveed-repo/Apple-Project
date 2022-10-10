const PriceOption = ({
  optionNum,
  name,
  selectedOption,
  setselectedOption,
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

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {optionNum === 1 ? (
          <h4 className="text-sm text-gray-600">
            Purchase this Product immediately at the original price with zero
            discounts
          </h4>
        ) : (
          <>
            <h4 className="text-sm text-gray-700">
              Purchase this product at a discount of 70% by performing one of
              the following activities
            </h4>

            <ul className="list-decimal text-sm font-medium text-gray-700">
              <li>
                Invite a friend or family to join the application and purchase
                this product through referral link
              </li>
              <li>
                Join a buying group and bring 10 interested people to join the
                buying group and pruchase the product
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PriceOption;
