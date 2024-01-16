import React from "react";
import logo from "../images/logo.svg";
import { BottomMenu } from "./BottomMenu";

export const Footer = () => {
  return (
    <footer className="border-[.125rem] border-grayishBlue w-full h-[56.25rem] xl:h-[30rem] bg-veryDarkGrayBlue text-center text-grayishBlue rounded-tr-[7.5rem] flex flex-col items-center justify-evenly xl:flex-row xl:relative">
      <img src={logo} alt="footer logo" className="xl:self-start xl:absolute xl:top-20 xl:left-24" />
      <BottomMenu />
    </footer>
  );
};
