import React from "react";
import bgCircles from "../images/bg-pattern-circles.svg";
import phonesImg from "../images/illustration-phones.svg";
import { Paragraph2 } from "./Paragraph2";
import { descriptions } from "./Main";

export const MiddleAnnounce = () => {
  const circlePatter = {
    backgroundImage: `url(${bgCircles})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-115px -230px",
    backgroundSize: "160%",
  };

  return (
    <div className="w-full h-[50rem] flex flex-col justify-end relative">
      <div className="h-[78.75%] bg-gradient-to-b from-veryDarkGrayBlue to-veryDarkDesaturatedBlue rounded-tr-[7.5rem] rounded-bl-[7.5rem] overflow-hidden ">

        <div
          className="w-full h-full flex flex-col items-center justify-evenly pt-[110px]"
          style={circlePatter}
        >
          <img src={phonesImg} alt="phones" className="absolute top-[-20px]" />
          <Paragraph2
            title={`${descriptions[3].title}`}
            paragraph={`${descriptions[3].text}`}
          />
        </div>
      </div>
    </div>
  );
};
