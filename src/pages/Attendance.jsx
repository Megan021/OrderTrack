import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Attendance = () => {
  return (
    <>
     <div>
     <h1 className='font-semibold text-3xl mb-5'>Attendance</h1>
     <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
            <input
              type="Search"
              placeholder="Search Company..."
              className="py-3 w-[90%] focus:outline-none"
            />
            <button>
              <IoSearchOutline className="text-gray-600 text-xl" />
            </button>
          </div>
     </div>
    </>
  )
}

export default Attendance