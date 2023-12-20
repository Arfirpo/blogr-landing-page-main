import React from "react";

export const Paragraph = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center gap-[1.2rem] ">
      <h1 className="w-[57.33%] text-2xl font-semibold text-veryDarkBlue">
        {title}
      </h1>
      <p className="w-[75%]  tracking-tight">{paragraph}</p>
    </div>
  );
};
