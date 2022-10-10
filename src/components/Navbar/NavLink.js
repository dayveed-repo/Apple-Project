import React from "react";

function NavLink({ icon, name, pressFn }) {
  return (
    <div
      onClick={pressFn}
      className={`relative ${name === "Basket" && "h-6 w-6"}`}
    >
      {icon ? (
        icon
      ) : (
        <h3 className="text-sm font-semibold hover:underline hover:text-rose-500 cursor-pointer">
          {name}
        </h3>
      )}

      {name === "Basket" && (
        <div className="absolute top-[2%] left-[60%] bg-rose-600 text-white text-xs flex items-center justify-center h-4 w-4 rounded-full">
          <p>2</p>
        </div>
      )}
    </div>
  );
}

export default NavLink;
