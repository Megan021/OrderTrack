import React, { useState } from "react";
import partiesitems from "../data/parties.json";
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
import CreatePartiesModel from "@/components/ForParties/CreatePartiesModel";

const Parties = () => {
  const [parties, setParties] = useState(partiesitems);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track editing item
  const [editFields, setEditFields] = useState({}); // Track editable field values

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Filter parties based on the search term
  const filteredParties = parties.filter((party) =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFields(filteredParties[index]); // Initialize edit fields with current data
  };

  const handleFieldChange = (field, value) => {
    setEditFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = (index) => {
    const updatedParties = [...parties];
    updatedParties[index] = { ...editFields }; // Update the item with edited values
    setParties(updatedParties);
    setEditingIndex(null); // Exit edit mode
  };

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
            <button onClick={() => setIsModalOpen(true)} className="p-3 px-6 border border-gray-300 shadow-lg hover:shadow-sm duration-300 rounded-xl text-sm flex items-center gap-1">
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
                  <div className="w-full">
                    <ul className="leading-7">
                    <li>Contact Person: </li>
                    <li>Phone: </li>
                    <li>Website: </li>
                    <li>Vat no: </li>
                    <li>Status: </li>
                    <li>State: </li>
                    <li>City: </li>
                  </ul>
                  </div>

                  <div className="w-full">
                  {editingIndex === index ? (
                    <ul className="text-end leading-7 font-medium text-sm">
                      <li>
                        <input
                          value={editFields.name || ""}
                          onChange={(e) => handleFieldChange("name", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.phone || ""}
                          onChange={(e) => handleFieldChange("phone", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.website || ""}
                          onChange={(e) => handleFieldChange("website", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.vat || ""}
                          onChange={(e) => handleFieldChange("vat", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.status || ""}
                          onChange={(e) => handleFieldChange("status", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.state || ""}
                          onChange={(e) => handleFieldChange("state", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                      <li>
                        <input
                          value={editFields.city || ""}
                          onChange={(e) => handleFieldChange("city", e.target.value)}
                          className="text-right rounded w-full focus:outline-none"
                        />
                      </li>
                    </ul>
                  ) : (
                    <ul className="text-end leading-7 font-medium text-sm">
                      <li>{item.name}</li>
                      <li>{item.phone}</li>
                      <li>{item.website}</li>
                      <li>{item.vat}</li>
                      <li>{item.status}</li>
                      <li>{item.state}</li>
                      <li>{item.city}</li>
                    </ul>
                  )}
                  </div>
                </div>

                <div className="flex justify-end mt-3">
                  <div className="flex gap-2">
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSave(index)}
                        className="rounded-full p-1 px-4 bg-green-200 text-green-600 flex items-center gap-2"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="rounded-full p-1 px-4 bg-blue-200 text-blue-600 flex items-center gap-2"
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                    )}
                    <button>
                      <Trash
                        size={33}
                        className="border rounded-full bg-red-200 text-red-600 p-2"
                      />
                    </button>
                  </div>
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
      {isModalOpen && <CreatePartiesModel onClose={handleModalClose} />}
    </>
  );
};

export default Parties;
