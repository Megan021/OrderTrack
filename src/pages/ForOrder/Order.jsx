import React, { useState } from "react";
import { Plus } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";
import CreateOrderModel from "@/components/ForOrder/CreateOrderModel";
import OrderList from "@/components/ForOrder/OrderList";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Order = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handelOpenModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  const handelCloseModel = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <h1 className="font-semibold text-3xl mb-5">Order</h1>
      <div className="my-8 mb-14 flex justify-between">
        <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
          <input
            type="search"
            placeholder="Search Company..."
            className="py-3 w-[90%] focus:outline-none"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <IoSearchOutline className="text-gray-600 text-xl" />
          </button>
        </div>

        <div>
          <button
            onClick={handelOpenModel}
            className="p-3 px-6 border border-gray-300 shadow-lg hover:shadow-sm duration-300 rounded-xl text-sm flex items-center gap-1"
          >
            <Plus />
            Add New Order
          </button>

          {isModelOpen && <CreateOrderModel onClose={handelCloseModel} />}
        </div>
      </div>
      <OrderList />


    </>
  );
};

export default Order;