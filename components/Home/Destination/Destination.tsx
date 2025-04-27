import SectionHedaing from '@/components/Helper/SectionHedaing'
import React from 'react'
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/*Section Heading*/}
        <SectionHedaing  heading='Exploring Most Popular Destination'/>
        {/*Section content*/}
        <div className='mt-14 w-[80%] mx-auto'>
            {/*Slider*/}
            <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination;
