import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  DollarSign,
  Edit,
  HandCoins,
  MinusCircle,
  Plus,
  PlusCircle,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import Product from "../../data/product.json";

const CreateOrder = () => {
  const [paymentMode, setPaymentMode] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");

  const [parties, setParties] = useState(Product);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter parties based on the search term
  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setPaymentMode(false);
  };

  return (
    <>
      <div className="">
        <div className="flex gap-5">
          <div className="w-[60%]">
            <h2 className="flex gap-0.5 items-center mb-7">
              <Link to="/order" className="font-medium text-lg">
                Order
              </Link>
              <ChevronRight size={20} /> Create Order
            </h2>
            <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4 mb-5">
              <input
                type="search"
                placeholder="Search Product..."
                className="py-3 w-[90%] focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <IoSearchOutline className="text-gray-600 text-xl" />
              </button>
            </div>
            <h2 className="pb-4">Popular Product</h2>

            <div className="grid grid-cols-3 gap-4">
              {filteredParties.map((items, index) => (
                <div
                  key={index}
                  className="border border-gray-300 shadow rounded-xl p-3"
                >
                  <img
                    src={items.image}
                    alt=""
                    className="rounded-xl w-full h-[20vh] object-cover border"
                  />
                  <div className="flex items-end justify-between">
                    <div className="text-sm mt-3 leading-6">
                      <h2>{items.name}</h2>
                      <p>Code: {items.code}</p>
                      <p>Rs. {items.price}</p>
                    </div>
                    <div>
                      <button>
                        <LiaCartPlusSolid strokeWidth={0.1} size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[40%]">
            <div className="mb-5 flex items-center gap-5">
              <div className="w-full">
                {/* <h2 className="pb-1">Payment Mode*</h2> */}
                <div className="relative">
                  <button
                    className="w-full text-left p-3 border border-gray-300 rounded-xl focus:outline-none bg-white flex items-center justify-between"
                    onClick={() => setPaymentMode(!paymentMode)}
                  >
                    {selectedMode || "Choose Parties"} <ChevronDown />
                  </button>
                  {paymentMode && (
                    <div className="absolute w-full border rounded-md shadow-md bg-white mt-2 z-10">
                      <div
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectMode("ABC Traders")}
                      >
                        ABC Traders
                      </div>
                      <div
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectMode("XYZ Corporation")}
                      >
                        XYZ Corporation
                      </div>
                      <div
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectMode("QRS Solutions")}
                      >
                        QRS Solutions
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button className="p-3 border border-gray-300 shadow hover:bg-black hover:text-white duration-200 rounded-xl w-52 flex items-center gap-2">
                <Plus size={17} />
                New Parties
              </button>
            </div>
            <div className="border border-gray-300 shadow-sm rounded-xl p-4">
              <div className="border-b border-gray-300 pb-4">
                <h2>Order #2314</h2>
              </div>

              <div className="my-4 h-[38vh] overflow-y-scroll custom-scroll ">
                {Product.map((items, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl relative">
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-3 space-y-1">
                        <div>
                          <img
                            src={items.image}
                            alt=""
                            className="size-16 rounded-lg"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <h2>{items.name}</h2>
                          <p>Code: {items.code}</p>
                          <p className="flex items-center gap-5">Rs. {items.price} <div className="flex items-center">
                            <MinusCircle strokeWidth={1} size={20} />
                            <p className="w-10 text-center">1</p>
                            <PlusCircle strokeWidth={1} size={20} />
                          </div></p>
                        </div>
                      </div>

                      <div>
                          <button className="absolute top-2 right-2">
                            <X size={16} strokeWidth={1.5} className="text-black" />
                          </button>
                        <button className="flex items-center gap-2 mt-8">
                          <Edit size={17} strokeWidth={1} />
                          Discount
                        </button>
                        {/* <div className="flex gap-4 mt-2 items-center"> */}
                          {/* <div className="flex items-center">
                            <PlusCircle strokeWidth={1} size={20} />
                            <p className="w-10 text-center">1</p>
                            <MinusCircle strokeWidth={1} size={20} />
                          </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                    <hr className="my-2" />
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2 text-sm mb-5">
                <div className="flex items-center justify-between ">
                  <h2>SubTotal: </h2>
                  <p>Rs.1000</p>
                </div>
                <div className="flex items-center justify-between ">
                  <h2>Discount: </h2>
                  <div className="flex items-center gap-2">
                    <button>
                      <Edit size={15} strokeWidth={1.3} />
                    </button>
                    <p>Rs.100</p>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <h2>GrandTotal: </h2>
                  <p>Rs.900</p>
                </div>
              </div>

            <div>
            <div className="flex gap-4 my-4">
              <button className="p-5 border border-gray-300 shadow rounded-xl flex-1 text-center hover:bg-black hover:text-white duration-300"><HandCoins strokeWidth={1.3} className="mx-auto pb-1" />Cash</button>
              <button className="p-5 border border-gray-300 shadow rounded-xl flex-1 text-center hover:bg-black hover:text-white duration-300"><CreditCard strokeWidth={1.3} className="mx-auto pb-1" />Card</button>
              <button className="p-5 border border-gray-300 shadow rounded-xl flex-1 text-center hover:bg-black hover:text-white duration-300"><DollarSign strokeWidth={1.3} className="mx-auto pb-1" />Esewa</button>
            </div>
              <button className="bg-black w-full rounded-xl text-white p-3">Place Order</button>
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
