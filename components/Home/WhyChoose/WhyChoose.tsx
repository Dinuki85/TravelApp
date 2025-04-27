import SectionHedaing from '@/components/Helper/SectionHedaing'
import React from 'react'
import WhyChooseCrad from './WhyChooseCrad'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
{/*section heading*/}
    <SectionHedaing heading='Why Choose Us'/>
    <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt -20  '>
        {/*Why choose card*/}
        <div>
            <WhyChooseCrad image="/images/img1.jpg" title="Best Price Guarantee"/>
        </div>
        <div>
            <WhyChooseCrad image="/images/img2.jpg" title="Easy & Quick Booking"/>
        </div>
        <div>
            <WhyChooseCrad image="/images/img3.jpg" title="Customer Care 24/7"/>
        </div>
    </div>

    </div>
  )
}

export default WhyChoose