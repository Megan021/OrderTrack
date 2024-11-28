import {ChevronDown, ChevronRight, Edit, MinusCircle, Plus, PlusCircle, X} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import Product from "../../data/product.json";
import CreatePartiesModel from "@/components/ForParties/CreatePartiesModel";

const CreateOrder = () => {
  const [paymentMode, setPaymentMode] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parties, setParties] = useState(Product);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderList, setOrderList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [filteredPartiesSearch, setFilteredPartiesSearch] = useState([]); // To store filtered results

  const partiesList = [
    { id: 1, name: "ABC Traders" },
    { id: 2, name: "XYZ Corporation" },
    { id: 3, name: "QRS Solutions" },
  ];

  useEffect(() => {
    // Filter parties based on the search query
    const results = partiesList.filter((party) =>
      party.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPartiesSearch(results);
  }, [searchQuery]); // Update results whenever searchQuery changes

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Filter parties based on the search term
  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setPaymentMode(false);
  };

  // Add product to the order list
  const addToOrderList = (product) => {
    const exists = orderList.find((item) => item.code === product.code);
    if (exists) {
      setOrderList(
        orderList.map((item) =>
          item.code === product.code
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setOrderList([...orderList, { ...product, quantity: 1 }]);
    }
  };

  // Increment product quantity
  const incrementQuantity = (productCode) => {
    setOrderList(
      orderList.map((item) =>
        item.code === productCode
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrement product quantity
  const decrementQuantity = (productCode) => {
    setOrderList(
      orderList
        .map((item) =>
          item.code === productCode
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  const handleQuantityChange = (productCode, newQuantity) => {
    const quantity = Math.max(parseInt(newQuantity) || 1, 1); // Ensure a minimum value of 1
    setOrderList(
      orderList.map((item) =>
        item.code === productCode ? { ...item, quantity } : item
      )
    );
  };

  // Remove product from order list
  const removeFromOrderList = (productCode) => {
    setOrderList(orderList.filter((item) => item.code !== productCode));
  };

  return (
    <>
      <div className="">
        <div className="flex gap-5">
          <div className="w-[60%] ">
            <h2 className="flex gap-0.5 items-center mb-7">
              <Link to="/order" className="font-medium text-lg">
                Order
              </Link>
              <ChevronRight size={20} /> Create Order{" "}
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
            {/* <h2 className="pb-4">Popular Product</h2> */}

            <div className="grid grid-cols-3 gap-4">
              {filteredParties.map((items, index) => (
                <div
                  key={index}
                  className="border border-gray-300 shadow rounded-md overflow-hidden"
                >
                  <img
                    src={items.image}
                    alt=""
                    className=" w-full h-[20vh] object-contain border-b"
                  />
                  <div className="flex items-end justify-between p-3">
                    <div className="text-sm  leading-6 ">
                      <h2>{items.name}</h2>
                      <p>Code: {items.code}</p>
                      <p>Rs. {items.price}</p>
                    </div>
                    <div>
                      <button onClick={() => addToOrderList(items)}>
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
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Parties..."
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value); 
                        setShowSuggestions(true);
                    }}
                  />
                  {searchQuery && (
                    <div  className="absolute w-full border rounded-md shadow-md bg-white mt-2 z-10 max-h-48 overflow-y-auto">
                      {filteredPartiesSearch.length > 0 ? (
                        filteredPartiesSearch.map((party) => (
                          <div
                            key={party.id}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSearchQuery(party.name); // Set the selected party in the input field
                              setSelectedMode(party.name); // Set the selected party mode
                            }}
                          >
                            {party.name}
                          </div>
                        ))
                      ) : (
                        <div className="p-2 text-gray-500">No results found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-3 border border-gray-300 shadow hover:bg-black hover:text-white duration-200 rounded-xl w-52 flex items-center gap-2"
              >
                <Plus size={17} />
                New Parties
              </button>
            </div>
            <div className="border border-gray-300 shadow-sm rounded-xl p-4 sticky top-[85px]">
              <div className="border-b border-gray-300 pb-4 sticky">
                <h2>Order #2314</h2>
              </div>

              <div className="my-4 h-[38vh] overflow-y-scroll custom-scroll ">
                {orderList.map((items, index) => (
                  <div key={index} className="rounded-xl relative">
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
                          <p className="flex items-center gap-5">
                            Rs. {items.price}{" "}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => decrementQuantity(items.code)}
                              >
                                <MinusCircle strokeWidth={1} size={20} />
                              </button>
                              <input
                                type="text"
                                className="w-12 text-center focus:outline-none"
                                value={items.quantity}
                                min={1}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    items.code,
                                    e.target.value
                                  )
                                }
                              />
                              <button
                                onClick={() => incrementQuantity(items.code)}
                              >
                                <PlusCircle strokeWidth={1} size={20} />
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => removeFromOrderList(items.code)}
                          className="absolute top-2 right-2"
                        >
                          <X
                            size={16}
                            strokeWidth={1.5}
                            className="text-black"
                          />
                        </button>
                        <button className="flex items-center gap-2 mt-8">
                          <Edit size={17} strokeWidth={1} />
                          Discount
                        </button>
                      </div>
                    </div>
                    <hr className="my-2" />
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2 text-sm mb-5">
                <div className="flex items-center justify-between ">
                  <h2>SubTotal: </h2>
                  <p>
                    Rs.
                    {orderList.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-between ">
                  <h2>Discount: </h2>
                  <div className="flex items-center gap-2">
                    <button>
                      <Edit size={15} strokeWidth={1.3} />
                    </button>
                    <p>Rs.0</p>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <h2>GrandTotal: </h2>
                  <p>
                    Rs.
                    {orderList.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    ) - 100}
                  </p>
                </div>
              </div>

              <div>
                <div className="my-4">
                  <div className="relative">
                    <button
                      className="w-full text-left p-2.5 border border-gray-300 rounded-xl focus:outline-none bg-white flex items-center justify-between"
                      onClick={() => setPaymentMode(!paymentMode)}
                    >
                      {selectedMode || "Select Payment Mode*"} <ChevronDown />
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
                <button className="bg-black w-full rounded-xl text-white p-3">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <CreatePartiesModel onClose={handleModalClose} />}
    </>
  );
};

export default CreateOrder;
