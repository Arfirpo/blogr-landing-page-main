import React from "react";

export const Paragraph = ({ title, paragraph }) => {
  return (
    <div className="h-[20.25rem] flex flex-col justify-stretch items-center text-center gap-7 ">
      <h1 className="w-[57.33%] text-2xl font-semibold text-veryDarkBlue">
        {title}
      </h1>
      <p className="w-[80%]">{paragraph}</p>
    </div>
  );
};
