import React from 'react'

export const Paragraph2 = ({title, paragraph}) => {
  return (
    <div className="h-[17.5rem] flex flex-col items-center text-center gap-3 text-White">
      <h1 className="w-[75%] text-[2.3rem] font-semibold ">
        {title}
      </h1>
      <p className="w-[80%] leading-7">{paragraph}</p>
    </div>
  )
}
