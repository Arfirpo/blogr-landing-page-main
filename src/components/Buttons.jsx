import React from "react";

export const Buttons = () => {
  return (
    <div className="flex items-center justify-between w-full text-[1em]">
      <button className="capitalize text-lightRed bg-White w-[47%] h-[3.125rem] font-Ubuntu rounded-full border-none font-extrabold">
        start for free
      </button>
      <button className="text-White capitalize border-[.0625rem] border-White w-[47%] h-[3.125rem] font-Ubuntu font-extrabold rounded-full">
        learn more
      </button>
    </div>
  );
};
