import React from "react";
import { SubMenuBottom } from "./SubMenuBottom";

export const menu = {
  1: {
    heading: "Product",
    items: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  2: {
    heading: "Company",
    items: ["About", "Team", "Blog", "Careers"],
  },
  3: {
    heading: "Connect",
    items: ["Contact", "Newsletter", "LinkedIn"],
  },
};

export const BottomMenu = () => {
  return (
    <div className="w-[28%] h-[69%] flex flex-col justify-between">
      {Object.keys(menu).map((key) => (
        <SubMenuBottom key={key} title={menu[key].heading} items={menu[key].items} />
      ))}
    </div>
  );
};

