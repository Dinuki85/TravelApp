import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        
        <div className='w-[80%] mx-auto grid item-center grid-cols-1 lg:grid-cols-2 gap-10'>
           {/*Text Content*/}
            <div>
                <h1 className='text-2xl font-semibold text-white ' >
                    What our customers are saying about us?

                </h1>
                <p className='mt-6 text-gray-200 '>
                At Trap, your feedback matters! Share your travel experience and help others make better choices. 
                Use this to rate the destinations, hotels, or 
                attractions you’ve explored. Your ratings contribute to building a trusted community of travelers.</p>
            {/*rating*/}
            <div  className='mt-6 flex item-center space-x-6'>
                <div>
                    <p className='text-2xl font-bold text-white'>4.88</p>
                    <p className='text-white mb-2'>Overall Rating</p>
                    <div className='flex items-center '>
                        <FaStar className='text-white '/>
                        <FaStar className='text-white '/>
                        <FaStar className='text-white '/>
                        <FaStar className='text-white '/>
                        <FaStar className='text-white '/>
                    </div>
                </div>
            </div>
            </div>
            {/*slider*/}
            <div className='overflow-hidden'>
                <ReviewSlider/>
            </div>
        </div>
    </div>
  )
}

export default Review