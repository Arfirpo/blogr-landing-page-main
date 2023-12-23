import React, { useState } from "react";
import hamburguerMenu from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close.svg";
import { Buttons } from "./Buttons";

export const Nav = ({ hideDiv }) => {
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
        className={`${changeButton ? "w-9 h-5" : "w-6 h-6"}`}
      />
      <div
        className={` ${
          changeButton ? "hidden" : "block"
        } min-w-[17.4rem] w-[87%] max-w-[23.125rem] h-[31.875rem] bg-White absolute top-[7.625rem] left-0 right-0 mx-auto rounded-lg shadow-xl flex flex-col p-[1.625rem] `}
      >
        <div className="w-full h-[70%] "></div>
        <div className="w-full h-[30%]">
          <Buttons val={navButtons} flex={2}/>
        </div>
      </div>
    </div>
  );
};
