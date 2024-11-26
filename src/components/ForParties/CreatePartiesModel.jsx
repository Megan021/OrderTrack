import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";

const CreatePartiesModel = ({ onClose }) => {
  const modalRef = useRef(null);
  const [paymentMode, setPaymentMode] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");

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

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setPaymentMode(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div
          ref={modalRef}
          className="bg-gray-50 border border-gray-300 rounded-xl w-[80vh] max-h-[82vh] shadow-md overflow-y-auto custom-scroll relative"
        >
          <div className="bg-white flex items-center justify-between rounded-t-xl p-4 border-b sticky top-0">
            <h2 className="text-xl font-medium">Create New Parties</h2>
            <button onClick={onClose}>
              <X className="stroke-1" />
            </button>
          </div>
          <div className="space-y-5 p-7">
            <div>
              <h2 className="pb-1">Parties Name*</h2>
              <input
                type="text"
                placeholder="Enter Customer Id"
                className="p-2.5 border border-gray-300 w-full rounded-xl focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Address*</h2>
              <input
                type="text"
                placeholder="Enter Customer Id"
                className="p-2.5 border border-gray-300 w-full rounded-xl focus:outline-none"
              />
            </div>
            <div>
              <h2 className="pb-1">Payment Mode*</h2>
              <div className="relative">
                <button
                  className="w-full text-left p-2.5 border border-gray-300 rounded-xl focus:outline-none bg-white flex items-center justify-between"
                  onClick={() => setPaymentMode(!paymentMode)}
                >
                  {selectedMode || "Select Payment Mode"} <ChevronDown />
                </button>
                {paymentMode && (
                  <div className="absolute w-full border rounded-md shadow-md bg-white mt-2">
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectMode("Esewa")}
                    >
                      Esewa
                    </div>
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectMode("Card")}
                    >
                      Card
                    </div>
                    <div
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectMode("Cash")}
                    >
                      Cash
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h2 className="pb-1">Remarks*</h2>
              <textarea
                type="text"
                placeholder="Enter Customer Id"
                className="p-2.5 border border-gray-300 w-full rounded-xl focus:outline-none resize-none h-20"
              />
            </div>
            <button className="p-2 px-6 bg-black text-white rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePartiesModel;