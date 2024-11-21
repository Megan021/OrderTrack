import React from 'react'
import { FiChevronRight } from "react-icons/fi";

const Orders = () => {
  return (
    <>
     <div className='bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 border border-gray-300 shadow'>
          <div className='flex items-center justify-between mb-8'>
          <div><h2 className='font-medium'>Products History</h2></div>
          <div><button className='border rounded-3xl p-1 px-3 border-gray-400 flex items-center gap-2'>See All <FiChevronRight /></button></div>
          </div>

          <div className='flex gap-8 items-center'>
               <div className='flex-1'>
                    <img src="/images/ForOrder/order2.jpg" alt="" className='h-[14.5rem] object-cover rounded-xl' />
               </div>
               <div className='flex-1 space-y-5'>
                    <div>
                    <h2 className=''>Product Name:</h2>
                    <p className='font-semibold'>Lays Chips Chips Chips Chips Chips</p>
                    </div>
                    <div>
                    <h2 className=''>Price:</h2>
                    <p className='font-semibold'>Rs. 500</p>
                    </div>
                    <div>
                    <h2 className=''>No of Units:</h2>
                    <p className='font-semibold'>50</p>
                    </div>

               </div>
          </div>
     </div>
    </>
  )
}

export default Orders