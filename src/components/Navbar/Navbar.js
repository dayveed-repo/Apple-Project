import React from "react";
import NavLink from "./NavLink";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="w-full py-3 px-5 flex items-center ">
      <h2 className="text-xl font-bold">Apple</h2>

      <div className="flex-grow flex items-center mx-auto max-w-xl rounded-2xl border-2 border-rose-400 pl-3">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none"
          placeholder="Search"
        />
        <div className="w-14 flex justify-center bg-rose-400 px-3 py-2 rounded-xl text-white cursor-pointer">
          <IoSearchOutline />
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <NavLink icon={<HiOutlineHome className="text-xl" />} name="Home" />
        <NavLink name="Orders" />
        <NavLink name="About" />
        <NavLink
          icon={<BsHandbag className="text-xl w-full h-full" />}
          name="Basket"
        />
      </div>
    </div>
  );
};
