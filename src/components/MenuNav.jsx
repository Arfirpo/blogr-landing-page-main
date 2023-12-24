import { useState } from "react";
import { menu } from "../App";
import arrowIcon from '../images/icon-arrow-dark.svg'

export const MenuNav = () => {

  const [openItem, setOpenItem] = useState(null);
  const [arrowRotation, setArrowRotation] = useState(0);

  const handleHeadingClick = (heading) => {
    setOpenItem(openItem === heading ? null : heading);
    setArrowRotation(arrowRotation === 0 ? 180 : 0);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-7 text-center text-lg  font-bold w-full ">
      {Object.values(menu).map((menuItem, index) => (
        <div key={index} className="w-full h-full flex flex-col gap-4 ">
          <div className="flex items-center justify-center gap-2">
            <h3
              className="text-veryDarkBlue cursor-pointer"
              onClick={() => handleHeadingClick(menuItem.heading)}
            >
              {menuItem.heading}
            </h3>
            <img
              className={`transform transition-transform ease duration-300  ${
                openItem === menuItem.heading ? "rotate-180" : ""
              }`}
              src={arrowIcon}
              alt="arrow icon"
            />
          </div>
          {openItem === menuItem.heading && (
            <ul className="bg-[#ebeaef] w-full h-full flex flex-col justify-evenly rounded-lg py-6 gap-5">
              {menuItem.items.map((item, subIndex) => (
                <li className="text-[.95rem] text-veryDarkBlue cursor-pointer" key={subIndex}>
                  {item}
                </li>
                ))}              
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
