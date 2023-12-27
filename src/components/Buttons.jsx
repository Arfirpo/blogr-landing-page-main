import React from "react";

export const Buttons = ({ val, flex }) => {
  const buttonText = ["Start for Free", "Learn More", "Login", "Sign Up"];

  return (
    <div
      className={`${flex === 1 ? 'flex-row justify-between' : 'flex-col justify-evenly'} flex items-center w-full max-w-[19.9375rem] h-full text-[1em] md:font-bold`}
    >
      {val.map((index) => {
        const isEvenIndex = index % 2 === 0;
        let buttonClass =
          "capitalize w-[47%] h-[3.125rem] font-Ubuntu rounded-full font-extrabold";

        if (index < 2) {
          if (isEvenIndex) {
            buttonClass += "text-[hsl(356_100%_66%)] bg-white";
          } else {
            buttonClass +=
              " text-[hsl(0,0%,100%)] border-[0.0625rem] border-white";
          }
        } else {
          if (isEvenIndex) {
            buttonClass += " text-[hsl(208_49%_24%)] md:text-white bg-white md:h-full md:bg-transparent";
          } else {
            buttonClass +=
              "text-[hsl(0,0%,100%)] border-[0.0625rem] border-white md:border-none bg-gradient-to-r from-veryLightRedGradient to-lightRedGradient md:h-full md:bg-[#fff] md:bg-none md:text-[hsl(356_100%_66%)] md:font-bold md:hover:text-white md:hover:bg-[hsl(355_100%_74%)]";
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
