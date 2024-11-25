import React, { useState } from "react";
import partiesitems from "../data/parties.json";
import { TfiArrowTopRight } from "react-icons/tfi";
import { Building2, Pencil, Plus, Trash } from "lucide-react";
import { IoSearchOutline } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Parties = () => {
  const [parties, setParties] = useState(partiesitems);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter parties based on the search term
  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="font-semibold text-3xl">Parties</h1>

        <div className="my-8 mb-14 flex justify-between">
          <div className="flex items-center justify-between w-96 border border-gray-300 rounded-2xl px-4">
            <input
              type="search"
              placeholder="Search Company..."
              className="py-3 w-[90%] focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
            />
            <button>
              <IoSearchOutline className="text-gray-600 text-xl" />
            </button>
          </div>

          <div>
            <button className="p-3 px-6 border border-gray-300 shadow-lg hover:shadow-sm duration-300 rounded-xl text-sm flex items-center gap-1">
              <Plus />
              Add New Parties
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {filteredParties?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center gap-4 border-b pb-4">
                  <div>
                    <i>
                      <Building2
                        strokeWidth={1}
                        size={45}
                        className="border border-gray-300 rounded-full p-2"
                      />
                    </i>
                  </div>
                  <div>
                    <h2 className="font-medium">{item?.name}</h2>
                    <p className="text-sm">info@example.com</p>
                  </div>
                </div>

                <div className="mt-5 flex justify-between border-b pb-2">
                  <ul className="leading-7">
                    <li>Contact Person: </li>
                    <li>Phone: </li>
                    <li>Website: </li>
                    <li>Vat no: </li>
                    <li>Status: </li>
                    <li>State: </li>
                    <li>City: </li>
                  </ul>

                  <ul className="text-end leading-7 font-medium text-sm">
                    <li>John Doe</li>
                    <li>9801234657</li>
                    <li>www.companylink.com</li>
                    <li>984123576</li>
                    <li>pending</li>
                    <li>Bagmati</li>
                    <li>Kathmandu</li>
                  </ul>
                </div>

                <div className="flex justify-end mt-3">
                  <div className="flex gap-2">
                    <button><Trash size={33} className="border rounded-full bg-red-200 text-red-600 p-2" /></button>
                    <button className="rounded-full p-1 px-4 bg-blue-200 text-blue-600 flex items-center gap-2">
                      <Pencil size={14} />
                      Edit
                    </button>
                  </div>
                  {/* <button className="underline underline-offset-4 flex items-center gap-1 text-sm">
                    View More <TfiArrowTopRight />
                  </button> */}
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </div>
    </>
  );
};

export default Parties;