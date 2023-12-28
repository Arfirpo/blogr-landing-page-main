import React from "react";
import { SubMenuBottom } from "./SubMenuBottom";
import { menu } from "../App";



export const BottomMenu = () => {
  return (
    <div className="w-[28%] h-[69%] flex flex-col justify-between xl:justify-center xl:gap-[12.375rem] xl:flex-row xl:w-[60%] xl:items-start">
      {Object.keys(menu).map((key) => (
        <SubMenuBottom key={key} title={menu[key].heading} items={menu[key].items} />
      ))}
    </div>
  );
};

  