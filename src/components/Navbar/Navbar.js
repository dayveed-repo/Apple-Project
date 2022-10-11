import React, { useState } from "react";
import NavLink from "./NavLink";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const navigation = useNavigate();
  const [isOpen, setisOpen] = useState(false);

  const goHome = () => {
    return navigation("/");
  };

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="w-full relative py-3 px-5 flex items-center">
      <h2 className="text-xl font-bold text-rose-600 mr-3 md:mr-0">Apple</h2>

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

      <div className="hidden md:flex items-center space-x-5">
        <NavLink
          icon={
            <HiOutlineHome className="text-xl cursor-pointer hover:text-rose-500" />
          }
          name="Home"
          pressFn={goHome}
        />
        <NavLink name="Orders" />
        <NavLink name="About" />

        <div className="flex items-center space-x-2">
          <h4 className="text-sm font-medium flex items-center">
            <BsPersonCircle className="mr-1 text-amber-500 text-lg" />
            Akin
          </h4>
          <NavLink
            icon={
              <BsHandbag className="text-xl w-full h-full cursor-pointer hover:text-rose-500" />
            }
            name="Basket"
          />
        </div>
      </div>

      <div className="z-30 inline md:hidden ml-3 md:ml-0">
        <AiOutlineMenu
          onClick={toggleMenu}
          className="cursor-pointer hover:text-rose-500"
        />

        {isOpen && (
          <div className="absolute w-40 p-3 divide-y left-[65%] top-14 bg-white">
            <NavLink
              icon={
                <HiOutlineHome className="text-xl cursor-pointer hover:text-rose-500" />
              }
              name="Home"
              pressFn={goHome}
            />
            <NavLink name="Orders" />
            <NavLink name="About" />

            <NavLink
              icon={
                <BsHandbag className="text-xl w-full h-full cursor-pointer hover:text-rose-500" />
              }
              name="Basket"
            />

            <h4 className="text-sm font-medium flex items-center pt-2 md:pt-0">
              <BsPersonCircle className="mr-1 text-amber-500 text-lg" />
              Akin
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
