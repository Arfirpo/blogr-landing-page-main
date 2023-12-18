import React from "react";
import hamburguerMenu from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";

export const Header = () => {
  return (
    <header className="h-[37.5rem] w-full bg-gradient-to-b from-veryLightRedGradient to-lightRedGradient rounded-bl-[7.5rem] flex flex-col justify-center items-center gap-[7.1875rem]">
      <div className="flex items-center justify-between h-[6%] w-[90%]">
        <img src={logo} alt="blogr logo" />
        <img src={hamburguerMenu} alt="hamburger menu" className="h-6 w-9" />
      </div>
      <div className="flex flex-col items-center text-center w-[75%] text-White gap-5">
        <h1 className="text-[30px] font-bold">A modern publishing platform</h1>
        <p className="text-[16px] w-[95%]  ">Grow your audience and build your online brand</p>
      </div>
    </header>
  );
};
