import React from "react";
import BannerImage from "../../Images/backgroundImage.png";

const Banner = () => {
  return (
    <div className="w-full overflow-y-hidden max-h-64 h-[40vh] bg-gradient-to-br from-amber-400 to-rose-400">
      <div className="w-full flex space-x-4 h-full max-w-4xl mx-auto">
        <div className="pt-10 space-y-3">
          <h3 className="text-3xl text-white font-bold">
            Top Quality Products
          </h3>

          <p className=" max-w-md text-amber-200 font-medium text-sm">
            Purchase quality products at affordable rate and get it delivered to
            your door step
          </p>

          <button className="px-5 py-2 bg-white rounded-lg text-rose-700 font-semibold">
            Buy now
          </button>
        </div>

        <img
          src={BannerImage}
          alt="Store Image"
          className="h-[120%] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
