import React from 'react'

export const Paragraph2 = ({title, paragraph}) => {
  return (
    <div className="h-[17.5rem] lg:w-[40%] xl:w-[55%] lg:max-w-[783px] flex flex-col items-center lg:items-start md:justify-end lg:justify-center lg:pb-6 text-center lg:text-left gap-3">
      <h1 className="w-[78%] text-[2.5rem] font-semibold text-White ">
        {title}
      </h1>
      <p className="w-[80%] lg:w-[75%] lg:text-lg leading-7 text-grayishBlue">{paragraph}</p>
    </div>
  )
}
