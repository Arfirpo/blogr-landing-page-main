import React from "react";
import { Paragraph } from "./Paragraph";
import { descriptions } from "./Main";
import designMbl from "../images/illustration-editor-mobile.svg";
import designIDskt from "../images/illustration-editor-desktop.svg";

export const Announce = () => {
  return (
    <div className="flex flex-col xl:flex-row-reverse items-center justify-center gap-[2.5rem] mb-24 xl:mb-[16rem] xl:mt-[6rem] xl:justify-end">
      <div className="w-full xl:absolute flex flex-col items-center gap-11 xl:w-[75%] xl:right-[-365px] lg:-z-20">
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
          title={`${descriptions[1].title}`}
          paragraph={`${descriptions[1].text}`}
        />
        <Paragraph
          title={`${descriptions[2].title}`}
          paragraph={`${descriptions[2].text}`}
        />
      </div>
    </div>
  );
};
