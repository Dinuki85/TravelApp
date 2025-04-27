import React from 'react'
type Props = {
    heading:string;
}

const SectionHedaing = ({heading} :Props) => {
  return (
    <div className='w-[80%] ms-auto '>
        <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
        <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>Explore the rich culture, stunning landscapes, and vibrant history of Sri Lanka with detailed travel information. This guide covers the must-visit destinations, from pristine beaches like Mirissa and Bentota to the lush tea plantations of Nuwara Eliya and the ancient cities of Anuradhapura and Polonnaruwa.
             Learn about local transportation, delicious Sri Lankan cuisine, and insider tips for a seamless 
             journey across this island paradise. Whether you&apos;re seeking adventure, relaxation, or cultural 
             immersion, this travel guide has you covered!
            </p>
            </div>
  )
}

export default SectionHedaing;