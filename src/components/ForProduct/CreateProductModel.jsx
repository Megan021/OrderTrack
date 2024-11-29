import { ChevronDown, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CreateProductModel = ({onClose}) => {
     const modalRef = useRef(null);

     useEffect(() => {
       const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
           onClose();
         }
       };
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
         document.removeEventListener("mousedown", handleClickOutside);
       };
     }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div
          ref={modalRef}
          className="bg-white border border-gray-300 rounded-xl w-[100vh] max-h-[90vh] shadow-md overflow-y-auto custom-scroll relative"
        >
          <div className="bg-white flex items-center justify-between rounded-t-xl p-4 border-b sticky top-0">
            <h2 className="text-xl font-medium">Add New Product</h2>
            <button onClick={onClose}>
              <X className="stroke-1" />
            </button>
          </div>
          <form className=" p-7 grid grid-cols-2 gap-4 text-sm">
            <div className="col-span-2">
              <h2 className="pb-1">Product Name*</h2>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Selling Price*</h2>
              <input
                type="text"
                placeholder="Enter Selling Price"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Max Discount Allowed*</h2>
              <input
                type="text"
                placeholder="Enter Max Discount Allowed"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            {/* <div className="col-span-2">
              <h2 className="pb-1">Category*</h2>
              <input
                type="text"
                placeholder="Enter Category"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div> */}
            <div className="">
              <h2 className="pb-1">VAT*</h2>
              <input
                type="text"
                placeholder="Enter VAT"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <h2 className="pb-1">Unit*</h2>
              <input
                type="text"
                placeholder="Enter Unit"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <h2 className="pb-1">Category*</h2>
              <input
                type="text"
                placeholder="Enter Category"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <h2 className="pb-1">Remarks*</h2>
              <textarea
                type="text"
                placeholder="Enter Remarks"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none resize-none h-20"
              />
            </div>

            <button className="p-2 px-6 bg-black text-white rounded-md col-span-2 mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateProductModel