import React from "react";
import { Paragraph } from "./Paragraph";
import { descriptions } from "./Main";
import designMbl from "../images/illustration-laptop-mobile.svg";
import designIDskt from "../images/illustration-laptop-desktop.svg";

export const Announce2 = () => {
  return (
    <div className="flex flex-col xl:flex-row-reverse items-center justify-center gap-[2.5rem] mb-24 xl:mb-[300px] xl:justify-start xl:mt-[200px]">
      <div className="w-full xl:absolute flex flex-col items-center gap-11 xl:w-[75%] xl:left-[-320px] lg:-z-20">
        <picture>
          <source 
            srcSet={designMbl}
            media="(width < 1024px)" />
          <source
            srcSet={designIDskt}
            media="(width >= 1300px)"
            alt="laptop"
            className="xl:absolute w-[520px] -right-9"
          />
          <img src={designMbl} alt="mobile" />
        </picture>
      </div>
      <div className="flex flex-col gap-14 xl:w-[50%] items-center">
        <Paragraph
          title={`${descriptions[4].title}`}
          paragraph={`${descriptions[4].text}`}
        />
        <Paragraph
          title={`${descriptions[5].title}`}
          paragraph={`${descriptions[5].text}`}
        />
      </div>
    </div>
  );
};
