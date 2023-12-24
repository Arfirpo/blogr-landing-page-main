import React from 'react';

export const SubMenuBottom = ({ title, items }) => {
  return (
    <div className='font-Ubuntu text-[1rem] flex flex-col gap-[30px]'>
      <h2 className='text-White font-semibold cursor-pointer'>{title}</h2>
      <ul className='flex flex-col gap-[.3rem]'>
        {items.map((item, index) => (
          <li className='text-[1.1rem] cursor-pointer hover:underline' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


