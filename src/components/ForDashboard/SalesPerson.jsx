import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { TfiArrowTopRight } from "react-icons/tfi";

const salespersondata = [
     { name: "John Doe", email: "info@example.com", Status: "Active" },
     { name: "Penaldo Gurung", email: "info@example.com", Status: "Active" },
     { name: "Chamling Rai", email: "info@example.com", Status: "Inactive" },
     { name: "Sam Jack", email: "info@example.com", Status: "Active" },
   ];

const SalesPerson = () => {
  return (
    <>
     <div className=''>
          <div className='flex items-center justify-between mb-10'>
          <div><h2 className='font-semibold text-xl'>Sales Person</h2></div>
          <div><button className='border rounded-3xl p-1 px-3 border-gray-400 flex items-center gap-2 text-sm'>See All <FiChevronRight /></button></div>
          </div>

          {salespersondata.map((items, index) => (
               <div key={index} className='flex items-center justify-between p-1 divide-x-2 mb-3 px-4'>
               <div className=''>
                   <div className='flex items-center gap-4'>
                   <div><img src="/images/userprofile.jpg" alt="" className='w-12 rounded-full' /></div>
                    <div>
                    <h2>John Doe</h2>
                    <p className='text-sm'>info@example.com</p>
                    </div>
                   </div>
               </div>

               <div className='text-center'>
                    <button className='text-sm flex justify-center items-center gap-1 w-full'>View More <TfiArrowTopRight /></button>
               </div>
          </div>
          ))}

     </div>
    </>
  )
}

export default SalesPerson