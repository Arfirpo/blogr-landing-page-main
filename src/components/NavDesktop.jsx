import React from 'react';
import { Buttons } from './Buttons';
import { MenuNav } from './MenuNav';


export const NavDesktop = () => {

  const navButtons = [2, 3];
  return (
    <div className='border-2 border-black xl:w-[88%] md:w-[95%] h-full flex items-center justify-between'>
      <MenuNav />
      <Buttons val={navButtons} flex={1} />
    </div>
  )
}
