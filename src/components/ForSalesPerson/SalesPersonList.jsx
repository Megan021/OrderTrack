import React, { useState } from 'react'
import {Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import SalesPerson from "../../data/salespersonlist.json";
import { Link } from 'react-router-dom';
import { Eye, Pencil, Trash, User } from 'lucide-react';

const SalesPersonList = () => {
     const ITEMS_PER_PAGE = 4;
     const [currentPage, setCurrentPage] = useState(1); // Current page state

     // Calculate the total number of pages
     const totalPages = Math.ceil(SalesPerson.length / ITEMS_PER_PAGE);
   
     // Determine the start and end indices for slicing the data
     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
     const endIndex = startIndex + ITEMS_PER_PAGE;
   
     // Slice the data for the current page
     const currentItems = SalesPerson.slice(startIndex, endIndex);
   
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
            <table className="w-full text-sm">
              <thead className=" text-center text-[#71717A] border-gray-100 border-b bg-gray-50 ">
                <tr className="divide-x-2">
                  <th className="px-4 py-2 text-left">Salesperson Info</th>
                  <th className="  py-3">Phone</th>
                  <th className="  py-2">Email</th>
                  <th className="  py-2">Address</th>
                  {/* <th className="  py-2">Total</th> */}
                  <th className="  py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((salesperson) => (
                  <tr
                    key={salesperson.id}
                    className="text-center border-b border-gray-200"
                  >
                    <td className=" px-4 py-4 flex gap-5">
                      <div>
                      <User size={40} strokeWidth={1.3} className='border rounded-full p-2 border-gray-300' />
                        {/* <img
                          src={salesperson.image}
                          alt=""
                          className="size-14 rounded-full border border-gray-300 shadow object-contain"
                        /> */}
                      </div>
                      <div>
                        <ul className="text-left text-sm leading-6">
                          <li className="font-medium"></li>
                          <li>
                            <span className="font-medium">Id:</span>
                            {salesperson.id}
                          </li>
                          <li>
                            <span className="font-medium">Name: </span>
                            {salesperson.name}
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="font-medium">Status: </span>
                            <div
                              className={`px-1.5 p-0.5 text-sm rounded-full ${
                                salesperson.approved === "Pending"
                                  ? "bg-yellow-200 text-yellow-600"
                                  : salesperson.approved ===
                                    "Approved"
                                  ? "bg-green-200 text-green-600"
                                  : "bg-red-200 text-red-600"
                              }`}
                            >
                              {salesperson.approved}
                            </div>
                          </li>

                        </ul>
                      </div>
                    </td>
                    <td className=" px-4 py-2">{salesperson?.phone}</td>
                    <td className=" px-4 py-2 text-sm leading-6">{salesperson?.email}</td>
                    <td className=" px-4 py-2 text-sm">{salesperson?.address}</td>
                    <td className="border-x py-3 px-2">
                      <div className="grid grid-cols-3 items-center w-full">
                        <Link to="/orderview">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Eye size={17} strokeWidth={1.3} /></button>
                        </Link>
                        <Link to="/salesperson">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Pencil size={17} strokeWidth={1.3} /></button>
                        </Link>
                        <Link to="/salesperson">
                        <button className='hover:bg-gray-100 p-2 rounded-full shadow'><Trash size={17} strokeWidth={1.3} /></button>
                        </Link>
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
  )
}

export default SalesPersonList