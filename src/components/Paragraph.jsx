import React from "react";

export const Paragraph = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center xl:text-left gap-[1.2rem]">
      <h1 className="w-[57.33%] xl:w-[80%] text-2xl xl:text-3xl font-semibold text-veryDarkBlue">
        {title}
      </h1>
      <p className="w-[75%] tracking-[-1.2px] text-lg xl:w-[80%]">{paragraph}</p>
    </div>
  );
};
