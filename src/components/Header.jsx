import React, { useState, useEffect } from "react";
import { NavMobile } from "./NavMobile";
import { Buttons } from "../components/Buttons";
import patternMobile from "../images/bg-pattern-intro-mobile.svg";
import patternDesktop from "../images/bg-pattern-intro-desktop.svg";
import logo from "../images/logo.svg";
import { NavDesktop } from "./NavDesktop";

export const Header = () => {
  const [divVisible, setDivVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  const hideDiv = () => {
    setDivVisible((state) => !state);
  };

  const bgPatternMobile = {
    backgroundImage: `url(${patternMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "36.7% 36%",
    backgroundSize: "355%",
  };

  const bgPatternDesktop = {
    backgroundImage: `url(${patternDesktop})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "25% 52%",
    backgroundSize: "222%",
  };

  const headerButtons = [0, 1];

  return (
    <header className="h-[37.5rem] min-w-full bg-gradient-to-b md:bg-gradient-to-r from-veryLightRedGradient to-lightRedGradient rounded-bl-[7.5rem] overflow-hidden">
      <div
        className="w-full h-full flex flex-col justify-start md:justify-around xl:justify-start items-center gap-[7.1875rem] md:gap-0 xl:gap-[7.1875rem] -z-10 "
        style={windowWidth < 768 ? bgPatternMobile : bgPatternDesktop}
      >
        <div className="flex items-center justify-between md:w-[95%] md:flex-col  h-[6%] xl:h-[8%] xl:flex-row w-[90%] xl:w-[77%] mt-[52px] md:mt-0 md:gap-5 xl:gap-0 xl:mt-[52px]">
          <img src={logo} alt="blogr logo" />
          {windowWidth < 768 ? <NavMobile hideDiv={hideDiv} /> : <NavDesktop />}
        </div>
        <div
          className={`${
            divVisible ? "flex" : "hidden"
          } flex-col items-center justify-center gap-12 w-[75%] `}
        >
          <div className="text-White text-center flex items-center flex-col gap-[.5rem]">
            <h1 className="text-[1.6rem] mbl:text-[1.875rem] xs:font-bold xl:text-[3.9rem]">
              A modern publishing platform
            </h1>
            <p className="text-[14px] mbl:text-[16px] w-[95%] xl:text-[1.35rem]">
              Grow your audience and build your online brand
            </p>
          </div>
          <Buttons val={headerButtons} flex={1} />
        </div>
      </div>
    </header>
  );
};
