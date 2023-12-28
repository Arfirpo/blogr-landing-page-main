import React from "react";

export const Buttons = ({ val, flex }) => {
  const buttonText = ["Start for Free", "Learn More", "Login", "Sign Up"];

  const getButtonClass = (index, isEvenIndex) => {
    const buttonClass = "capitalize w-[47%] h-[3.125rem] font-Ubuntu rounded-full font-extrabold";

    const hoverState1 = "md:hover:text-white md:hover:bg-[hsl(355_100%_74%)]";
    const hoverState2 = "hover:text-[hsl(0,0%,100%)] hover:border-none border-transparent";
    const hoverState3 = "md:hover:bg-[hsl(0,0%,100%)] border-[0.0625rem] md:hover:text-[hsl(355_100%_74%)]";

    if (index < 2) {
      return isEvenIndex
        ? `${buttonClass} text-[hsl(356_100%_66%)] md:text-[hsl(356_100%_66%)] bg-white ${hoverState1}`
        : `${buttonClass} text-[hsl(0,0%,100%)] md:text-[hsl(0_0%_100%)] border-[0.0625rem] border-white ${hoverState3}`;
    } else {
      return isEvenIndex
        ? `${buttonClass} text-[hsl(208_49%_24%)] md:text-white bg-white md:h-full md:bg-transparent ${hoverState2}`
        : `${buttonClass} text-[hsl(0,0%,100%)] border-[0.0625rem] border-white md:border-none bg-gradient-to-r from-veryLightRedGradient to-lightRedGradient md:h-full md:bg-[#fff] md:bg-none md:text-[hsl(356_100%_66%)] md:font-bold ${hoverState1}`;
    }
  };

  return (
    <div
      className={`${
        flex === 1 ? "flex-row justify-between" : "flex-col justify-evenly"
      } flex items-center w-full max-w-[19.9375rem] h-full text-[1em] md:font-bold`}
    >
      {val.map((index) => {
        const isEvenIndex = index % 2 === 0;
        const buttonClass = getButtonClass(index, isEvenIndex);

        return (
          <button key={index} className={buttonClass}>
            {buttonText[index]}
          </button>
        );
      })}
    </div>
  );
};

