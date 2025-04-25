import { navLinks } from '@/constant/constant';
import React from 'react'
import Link from 'next/link';
import { MdTravelExplore } from 'react-icons/md';

const Nav = () => {
  return (
    <div className='bg-blue-200 transition-all duration-100 h-[12vh] z-[1000]'>
        <div className='flex items-center h-ful justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/*logo*/}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center flex-col'>
                    <MdTravelExplore className='w-6 h-6 text-white'/>

                </div>
                <h1 className='text-xl md:text-2xl text-amber-900 uppercase font-bold'>Trap</h1>

            </div>
            {/*navlinks*/}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link)  =>{
                    return <Link href={link.url} key={link.id}>
                        <p className="relative text-black text-base font-medium w-fit block after: block after:content-
                           [''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-function  after:scale-x-0 after:hover:scale-x-100  after:transition duration-300 after:origin-right">
                      {link.label}</p>
                         </Link>
                })}
            </div>
        </div>
    </div>
  )
}

export default Nav