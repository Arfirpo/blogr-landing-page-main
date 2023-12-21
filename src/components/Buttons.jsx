import { selectedIndex } from "./Header";
import { buttonTexts } from "./Header";
import React from "react";

export const Buttons = () => {
  return (
    <div className="flex items-center justify-between w-full text-[1em]">
      {selectedIndex.map((index) => (
        <button
          key={index}
          className="capitalize w-[47%] h-[3.125rem] font-Ubuntu rounded-full border-none font-extrabold"
          style={{
            color: index % 2 === 0 ? "hsl(356, 100%, 66%)" : "hsl(0, 0%, 100%)",
            backgroundColor: index % 2 === 0 ? "White" : "transparent",
            border: index % 2 === 0 ? "none" : "0.0625rem solid White",
          }}
        >
          {buttonTexts[index]}
        </button>
      ))}
    </div>
  );
};
