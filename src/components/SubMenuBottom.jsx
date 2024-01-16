import React from 'react';

export const SubMenuBottom = ({ title, items }) => {
  return (
    <div className='font-Ubuntu text-[1rem] flex flex-col gap-[1.875rem] xl:gap-[2.5rem] xl:text-left'>
      <h2 className='text-White font-semibold cursor-pointer'>{title}</h2>
      <ul className='flex flex-col gap-[.3rem] xl:gap-5'>
        {items.map((item, index) => (
          <li className='text-[1.1rem] cursor-pointer hover:underline text-grayishBlue' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


