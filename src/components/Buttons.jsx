import React from "react";

export const Buttons = ({ val, flex }) => {
  const buttonText = ["Start for Free", "Learn More", "Login", "Sign Up"];

  return (
    <div
      className={`${flex === 1 ? 'flex-row justify-between' : 'flex-col justify-evenly'} flex items-center w-full h-full text-[1em]`}
    >
      {val.map((index) => {
        const isEvenIndex = index % 2 === 0;
        let buttonClass =
          "capitalize w-[47%] h-[3.125rem] font-Ubuntu rounded-full font-extrabold";

        if (index < 2) {
          if (isEvenIndex) {
            buttonClass += " text-[hsl(356,100%,66%)] bg-white";
          } else {
            buttonClass +=
              " text-[hsl(0,0%,100%)] border-[0.0625rem] border-white";
          }
        } else {
          if (isEvenIndex) {
            buttonClass += " text-[hsl(208_49%_24%)] bg-white";
          } else {
            buttonClass +=
              " text-[hsl(0,0%,100%)] border-[0.0625rem] border-white bg-gradient-to-r from-veryLightRedGradient to-lightRedGradient";
          }
        }

        return (
          <button key={index} className={buttonClass}>
            {buttonText[index]}
          </button>
        );
      })}
    </div>
  );
};
