import React from "react";
import logo from "../images/logo.svg";
import { BottomMenu } from "./BottomMenu";

export const Footer = () => {
  return (
    <footer className="border-[2px] border-grayishBlue w-full h-[56.25rem] bg-veryDarkGrayBlue text-center text-grayishBlue rounded-tr-[7.5rem] flex flex-col items-center justify-evenly">
      <img src={logo} alt="footer logo" />
      <BottomMenu />
    </footer>
  );
};
