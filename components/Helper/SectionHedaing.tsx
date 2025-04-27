import React from 'react'
type Props = {
    heading:string;
}

const SectionHedaing = ({heading} :Props) => {
  return (
    <div className='w-[80%] ms-auto '>
        <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
        <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur est nesciunt odio expedita, inventore optio cumque facilis. Minima eos, sint aliquid laboriosam non rem vero quis debitis illum corporis tempore.</p>
    </div>
  )
}

export default SectionHedaing;