import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
           {/*1st Part */}
           <div className='space-y-5'>
            <h1 className='text-lg font-black'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Carrers</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazin</p>

            </div> 
            
           {/*2nd Part */}
           <div className='space-y-5'>
            <h1 className='text-lg font-black'>Support</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Contact</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leagal Notice</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Term & Condition </p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Sitemap</p>

            </div> 
               {/*3rd Part */}
           <div className='space-y-5'>
            <h1 className='text-lg font-black'>Other Services</h1>

            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Activity Finder</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Tour List</p>
           

            </div> 
             {/*4th Part */}
           <div>
            <h1 className='text-lg font-black'>Contact Us</h1>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>+943347634639</h1>
            </div>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Email</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>trap@gmil.com</h1>
            </div>
            </div> 
        </div>
        

    </div>
  )
}

export default Footer