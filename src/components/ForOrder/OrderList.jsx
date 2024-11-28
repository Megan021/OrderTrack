import React, { useState } from "react";
import OrderItems from "../../data/OrderList.json";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 4; // Number of items to display per page

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Calculate the total number of pages
  const totalPages = Math.ceil(OrderItems.length / ITEMS_PER_PAGE);

  // Determine the start and end indices for slicing the data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the data for the current page
  const currentItems = OrderItems.slice(startIndex, endIndex);

  // Handle pagination navigation
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div>
        <div className="flex w-full">
          <div className="w-full">
            <table className="w-full">
              <thead className=" text-center text-[#71717A] border-gray-100 border-b bg-gray-50 ">
                <tr className="divide-x-2">
                  <th className=" px-4 py-2 text-left">Order Info</th>
                  <th className=" px-4 py-3">Party Name</th>
                  <th className=" px-4 py-2">Date</th>
                  <th className=" px-4 py-2">Salesperson Info</th>
                  {/* <th className=" px-4 py-2">Status</th> */}
                  <th className=" px-4 py-2">Total</th>
                  {/* <th className=" px-4 py-2">Mode</th> */}
                  <th className=" px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((OrderItem) => (
                  <tr
                    key={OrderItem.id}
                    className="text-center border-b border-gray-200"
                  >
                    <td className=" px-4 py-4 flex gap-5">
                      <div>
                        <img
                          src={OrderItem.image}
                          alt=""
                          className="size-14 rounded-full border border-gray-300 shadow object-contain"
                        />
                      </div>
                      <div>
                        <ul className="text-left text-sm leading-6">
                          <li className="font-medium">
                            {OrderItem.orderinfo[0].itemsnumber} Items
                          </li>
                          <li>
                            <span className="font-medium">Order Id:</span>{" "}
                            {OrderItem.id}
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="font-medium">Status:</span>{" "}
                            <div
                              className={`px-1.5 p-0.5 text-sm rounded-full ${
                                OrderItem.orderinfo[0].status === "pending"
                                  ? "bg-yellow-200 text-yellow-600"
                                  : OrderItem.orderinfo[0].status ===
                                    "delivered"
                                  ? "bg-green-200 text-green-600"
                                  : "bg-red-200 text-red-600"
                              }`}
                            >
                              {OrderItem.orderinfo[0].status}
                            </div>
                          </li>
                          <li>
                            <span className="font-medium">Payment:</span>{" "}
                            {OrderItem.orderinfo[0].paymentmode}
                          </li>
                          {/* <li>
                            <span className="font-medium">Placed:</span>{" "}
                            {OrderItem.orderinfo[0].orderplaced}
                          </li> */}
                        </ul>
                      </div>
                    </td>
                    <td className=" px-4 py-2">{OrderItem.parties}</td>
                    <td className=" px-4 py-2 text-sm leading-6">
                      <ul>
                        <li><span className="font-semibold">Ordered date: </span>{OrderItem.orderinfo[0].orderplaced}</li>
                        <li><span className="font-semibold">Estimated date: </span>{OrderItem.orderinfo[0].estimateddate}</li>
                      </ul>
                    </td>
                    <td className=" px-4 py-2 text-sm">
                      <span className="font-medium">Id: {OrderItem.salesperson[0].id}</span>
                      <br />
                      <span>{OrderItem.salesperson[0].name}</span>
                    </td>
                    {/* <td className=" px-4 py-2">
                      {OrderItem?.orderinfo[0].orderplaced}
                    </td> */}
                    {/* <td className="w-1">
                      <div
                        className={`px-2 p-1 text-sm rounded-full ${
                          OrderItem.orderinfo[0].status === "pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : OrderItem.orderinfo[0].status === "delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {OrderItem.orderinfo[0].status}
                      </div>
                    </td> */}
                    <td className=" px-4 py-2">Rs. {OrderItem.total}</td>
                    {/* <td className=" px-4 py-2">
                      {OrderItem.orderinfo[0].paymentmode}
                    </td> */}
                    <td className="border-x py-3">
                      {/* <div className="mx-auto group relative">
                        <button className="mx-auto bg-white text-black flex items-center h-full gap-2 border border-gray-300 rounded-xl p-1 px-2">
                          <PencilLine size={14} />
                          Action
                        </button>
                        <ul className="bg-white border border-gray-300 rounded-xl right-5 z-10 p-4 space-y-2">
                          <li className="flex items-center gap-2 hover:underline cursor-pointer">
                            <IoEyeOutline className=" " />
                            <span className="">View</span>
                          </li>
                          <li className="flex items-center gap-2 hover:underline cursor-pointer">
                            <TiEdit className=" " />
                            <span className="">Edit</span>
                          </li>
                          <li className="flex items-center gap-2 hover:underline cursor-pointer">
                            <AiOutlineDelete className=" " />
                            <span className="">Delete</span>
                          </li>
                        </ul>
                      </div> */}

                      <div className="flex flex-col gap-2">
                        <Link to="/orderview">
                        <button className="hover:bg-black hover:text-white duration-300 p-1.5 border border-gray-300 shadow-sm rounded-xl w-[80%] mx-auto flex items-center justify-center gap-1"><Eye size={17} strokeWidth={1.3} />View</button>
                        </Link>
                        <button className="hover:bg-black hover:text-white duration-300 p-1.5 border border-gray-300 shadow-sm rounded-xl w-[80%] mx-auto flex items-center justify-center gap-1"><Pencil size={17} strokeWidth={1.3} />Edit</button>
                        <button className="hover:bg-black hover:text-white duration-300 p-1.5 border border-gray-300 shadow-sm rounded-xl w-[80%] mx-auto flex items-center justify-center gap-1"><Trash size={17} strokeWidth={1.3} />Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default OrderList;
