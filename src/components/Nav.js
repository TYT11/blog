import React from "react";
import logo from "../images/logo.png";

const Nav = () => {
  return (
    <nav className="bg-white w-screen p-6 h-24 fixed top-0 md:h-28 md:w-fvh md:top-auto md:bottom-0 md:left-0 md:transform md:origin-top-left md:-rotate-90 md:translate-y-full">
      <div className="flex justify-around items-center">
        <div>
          <button>MODE</button>
        </div>
        <div className="w-2/5">
          <img src={logo} alt="" />
        </div>
        <div>
          <div>MENU</div>
          <div>FILTER</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
