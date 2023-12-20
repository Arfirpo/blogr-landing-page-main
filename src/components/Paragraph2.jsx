import React from 'react'

export const Paragraph2 = ({title, paragraph}) => {
  return (
    <div className="h-[17.5rem] flex flex-col items-center text-center gap-3">
      <h1 className="w-[78%] text-[2.5rem] font-semibold text-White ">
        {title}
      </h1>
      <p className="w-[80%] leading-7 text-grayishBlue">{paragraph}</p>
    </div>
  )
}
