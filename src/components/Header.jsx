import React from "react";
import hamburguerMenu from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import { Buttons } from "./Buttons";
import patternMobile from "../images/bg-pattern-intro-mobile.svg";

export const Header = () => {
  const bgPattern = {
    backgroundImage: `url(${patternMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-345px -255px",
    backgroundSize: '355%',
  };

  return (
    <header className="h-[37.5rem] min-w-full bg-gradient-to-b from-veryLightRedGradient to-lightRedGradient rounded-bl-[7.5rem] -z-10 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-start items-center gap-[7.1875rem]"
        style={bgPattern}
      >
        <div className="flex items-center justify-between h-[6%] w-[90%] mt-[52px]">
          <img src={logo} alt="blogr logo" />
          <img src={hamburguerMenu} alt="hamburger menu" className="h-5 w-9" />
        </div>
        <div className="flex flex-col items-center justify-center gap-12 w-[75%]">
          <div className="text-White text-center flex flex-col gap-[.5rem]">
            <h1 className="text-[1.6rem] mbl:text-[1.875rem] xs:font-bold">
              A modern publishing platform
            </h1>
            <p className=" text-[14px] mbl:text-[16px] w-[95%]">
              Grow your audience and build your online brand
            </p>
          </div>
          <Buttons />
        </div>
      </div>
    </header>
  );
};
