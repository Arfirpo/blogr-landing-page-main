import React from "react";


export const Promotion = ({text, img}) => {
  return (
  <div className="w-full  flex flex-col items-center  gap-11">
    <h1 className="text-2xl font-semibold text-veryDarkBlue ">{text}</h1>
    <img src={img} alt="laptop" />
  </div>);
};
