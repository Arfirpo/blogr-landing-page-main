import React, { useState } from "react";
import hamburguerMenu from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close.svg";
import { Buttons } from "./Buttons";
import { MenuNav } from "./MenuNav";


export const NavMobile = ({ hideDiv }) => {
  const [changeButton, setChangeButton] = useState(true);
  const navButtons = [2, 3];
  const handleButtonClick = () => {
    toggleButton();
    hideDiv();
  };

  const toggleButton = () => {
    setChangeButton((state) => !state);
  };

  return (
    <div>
      <img
        onClick={handleButtonClick}
        src={changeButton ? hamburguerMenu : closeMenu}
        alt="hamburger menu"
        className={`${changeButton ? "w-9 h-5" : "w-6 h-6"} cursor-pointer`}
      />
      <div
        className={` ${
          changeButton ? "hidden" : "block"
        } min-w-[17.4rem] w-[87%] max-w-[23.125rem] min-h-min max-h-max bg-White absolute top-[7.625rem] left-0 right-0 mx-auto rounded-lg shadow-xl flex flex-col px-5 `}
      >
        <div className="w-full max-h-[75%] pt-8 pb-6 ">
          <MenuNav />
        </div>
        <div className="w-full max-h-[25%] border-t-[0.0625rem] border-gray-300 pt-3 pb-7">
          <Buttons val={navButtons} flex={2} />
        </div>
      </div>
    </div>
  );
};
