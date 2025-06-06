import SectionHedaing from '@/components/Helper/SectionHedaing'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCrad from './HotelCrad'

const Hotel = () => {
  return (
    <div className='pt -20 pb-20 '>
        {/*Section hedaing*/}
        <SectionHedaing heading='Recommended Hotel'/>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16 '>
            {/* HotelCard*/}
            {hotelsData.map((data)=>{
                return <div key={data.id}>
                    <HotelCrad hotel={data}/>
                </div>
            })}
        </div>

      
    </div>
  )
}

export default Hotel
