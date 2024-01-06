import React, { useState, useEffect } from "react";
import { menu } from "../App";
import arrowIconDark from "../images/icon-arrow-dark.svg";
import arrowIconLight from "../images/icon-arrow-light.svg";

export const MenuNav = () => {
  const [openItem, setOpenItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const handleHeadingClick = (heading) => {
    if (windowWidth < 768) {
      setOpenItem((prevOpenItem) => (prevOpenItem === heading ? null : heading));
    }
  };

  const handleMouseEnter = (heading) => {
    if (windowWidth >= 768) {
      setOpenItem(heading);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 768) {
      setOpenItem(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:max-w-[310px] items-center justify-center gap-7 text-center text-lg font-bold w-full">
      {Object.values(menu).map((menuItem, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-4 md:relative">
          <div className="flex items-center justify-center gap-2 ">
            <h3
              className="text-veryDarkBlue cursor-pointer md:text-White md:hover:underline"
              onClick={() => handleHeadingClick(menuItem.heading)}
              onMouseEnter={() => handleMouseEnter(menuItem.heading)}
              onMouseLeave={handleMouseLeave}
            >
              {menuItem.heading}
            </h3>
            <img
              className={`transform transition-transform ease duration-300 ${
                openItem === menuItem.heading ? "rotate-180" : ""
              }`}
              src={windowWidth < 768 ? arrowIconDark : arrowIconLight}
              alt="arrow icon"
            />
          </div>
          {openItem === menuItem.heading && (
            <ul
              className={`bg-[#ebeaef] md:absolute w-full h-full md:w-[220%] md:h-max md:top-[2.5rem] md:-left-8 ${
                openItem ? "flex" : "hidden"
              } flex-col justify-evenly md:justify-center md:gap-2 items-start pl-8 rounded-lg py-6 gap-5 md:shadow-xl`}
            >
              {menuItem.items.map((item, subIndex) => (
                <li
                  className="text-[.93rem] text-veryDarkGrayishBlue cursor-pointer hover:text-veryDarkBlue hover:text-[0.97rem] md:hover:text-[1.1rem]"
                  key={subIndex}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

