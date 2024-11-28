import SalesPersonList from "@/components/ForSalesPerson/SalesPersonList";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SalesPerson = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl">SalesPerson</h1>
        <div className="my-8 mb-14 flex justify-between">
          <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
            <input
              type="search"
              placeholder="Search Company..."
              className="py-3 w-[90%] focus:outline-none"
          //     value={searchTerm}
          //     onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
            />
            <button>
              <IoSearchOutline className="text-gray-600 text-xl" />
            </button>
          </div>
        </div>
        <SalesPersonList />
      </div>
    </>
  );
};

export default SalesPerson;
