import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

const CreatePartiesModel = ({ onClose }) => {
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
            <h2 className="text-xl font-medium">Create New Parties</h2>
            <button onClick={onClose}>
              <X className="stroke-1" />
            </button>
          </div>
          <form className=" p-7 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <h2 className="pb-1">Parties Name*</h2>
              <input
                type="text"
                placeholder="Enter Parties Name"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Contact Person*</h2>
              <input
                type="text"
                placeholder="Enter Contact Person"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Phone*</h2>
              <input
                type="text"
                placeholder="Enter Phone"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <h2 className="pb-1">Website*</h2>
              <input
                type="text"
                placeholder="Enter Website"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <h2 className="pb-1">City*</h2>
              <input
                type="text"
                placeholder="Enter City"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <h2 className="pb-1">District*</h2>
              <input
                type="text"
                placeholder="Enter District"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <h2 className="pb-1">Street Name*</h2>
              <input
                type="text"
                placeholder="Enter Street Name"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="">
              <h2 className="pb-1">Zip Code*</h2>
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <h2 className="pb-1">VAT Number*</h2>
              <input
                type="text"
                placeholder="Enter VAT Number"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <h2 className="pb-1">PAN Number*</h2>
              <input
                type="text"
                placeholder="Enter Customer Id"
                className="p-2.5 border border-gray-300 w-full rounded-md focus:outline-none"
              />
            </div>

            <button className="p-2 px-6 bg-black text-white rounded-md col-span-2 mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePartiesModel;