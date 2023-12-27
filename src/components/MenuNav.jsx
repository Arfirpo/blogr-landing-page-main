import React, { useState, useEffect } from "react";
import { menu } from "../App";
import arrowIconDark from "../images/icon-arrow-dark.svg";
import arrowIconLight from '../images/icon-arrow-light.svg'

export const MenuNav = () => {
  const [openItem, setOpenItem] = useState(null);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  const handleHeadingClick = (heading) => {
    setOpenItem(openItem === heading ? null : heading);
    setArrowRotation(arrowRotation === 0 ? 180 : 0);
  };

  return (
    <div className="flex flex-col md:flex-row md:max-w-[310px] items-center justify-center gap-7 text-center text-lg  font-bold w-full ">
      {Object.values(menu).map((menuItem, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-4 ">
          <div className="flex items-center justify-center gap-2">
            <h3
              className="text-veryDarkBlue cursor-pointer md:text-White"
              onClick={() => handleHeadingClick(menuItem.heading)}
            >
              {menuItem.heading}
            </h3>
            <img
              className={`transform transition-transform ease duration-300  ${
                openItem === menuItem.heading ? "rotate-180" : ""
              }`}
              src={windowWidth < 768 ? arrowIconDark : arrowIconLight}
              alt="arrow icon"
            />
          </div>
          {openItem === menuItem.heading && (
            <ul className="bg-[#ebeaef] w-full h-full flex flex-col justify-evenly rounded-lg py-6 gap-5">
              {menuItem.items.map((item, subIndex) => (
                <li
                  className="text-[.93rem] text-veryDarkGrayishBlue cursor-pointer hover:text-veryDarkBlue hover:text-[0.97rem]"
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
