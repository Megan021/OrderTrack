import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { CiBoxes } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LiaStreetViewSolid } from "react-icons/lia";
import { LuClipboardEdit } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { PackageSearch } from 'lucide-react';

const SideBarMenu = () => {
  const [orderMenuOpen, setOrderMenuOpen] = useState(false);

  const toggleOrderMenu = () => {
    setOrderMenuOpen(!orderMenuOpen);
  };

  return (
    <div className='bg-white bg-opacity-50 flex pt-5 h-[95vh] border-r border-gray-300'>
      <ul className='rounded-3xl overflow-hidden w-full px-1'>
        <Link to="/">
          <li className='hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <LuLayoutDashboard className='text-lg' />Dashboard
          </li>
        </Link>
        {/* Order Menu with Dropdown */}
        <div className='relative'>
          <div 
            className='flex items-center justify-between hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full cursor-pointer'
            
          >
              <Link to='/order'>
            <div className='flex items-center gap-3'>
              <CiBoxes className='text-lg' />Order
            </div>
              </Link>
            <i onClick={toggleOrderMenu}>{orderMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</i>
          </div>
          {/* Submenu */}
          {orderMenuOpen && (
            <ul className='p-1 bg-gray-100 rounded-3xl space-y-12 text-sm'>
              <Link to="/order/pending">
                <li className='hover:bg-black hover:text-white duration-200 p-2 pl-7 rounded-full'>Pending Orders</li>
              </Link>
              <Link to="/order/completed">
                <li className='hover:bg-black hover:text-white duration-200 p-2 pl-7 rounded-full'>Completed Orders</li>
              </Link>
              <Link to="/order/cancelled">
                <li className='hover:bg-black hover:text-white duration-200 p-2 pl-7 rounded-full'>Cancelled Orders</li>
              </Link>
            </ul>
          )}
        </div>
        <Link to="/parties">
          <li className='hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <HiOutlineBuildingOffice className='text-lg' />Parties
          </li>
        </Link>
        <Link to="/product">
          <li className='group hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <PackageSearch size={20} strokeWidth={1.25} /> Product
          </li>
        </Link>
        <Link to="/visit">
          <li className='hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <LuLayoutDashboard className='text-lg' />Visit
          </li>
        </Link>
        <Link to="/salesperson">
          <li className='hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <LiaStreetViewSolid className='text-lg' />SalesPerson
          </li>
        </Link>
        <Link to="/attendance">
          <li className='hover:bg-black hover:text-white duration-200 p-3 w-full rounded-full flex items-center gap-3'>
            <LuClipboardEdit className='text-lg' />Attendance
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarMenu;
