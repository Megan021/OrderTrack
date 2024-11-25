import React from 'react'
import { TbBuildingWarehouse } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
     <div className='flex justify-between items-center p-4 px-8 bg-white bg-opacity-50 backdrop-blur-md border-b border-gray-200 shadow sticky top-0 z-20'>
          <div>
               <i className='flex items-center gap-3 text-lg font-medium'><TbBuildingWarehouse className='text-2xl text-black stroke-1' />OrderTrack</i>
          </div>

          <div className='flex items-center gap-3 cursor-pointer relative group'>
               <button><img src="/images/userprofile.jpg" alt="" className='w-11 rounded-full object-cover object-top ' /></button>
               <div className='leading-5'>
                    <h2 className='font-medium'>John Doe</h2>
                    <p className='text-sm'>Welcome!</p>
               </div>
               <div>
                    <i><IoIosArrowDown /></i>
               </div>

               <div className='bg-white absolute hidden group-hover:block  top-11 right-0 '>
                    <ul className='bg-gray-50 border border-gray-300 mt-1 w-[150px] text-center z-30 rounded-xl overflow-hidden'>
                         <li className='hover:bg-gray-200 p-2 duration-200'>Profile</li>
                         <li className='hover:bg-gray-200 p-2 duration-200'>Setting</li>
                         <li className='hover:bg-gray-200 p-2 duration-200'>Logout</li>
                    </ul>
               </div>
          </div>
     </div>
    </>
  )
}

export default Navbar;