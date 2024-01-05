import React from 'react'

export const Paragraph2 = ({title, paragraph}) => {
  return (
    <div className="h-[17.5rem] md:w-[55%] md:max-w-[783px] flex flex-col items-center md:items-start md:justify-center md:pb-6 text-center md:text-left gap-3">
      <h1 className="w-[78%] text-[2.5rem] font-semibold text-White ">
        {title}
      </h1>
      <p className="w-[80%] md:w-[75%] md:text-lg leading-7 text-grayishBlue">{paragraph}</p>
    </div>
  )
}
