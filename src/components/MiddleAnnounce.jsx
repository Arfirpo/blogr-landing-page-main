import React, { useState, useEffect } from "react";
import bgCircles from "../images/bg-pattern-circles.svg";
import phonesImg from "../images/illustration-phones.svg";
import { Paragraph2 } from "./Paragraph2";
import { descriptions } from "./Main";

export const MiddleAnnounce = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  const circlePatterMobile = {
    backgroundImage: `url(${bgCircles})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-85px -195px",
    backgroundSize: "cover",
  };

  const circlePatterDesktop = {
    backgroundImage: `url(${bgCircles})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-250px -750px",
    backgroundSize: "50%",
  };

  return (
    <div className="w-full h-[50rem] md:h-[40rem] xl:max-h-[35rem] lg:h-[34rem] flex flex-col justify-end relative">
      <div className="h-[78.75%] bg-gradient-to-b from-veryDarkGrayBlue to-veryDarkDesaturatedBlue rounded-tr-[7.5rem] rounded-bl-[7.5rem] overflow-hidden ">
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly lg:justify-end mbl:pt-24 sm:pt-56 md:pt-24 lg:p-0"
          style={windowWidth < 768 ? circlePatterMobile : circlePatterDesktop}>
          <div className="absolute w-[300px] sm:w-[95%] sm:max-w-[28.125rem] top-[20px] sm:top-[-20px] lg:w-[60%] lg:max-w-[35rem] lg:left-2 xl:w-[44%] xl:max-w-[35rem] xl:left-5 lg:top-12">
            <img src={phonesImg} alt="phones" className="w-full h-full" />
          </div>
          <Paragraph2 title={`${descriptions[3].title}`} paragraph={`${descriptions[3].text}`}
          />
        </div>
      </div>
    </div>
  );
};
